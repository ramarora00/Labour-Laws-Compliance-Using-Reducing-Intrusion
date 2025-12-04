/*
  Warnings:

  - You are about to drop the column `applicability` on the `Law` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Law` table. All the data in the column will be lost.
  - You are about to drop the column `sourceLink` on the `Law` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Law" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "summary" TEXT
);
INSERT INTO "new_Law" ("id", "sectionId", "summary", "text", "title") SELECT "id", "sectionId", "summary", "text", "title" FROM "Law";
DROP TABLE "Law";
ALTER TABLE "new_Law" RENAME TO "Law";
CREATE UNIQUE INDEX "Law_title_key" ON "Law"("title");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'HR',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "summary" TEXT NOT NULL DEFAULT 'default_summary',
    "applicability" TEXT NOT NULL DEFAULT 'default_applicability',
    "sourceLink" TEXT NOT NULL DEFAULT 'default_sourceLink'
);
INSERT INTO "new_User" ("createdAt", "email", "id", "name", "passwordHash", "role") SELECT "createdAt", "email", "id", "name", "passwordHash", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
