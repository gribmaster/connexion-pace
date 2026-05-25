// TODO: verify DST/timezone edge cases before final production release.

interface Params {
  timeOfDay: string // "HH:mm" in user's local time
  timezone: string  // IANA timezone, e.g. "Europe/Kyiv"
  intervalDays: number
  fromDate?: Date
}

export function calculateNextDailyConnectionRun({ timeOfDay, timezone, intervalDays, fromDate }: Params): Date {
  const [hourStr, minuteStr] = timeOfDay.split(':')
  const hour = parseInt(hourStr, 10)
  const minute = parseInt(minuteStr, 10)

  const base = fromDate ?? new Date()

  // Get current date parts in the user's timezone using Intl
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  const parts = formatter.formatToParts(base)
  const year = parseInt(parts.find(p => p.type === 'year')!.value, 10)
  const month = parseInt(parts.find(p => p.type === 'month')!.value, 10) - 1
  const day = parseInt(parts.find(p => p.type === 'day')!.value, 10)

  // Build candidate: today at timeOfDay in user's timezone, expressed as UTC
  // We approximate by constructing an ISO string with the timezone offset
  const offsetMinutes = getTimezoneOffsetMinutes(timezone, base)
  const candidate = buildUtcDate(year, month, day, hour, minute, offsetMinutes)

  // If candidate is still in the future (>= 1 minute ahead), use it
  if (candidate.getTime() > base.getTime() + 60_000) {
    return candidate
  }

  // Otherwise schedule for the next intervalDays occurrence
  const next = new Date(candidate)
  next.setUTCDate(next.getUTCDate() + (fromDate ? intervalDays : 1))
  return next
}

function buildUtcDate(
  year: number,
  month: number, // 0-based
  day: number,
  hour: number,
  minute: number,
  timezoneOffsetMinutes: number,
): Date {
  // Local wall-clock time in ms since epoch ignoring timezone
  const localMs =
    Date.UTC(year, month, day, hour, minute, 0, 0) -
    timezoneOffsetMinutes * 60_000
  return new Date(localMs)
}

function getTimezoneOffsetMinutes(timezone: string, at: Date): number {
  // Determine UTC offset by comparing UTC time to local time parts
  const utcParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'UTC',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(at)

  const tzParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(at)

  const toMinutes = (parts: Intl.DateTimeFormatPart[]) => {
    const get = (type: string) => parseInt(parts.find(p => p.type === type)!.value, 10)
    return Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'))
  }

  return (toMinutes(tzParts) - toMinutes(utcParts)) / 60_000
}
