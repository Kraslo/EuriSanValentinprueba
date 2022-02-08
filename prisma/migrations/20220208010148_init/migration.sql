-- CreateTable
CREATE TABLE "Present" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personType" TEXT,
    "email" TEXT,
    "name" TEXT,
    "account" TEXT,
    "message" TEXT,
    "group" TEXT,
    "degree" TEXT
);
