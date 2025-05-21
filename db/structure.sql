CREATE TABLE IF NOT EXISTS "schema_migrations" ("version" varchar NOT NULL PRIMARY KEY);
CREATE TABLE IF NOT EXISTS "ar_internal_metadata" ("key" varchar NOT NULL PRIMARY KEY, "value" varchar, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
CREATE TABLE IF NOT EXISTS "profiles" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "blurb" text, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
CREATE TABLE IF NOT EXISTS "projects" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" text, "url" text, "description" text, "created_at" datetime(6) NOT NULL, "updated_at" datetime(6) NOT NULL);
INSERT INTO "schema_migrations" (version) VALUES
('20250521002326'),
('20250511214152');

