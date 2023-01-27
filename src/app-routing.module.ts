import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./app/home/components/dashboard/dashboard.component";




const routes: Routes = [
    {path:'home',component:DashboardComponent},
    {path:'**',redirectTo:"home",pathMatch:"full"},
];



@NgModule({
    imports:[RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
    exports:[RouterModule]
})
export class AppRoutingModule { }