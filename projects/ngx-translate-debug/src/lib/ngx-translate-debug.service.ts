import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateDebugParser } from '../public-api';

@Injectable({
  providedIn: 'root',
})
export class NgxTranslateDebugService {
  private readonly localStorageKey = 'ngx-translate-debug';

  get parser(): NgxTranslateDebugParser {
    return this.translateService.parser as NgxTranslateDebugParser;
  }

  get isDebugMode(): boolean {
    return this.parser.debug;
  }

  set isDebugMode(value: boolean) {
    this.parser.debug = value;
    localStorage.setItem(this.localStorageKey, value ? '1' : '0');
  }

  constructor(private translateService: TranslateService) {
    +localStorage.getItem(this.localStorageKey)
      ? this.enableDebug()
      : this.disableDebug();
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

  triggerTranslatesUpdate(): void {
    this.translateService.onLangChange.emit({
      lang: this.translateService.currentLang,
      translations: this.translateService.translations,
    });
  }
}
