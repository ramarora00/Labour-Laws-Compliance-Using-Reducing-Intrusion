-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Law" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "summary" TEXT,
    "applicability" TEXT NOT NULL DEFAULT 'default_applicability',
    "sourceLink" TEXT NOT NULL DEFAULT 'default_sourceLink'
);
INSERT INTO "new_Law" ("id", "sectionId", "summary", "text", "title") SELECT "id", "sectionId", "summary", "text", "title" FROM "Law";
DROP TABLE "Law";
ALTER TABLE "new_Law" RENAME TO "Law";
CREATE UNIQUE INDEX "Law_title_key" ON "Law"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
