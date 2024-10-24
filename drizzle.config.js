export default defineConfig({
  dialect: "postgresql",
  schema: "./schema.ts",
  dbCredentials: {
    url: NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
});
