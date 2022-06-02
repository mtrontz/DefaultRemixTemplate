import {
  useCatch, Link, NavLink, useLocation, useSearchParams, 
  useParams, useOutletContext, useOutlet, useMatches, 
  useSubmit, useTransition, useResolvedPath, useNavigationType,
  useLoaderData, useNavigate, useHref, useFormAction, useFetchers, 
  useFetcher, useBeforeUnload, useActionData, createCookie, 
  createCookieSessionStorage, createFileSessionStorage, 
  createMemorySessionStorage, createSession, createSessionStorage, 
  unstable_createFileUploadHandler, unstable_createMemoryUploadHandler,
  isCookie
} from "remix";
import type { 
  CookieSignatureOptions, AppData, AppLoadContext, ErrorBoundaryComponent, 
  RemixBrowser, RemixBrowserProps, ServerBuild, Cookie, CookieOptions, 
  CookieParseOptions, CookieSerializeOptions, EntryContext, RouteComponent 
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import React, { useEffect } from "react";

import Header from "~/components/Header";
import BoxedLayout from "~/components/BoxedLayout";
import {Theme, useTheme} from "~/services/theme-services" // 'remix-themes'
import { authenticator } from "~/services/auth.server";
import {getSession, commitSession, destroySession} from "~/services/session.server"
import type {User} from "~/models/user";
import ColorStyles from "~/styles/colors.css";
import DarkStyles from "~/styles/dark.css";
import GlobalStyles from "~/styles/global.css";
import AboutStyles from "~/styles/dark.css";
import RemixStyles from "~/styles/global.css";

import AvatarStyles from "~/styles/avatar.styles.css";
import ContainerStyles from "~/styles/container.styles.css";
import TempStyles from "~/styles/temp.css";
// type Params<Key extends string = string> = {
//   readonly [key in Key]: string | undefined;
// };
interface Param {
  key: string
  value: string
};
type Params = Array<Param>;
interface LoaderData extends AppData {
  current: {
    location?: string
    searchParams?: string
    hash?: string
  };
  session?: {
    user?: User|null;
    data?: AppData;
  };
};

export const meta: MetaFunction = ({location}) => {
  //let url = new URL(`${location.pathname}${location.search}${location.hash}`)
  //let search = location.search;
  //let params: Array<Param> = [];

  //let entries = search.split("="). // .entries();
  //if (entries && (entries.next()) !== null||undefined) {
  //  search.forEach((value, key) => {
  //    params.push({key, value})
  //  });
  //}

  return { 
  charset: "utf-8",
  title: `Remix Demo: ${location.pathname}`,
  viewport: "width=device-width,initial-scale=1",
  keywords: `${location.search}`
}};

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 * https://remix.run/api/app#link
 * A function that defines `<link>` tags to be inserted into the `<head>` of
 * the document on route transitions.
 * 
 * export interface LinksFunction {
 * (): LinkDescriptor[];
 * }
 * 
 * export declare type LinkDescriptor = HtmlLinkDescriptor | PageLinkDescriptor;
 * 
 * export interface HtmlLinkDescriptor {
 * 
 *    // Address of the hyperlink
 *    href: string;
 * 
 *    // How the element handles crossorigin requests
 *    crossOrigin?: "anonymous" | "use-credentials";
 *    
 *    // Relationship between the document containing the hyperlink and the destination resource
 *    rel: "alternate" | "dns-prefetch" | "icon" | "manifest" | "modulepreload" | "next" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "search" | "stylesheet" | string;
 *    
 *    // Applicable media: "screen", "print", "(max-width: 764px)"
 *    media?: string;
 * 
 *    // Integrity metadata used in Subresource Integrity checks
 *    integrity?: string;
 * 
 *    // Language of the linked resource
 *    hrefLang?: string;
 * 
 *    // Hint for the type of the referenced resource
 *    type?: string;
 * 
 *    // Referrer policy for fetches initiated by the element
 *    referrerPolicy?: "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
 *    
 *    // Sizes of the icons (for rel="icon")
 *    sizes?: string;
 * 
 *    // Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for rel="preload")
 *    imagesrcset?: string;
 * 
 *    // Image sizes for different page layouts (for rel="preload")
 *    imagesizes?: string;
 * 
 *    // Potential destination for a preload request (for rel="preload" and rel="modulepreload")
 *    as?: "audio" | "audioworklet" | "document" | "embed" | "fetch" | "font" | "frame" | "iframe" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt" | string;
 *    
 *    // Color to use when customizing a site's icon (for rel="mask-icon")
 *    color?: string;
 * 
 *    // Whether the link is disabled
 *    disabled?: boolean;
 * 
 *    // The title attribute has special semantics on this element: Title of the link; CSS style sheet set name.
 *    title?: string;
 * }
 * 
 * export interface PageLinkDescriptor extends Omit<HtmlLinkDescriptor, 
 * "href" | "rel" | "type" | "sizes" | "imagesrcset" | "imagesizes" | "as" | "color" | "title"> {
 * 
 * // The absolute path of the page to prefetch.
 * page: string;
 * 
 * }
 */
 
 export let links: LinksFunction = () => {
  return [
    { 
      rel: "stylesheet", 
      href: "/tailwindcss", 
      crossOrigin: "anonymous"
    }, 
    { 
      rel: "stylesheet", 
      href: "https://cdn.tailwindcss.com",
      crossOrigin: "anonymous" 
    }
  ]
}

export let loader: LoaderFunction = async ({ request }) => {
  // If the user is not authenticated, redirect to /login directly
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/demo/login",
  });
};

// <div className="remix-app__main-content">
//         <aside className="remix-app__left">Aside: Left</aside>
// 
// 
//         <article className="remix-app__middle">Article: Middle</article>
// 
// 
//         <nav className="remix-app__right">Navbar: Right</nav>
// 
//       </div>

export default function Index({ children }: React.PropsWithChildren<{}>) {
  const [, setTheme] = useTheme()
  return (
    <BoxedLayout>
    <div className="remix-app">
      <div className="remix-app__main">{children}</div>
      <Header />
      <div className="remix-app__main">{children}</div>
      <footer className="remix-app__footer">
        <div className="remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer>
    </div>
    </BoxedLayout>
  )
  // return (
  //   <div className="remix-app__main-content">
  //     <nav className="remix-app__sidemenu">
  //     <ul>
  //       <li>
  //         <NavLink
  //           target="_blank"
  //           to="https://remix.run/tutorials/blog"
  //           rel="noreferrer"
  //         >
  //           15m Quickstart Blog Tutorial
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink
  //           target="_blank"
  //           to="https://remix.run/tutorials/jokes"
  //           rel="noreferrer"
  //         >
  //           Deep Dive Jokes App Tutorial
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink target="_blank" to="https://remix.run/docs" rel="noreferrer">
  //           Remix Docs
  //         </NavLink>
  //       </li>
  //     </ul>
  //     </nav>
  //     <aside className="remix-app__media">
  //     <h1>Welcome to Remix</h1>
  //     </aside>
  //     <article className="remix-app__center">
  //     <h1>Welcome to Remix</h1>
  //     </article>
  //   </div>
  // );
}
