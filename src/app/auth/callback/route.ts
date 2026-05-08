import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import {prisma} from '@/lib/prisma'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    const supabase = await createClient()
    const { data } = await supabase.auth.exchangeCodeForSession(code)

    const user = data?.user
    const email = user?.email
    const name: string | undefined =
      user?.user_metadata?.full_name ?? user?.user_metadata?.name

    if (email) {
      const existing = await prisma.user.findUnique({ where: { email } })
      if (!existing) {
        await prisma.user.create({ data: { email, name: name ?? null } })
      } else if (name && existing.name !== name) {
        await prisma.user.update({ where: { email }, data: { name } })
      }
    }
  }

  return NextResponse.redirect(`${origin}/game`)
}
