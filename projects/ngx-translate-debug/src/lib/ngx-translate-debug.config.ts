import { InjectionToken } from '@angular/core';

export interface NgxTranslateDebugConfig {
  localStorageKey: string;
}

export const NgxTranslateDebugConfigDefault: NgxTranslateDebugConfig = {
  localStorageKey: 'ngx-translate-debug',
};

export const NGX_TRANSLATE_DEBUG_CONFIG = new InjectionToken<NgxTranslateDebugConfig>(
  'ngx-translate-debug.config'
);
