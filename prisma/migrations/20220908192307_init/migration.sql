-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "preferred_currency" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "categories" (
    "id_category" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "background_color" TEXT NOT NULL,
    "icon_color" TEXT NOT NULL,
    "icon_name" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    CONSTRAINT "categories_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "accounts" (
    "id_account" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "id_user" TEXT NOT NULL,
    CONSTRAINT "accounts_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users" ("id_user") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refreshToken" (
    "id_refresh_token" TEXT NOT NULL PRIMARY KEY,
    "id_user" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "refreshToken_id_user_key" ON "refreshToken"("id_user");
