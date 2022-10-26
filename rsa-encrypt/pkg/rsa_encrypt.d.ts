/* tslint:disable */
/* eslint-disable */
/**
* @returns {string}
*/
export function get_mnemonic(): string;
/**
* @param {string} phrase
* @returns {string}
*/
export function check_mnemonic(phrase: string): string;
/**
* @param {string} data
* @returns {string}
*/
export function encrypt_data(data: string): string;
/**
* @returns {string}
*/
export function generate_keys(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly get_mnemonic: (a: number) => void;
  readonly check_mnemonic: (a: number, b: number, c: number) => void;
  readonly encrypt_data: (a: number, b: number, c: number) => void;
  readonly generate_keys: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
