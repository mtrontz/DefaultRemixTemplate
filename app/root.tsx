import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link,
  json
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import Header from "~/components/Header"
// import ContainerStyles from "~/styles/container.styles.css";
import ColorStyles from "~/styles/colors.css";
import GlobalStyles from "~/styles/global.css";
import RemixStyles from "~/styles/remix.css";
import AvatarStyles from "~/styles/css-layouts/avatar.styles.css";
import {
  ThemeProvider,
  useTheme,
  PreventFlashOnWrongTheme,
  createThemeSessionResolver,
} from "~/services/theme-services" // 'remix-themes'
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */
 export let links: LinksFunction = () => {
  return [
    // { rel: "stylesheet", href: AppStyles },
     { rel: "stylesheet", href: GlobalStyles },
     {
       rel: "stylesheet",
       href: ColorStyles,
       // media: "(prefers-color-scheme: dark)",
     },
     { rel: "stylesheet", href: RemixStyles },
     // { rel: "stylesheet", href: "/demos/custom-theme.css" },
     // { rel: "stylesheet", href: AvatarStyles },
     // { rel: "manifest", href: "/resources/manifest.webmanifest" },
     // { rel: "x-icon/ico", href: "/public/favicon.ico" },
  ];
};

type LoaderData = {
  ENV:  {
    VAPID_PUSH_SUBJECT: string;
    VAPID_PUBLIC_KEY: string;
    VAPID_PRIVATE_KEY: string;
  };
};

export const loader: LoaderFunction = async () => {
  // const clients = await getClients();
  // const data: LoaderData = {
  //   clients: clients.map((c) => ({ id: c.id, name: c.name })),
  // };

  // https://vapidkeys.com/
  const data: LoaderData = {
    ENV: {
      VAPID_PUSH_SUBJECT: process.env.VAPID_PUSH_SUBJECT ?? "",
      VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY ?? "",
      VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY ?? "",
    }
  }
  return json(data);
};
// export default function App() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width,initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         {process.env.NODE_ENV === "development" && <LiveReload />}
//       </body>
//     </html>
//   );
// }

/**
 * The root module's default export is a component that renders the current
 * route via the `<Outlet />` component. Think of this as the global layout
 * component for your app.
 */
 export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <link rel="manifest" href="/resources/manifest.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}



//  <div className="remix-app__header-content">
//     <Link to="/" title="Remix" className="remix-app__header-logo">
//       <RemixLogo />
//     </Link>
//     <nav aria-label="Main navigation" className="remix-app__header-nav">
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <a href="https://remix.run/docs">Remix Docs</a>
//         </li>
//         <li>
//           <a href="https://github.com/remix-run/remix">GitHub</a>
//         </li>
//       </ul>
//     </nav>
//   </div>



// function Layout({ children }: React.PropsWithChildren<{}>) {
//  return (
//    <div className="remix-app">
//      <header className="remix-app__header"></header>
//
//       <div className="remix-app__main">
// 
//         <aside className="remix-app__left"></aside>
//        <article className="remix-app__middle"></article>
//         <nav className="remix-app__right"></nav>
// 
//         <div className="remix-app__main-content">{children}</div>
//       </div>
//       <footer className="remix-app__footer">
//         <div className="remix-app__footer-content">
//           <p>&copy; You!</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="remix-app">
      <div className="remix-app__main">{children}</div>
      <footer className="remix-app__footer">
        <div className="remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer>
    </div>
  );
};

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
};
