import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link
} from "remix";
import type { AppLoadContext, MetaFunction, LinksFunction, LoaderFunction } from "remix";
import {RemixLogo} from "~/components/RemixLogo";
// import ContainerStyles from "~/styles/container.styles.css";
import TempRemixStyles from "~/styles/demos/remix.css";
import GlobalStyles from "~/styles/global.css";
import DarkStyles from "~/styles/dark.css";
import {Theme, useTheme} from "~/services/theme-services" // 'remix-themes'

// logo?: boolean | ((svg: React.ComponentPropsWithoutRef<"svg">) => JSX.Element | null);
interface HeaderProps {
   logo?: {
    links?: {
        to?: string
        title?: string
        className?: string
    }
   };
 };

// const Header = (props?: HeaderProps) => {
  const Header = (props: HeaderProps) => {
    const [theme, setTheme] = useTheme();
    return (
      <header className={`remix-app__header remix-app__${theme}`}>
        <div className="remix-app__header-content">
          {props.logo !== false || null ? (
          <Link to={props?.logo?.links?.to ?? "/"} title={props?.logo?.links?.title ?? "Remix"} prefetch="intent" className={props.logo?.links?.className ?? "remix-app__header-logo"}>
            <RemixLogo />
          </Link>
          ) : null}
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="https://remix.run/docs">Docs</a>
            </li>
            <li>
              <a href="https://github.com/remix-run/remix">GitHub</a>
            </li>
            <li>
            <div className="avatar">
              <Link to="/profile/me" prefetch="intent" className="avatar__letters">MT</Link>
            </div>
            </li>
          </ul>
          <button
            type="button"
            onClick={() =>
            setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
          }>Toggle Theme</button>
        </nav>
      </header>
    )
};

export default Header;