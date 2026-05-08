import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'

type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const upperCategory = category.toUpperCase() as Category

  const cards = await prisma.card.findMany({
    where: { category: upperCategory },
    orderBy: { createdAt: 'asc' },
  })

  return (
    <div className="min-h-screen bg-[#1a0a0e] py-10">
      <Container className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Link href="/game/intuitive">
            <Button variant="secondary" className="w-auto px-5">
              ← Back
            </Button>
          </Link>
          <h1 className="text-xl font-semibold capitalize text-[#D2AF9C]">
            {category.toLowerCase()}
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          {cards.map((card) => (
            <Link key={card.id} href={`/game/intuitive/${category}/${card.id}`}>
              <Card className="cursor-pointer transition-shadow hover:shadow-md">
                <h2 className="mb-1 text-base font-semibold text-[#1a0a0e]">
                  {card.title}
                </h2>
                <p className="text-sm text-[#5a3a3a]">{card.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}
