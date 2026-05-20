'use client'

import { useState, useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { acceptPrivacy } from './actions'
import { Button } from '@/components/ui/Button'

function SubmitButton({ checked }: { checked: boolean }) {
  const { pending } = useFormStatus()
  const disabled = !checked || pending

  return (
    <Button
      type="submit"
      variant="primary"
      disabled={disabled}
      className={disabled ? 'opacity-40 cursor-not-allowed' : ''}
    >
      {pending ? 'Loading...' : 'Start now'}
    </Button>
  )
}

export function PrivacyAcceptForm() {
  const [checked, setChecked] = useState(false)
  const [error, dispatch] = useActionState(async () => {
    try {
      await acceptPrivacy()
      return null
    } catch (e: unknown) {
      if (e instanceof Error && (e as { digest?: string }).digest?.startsWith('NEXT_REDIRECT')) throw e
      return 'Something went wrong. Please try again.'
    }
  }, null)

  return (
    <form action={dispatch} className="flex flex-col">
      <div
        className="pb-23 overflow-y-auto rounded-xl text-sm text-[#D2AF9C] leading-relaxed privacy-block"
      >
        <p className="font-semibold text-[20px] leading-[120%] mb-5">
          Game information and Privacy Policy
        </p>
        <p className="mb-5">
          <strong>1. About Connexion Space</strong><br/>
          The connection and intimacy experienced in a romantic relationship support our mental, emotional, and physical well-being. When oxytocin, dopamine, and other pleasure-related hormones are activated in the body, life feels wonderfully vibrant and gives us extra energy to handle responsibilities and challenges. <br/><br/>
          The Naudingute Laegas card game is designed to deepen the connection, intimacy, and sexuality between you and your partner. It is not just a game, but a journey that helps both of you better understand your bodily sensations and desires, and achieve greater closeness with each other.
        </p>
        <div className="mb-5">
          <strong>2. Information We Collect</strong><br/>
          We may collect the following types of information:
        </div>
        <div className="mb-5">
          <strong>2.1 Personal Information</strong><br/>
          If you contact us or make a purchase, we may collect: <br/><br/>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Billing information</li>
            <li>Shipping address (if physical product is purchased)</li>
          </ul>
        </div>
        <div className="mb-5">
          <strong>2.2 Usage Data</strong><br/>
          We may collect non-identifiable information such as: <br/><br/>
          <ul>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>General location (country level)</li>
          </ul>
          <br/>
          This helps us improve the user experience.
        </div>
        <div className="mb-5">
          <strong>3. Information We Collect</strong><br/>
          We may collect non-identifiable information such as:<br/> <br/>
          <ul>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>General location (country level)</li>
          </ul>
          <br/>
          This helps us improve the user experience.
        </div>

        <label className="flex items-start gap-3 cursor-pointer mb-5">
          <span className="checkbox-default">
            <input
              type="checkbox"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
              className="opacity-0"
            />
            <i></i>
          </span>
          <span className="text-sm">
            I have read and agree to the Privacy Policy and Terms of Use
          </span>
        </label>
      </div>

      <div className="fixed bottom-10 left-0 w-full px-4">
        {error && (
          <p className="text-red-400 text-sm text-center mb-3">{error}</p>
        )}
        <SubmitButton checked={checked} />
      </div>
    </form>
  )
}
