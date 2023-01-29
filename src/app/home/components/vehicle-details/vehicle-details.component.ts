import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Office } from '../../models/office.model';
import { Vehicle } from '../../models/vehilce.model';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle!: Vehicle
  office!: Office
  selectedImage!: File
  imageIndex!: number
  currentTime: number = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private vehiclesService: VehiclesService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id)
      this.getVehicleById(parseInt(id))
  }
  getVehicleById(id: number) {
    if (id) {
      this.vehiclesService.getVehicleById(id).subscribe({
        next: resp => {
          console.log("get vehicleById success");
          this.vehicle = resp
          console.log(this.vehicle);

          this.getOfficeById(this.vehicle.id)
        }
      })
    }
  }
  getOfficeById(id: number) {
    this.vehiclesService.getOfficeById(id).subscribe({
      next: resp => {
        this.office = resp
        console.log("get office success");
      },
      error : err=>{
        console.log(err);
        
      }
    })
  }
  openUpdateImage(content: any, index: number) {
    this.modalService.open(content);
      this.imageIndex = index;
    
  }
  openAddImage(content: any) {
    this.modalService.open(content);

  }
  addImage() {
    this.vehiclesService.addImage(this.vehicle.id, this.selectedImage).subscribe({
      next: resp => {
        if (resp.type == HttpEventType.UploadProgress) {
          console.log(resp);

          console.log("addImage success");
          this.getVehicleById(this.vehicle.id)
        } else if (resp instanceof HttpResponse) {
          //stop alert
        }
      },
      error: err => {
        console.log(err);
      }
    })
  }
  updateImage() {
    console.log(this.selectedImage);
    this.vehiclesService.updateImage(this.vehicle.id, this.selectedImage, this.imageIndex).subscribe({
      next: resp => {
        if (resp.type == HttpEventType.UploadProgress) {
          console.log("update progress");

        } else if (resp instanceof HttpResponse) {
          console.log("update success");
          //stop alert
        }
        // console.log("update sucess");
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log("update sucess");
        this.currentTime = Date.now();

        /*
          The catch buffer keep the oldest value of the image while you change it
          for solving this problem 
            -solution 1 : you can use the timestamp (ts?=currentTime) in your html  
            -solution 2 : you can refresh the page like the commented lines below
        */

        // this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
        // this.router.onSameUrlNavigation = 'reload';
        // this.router.navigate(['/vehicles/'+this.vehicle.id])


        this.getVehicleById(this.vehicle.id)
      },
    },
    )
  }

  deleteImage(imageIndex:number){
    console.log("delete image called");
    
    this.vehiclesService.deleteImage(this.vehicle.id,imageIndex).subscribe({
      next : () => {
        console.log("image deleted success");
  this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/vehicles/'+this.vehicle.id])
      },
      error : err=>{
        console.log(err);
      }
    })
  }

  changeImage(event: any) {
    this.selectedImage = event.target.files.item(0);
  }


}
