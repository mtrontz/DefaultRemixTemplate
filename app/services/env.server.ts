function getEnv() {
    return {
      NODE_ENV: process.env.NODE_ENV ?? null,
      SESSION_SECRET: process.env.SESSION_SECRET ?? null,
      MAGIC_LINK_SECRET: process.env.MAGIC_LINK_SECRET ?? null,
      DATABASE_URL: process.env.DATABASE_URL ?? null,
      VAPID_PUSH_SUBJECT: process.env.VAPID_PUSH_SUBJECT ?? null,
      VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY ?? null,
      VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY ?? null,
      FLY_URL: process.env.FLY_URL ?? null,
      DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID ?? null,
      DB_PRIMARY_REGION: process.env.PRIMARY_REGION ?? null,
    }
  }
  
  type ENV = ReturnType<typeof getEnv>
  
  // App puts these on
  declare global {
    // eslint-disable-next-line
    var ENV: ENV
    interface Window {
      ENV: ENV
    }
  }
  
  export {getEnv}