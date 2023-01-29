import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerComponent } from "./app/home/components/customer/customer.component";
import { DashboardComponent } from "./app/home/components/dashboard/dashboard.component";
import { OrdersComponent } from "./app/home/components/orders/orders.component";
import { VehicleDetailsComponent } from "./app/home/components/vehicle-details/vehicle-details.component";
import { VehilcesComponent } from "./app/home/components/vehilces/vehilces.component";




const routes: Routes = [
    {path:'home',component:DashboardComponent},
    {path:'customers',component:CustomerComponent},
    {path:'vehicles',component:VehilcesComponent},
    {path:'orders',component:OrdersComponent},
    {path:'vehicles/:id',component:VehicleDetailsComponent},
    {path:'**',redirectTo:"home",pathMatch:"full"},
];



@NgModule({
    imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
    exports:[RouterModule]
})
export class AppRoutingModule { }