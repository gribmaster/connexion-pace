'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import Image from "next/image";
import Link from 'next/link'
import { useLocale } from '@/lib/i18n/useLocale'

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { dict } = useLocale()
  const d = dict.login

  async function handleGoogleLogin() {
    if (loading) return
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          prompt: 'select_account',
        },
      },
    })
    if (error) {
      setLoading(false)
      setError(d.errorDefault)
    }
    // On success the browser navigates away; keep loading state active.
  }

  return (
    <main className="flex flex-col items-center px-4 max-w-[525px] mx-auto h-screen main-container">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="text-center logo">
          <Image
            src="/img/logo.svg"
            alt="Logo"
            width={175}
            height={59}
          />
        </div>

        <h1 className="font-semibold text-[20px] leading-[100%] text-center mt-[85px]">
          {d.heading}
        </h1>

        <div className="flex w-full flex-col gap-3">
          <Button
            onClick={handleGoogleLogin}
            variant="secondary"
            className="button-login"
            type="button"
            disabled={loading}
          >
            {loading ? (
              dict.common.redirecting
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[6px]">
                  <path
                    d="M18.7511 10.1951C18.7511 9.47569 18.6915 8.95069 18.5626 8.40625H10.1797V11.6534H15.1003C15.0011 12.4604 14.4654 13.6757 13.2749 14.4923L13.2582 14.601L15.9087 16.6133L16.0924 16.6312C17.7788 15.1048 18.7511 12.859 18.7511 10.1951Z"
                    fill="#D2AF9C"/>
                  <path
                    d="M10.1793 18.75C12.59 18.75 14.6138 17.9722 16.092 16.6305L13.2745 14.4916C12.5206 15.0068 11.5086 15.3666 10.1793 15.3666C7.81822 15.3666 5.81428 13.8402 5.09992 11.7305L4.99522 11.7392L2.23917 13.8295L2.20312 13.9277C3.67136 16.786 6.68723 18.75 10.1793 18.75Z"
                    fill="#D2AF9C"/>
                  <path
                    d="M5.10112 11.7302C4.91263 11.1858 4.80354 10.6024 4.80354 9.99967C4.80354 9.39686 4.91263 8.81355 5.0912 8.26911L5.08621 8.15316L2.29561 6.0293L2.20431 6.07186C1.59918 7.25798 1.25195 8.58995 1.25195 9.99967C1.25195 11.4094 1.59918 12.7413 2.20431 13.9274L5.10112 11.7302Z"
                    fill="#D2AF9C"/>
                  <path
                    d="M10.1794 4.63331C11.8559 4.63331 12.9868 5.34303 13.6317 5.93613L16.1516 3.525C14.604 2.11528 12.59 1.25 10.1794 1.25C6.68725 1.25 3.67137 3.21387 2.20312 6.07218L5.09002 8.26944C5.8143 6.15972 7.81825 4.63331 10.1794 4.63331Z"
                    fill="#D2AF9C"/>
                </svg>
                {d.continueWithGmail}
              </>
            )}
          </Button>
          {error && (
            <p className="text-center text-xs text-red-400">{error}</p>
          )}

          <Button
            variant="secondary"
            disabled
            className="flex items-center justify-center gap-3 opacity-40 cursor-not-allowed"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_5_105)">
                <path
                  d="M18.6814 6.61266C18.5818 6.67078 16.2103 7.89725 16.2103 10.6166C16.322 13.7179 19.203 14.8055 19.2524 14.8055C19.203 14.8636 18.8175 16.2871 17.6755 17.7792C16.7691 19.0646 15.7632 20.3605 14.2356 20.3605C12.7825 20.3605 12.2609 19.5039 10.5843 19.5039C8.78377 19.5039 8.27431 20.3605 6.89576 20.3605C5.36819 20.3605 4.28771 18.9951 3.33196 17.7219C2.0903 16.0554 1.03492 13.4402 0.997667 10.9291C0.972558 9.59847 1.24632 8.29048 1.94126 7.17948C2.92212 5.62847 4.67325 4.57558 6.58555 4.54087C8.05076 4.49483 9.35479 5.47827 10.249 5.47827C11.1059 5.47827 12.708 4.54087 14.5207 4.54087C15.3031 4.54162 17.3896 4.76125 18.6814 6.61266ZM10.1251 4.27519C9.86425 3.06004 10.5843 1.84489 11.2549 1.06975C12.1119 0.132351 13.4653 -0.503906 14.6325 -0.503906C14.707 0.711247 14.2348 1.903 13.3908 2.77097C12.6335 3.70837 11.3295 4.41407 10.1251 4.27519Z"
                  fill="#D2AF9C"/>
              </g>
              <defs>
                <clipPath id="clip0_5_105">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            {d.continueWithApple}
          </Button>
        </div>

        <p className="text-center text-xs text-[#D2AF9C]/60 leading-relaxed">
          {d.terms}{' '}<br/>
          <Link href="/terms" className="underline underline-offset-2 hover:text-[#D2AF9C]">
            {d.termsLink}
          </Link>{' '}
          {d.and}{' '}
          <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#D2AF9C]">
            {d.privacyLink}
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
