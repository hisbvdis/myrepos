DO $$ BEGIN
 CREATE TYPE "public"."object_type" AS ENUM('org', 'place');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."options_number" AS ENUM('one', 'many');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "option" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"spec_id" integer NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "section" (
	"id" serial PRIMARY KEY NOT NULL,
	"name_plural" text NOT NULL,
	"name_singular" text NOT NULL,
	"object_type" "object_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "spec" (
	"id" serial PRIMARY KEY NOT NULL,
	"name_service" text NOT NULL,
	"name_public" text NOT NULL,
	"object_type" "object_type" NOT NULL,
	"options_number" "options_number" NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "option" ADD CONSTRAINT "option_spec_id_spec_id_fk" FOREIGN KEY ("spec_id") REFERENCES "public"."spec"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
