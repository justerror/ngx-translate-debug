import { Injectable } from '@angular/core';
import { TranslateDefaultParser } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NgxTranslateDebugParser extends TranslateDefaultParser {
  debug = false;

  getValue(target: any, key: string): any {
    return this.debug ? key : super.getValue(target, key);
  }
}
