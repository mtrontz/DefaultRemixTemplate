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
  import RemixLogo from "~/components/RemixLogo";
  // import ContainerStyles from "~/styles/container.styles.css";
  import TempRemixStyles from "~/styles/demos/remix.css";
  import GlobalStyles from "~/styles/global.css";
  import DarkStyles from "~/styles/dark.css";
  import {Theme, useTheme} from "~/services/theme-services" // 'remix-themes'
  import { SVG } from "framer";
  
  interface HeaderProps {
     logo?: boolean | ((svg: React.ComponentPropsWithoutRef<"svg">) => JSX.Element | null);
     links?: {
       to?: string
       prefetch?: string
       href?: string
       className?: string
     }
   };
  
  // const Header = (props?: HeaderProps) => {
    const LogoTest = (props: HeaderProps) => {
      const [themeName, setTheme] = useTheme();
      let logo = props.logo === ((props: React.ComponentPropsWithoutRef<"svg">) => {
        props["aria-current"]
        props["aria-describedby"]
        props["aria-labelledby"]
        props.visibility
        props.width
        props.height
        props["aria-disabled"]
        props["aria-hidden"]
        props["aria-label"]
        props["aria-required"]
        props["aria-sort"]
  
        props["children"]
        props["color"]
        props["aria-sort"]
        props["crossOrigin"]
        props.children
        props.color
        props.crossOrigin
      
        props.dangerouslySetInnerHTML
        props.display
      
        props.fill
        props.fillOpacity
        props.fontSize
        
        props.from
        props.href
        props.id
        props.lang
        props.name
        props.onClick
        props.onLoad
  
      })  // ?? false;
      return (
        <header className={`remix-app__header remix-app__${themeName}`}>
          <div className="remix-app__header-content">
            {logo ? (
            <Link to={props.links?.to ?? "/"} title="Remix" className="remix-app__header-logo">
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
            }
            >
              Toggle Theme
            </button>
          </nav>
        </header>
      )
  };
  
  export default LogoTest;