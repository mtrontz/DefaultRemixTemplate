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
  import React, { useCallback, useEffect } from "react";
import {encrypt, decrypt, randomUUID, randomInt} from "~/services/encryption.server";
import {getEnv} from "~/services/env.server";
import invariant from "~/utils/tiny-invariant";
import { json } from "stream/consumers";

const Env = getEnv();
useEffect(() => {
  invariant(Env.SESSION_SECRET, "SESSION_SECRET is not set!")
}, []);

const FileSessionCookie = createCookie("FileSessionStorage", {
    secrets: [Env.SESSION_SECRET as string],
    decode: (value: string) => {
      return (decrypt(value)).toString()
    },
    domain: undefined,
    encode: (value: string) => {
      return (encrypt(value)).toString()
    },
    expires: new Date(Date.now() * 1000 * 60 * 60 * 24 * 7),
    httpOnly: true,
    maxAge: Number(new Date(Date.now() * 1000 * 60 * 60 * 24 * 7)),
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });




export let {getSession, commitSession, destroySession} = createFileSessionStorage({cookie: FileSessionCookie, dir: "../data/sessions" })