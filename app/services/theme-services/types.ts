// theme.server.ts
export type ThemeSession = {
    getTheme: () => Theme | null
    setTheme: (theme: Theme) => void
    commit: () => Promise<string>
  };

  export type ThemeSessionResolver = (request: Request) => Promise<ThemeSession>