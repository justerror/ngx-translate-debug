import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxTranslateDebugService } from 'ngx-translate-debug';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent {
  param = { value: 'world' };
  testArray = ['test_1', 'test_2', 'test_3'];
  translateAsync: string;
  translateInstant: string;

  constructor(
    public translateDebugService: NgxTranslateDebugService,
    public translateService: TranslateService
  ) {
    this.translateService.setTranslation('en', {
      HELLO: 'Hello',
      HELLO_WITH_PARAM: 'Hello {{value}}',
      HELLO_INNER_HTML:
        'Welcome to my Angular application!<br><strong>This is an amazing app which uses the latest technologies!</strong>',
      TEST_ARRAY: {
        TEST_1: 'Hello, Test 1',
        TEST_2: 'Hello, Test 2',
        TEST_3: 'Hello, Test 3',
      },
    });

    translateService
      .get('HELLO', { value: 'world' })
      .subscribe((res: string) => {
        this.translateAsync = res;
      });

    this.translateInstant = this.translateService.instant('HELLO');
  }
}
