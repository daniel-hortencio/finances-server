export const Environments = {
  JWT_AUTH_SECRET: process.env.JWT_AUTH_SECRET || "SUPER_SECRET",
  API_PORT: process.env.API_PORT || 3003,
  DB: {
    HOST: process.env.DB_HOST || "127.0.0.1",
    USER: process.env.DB_USER || "finances_admin",
    PASSWORD: process.env.DB_PASSWORD || "finances_password",
    DATABASE: process.env.DB_DATABASE || "finances_db",
    PORT: Number(process.env.DB_PORT) || 5432,
  }
}