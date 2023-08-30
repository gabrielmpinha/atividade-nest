/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "img" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("id", "img", "nome", "preco") SELECT "id", "img", "nome", "preco" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
