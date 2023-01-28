import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Vehicle } from '../models/vehilce.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  addImage(vehicleId: number, selectedImage: File) {
    let formdata: FormData = new FormData();
    formdata.append('file', selectedImage);

    console.log(vehicleId);
    console.log(selectedImage);
    
    const req = new HttpRequest('POST', environment.host +'/vehicles/images/'+vehicleId, formdata, {
      reportProgress: true,
      responseType: 'text',
    });    

    return this.httpClient.request(req);
  }


  constructor(private httpClient: HttpClient) { }
  // addImage(vehicleId: number, file: File): Observable<HttpEvent<{}>> {
  //   console.log(file);
  //   console.log(vehicleId);
    
  //   let formdata: FormData = new FormData();
  //   formdata.append('file', file);
  //   console.log(formdata)
  //   const req = new HttpRequest('POST', environment.host+'/images/'+vehicleId, formdata, {
  //     reportProgress: true,
  //     responseType: 'text',
  //   });

  //   return this.httpClient.request(req);
  // } 


  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(environment.host + "/vehicles/"+vehicle.id, vehicle);
  }
  getVehicles():Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host + "/vehicles")
  }
  getCategories() {
    return this.httpClient.get<Category[]>(environment.host + "/categories")
  }
  getVehiclesByCategory(categoryId:number)  {
    return this.httpClient.get(environment.host + "/categories/"+categoryId+"/vehicles")
  }
}
