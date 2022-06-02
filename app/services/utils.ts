import React, { useState, useEffect, useCallback, useMemo, useRef, createContext, useContext} from "react";
import type {} from "react";
import {} from "remix";
import type {} from "remix";

type Validate = () => boolean | undefined;
type Fn<T> = ReturnType<() => T | undefined>  // (args?: any[]) => T extends infer R ? R : any | void;

export const isServer: Validate = useCallback(() => {
    if (!Window || !Document) return true
    return false
}, [Window, Document]);

