import type {SessionStorage} from 'remix'
import {Theme, isTheme} from './theme-provider'
import type {ThemeSessionResolver, ThemeSession} from "~/services/theme-services/types";

const createThemeSessionResolver = (
  cookieThemeSession: SessionStorage
): ThemeSessionResolver => {
  const resolver: ThemeSessionResolver = async (request: Request): Promise<ThemeSession> => {
    const session = await cookieThemeSession.getSession(
      request.headers.get('Cookie'),
    )

    return {
      getTheme: () => {
        const themeValue = session.get('theme')
        return isTheme(themeValue) ? themeValue : null
      },
      setTheme: (theme: Theme) => session.set('theme', theme),
      commit: () => cookieThemeSession.commitSession(session),
    }
  }

  return resolver
}

export {createThemeSessionResolver}