// import { Injectable } from '@angular/core';


// declare var Keycloak: any
// @Injectable({
//     providedIn: 'root'
// })
// export class KeycloakSecurityService {

//     public kc!: any;


//     constructor() { }


//     init() {
//         return new Promise((resolve, reject) => {
//             console.log("Securing Initialization ...");

//             this.kc = new Keycloak({
//                 url: "http://localhost:8080/auth/",
//                 realm: "rental_cars",
//                 clientId: "rental-cars-front" // web app name
//             });
//             this.kc.init({
//                 onLoad: 'login-required',//check-sso
//                 promiseType: 'native'
//             }).then((authenticated: any) => {
//                 resolve({ auth: authenticated, token: this.kc.token });
//             }).catch((err: any) => {
//                 reject(err);
//             })
//         })
//     }
// }