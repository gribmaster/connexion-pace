-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('SCHEDULED', 'SENT', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DailyConnectionStatus" AS ENUM ('ACTIVE', 'PAUSED', 'CANCELLED');

-- CreateTable
CREATE TABLE "PushSubscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "endpoint" TEXT NOT NULL,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PushSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayReminder" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "pushSubscriptionId" TEXT NOT NULL,
    "scheduledAt" TIMESTAMP(3) NOT NULL,
    "timezone" TEXT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'SCHEDULED',
    "sentAt" TIMESTAMP(3),
    "failedAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlayReminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyConnectionReminder" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "pushSubscriptionId" TEXT NOT NULL,
    "timeOfDay" TEXT NOT NULL,
    "timezone" TEXT,
    "intervalDays" INTEGER NOT NULL,
    "nextRunAt" TIMESTAMP(3) NOT NULL,
    "lastSentAt" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "status" "DailyConnectionStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DailyConnectionReminder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PushSubscription_endpoint_key" ON "PushSubscription"("endpoint");

-- CreateIndex
CREATE INDEX "PlayReminder_scheduledAt_status_idx" ON "PlayReminder"("scheduledAt", "status");

-- CreateIndex
CREATE INDEX "PlayReminder_userId_idx" ON "PlayReminder"("userId");

-- CreateIndex
CREATE INDEX "PlayReminder_pushSubscriptionId_idx" ON "PlayReminder"("pushSubscriptionId");

-- CreateIndex
CREATE INDEX "DailyConnectionReminder_nextRunAt_status_idx" ON "DailyConnectionReminder"("nextRunAt", "status");

-- CreateIndex
CREATE INDEX "DailyConnectionReminder_userId_idx" ON "DailyConnectionReminder"("userId");

-- CreateIndex
CREATE INDEX "DailyConnectionReminder_pushSubscriptionId_idx" ON "DailyConnectionReminder"("pushSubscriptionId");

-- AddForeignKey
ALTER TABLE "PlayReminder" ADD CONSTRAINT "PlayReminder_pushSubscriptionId_fkey" FOREIGN KEY ("pushSubscriptionId") REFERENCES "PushSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyConnectionReminder" ADD CONSTRAINT "DailyConnectionReminder_pushSubscriptionId_fkey" FOREIGN KEY ("pushSubscriptionId") REFERENCES "PushSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
