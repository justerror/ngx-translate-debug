# ngx-translate-debug

[![npm version](https://badge.fury.io/js/ngx-translate-debug.svg)](https://badge.fury.io/js/ngx-translate-debug)

> Plugin for ngx-translate that helps debug translation keys 🔑

Here's the [DEMO](https://justerror.github.io/ngx-translate-debug) or edit on [StackBlitz](https://stackblitz.com/github/justerror/ngx-translate-debug)

## Install

_Make sure you have installed [@ngx-translate](https://github.com/ngx-translate/core) library_

1. Use npm to install the package

```terminal
npm i ngx-translate-debug
```

2. Add custom parser for `TranslateModule`

```typescript
import { NgxTranslateDebugParser } from 'ngx-translate-debug';

@NgModule({
  // ...
  imports: [
    // ...
    TranslateModule.forRoot({
      // ...
      parser: { provide: TranslateParser, useClass: NgxTranslateDebugParser }, // <--- ADD THIS LINE
    }),
  ]
})
```

## Usage

1. Inject `NgxTranslateDebugService` in component's constructor

```typescript
import { NgxTranslateDebugService } from 'ngx-translate-debug';

export class AppComponent {
  constructor(
    // ...
    public translateDebugService: NgxTranslateDebugService // <--- ADD THIS LINE
  ) {
    // ...
  }
}
```

2. Use methods of `NgxTranslateDebugService`

```html
<button type="button" (click)="translateDebugService.toggleDebug()">
  Toggle debug mode
</button>

<button type="button" (click)="translateDebugService.enableDebug()">
  Enable debug mode
</button>

<button type="button" (click)="translateDebugService.disableDebug()">
  Disable debug mode
</button>
```

3. The plugin records the last state in `window.localStorage['ngx-translate-debug']`. You can change key by providing config in root module

```typescript
import { NGX_TRANSLATE_DEBUG_CONFIG } from 'ngx-translate-debug';

@NgModule({
  // ...
  providers: [
    // ...
    {
      provide: NGX_TRANSLATE_DEBUG_CONFIG,
      useValue: {
        localStorageKey: 'any-custom-key',
      },
    },
  ],
})
export class AppModule {}
```

## Dependencies

[@ngx-translate/core](https://github.com/ngx-translate/core)

## License

[MIT](http://vjpr.mit-license.org)
