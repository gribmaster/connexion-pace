import 'dotenv/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.card.deleteMany();
  await prisma.card.createMany({
    data: [
      {
        title: "Share something you never told anyone",
        description: "Deep connection prompt",
        category: "CONNECTION"
      },
      {
        title: "What makes you feel emotionally close?",
        description: "Connection question",
        category: "CONNECTION"
      },

      {
        title: "Describe your perfect touch",
        description: "Intimacy exploration",
        category: "INTIMACY"
      },
      {
        title: "What kind of intimacy do you miss?",
        description: "Reflection prompt",
        category: "INTIMACY"
      },

      {
        title: "Act out your fantasy",
        description: "Playful task",
        category: "LOVEMAKING"
      },
      {
        title: "What turns you on the most?",
        description: "Desire exploration",
        category: "LOVEMAKING"
      }
    ]
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())