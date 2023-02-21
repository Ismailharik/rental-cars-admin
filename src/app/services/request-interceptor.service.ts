// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { KeycloakSecurityService } from './keycloak-security.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class RequestInterceptorService implements HttpInterceptor {

//     constructor(private keycloakSecurityService: KeycloakSecurityService) { }
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


//         if (!this.keycloakSecurityService.kc.authenticated) {
//             return next.handle(req);
//         }
//         let request = req.clone({
//             setHeaders: {
//                 Authorization: 'Bearer ' + this.keycloakSecurityService.kc.token
//             }
//         })
//         return next.handle(request)
//     }
// }