# Drizzle

## Migration
1. Create "schema.ts" file
2. Create "config.ts" file
3. Generate migration (config path from project root)
`npx drizzle-kit generate --config drizzle/config.ts`
4. Run migration:
`npx drizzle-kit migrate --config drizzle/config.ts`
5. Run push updates:
`npx drizzle-kit push --config drizzle/config.ts`