import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { PrivacyAcceptForm } from './PrivacyAcceptForm'

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen justify-center bg-[#000000] py-8">
      <Container>
        <PrivacyAcceptForm />
      </Container>
    </main>
  )
}
