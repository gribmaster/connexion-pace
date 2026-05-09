import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { PrivacyAcceptForm } from './PrivacyAcceptForm'

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1a0a0e] px-4 py-8">
      <Container>
        <Card className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-semibold text-[#1a0a0e]">
              Game information and Privacy Policy
            </h1>
            <p className="text-sm text-[#6b4c57]">
              Please scroll through and accept before continuing.
            </p>
          </div>
          <PrivacyAcceptForm />
        </Card>
      </Container>
    </main>
  )
}
