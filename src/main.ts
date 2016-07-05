import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {Ng2todoAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2todoAppComponent);
