import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./app/home/components/customer/customer.component";
import { DashboardComponent } from "./app/home/components/dashboard/dashboard.component";




const routes: Routes = [
    {path:'home',component:DashboardComponent},
    {path:'customers',component:CustomerComponent},
    {path:'**',redirectTo:"home",pathMatch:"full"},
];



@NgModule({
    imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
    exports:[RouterModule]
})
export class AppRoutingModule { }