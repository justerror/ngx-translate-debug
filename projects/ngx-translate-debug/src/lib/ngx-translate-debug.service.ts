import { Inject, Injectable, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateDebugParser } from '../public-api';
import {
  NgxTranslateDebugConfig,
  NgxTranslateDebugConfigDefault,
  NGX_TRANSLATE_DEBUG_CONFIG,
} from './ngx-translate-debug.config';

@Injectable({
  providedIn: 'root',
})
export class NgxTranslateDebugService {
  private readonly config: NgxTranslateDebugConfig = Object.assign(
    NgxTranslateDebugConfigDefault,
    this.ngxTranslateDebugConfig || {}
  );

  get parser(): NgxTranslateDebugParser {
    return this.translateService.parser as NgxTranslateDebugParser;
  }

  get isDebugMode(): boolean {
    return this.parser.debug;
  }

  set isDebugMode(value: boolean) {
    this.parser.debug = value;
    localStorage.setItem(this.config.localStorageKey, value ? '1' : '0');
  }

  constructor(
    @Optional()
    @Inject(NGX_TRANSLATE_DEBUG_CONFIG)
    private ngxTranslateDebugConfig: NgxTranslateDebugConfig,
    private translateService: TranslateService
  ) {
    if (+localStorage.getItem(this.config.localStorageKey)) {
      this.enableDebug();
    }
  }

  enableDebug(): void {
    if (this.isDebugMode) {
      console.log('ngx-translate debug mode already enabled');
      return;
    }

    this.isDebugMode = true;
    this.triggerTranslatesUpdate();
  }

  disableDebug(): void {
    if (!this.isDebugMode) {
      console.log('ngx-translate debug mode already disabled');
      return;
    }

    this.isDebugMode = false;

    this.triggerTranslatesUpdate();
  }

  toggleDebug(): void {
    this.isDebugMode ? this.disableDebug() : this.enableDebug();
    this.triggerTranslatesUpdate();
  }

  private triggerTranslatesUpdate(): void {
    this.translateService.onLangChange.emit({
      lang: this.translateService.currentLang,
      translations: this.translateService.translations,
    });
  }
}
