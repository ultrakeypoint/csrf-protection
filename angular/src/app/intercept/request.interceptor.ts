import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    public ro: Router,
    private tokenExtractor: HttpXsrfTokenExtractor
  ) {}

  intercept(rq: HttpRequest<any>, nt: HttpHandler): Observable<HttpEvent<any>> {
    const cookieheaderName = 'luckystore-Xsrf-Cookie';
    let csrfToken = this.tokenExtractor.getToken() as string;
    if (csrfToken !== null && !rq.headers.has(cookieheaderName)) {
      rq = rq.clone({headers: rq.headers.set(cookieheaderName, csrfToken)});
    }
    return nt.handle(rq);
  }
}
