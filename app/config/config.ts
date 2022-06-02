import * as dotenv from 'dotenv'  
dotenv.config();
import React, { useState, useEffect, useCallback, useMemo, useRef, createContext, useContext} from "react";
import type {} from "react";
import {} from "remix";
import type {} from "remix";

// export const config = {
//     EMAIL: process.env.EMAIL,
//     PASSWORD: process.env.PASSWORD
//     // apiKey: process.env.API_KEY,
//     // authDomain: process.env.AUTH_DOMAIN,
//     // projectId: process.env.PROJECT_ID,
//     // storageBucket: process.env.STORAGE_BUCKET,
//     // messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     // appId: process.env.APP_ID,
//   };

interface AppConfig {
  env: {
    EMAIL: string; // process.env.EMAIL
    PASSWORD: string; // process.env.PASSWORD
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID,
  };
  theme: string // "default"; // used to retrieve theme from sessionStorage or localStorage
  meta: {
    site: {
      dev: string // "http://localhost:3000"
    };
    owner: {
      name: string // "Matthew Trontz";
      knownAs: string // "mtrontzthedev";
      email: string // "mtrontz@outlook.com";
      profile: string // "https://github.com/mtrontz"
    }
  }
};

export let getConfig = useCallback(async () => {
  return {
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
      // apiKey: process.env.API_KEY,
      // authDomain: process.env.AUTH_DOMAIN,
      // projectId: process.env.PROJECT_ID,
      // storageBucket: process.env.STORAGE_BUCKET,
      // messagingSenderId: process.env.MESSAGING_SENDER_ID,
      // appId: process.env.APP_ID,
    },
    theme: "default", // used to retrieve theme from sessionStorage or localStorage
    meta: {
      site: {
        dev: "http://localhost:3000"
      },
      owner: {
        name: "Matthew Trontz",
        knownAs: "mtrontzthedev",
        email: "mtrontz@outlook.com",
        profile: "https://github.com/mtrontz"
      }
    }
  } as AppConfig;
}, []);
 


// export let getConfig = useCallback<() => Promise<Partial<AppConfig>>(async () => {
//   let config: Promise<Partial<AppConfig>> = useMemo<Promise<Partial<AppConfig>>>(async () => {
//     env: {
//       EMAIL: process.env.EMAIL;
//       PASSWORD: process.env.PASSWORD;
//       // apiKey: process.env.API_KEY,
//       // authDomain: process.env.AUTH_DOMAIN,
//       // projectId: process.env.PROJECT_ID,
//       // storageBucket: process.env.STORAGE_BUCKET,
//       // messagingSenderId: process.env.MESSAGING_SENDER_ID,
//       // appId: process.env.APP_ID,
//     };
//     theme: "default"; // used to retrieve theme from sessionStorage or localStorage
//     meta: {
//       site: {
//         dev: "http://localhost:3000"
//       };
//       owner: {
//         name: "Matthew Trontz";
//         knownAs: "mtrontzthedev";
//         email: "mtrontz@outlook.com";
//         profile: "https://github.com/mtrontz"
//       }
//     }
//   }, []);
//   // return config.then((env) => {})
// }, []);