import {
  useCatch,
  Link,
  NavLink
} from "remix";
import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import Header from "~/components/Header";
import React, {} from "react";

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
  return (
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
