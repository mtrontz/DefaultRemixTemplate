
// export const PermList = {
//     View: "View",
//     Create: "Create",
//     Delete: "Delete",
//     Approve: "Approve",
//     Process : "Process"
// } as const;


// https://stackoverflow.com/questions/72402938/how-to-infer-deep-object
//You need to structure your generics in a different way. Start with the innermost, 
// and simplest type (AcceptedValue) and then go up layer by layer. This will work:
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// type OnOffFormat = "off" | "on";
// type AcceptedValue = string | number | boolean;
// 
// const asParsedConfig = <
//   Value extends AcceptedValue,
//   R extends Record<string, Value>,
//   Config extends Record<string, OnOffFormat | [OnOffFormat, R]>,
// >(config: Config) => config;
// 
// const myObj = asParsedConfig({
//     homePage: ["on", {
//         title: 'Home page',
//     }]
// });

// const second = myObj.homePage[1];
// Variable second will have the type you want.
// type Item<T extends string | number | boolean> = T extends infer { name: T }
// const getItem = <T extends string>(args: Item<T>): Item<T> => {
//   return args
// }
// const foo = getItem({ name: 'foo' })
// const bar = getItem({ name: 'bar' })
// const arr = [foo, bar] as const
// const names = arr.map(x => x.name)
// type Name = typeof names[number]

// type T = any;
// type ANY<T> = T extends any ? T : never;
// type Fn = <T>(...args: any) => any;

// type WrapperFn<Fn, T> = ReturnType<Fn>
// type ARGS<T> = T extends Array<T> ? T[] : T extends infer T ? T : {key: K extends infer K ? K | string[] : never, val: V}
// type Args<T> = (args: T extends (infer P)[] ? P : T) => any;
// type fn<A, T> = ReturnType<(args: A extends (infer T)[] ? T : never) => T | never>; // any | undefined
// 
// type TimerFn<T> = fn<any, T extends (infer A)[] ? A : T>

// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// From T, pick a set of properties whose keys are in the union K

// type NonNullable<T> = T extends null | undefined ? never : T

type Maybe<T> = T extends infer T ? T : undefined;
// type Maybe<T> = T extends infer T ? NonNullable<T> : Partial<T> | undefined;

// type AnyValuesFromObject<T, V> = T extends NonNullable<{key: string, value: V}>[] ? V : never;
// let obj: NonNullable<Map<string, Record<string, string>>> = new Map<string, Record<string, string>>();
// 
// let x: AnyValuesFromObject<typeof obj, keyof typeof obj> = 
// interface SvgLogoConfig {
//     CustomProps?: Maybe<RemixLogoProps[]>;
//     // CustomProps?: Pick<RemixLogoProps, keyof RemixLogoProps>
//     icon?: string | URL | undefined;
// };

// interface RemixLogoProps extends React.ComponentPropsWithoutRef<"svg"> {
//     title?: string | undefined;
// };

// type MemoryType<T> = T extends infer K ? 
////
export type { Maybe, AppStorage }

 interface AppStorage<T> extends Storage {
    cache?: Map<string, T extends infer T ? NonNullable<T> : null>;
    secrets?: Maybe<string[]>;
 };

/** This Web Storage API interface provides access to a particular domain's session 
  * or local storage. It allows, for example, the addition, modification, or deletion 
  * of stored data items. 
  * */
// interface Storage {
//     /** Returns the number of key/value pairs. */
//     readonly length: number;
//     /**
//      * Removes all key/value pairs, if there are any.
//      *
//      * Dispatches a storage event on Window objects holding an equivalent Storage object.
//      */
//     clear(): void;
//     /** Returns the current value associated with the given key, or null if the given key does not exist. */
//     getItem(key: string): string | null;
//     /** Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs. */
//     key(index: number): string | null;
//     /**
//      * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
//      *
//      * Dispatches a storage event on Window objects holding an equivalent Storage object.
//      */
//     removeItem(key: string): void;
//     /**
//      * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
//      *
//      * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
//      *
//      * Dispatches a storage event on Window objects holding an equivalent Storage object.
//      */
//     setItem(key: string, value: string): void;
//     [name: string]: any;
// }
// 
// declare var Storage: {
//     prototype: Storage;
//     new(): Storage;
// };
// 
// /** A StorageEvent is sent to a window when a storage area it has access to is changed within the context of another document. */
// interface StorageEvent extends Event {
//     /** Returns the key of the storage item being changed. */
//     readonly key: string | null;
//     /** Returns the new value of the key of the storage item whose value is being changed. */
//     readonly newValue: string | null;
//     /** Returns the old value of the key of the storage item whose value is being changed. */
//     readonly oldValue: string | null;
//     /** Returns the Storage object that was affected. */
//     readonly storageArea: Storage | null;
//     /** Returns the URL of the document whose storage item changed. */
//     readonly url: string;
//     initStorageEvent(type: string, bubbles?: boolean, cancelable?: boolean, key?: string | null, oldValue?: string | null, newValue?: string | null, url?: string | URL, storageArea?: Storage | null): void;
// }
// 
// declare var StorageEvent: {
//     prototype: StorageEvent;
//     new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
// };
// 
// /** Available only in secure contexts. */
// interface StorageManager {
//     estimate(): Promise<StorageEstimate>;
//     getDirectory(): Promise<FileSystemDirectoryHandle>;
//     persist(): Promise<boolean>;
//     persisted(): Promise<boolean>;
// }
// 
// declare var StorageManager: {
//     prototype: StorageManager;
//     new(): StorageManager;
// };
// 
// /** @deprecated */
// interface StyleMedia {
//     type: string;
//     matchMedium(mediaquery: string): boolean;
// }
// 
// /** A single style sheet. CSS style sheets will further implement the more specialized CSSStyleSheet interface. */
// interface StyleSheet {
//     disabled: boolean;
//     readonly href: string | null;
//     readonly media: MediaList;
//     readonly ownerNode: Element | ProcessingInstruction | null;
//     readonly parentStyleSheet: CSSStyleSheet | null;
//     readonly title: string | null;
//     readonly type: string;
// }
// 
// declare var StyleSheet: {
//     prototype: StyleSheet;
//     new(): StyleSheet;
// };
// 
// /** A list of StyleSheet. */
// interface StyleSheetList {
//     readonly length: number;
//     item(index: number): CSSStyleSheet | null;
//     [index: number]: CSSStyleSheet;
// }
// 
// declare var StyleSheetList: {
//     prototype: StyleSheetList;
//     new(): StyleSheetList;
// };
// 
// interface SubmitEvent extends Event {
//     /** Returns the element representing the submit button that triggered the form submission, or null if the submission was not triggered by a button. */
//     readonly submitter: HTMLElement | null;
// }
// 
// declare var SubmitEvent: {
//     prototype: SubmitEvent;
//     new(type: string, eventInitDict?: SubmitEventInit): SubmitEvent;
// };
// 
// /**
//  * This Web Crypto API interface provides a number of low-level cryptographic functions. It is accessed via the Crypto.subtle properties available in a window context (via Window.crypto).
//  * Available only in secure contexts.
//  */
// interface SubtleCrypto {
//     decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<any>;
//     deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
//     deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
//     digest(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
//     encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<any>;
//     exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
//     exportKey(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
//     generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
//     generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
//     generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
//     importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
//     importKey(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
//     sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
//     unwrapKey(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
//     verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
//     wrapKey(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
// }
// 
// declare var SubtleCrypto: {
//     prototype: SubtleCrypto;
//     new(): SubtleCrypto;
// };
// 
// /** The textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children. */
// interface Text extends CharacterData, Slottable {
//     /** Returns the combined data of all direct Text node siblings. */
//     readonly wholeText: string;
//     /** Splits data at the given offset and returns the remainder as Text node. */
//     splitText(offset: number): Text;
// }
// 
// declare var Text: {
//     prototype: Text;
//     new(data?: string): Text;
// };
// 
// /** A decoder for a specific method, that is a specific character encoding, like utf-8, iso-8859-2, koi8, cp1261, gbk, etc. A decoder takes a stream of bytes as input and emits a stream of code points. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays. */
// interface TextDecoder extends TextDecoderCommon {
//     /**
//      * Returns the result of running encoding's decoder. The method can be invoked zero or more times with options's stream set to true, and then once without options's stream (or set to false), to process a fragmented input. If the invocation without options's stream (or set to false) has no input, it's clearest to omit both arguments.
//      *
//      * ```
//      * var string = "", decoder = new TextDecoder(encoding), buffer;
//      * while(buffer = next_chunk()) {
//      *   string += decoder.decode(buffer, {stream:true});
//      * }
//      * string += decoder.decode(); // end-of-queue
//      * ```
//      *
//      * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
//      */
//     decode(input?: BufferSource, options?: TextDecodeOptions): string;
// }
// 
// declare var TextDecoder: {
//     prototype: TextDecoder;
//     new(label?: string, options?: TextDecoderOptions): TextDecoder;
// };
// 
// interface TextDecoderCommon {
//     /** Returns encoding's name, lowercased. */
//     readonly encoding: string;
//     /** Returns true if error mode is "fatal", otherwise false. */
//     readonly fatal: boolean;
//     /** Returns the value of ignore BOM. */
//     readonly ignoreBOM: boolean;
// }
// 
// interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
//     readonly readable: ReadableStream<string>;
//     readonly writable: WritableStream<BufferSource>;
// }
// 
// declare var TextDecoderStream: {
//     prototype: TextDecoderStream;
//     new(label?: string, options?: TextDecoderOptions): TextDecoderStream;
// };
// 
// /** TextEncoder takes a stream of code points as input and emits a stream of bytes. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays. */
// interface TextEncoder extends TextEncoderCommon {
//     /** Returns the result of running UTF-8's encoder. */
//     encode(input?: string): Uint8Array;
//     /** Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as an object wherein read is the number of converted code units of source and written is the number of bytes modified in destination. */
//     encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
// }
// 
// declare var TextEncoder: {
//     prototype: TextEncoder;
//     new(): TextEncoder;
// };
// 
// interface TextEncoderCommon {
//     /** Returns "utf-8". */
//     readonly encoding: string;
// }
// 
// interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
//     readonly readable: ReadableStream<Uint8Array>;
//     readonly writable: WritableStream<string>;
// }
// 
// declare var TextEncoderStream: {
//     prototype: TextEncoderStream;
//     new(): TextEncoderStream;
// };
// 
// /** The dimensions of a piece of text in the canvas, as created by the CanvasRenderingContext2D.measureText() method. */
// interface TextMetrics {
//     /** Returns the measurement described below. */
//     readonly actualBoundingBoxAscent: number;
//     /** Returns the measurement described below. */
//     readonly actualBoundingBoxDescent: number;
//     /** Returns the measurement described below. */
//     readonly actualBoundingBoxLeft: number;
//     /** Returns the measurement described below. */
//     readonly actualBoundingBoxRight: number;
//     /** Returns the measurement described below. */
//     readonly fontBoundingBoxAscent: number;
//     /** Returns the measurement described below. */
//     readonly fontBoundingBoxDescent: number;
//     /** Returns the measurement described below. */
//     readonly width: number;
// }
// 
// declare var TextMetrics: {
//     prototype: TextMetrics;
//     new(): TextMetrics;
// };
// 
// interface TextTrackEventMap {
//     "cuechange": Event;
// }
// 
// /** This interface also inherits properties from EventTarget. */
// interface TextTrack extends EventTarget {
//     /** Returns the text track cues from the text track list of cues that are currently active (i.e. that start before the current playback position and end after it), as a TextTrackCueList object. */
//     readonly activeCues: TextTrackCueList | null;
//     /** Returns the text track list of cues, as a TextTrackCueList object. */
//     readonly cues: TextTrackCueList | null;
//     /**
//      * Returns the ID of the given track.
//      *
//      * For in-band tracks, this is the ID that can be used with a fragment if the format supports media fragment syntax, and that can be used with the getTrackById() method.
//      *
//      * For TextTrack objects corresponding to track elements, this is the ID of the track element.
//      */
//     readonly id: string;
//     /** Returns the text track in-band metadata track dispatch type string. */
//     readonly inBandMetadataTrackDispatchType: string;
//     /** Returns the text track kind string. */
//     readonly kind: TextTrackKind;
//     /** Returns the text track label, if there is one, or the empty string otherwise (indicating that a custom label probably needs to be generated from the other attributes of the object if the object is exposed to the user). */
//     readonly label: string;
//     /** Returns the text track language string. */
//     readonly language: string;
//     /**
//      * Returns the text track mode, represented by a string from the following list:
//      *
//      * Can be set, to change the mode.
//      */
//     mode: TextTrackMode;
//     oncuechange: ((this: TextTrack, ev: Event) => any) | null;
//     /** Adds the given cue to textTrack's text track list of cues. */
//     addCue(cue: TextTrackCue): void;
//     /** Removes the given cue from textTrack's text track list of cues. */
//     removeCue(cue: TextTrackCue): void;
//     addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//     removeEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }
// 
// declare var TextTrack: {
//     prototype: TextTrack;
//     new(): TextTrack;
// };
// 
// interface TextTrackCueEventMap {
//     "enter": Event;
//     "exit": Event;
// }
// 
// /** TextTrackCues represent a string of text that will be displayed for some duration of time on a TextTrack. This includes the start and end times that the cue will be displayed. A TextTrackCue cannot be used directly, instead one of the derived types (e.g. VTTCue) must be used. */
// interface TextTrackCue extends EventTarget {
//     /**
//      * Returns the text track cue end time, in seconds.
//      *
//      * Can be set.
//      */
//     endTime: number;
//     /**
//      * Returns the text track cue identifier.
//      *
//      * Can be set.
//      */
//     id: string;
//     onenter: ((this: TextTrackCue, ev: Event) => any) | null;
//     onexit: ((this: TextTrackCue, ev: Event) => any) | null;
//     /**
//      * Returns true if the text track cue pause-on-exit flag is set, false otherwise.
//      *
//      * Can be set.
//      */
//     pauseOnExit: boolean;
//     /**
//      * Returns the text track cue start time, in seconds.
//      *
//      * Can be set.
//      */
//     startTime: number;
//     /** Returns the TextTrack object to which this text track cue belongs, if any, or null otherwise. */
//     readonly track: TextTrack | null;
//     addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//     removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
// }
// 
// declare var TextTrackCue: {
//     prototype: TextTrackCue;
//     new(): TextTrackCue;
// };
// 
// interface TextTrackCueList {
//     /** Returns the number of cues in the list. */
//     readonly length: number;
//     /**
//      * Returns the first text track cue (in text track cue order) with text track cue identifier id.
//      *
//      * Returns null if none of the cues have the given identifier or if the argument is the empty string.
//      */
//     getCueById(id: string): TextTrackCue | null;
//     [index: number]: TextTrackCue;
// }
// 
// declare var TextTrackCueList: {
//     prototype: TextTrackCueList;
//     new(): TextTrackCueList;
// };
// 
// interface TextTrackListEventMap {
//     "addtrack": TrackEvent;
//     "change": Event;
//     "removetrack": TrackEvent;
// }
// 
// interface TextTrackList extends EventTarget {
//     readonly length: number;
//     onaddtrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
//     onchange: ((this: TextTrackList, ev: Event) => any) | null;
//     onremovetrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
//     getTrackById(id: string): TextTrack | null;
//     addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
//     addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
//     removeEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
//     removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
//     [index: number]: TextTrack;
// }
// 
// declare var TextTrackList: {
//     prototype: TextTrackList;
//     new(): TextTrackList;
// };