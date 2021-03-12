import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CubitHeaderInterceptor implements HttpInterceptor {

  headers: HttpHeaders;

  constructor() {
    this.headers = new HttpHeaders({
      'cubit-test': 'David Mejia'
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestClone = request.clone({
      headers: this.headers
    });
    return next.handle(requestClone);
  }
}
