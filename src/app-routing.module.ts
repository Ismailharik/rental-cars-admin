import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./app/home/components/customer/customer.component";
import { DashboardComponent } from "./app/home/components/dashboard/dashboard.component";
import { VehilcesImagesComponent } from "./app/home/components/vehilces-images/vehilces-images.component";
import { VehilcesComponent } from "./app/home/components/vehilces/vehilces.component";




const routes: Routes = [
    {path:'home',component:DashboardComponent},
    {path:'customers',component:CustomerComponent},
    {path:'vehicles',component:VehilcesComponent},
    {path:'vehicles/images',component:VehilcesImagesComponent},
    {path:'**',redirectTo:"home",pathMatch:"full"},
];



@NgModule({
    imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
    exports:[RouterModule]
})
export class AppRoutingModule { }