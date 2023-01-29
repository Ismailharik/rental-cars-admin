import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Office } from '../models/office.model';
import { Vehicle } from '../models/vehilce.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  deleteImage(vehicleId: number, imageIndex: number) {
    return this.httpClient.delete<any>(environment.host+ '/vehicles/images/'+vehicleId+"/"+imageIndex);
  }


  constructor(private httpClient: HttpClient) { }
  getOfficeById(id: number) {
    return this.httpClient.get<Office>(environment.host + "/offices/" + id)
  }
  addImage(vehicleId: number, selectedImage: File) {
    let formdata: FormData = new FormData();
    formdata.append('file', selectedImage);

    console.log(vehicleId);
    console.log(selectedImage);

    const req = new HttpRequest('POST', environment.host + '/vehicles/images/' + vehicleId, formdata, {
      reportProgress: true,
      responseType: 'text',
    });

    return this.httpClient.request(req);
  }
  updateImage(vehicleId: number, selectedImage: File, imageIndex: number){
    let formdata: FormData = new FormData();
    formdata.append('file', selectedImage);

    console.log(vehicleId);
    console.log(selectedImage);

    const req = new HttpRequest('PUT', environment.host + '/vehicles/images/' + vehicleId + "/" + imageIndex, formdata, {
      reportProgress: true,
      responseType: 'text',

    });
    return this.httpClient.request(req);
  }



  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(environment.host + "/vehicles/" + vehicle.id, vehicle);
  }
  getVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(environment.host + "/vehicles")
  }
  getCategories() {
    return this.httpClient.get<Category[]>(environment.host + "/categories")
  }
  getVehiclesByCategory(categoryId: number) {
    return this.httpClient.get(environment.host + "/categories/" + categoryId + "/vehicles")
  }
  getVehicleById(id: number): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(environment.host + "/vehicles/" + id);
  }
}
