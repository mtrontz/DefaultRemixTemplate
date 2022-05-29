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
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import RemixLogo from "~/components/RemixLogo";
// import ContainerStyles from "~/styles/container.styles.css";
import TempRemixStyles from "~/styles/demos/remix.css";
import GlobalStyles from "~/styles/global.css";
import DarkStyles from "~/styles/dark.css";

// interface HeaderProps {
//   logo?: boolean | ((props: React.ComponentPropsWithoutRef<"svg">) => JSX.Element | null);
// };

// const Header = (props?: HeaderProps) => {
  const Header = () => {
    return (
      <header className="remix-app__header">
        <div className="remix-app__header-content">
          <Link to="/" title="Remix" className="remix-app__header-logo">
            <RemixLogo />
          </Link>
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
          </nav>
      </header>
    )
};

export default Header;