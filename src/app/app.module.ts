import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateParser } from '@ngx-translate/core';
import { NgxTranslateDebugParser } from 'ngx-translate-debug';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      parser: { provide: TranslateParser, useClass: NgxTranslateDebugParser },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
