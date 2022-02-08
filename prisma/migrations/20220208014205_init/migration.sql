-- CreateTable
CREATE TABLE "Present" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personType" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "message" TEXT,
    "group" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "findHint" TEXT NOT NULL
);
