# CLAUDE.md — Connexion Space Current Project Rules & Status

_Last updated: May 2026_

This file is the short working context for Claude Code sessions.
Use it together with the full checkpoint file if deeper history is needed.

---

# 1. Project Summary

Connexion Space is a mobile-first PWA card game for couples/adults.

The app lets users:

- log in with Google
- accept privacy/rules on first login
- open a welcome/free-session screen
- choose a game mode
- select cards
- play cards with a timer
- receive play reminders through Web Push notifications
- configure timer sounds, language, Daily Connection, and cache reset in Profile

Current app state is beyond the initial MVP. Core gameplay is working, and production-oriented notification foundations have been added.

---

# 2. Stack

Use the current stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- Supabase Auth
- Supabase PostgreSQL
- pnpm
- Vercel
- Native PWA/service worker
- Web Push notifications

Package manager rule:

```bash
pnpm add package-name
pnpm dev
pnpm build
```

Do not use `npm install`.

---

# 3. Development Rules

Follow these rules unless explicitly asked otherwise:

- Work one feature at a time.
- Keep changes minimal and MVP/product-safe.
- Do not refactor unrelated files.
- Do not install packages unless the task explicitly requires it.
- Do not change Prisma schema unless explicitly asked.
- Do not change auth flow unless the task is auth-specific.
- Do not change PWA/service worker caching rules unless the task is PWA/notification-specific.
- Do not create repository/service layers.
- Do not add Redux/Zustand/global state management.
- Prefer existing components and patterns.
- Preserve existing UI styling/classes unless the task is visual.
- Always inspect current files before editing.
- For localStorage usage, avoid hydration mismatch by reading after mount.
- For browser APIs, guard with `typeof window !== 'undefined'`.
- For server-only notification helpers, keep private env values server-only.

Good task constraints to follow:

```txt
Strict limitations:
- Do NOT install packages unless required.
- Do NOT change Prisma schema unless requested.
- Do NOT change auth flow unless requested.
- Do NOT refactor unrelated files.
- Do NOT create service/repository layers.
- Do NOT add global state management.
- Keep implementation minimal.
```

---

# 4. Important Project Tree

Current approximate structure:

```txt
prisma/
  migrations/
  schema.prisma
  seed.ts

public/
  sw.js
  icons/
  sound/

src/
  actions/
    cards/
      getCardById.ts
      getCardsByCategory.ts

  app/
    api/
      auth/[...nextauth]/route.ts
      cron/
        send-daily-connection-reminders/route.ts
        send-play-reminders/route.ts
      notifications/
        daily-connection/route.ts
        play-reminders/route.ts
        subscriptions/route.ts

    auth/callback/route.ts

    game/
      intuitive/
        [category]/page.tsx
        [category]/[cardId]/page.tsx
        result/page.tsx
      journey/
        [category]/page.tsx
        preview/page.tsx
        play/page.tsx
        result/page.tsx
      surprise-me/
        page.tsx
        play/page.tsx
        result/page.tsx

    login/
      LoginForm.tsx
      page.tsx

    privacy/
      actions.ts
      page.tsx
      PrivacyAcceptForm.tsx

    profile/
      page.tsx

    welcome/
      WelcomeContent.tsx
      page.tsx
      reminder/
        date/page.tsx
        time/page.tsx

    layout.tsx
    loading.tsx
    page.tsx
    globals.css

  components/
    game/instructions/
      IntuitiveInstruction.tsx
      JourneyInstruction.tsx
      SurpriseInstruction.tsx
    reminder/WheelPicker.tsx
    ui/Button.tsx
    ui/Card.tsx
    ui/Container.tsx
    AppLoader.tsx
    GameModeTabs.tsx
    GameTimer.tsx
    HtmlContent.tsx
    IntuitiveCardSelector.tsx
    IntuitiveGameplay.tsx
    JourneyCardSelector.tsx
    JourneyPlay.tsx
    JourneyPreview.tsx
    LogoutButton.tsx
    ProfileClient.tsx
    PwaInstallPrompt.tsx
    PwaRegister.tsx
    ResultScreen.tsx
    SurpriseMePlay.tsx
    SurpriseMeSelector.tsx
    TimerBlock.tsx
    TimerSettings.tsx

  lib/
    i18n/
      dictionary.ts
      locales.ts
      resolveCardTranslation.ts
      useLocale.ts
    notifications/
      calculateNextDailyConnectionRun.ts
      playReminder.ts
      sendWebPush.ts
      subscribeToPush.ts
      webPushConfig.ts
    supabase/
      client.ts
      server.ts
    audioCache.ts
    categoryThemes.ts
    devAuth.ts
    prisma.ts
    resetAppCache.ts
    utils.ts

  proxy.ts
```

---

# 5. Auth / Routing

Implemented:

- Supabase Google login
- Supabase auth callback
- Prisma user sync by email
- protected routes
- logout
- first-login privacy/rules acceptance flow
- welcome screen after privacy acceptance
- temporary auth bypass via env

Important auth rules:

- Supabase user ID is not used as Prisma user ID.
- Prisma user is matched by email.
- Do not force Supabase UUID into `User.id`.
- Google login should use dynamic redirect:

```ts
redirectTo: `${window.location.origin}/auth/callback`
```

- Google login should force account chooser:

```ts
queryParams: {
  prompt: 'select_account',
}
```

Auth bypass:

```txt
NEXT_PUBLIC_DISABLE_AUTH=true
```

When true:

- auth is skipped in any environment
- protected pages open without Supabase session
- fallback user can be shown as Dev User / dev@local.test
- `/` and `/login` should redirect to `/welcome`, not loop

Remove/disable auth bypass before real public release.

---

# 6. Privacy / Rules Flow

Route:

```txt
/privacy
```

Current behavior:

- first-time users must accept privacy/game rules
- form/button has loading state
- duplicate submits should be prevented
- errors should show a simple retry message
- after acceptance, `privacyAcceptedAt` is saved
- user is redirected to `/welcome`

Legal text is still placeholder and should be replaced later.

---

# 7. Welcome Screen

Route:

```txt
/welcome
```

Important buttons:

- `Start Free Session` → `/game`
- `View Premium Options` → placeholder/disabled unless implemented later
- `Choose next play time` / button with `id="chooseNextPlayCall"` → opens reminder date/time flow

Reminder flow from Welcome is production-backed now:

```txt
/welcome/reminder/date
/welcome/reminder/time
```

It creates Web Push subscription and one-time `PlayReminder` in DB.

---

# 8. Game Modes

Main route:

```txt
/game
```

Tabs:

```txt
Intuitive | Journey | Surprise me
```

`/game` is the only mode selection screen. Do not create a separate Surprise me selection route.

---

# 9. Intuitive Mode

Routes:

```txt
/game/intuitive/[category]
/game/intuitive/[category]/[cardId]
/game/intuitive/result
```

Categories:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Behavior:

- user chooses a category
- user selects one card
- `Start game` opens intro modal first
- `OK` starts gameplay
- card preview modal supports description and Learn more/additional
- gameplay shows card, timer, Play/Stop, Finish game, Next card, +, -
- invalid category/card should call `notFound()`

Important:

- timer reaching `00:00` must not finish game automatically
- `Finish game` goes to `/game/intuitive/result`
- in-game `Next card` should use button-level loading only, not full-page loader

---

# 10. Surprise me Mode

Routes:

```txt
/game
/game/surprise-me/play
/game/surprise-me/result
```

Selection happens inside `/game` tab.

Queue localStorage key:

```txt
connexion_surprise_queue
```

Shape:

```ts
{
  cards: Array<{
    id: string
    category: 'CONNECTION' | 'INTIMACY' | 'LOVEMAKING'
  }>
  currentIndex: 0
}
```

Queue rules:

- fixed category order: CONNECTION → INTIMACY → LOVEMAKING
- random cards inside each category
- no duplicates in one queue
- categories with amount 0 are skipped

Gameplay:

- reads queue from localStorage
- redirects to `/game` if missing/invalid
- Next card increments `currentIndex`
- after last card, goes to `/game/surprise-me/result`
- Change cards returns to `/game`; later may return to `/game?mode=surprise`

---

# 11. Journey Mode

Journey is implemented.

Routes:

```txt
/game/journey/[category]
/game/journey/preview
/game/journey/play
/game/journey/result
```

Selection localStorage key:

```txt
connexion_journey_selection
```

Shape:

```ts
{
  CONNECTION: string[]
  INTIMACY: string[]
  LOVEMAKING: string[]
}
```

Journey queue key:

```txt
connexion_journey_queue
```

Shape:

```ts
{
  cards: Array<{
    id: string
    category: 'CONNECTION' | 'INTIMACY' | 'LOVEMAKING'
  }>
  currentIndex: 0
  randomOrder: boolean
}
```

Journey flow:

1. User opens `/game` and selects Journey tab.
2. Category cards look like Intuitive.
3. Each category shows total card count and selected count.
4. Choose opens `/game/journey/[category]`.
5. User selects multiple cards.
6. `Select X cards` saves IDs and returns to `/game?mode=journey`.
7. `Preview selected cards` opens `/game/journey/preview`.
8. Preview groups selected cards by category.
9. User can choose manual or random order.
10. Start playing opens suggestion modal, then `/game/journey/play`.
11. Last card shows Finish and goes to `/game/journey/result`.

Journey preview drag-and-drop:

- cards can be reordered only inside their own category group
- three independent sortable lists:
  - CONNECTION
  - INTIMACY
  - LOVEMAKING
- cards cannot move between categories
- category sections cannot be reordered
- fixed play category order remains CONNECTION → INTIMACY → LOVEMAKING
- random order shuffles only inside each category, not across categories

---

# 12. Result Screens

Shared/final result screens include:

```txt
/game/intuitive/result
/game/surprise-me/result
/game/journey/result
```

Current result copy:

```txt
Journey Complete ✨

You’ve explored, felt, and connected.
Pause for a moment. Look at each other.
This is where the real magic continues.

Would you like to explore again?
```

Buttons:

- `Choose next play time` — active now; must open the same reminder flow as `/welcome` button `id="chooseNextPlayCall"`
- `Back to “Connexion Space”` — returns to `/game` or existing configured route

Do not duplicate reminder logic for result screens. Reuse the Welcome reminder route/component flow.

---

# 13. Timer System

Timer options:

- 5 minutes
- 10 minutes
- 30 minutes
- 60 minutes
- No limit

Mode-specific localStorage keys:

```txt
connexion_timer_intuitive
connexion_timer_surprise
connexion_timer_journey
```

Old key should not be used as shared active state:

```txt
intuitive_timer
```

Timer behavior:

- timer resets when card changes
- timer does not auto-finish game
- timer at `00:00` shows `Time is up`
- Play disabled at `00:00`
- `+` adds time and clears/stops time-up sound
- `+` must not automatically start timer if paused
- `-` changes time without changing Play/Pause state
- Play/Stop is the only control that intentionally changes running state

---

# 14. Timer Sound System

Sound files:

```txt
/public/sound/beep1.wav
/public/sound/beep2.wav
/public/sound/beep3.wav
/public/sound/beep4.wav
/public/sound/beep5.wav
/public/sound/beep6.wav
```

localStorage keys:

```txt
connexion_timer_sound
connexion_timer_volume
```

Defaults:

```txt
beep1.wav
volume 70 / 0.7
```

Audio cache/preload system exists:

```txt
src/lib/audioCache.ts
```

Expected behavior:

- preload and reuse audio objects
- Profile preview starts fast
- timer-end sound starts fast
- only one preview plays at a time
- preview button toggles Play/Stop
- closing modal stops preview
- sound cleanup runs on:
  - `+` after time is up
  - Next card
  - Finish game
  - Change cards
  - current card change
  - timer unmount

---

# 15. Card Data and Translations

Prisma `Card` still has fallback fields:

```txt
title
description
additional
imageUrl
category
```

`CardTranslation` was added for multilingual card content.

Locales:

```txt
ET
EN
```

Default language is Estonian (`et`). English is secondary (`en`).

Important:

- keep old `Card.title`, `Card.description`, `Card.additional` as fallback
- `Card.description` and `Card.additional` may contain trusted admin-controlled HTML
- HTML must render as HTML, not as plain text
- use `HtmlContent` / existing safe wrapper for trusted admin content

Translation fallback order:

```txt
selected locale translation
→ ET translation
→ old Card fallback fields
```

Relevant files:

```txt
src/lib/i18n/locales.ts
src/lib/i18n/resolveCardTranslation.ts
src/lib/i18n/dictionary.ts
src/lib/i18n/useLocale.ts
```

Locale localStorage key:

```txt
connexion_locale
```

Default:

```txt
et
```

---

# 16. UI Translation System

Basic UI dictionary exists.

Relevant files:

```txt
src/lib/i18n/dictionary.ts
src/lib/i18n/useLocale.ts
```

Rules:

- default UI language is Estonian
- English can be selected in Profile language modal if implemented
- locale stored in `connexion_locale`
- no URL locale routing yet
- no `/en` or `/et` routes
- do not install i18n packages unless explicitly asked
- server-rendered UI may default to Estonian if locale is unavailable

Some UI strings may still be TODO/incomplete.

---

# 17. PWA / Service Worker

PWA basics implemented:

- manifest/icons
- service worker registration
- install works
- conservative caching
- push and notification click handling

Important service worker rules:

- do not cache auth/game dynamic pages
- do not cache Supabase URLs
- do not cache API/auth routes
- keep caching conservative
- only cache safe static assets/icons/manifest/offline fallback if present

`public/sw.js` handles:

- push events
- JSON payload fallback
- notification click
- open/focus `/welcome`

Notification payload shape:

```json
{
  "title": "Connexion Space",
  "body": "Your play time is here. Take a moment to reconnect.",
  "url": "/welcome"
}
```

Fallback notification:

```txt
Connexion Space
Your play time is here. Take a moment to reconnect.
```

---

# 18. Notifications Overview

There are two notification systems:

1. One-time Choose Next Play reminder
2. Recurring Daily Connection reminder

Web Push env variables:

```txt
NEXT_PUBLIC_VAPID_PUBLIC_KEY
VAPID_PRIVATE_KEY
VAPID_SUBJECT
CRON_SECRET
```

Private values must stay server-only.

Relevant files:

```txt
src/lib/notifications/webPushConfig.ts
src/lib/notifications/subscribeToPush.ts
src/lib/notifications/sendWebPush.ts
src/lib/notifications/playReminder.ts
src/lib/notifications/calculateNextDailyConnectionRun.ts
```

API routes:

```txt
POST /api/notifications/subscriptions
POST /api/notifications/play-reminders
POST /api/notifications/daily-connection
PATCH /api/notifications/daily-connection
GET /api/cron/send-play-reminders
GET /api/cron/send-daily-connection-reminders
```

---

# 19. PushSubscription API

Route:

```txt
POST /api/notifications/subscriptions
```

Request:

```json
{
  "endpoint": "...",
  "keys": {
    "p256dh": "...",
    "auth": "..."
  }
}
```

Behavior:

- validates body
- resolves userId via existing Supabase/session/email pattern if possible
- allows `userId: null` if auth cannot resolve/dev bypass
- upserts by unique `endpoint`
- stores `p256dh`, `auth`, `userAgent`, `userId`
- returns `{ ok: true, subscriptionId }`

---

# 20. One-time PlayReminder

Used by:

- Welcome `Choose next play time`
- result screen `Choose next play time`

API:

```txt
POST /api/notifications/play-reminders
```

Request:

```json
{
  "subscriptionId": "...",
  "scheduledAt": "ISO string",
  "timezone": "Europe/Kyiv"
}
```

Behavior:

- validates future datetime
- checks PushSubscription exists
- creates `PlayReminder`
- cancels previous future scheduled one-time reminders for same subscription if implemented
- stores UTC `scheduledAt`
- stores IANA `timezone`
- notification text:

```txt
Connexion Space
Your play time is here. Take a moment to reconnect.
```

Cron endpoint:

```txt
GET /api/cron/send-play-reminders
```

Behavior:

- protected by `CRON_SECRET`
- finds `SCHEDULED` reminders where `scheduledAt <= now`
- sends push through `sendWebPushNotification`
- marks as `SENT` or `FAILED`
- returns summary `{ ok, checked, sent, failed }`

Manual testing works.

Important deployment note:

- Vercel Hobby does not support frequent cron jobs.
- Frequent Vercel cron was removed.
- External cron setup is TODO.

TODO:

```txt
Set up external cron for /api/cron/send-play-reminders because Vercel Hobby does not support frequent cron jobs.
Recommended interval: every 5 minutes.
Header: Authorization: Bearer CRON_SECRET.
```

---

# 21. Reminder Date/Time Picker

Routes:

```txt
/welcome/reminder/date
/welcome/reminder/time
```

UI:

- wheel/casino-style vertical picker
- selected value centered
- columns scroll vertically
- date screen: month/day/year
- time screen: hour/minute/AM-PM

Important behavior:

- date defaults to today in user's local timezone
- time defaults to current local time
- minute rounds up to next available step, e.g. 05:13 → 05:15
- selected local date/time is converted to ISO through `Date.toISOString()` when saving
- `timezone` is read from `Intl.DateTimeFormat().resolvedOptions().timeZone`
- Save must show loading/disabled state
- after success, Back to home appears
- if user changes time after success, Save must return

`WheelPicker` exists:

```txt
src/components/reminder/WheelPicker.tsx
```

---

# 22. Daily Connection

Daily Connection is implemented in Profile.

Current UI:

- switch/toggle, not button
- setup modal/screen with time picker
- interval selection
- summary under switch
- Edit action

localStorage key:

```txt
connexion_daily_connection_draft
```

Expected shape:

```ts
{
  enabled: boolean
  dailyConnectionReminderId: string
  timeOfDay: 'HH:mm'
  hour: number
  minute: number
  period: 'AM' | 'PM'
  intervalDays: number
  timezone: string
  nextRunAt: string
  savedAt: string
}
```

Intervals:

```txt
1 day
2 days
3 days
7 days
```

Save behavior:

```txt
Save
→ subscribeToPushNotifications()
→ POST /api/notifications/daily-connection
→ create/update DailyConnectionReminder
→ save draft in localStorage
→ switch ON
```

Switch OFF behavior:

```txt
PATCH /api/notifications/daily-connection
→ status PAUSED
→ localStorage enabled false
```

Status behavior:

```txt
ACTIVE → switch OFF → PAUSED
PAUSED → switch ON + Save → same row ACTIVE again
```

`CANCELLED` is reserved for explicit deletion/removal, not normal switch off/on.

API:

```txt
POST /api/notifications/daily-connection
PATCH /api/notifications/daily-connection
```

Cron endpoint:

```txt
GET /api/cron/send-daily-connection-reminders
```

Behavior:

- protected by `CRON_SECRET`
- finds `ACTIVE` rules where `nextRunAt <= now`
- sends push
- updates `lastSentAt`
- recalculates `nextRunAt`
- temporary failure retries later
- expired subscription can pause rule

Daily Connection summary in Profile:

Examples:

```txt
Every day at 09:00
Every 2 days at 20:30
Paused · Every 2 days at 20:30
```

Edit behavior:

- Edit opens existing setup
- values are prefilled from localStorage draft
- Cancel preserves previous state
- Save updates same backend rule when possible

---

# 23. External Cron TODO

Vercel Hobby limitation:

- Vercel Hobby cron jobs can only run once per day.
- Frequent schedules like `*/5 * * * *` fail deployment.
- The app needs frequent checks for accurate reminders.

Required external cron setup later:

Endpoint 1:

```txt
GET https://YOUR_DOMAIN/api/cron/send-play-reminders
```

Endpoint 2:

```txt
GET https://YOUR_DOMAIN/api/cron/send-daily-connection-reminders
```

Header:

```txt
Authorization: Bearer CRON_SECRET
```

Recommended interval:

```txt
every 5 minutes
```

Do not add frequent Vercel cron back while on Hobby.

---

# 24. Profile Page

Route:

```txt
/profile
```

Implemented / current features:

- protected page
- user name/email
- fallback Dev User in auth bypass
- plan placeholder
- disabled premium action
- Daily Connection switch/setup/edit/summary
- Help & Support modal
- Language modal / locale storage
- Timer sound modal
- Reset app cache button
- Logout

Reset app cache:

- button in Profile
- confirmation modal
- clears:
  - localStorage
  - sessionStorage
  - Cache Storage
  - IndexedDB if possible
  - JS-readable cookies
  - service worker caches
- reloads app
- note: HttpOnly cookies cannot be deleted client-side
- does not delete backend data

Relevant helper:

```txt
src/lib/resetAppCache.ts
```

---

# 25. Prisma / Database

Important models include approximately:

```prisma
model User {
  id                String    @id @default(cuid())
  email             String?   @unique
  name              String?
  createdAt         DateTime  @default(now())
  privacyAcceptedAt DateTime?
}

model Card {
  id           String            @id @default(cuid())
  title        String
  description  String
  additional   String?
  imageUrl     String?
  category     Category
  createdAt    DateTime          @default(now())
  translations CardTranslation[]
}

model CardTranslation {
  id          String   @id @default(cuid())
  cardId      String
  locale      Locale
  title       String
  description String
  additional  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  card        Card     @relation(fields: [cardId], references: [id], onDelete: Cascade)

  @@unique([cardId, locale])
}

enum Locale {
  ET
  EN
}
```

Notification models also exist:

```txt
PushSubscription
PlayReminder
DailyConnectionReminder
NotificationStatus
DailyConnectionStatus
```

Do not change Prisma schema unless the task explicitly asks for it.

Prisma import convention:

```ts
import { prisma } from '@/lib/prisma'
```

Do not use default import if project convention is named export.

Vercel build script should include Prisma generate:

```json
"build": "prisma generate && next build"
```

Do not remove this.

---

# 26. Seed Data

`prisma/seed.ts` creates Cards and `CardTranslation` rows.

Default/fallback fields in `Card` should contain Estonian content.

Each card should have translations:

- ET
- EN

HTML in `description` and `additional` must preserve tags.

Do not use `createMany` when nested `translations.create` is required.

---

# 27. Loading / Preloader Rules

Global/page loader exists through `AppLoader` and `loading.tsx` files.

Important gameplay rule:

- initial game route load may show full-screen/page loader
- in-game `Next card` must not show full-screen/page loader
- current card should remain visible while changing card
- show loading only inside `Next card` button

This matters especially for Intuitive and Journey gameplay.

---

# 28. Known Current TODOs / Next Tasks

High priority / likely next:

1. Set up external cron for staging/production while on Vercel Hobby:
   - `/api/cron/send-play-reminders`
   - `/api/cron/send-daily-connection-reminders`
   - every 5 minutes
   - `Authorization: Bearer CRON_SECRET`

2. Full staging/customer notification test with external cron.

3. Verify Daily Connection repeated sends:
   - `ACTIVE`
   - `nextRunAt <= now`
   - sends notification
   - updates `lastSentAt`
   - recalculates `nextRunAt`

4. Harden Surprise me and Journey localStorage edge cases:
   - invalid JSON
   - missing card IDs
   - deleted DB cards
   - currentIndex out of range

5. Improve Change cards behavior:
   - Surprise me should return to `/game?mode=surprise`
   - Journey should return to `/game?mode=journey`

6. Finish UI translation coverage.

7. Replace placeholder legal/privacy/support texts.

8. Implement free session tracking and premium placeholder.

9. Later:
   - Stripe
   - Apple login
   - real paywall
   - full offline strategy
   - notification preference management
   - production security hardening

---

# 29. Manual Testing Notes

One-time reminder local/manual flow already tested:

```txt
Save reminder
→ PushSubscription created
→ PlayReminder created
→ manual cron endpoint call
→ push notification received
```

Cron manual test PowerShell:

```powershell
$secret = "YOUR_CRON_SECRET"

Invoke-RestMethod `
  -Uri "https://YOUR_DOMAIN/api/cron/send-play-reminders" `
  -Method GET `
  -Headers @{ Authorization = "Bearer $secret" }
```

Daily Connection manual cron test:

```powershell
$secret = "YOUR_CRON_SECRET"

Invoke-RestMethod `
  -Uri "https://YOUR_DOMAIN/api/cron/send-daily-connection-reminders" `
  -Method GET `
  -Headers @{ Authorization = "Bearer $secret" }
```

Expected summary examples:

```txt
ok checked sent failed
True 1 1 0
```

Daily Connection summary may include:

```txt
ok checked sent failed paused
```

---

# 30. Suggested Commit Messages

Useful checkpoint commits:

```bash
git add .
git commit -m "Add production notification foundation"
```

```bash
git add .
git commit -m "Add Daily Connection reminders"
```

```bash
git add .
git commit -m "Update result screens and reminder flow"
```

```bash
git add .
git commit -m "Update project checkpoint and Claude context"
```

---

# 31. Short Context for New Claude Session

Connexion Space is a Next.js App Router PWA card game.

Current state:

- Google auth works through Supabase.
- Temporary auth bypass exists through `NEXT_PUBLIC_DISABLE_AUTH=true`.
- Privacy/rules acceptance flow works.
- `/game` has Intuitive, Journey, Surprise me.
- Intuitive works.
- Surprise me works.
- Journey works, including selected cards, preview, manual drag ordering within each category, random order, gameplay, result.
- Card content supports DB translations through `CardTranslation` with ET/EN.
- Basic UI dictionary exists with locale localStorage.
- Timers are mode-specific.
- Timer sounds are preloaded/cached and configurable in Profile.
- One-time Choose Next Play reminders work through Web Push and DB.
- Daily Connection recurring reminders are implemented and saved to DB.
- Cron endpoints exist for both one-time and Daily Connection reminders.
- Vercel Hobby frequent cron is not available, so external cron setup is still TODO.
- Result screens can open the same Choose next play time flow as Welcome.
- Profile includes Daily Connection, language, timer sound, reset cache, logout.

When working:

- use pnpm
- avoid broad refactors
- preserve existing routes and localStorage keys
- do not change Prisma schema unless requested
- keep private VAPID keys server-only
- keep PWA caching conservative
- do not re-add frequent Vercel cron while on Hobby
