'use client'

import { useRef, useState } from 'react'
import { acceptPrivacy } from './actions'
import { Button } from '@/components/ui/Button'

export function PrivacyAcceptForm() {
  const [scrolledToBottom, setScrolledToBottom] = useState(false)
  const [checked, setChecked] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    const el = textRef.current
    if (!el) return
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8
    if (atBottom) setScrolledToBottom(true)
  }

  const canSubmit = scrolledToBottom && checked

  return (
    <form action={acceptPrivacy} className="flex flex-col gap-6">
      <div
        ref={textRef}
        onScroll={handleScroll}
        className="h-64 overflow-y-auto rounded-xl border border-[#e8d5c4] bg-[#fdf8f5] p-4 text-sm text-[#6b4c57] leading-relaxed"
      >
        <p className="mb-3">
          Welcome to Connexion Space. Before you begin, please read the following information carefully.
        </p>
        <p className="mb-3">
          <strong>1. Data We Collect</strong><br />
          We collect your name and email address provided through Google Sign-In. This information is used solely to manage your account and personalise your experience.
        </p>
        <p className="mb-3">
          <strong>2. How We Use Your Data</strong><br />
          Your data is used to authenticate you, track your game sessions, and provide access to premium features if applicable. We do not sell your data to third parties.
        </p>
        <p className="mb-3">
          <strong>3. Data Retention</strong><br />
          We retain your account data for as long as your account is active. You may request deletion of your data at any time by contacting us.
        </p>
        <p className="mb-3">
          <strong>4. Cookies and Storage</strong><br />
          We use browser localStorage to save your game preferences and session state locally. No personal information is stored in localStorage.
        </p>
        <p className="mb-3">
          <strong>5. Third-Party Services</strong><br />
          We use Supabase for authentication and database services. By using Connexion Space, you acknowledge that your authentication data is processed by Supabase in accordance with their privacy policy.
        </p>
        <p className="mb-3">
          <strong>6. Your Rights</strong><br />
          You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us directly.
        </p>
        <p className="mb-3">
          <strong>7. Changes to This Policy</strong><br />
          We may update this privacy policy from time to time. Significant changes will require you to re-accept the updated policy before continuing to use the app.
        </p>
        <p>
          By clicking &quot;Start now&quot; below, you confirm that you have read, understood, and agreed to the above information and our Privacy Policy and Terms of Use.
        </p>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[#860119] cursor-pointer"
        />
        <span className="text-sm text-[#6b4c57]">
          I have read and agree to the Privacy Policy and Terms of Use
        </span>
      </label>

      <Button
        type="submit"
        variant="primary"
        disabled={!canSubmit}
        className={!canSubmit ? 'opacity-40 cursor-not-allowed' : ''}
      >
        Start now
      </Button>
    </form>
  )
}
