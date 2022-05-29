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
import Header from "~/components/Header"
// import ContainerStyles from "~/styles/container.styles.css";
import TempRemixStyles from "~/styles/demos/remix.css";
import GlobalStyles from "~/styles/global.css";
import DarkStyles from "~/styles/dark.css";
import AvatarStyles from "~/styles/css-layouts/avatar.styles.css";

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
       href: DarkStyles,
       media: "(prefers-color-scheme: dark)",
     },
     { rel: "stylesheet", href: TempRemixStyles },
     // { rel: "stylesheet", href: "/demos/custom-theme.css" },
     { rel: "stylesheet", href: AvatarStyles },
  ];
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
