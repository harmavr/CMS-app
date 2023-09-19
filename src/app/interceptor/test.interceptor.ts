import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_TOKEN = 'AASJLKHFLAKFHLAKalskjdlasjd';
    const requstCopy = request.
    clone({ setHeaders: { API_KEY: API_TOKEN}, body: {hello: 'world'}})
    return next.handle(requstCopy);
  }
}
