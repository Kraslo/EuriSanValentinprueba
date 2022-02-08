/*
  Warnings:

  - Made the column `account` on table `Present` required. This step will fail if there are existing NULL values in that column.
  - Made the column `degree` on table `Present` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group` on table `Present` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Present` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Present" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personType" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "message" TEXT,
    "group" TEXT NOT NULL,
    "degree" TEXT NOT NULL
);
INSERT INTO "new_Present" ("account", "createdAt", "degree", "email", "group", "id", "message", "name", "personType") SELECT "account", "createdAt", "degree", "email", "group", "id", "message", "name", "personType" FROM "Present";
DROP TABLE "Present";
ALTER TABLE "new_Present" RENAME TO "Present";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
