-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "problemNo" TEXT,
    "difficulty" TEXT,
    "tags" TEXT[],
    "summary" TEXT,
    "contentMarkdown" TEXT NOT NULL,
    "codeBlock" TEXT,
    "retrospective" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "posts"("slug");

-- CreateIndex
CREATE INDEX "posts_slug_idx" ON "posts"("slug");

-- CreateIndex
CREATE INDEX "posts_platform_idx" ON "posts"("platform");

-- CreateIndex
CREATE INDEX "posts_difficulty_idx" ON "posts"("difficulty");

-- CreateIndex
CREATE INDEX "posts_isPublic_createdAt_idx" ON "posts"("isPublic", "createdAt");
