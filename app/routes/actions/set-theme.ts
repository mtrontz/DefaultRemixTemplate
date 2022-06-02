import {createThemeAction} from "~/services/theme-services"  // 'remix-themes'
import {themeSessionResolver} from '../../root'

export const action = createThemeAction(themeSessionResolver)