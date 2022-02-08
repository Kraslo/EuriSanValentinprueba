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
    "degree" TEXT NOT NULL,
    "findHint" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Present" ("account", "createdAt", "degree", "email", "findHint", "group", "id", "message", "name", "personType") SELECT "account", "createdAt", "degree", "email", "findHint", "group", "id", "message", "name", "personType" FROM "Present";
DROP TABLE "Present";
ALTER TABLE "new_Present" RENAME TO "Present";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
