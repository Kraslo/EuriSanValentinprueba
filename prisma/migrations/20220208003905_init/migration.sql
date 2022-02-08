/*
  Warnings:

  - You are about to drop the column `class` on the `Present` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Present" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personType" TEXT,
    "email" TEXT,
    "name" TEXT,
    "account" TEXT,
    "message" TEXT
);
INSERT INTO "new_Present" ("account", "createdAt", "email", "id", "message", "name", "personType") SELECT "account", "createdAt", "email", "id", "message", "name", "personType" FROM "Present";
DROP TABLE "Present";
ALTER TABLE "new_Present" RENAME TO "Present";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
