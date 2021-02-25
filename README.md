# ngx-translate-debug

Here's the [DEMO](https://justerror.github.io/ngx-translate-debug/)

## Install

_Make sure you have installed [@ngx-translate](https://github.com/ngx-translate/core) library_

1. Use yarn (or npm) to install the package

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

1. Inject `NgxTranslateDebugService` in constructor

```typescript
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

3. The library records the last state in `window.localStorage['ngx-translate-debug']`

## Dependencies

[@ngx-translate/core](https://github.com/ngx-translate/core)

## License

[MIT](http://vjpr.mit-license.org)
