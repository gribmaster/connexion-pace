import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.card.createMany({
    data: [
      {
        title: "Share something you never told anyone",
        description: "Deep connection prompt",
        imageUrl: 'https://placehold.net/1.png',
        category: "CONNECTION",
        additional: 'Share something you never told anyone'
      },
      {
        title: "What makes you feel emotionally close?",
        description: "Connection question",
        imageUrl: 'https://placehold.net/2.png',
        category: "CONNECTION",
        additional: 'Share something you never told anyone'
      },

      {
        title: "Describe your perfect touch",
        description: "Intimacy exploration",
        imageUrl: 'https://placehold.net/3.png',
        category: "INTIMACY",
        additional: 'Share something you never told anyone'
      },
      {
        title: "What kind of intimacy do you miss?",
        description: "Reflection prompt",
        imageUrl: 'https://placehold.net/4.png',
        category: "INTIMACY",
        additional: 'Share something you never told anyone'
      },

      {
        title: "Act out your fantasy",
        description: "Playful task",
        imageUrl: 'https://placehold.net/5.png',
        category: "LOVEMAKING",
        additional: 'Share something you never told anyone'
      },
      {
        title: "What turns you on the most?",
        description: "Desire exploration",
        imageUrl: 'https://placehold.net/6.png',
        category: "LOVEMAKING",
        additional: 'Share something you never told anyone'
      }
    ]
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())