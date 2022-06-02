import {
    Meta,
    Outlet,
    useCatch,
    Link, Form, redirect
  } from "remix";
  import type { MetaFunction, LinksFunction, LoaderFunction, ActionFunction } from "remix";
  import { authenticator } from "~/services/auth.server";
  
  export const meta: MetaFunction = () => {
    return { 
    charset: "utf-8",
    title: "Remix & TailwindCss Demo",
    viewport: "width=device-width,initial-scale=1"
  }};
  
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
      { rel: "stylesheet", href: "/tailwindcss" }, 
      { rel: "stylesheet", href: "https://cdn.tailwindcss.com" }
    ]
  }
  
  export let loader: LoaderFunction = async ({ request }) => {
    // If the user is not authenticated, redirect to /login directly
    return await authenticator.isAuthenticated(request, {
      failureRedirect: "/demo/login",
    });
  };

export default function Index() {
    return (
      <div>
        <h1>I'll soon be connected to SQLite</h1>
      </div>
    );
  }