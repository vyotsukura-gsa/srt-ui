// globals.ts
// This isn't a best practice but I needed some way to get access to AppComponent.isLogin from the TokenInterceptor
// service. It couldn't be injected directly because it would make a circular reference.
// Best case is to refactor the code so that isLogin doesn't live in AppComponent but instead is something like a service.

import { Injectable } from '@angular/core';
import {AppComponent} from './app/app.component';

@Injectable()
export class Globals {
  public app: AppComponent = null;
}