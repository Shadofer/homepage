// ******************** //
// Shared interfaces for all kinds of files.
// ******************** //

import type { Writable } from 'svelte/store';

export interface ThemeContext {
    toggle: Function;
    current: Writable<string>;
    theme: Writable<string>;
}
