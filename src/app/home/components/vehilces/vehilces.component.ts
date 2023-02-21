import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../../models/category.model';
import { Vehicle } from '../../models/vehilce.model';
import { VehiclesService } from '../../services/vehicles.service';

@Component({
  selector: 'app-vehilces',
  templateUrl: './vehilces.component.html',
  styleUrls: ['./vehilces.component.css']
})
export class VehilcesComponent implements OnInit {

  vehicles!: Vehicle[]
  categories!: Category[]
  vehicleForm!: FormGroup;
  selectedImageId!: number
  indexOfUpdatedVehicle!: number;
  selectedImage!: File

  constructor(
    private vehiclesService: VehiclesService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder) {

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getCategories()
    this.getAllVehicles()
  }
  getCategories() {
    this.vehiclesService.getCategories().subscribe({
      next: (resp: any) => {
        this.categories = resp._embedded.categories
      },
      error: err => {
        console.log(err);
      }
    })
  }
  getVehilclesByCategory(id: number) {
    this.vehiclesService.getVehiclesByCategory(id).subscribe({
      next: (resp: any) => {
        this.vehicles = resp._embedded.vehicles
      },
      error: err => {
        console.log(err);
      }
    })
  }
  getAllVehicles() {
    this.vehiclesService.getVehicles().subscribe({
      next: (resp: any) => {
        this.vehicles = resp

      },
      error: err => {
        console.log(err);
      }
    })
  }


  initializeForm(vehicle?: Vehicle) {
    this.vehicleForm = this.fb.group({
      id: [vehicle?.id],
      title: [vehicle?.title],
      description: [vehicle?.description],
      dailyPrice: [vehicle?.dailyPrice],
      dateFirstCirculation: [vehicle?.dateFirstCirculation],
      nbrOfKm: [vehicle?.nbrOfKm],
      franchise: [vehicle?.franchise],
      model: [vehicle?.model],
      available: [vehicle?.available],
      officeId : [vehicle?.officeId]
    })
  }

  open(content: any, vehicle?: Vehicle, index?: number) {

    this.initializeForm(vehicle)
    this.modalService.open(content);
  }
  openImageModal(imageModal: any, id: number) {
    this.selectedImageId = id
    this.modalService.open(imageModal);
    console.log(id);
    console.log(this.selectedImage)


  }
  addImage() {
    console.log(this.selectedImage);
    this.vehiclesService.addImage(this.selectedImageId,this.selectedImage).subscribe({
      next: resp => {
        if (resp.type == HttpEventType.UploadProgress) {
          this.getAllVehicles();// refresh page
          console.log("success");
          
        } else if (resp instanceof HttpResponse) {
          //stop alert
        }
        console.log("sucess");
        this.getAllVehicles()
        
      },
      error: err => {
      }
    })
  }
  changeImage(event:any){
    this.selectedImage = event.target.files.item(0);
  }
  saveUpdate() {
    console.log(this.vehicleForm.value);
    this.vehiclesService.updateVehicle(this.vehicleForm.value).subscribe({
      next: resp => {
        // this.vehicles[this.indexOfUpdatedVehicle] = resp // to dont make a backend call 
        this.getAllVehicles()
      }
    })
    console.log("------------");
  }

  deleteVehicle(id:number){
      this.vehiclesService.deleteVehicle(id).subscribe({
        next : resp =>{
          alert("vehicle deleted successfully")
          this.getAllVehicles()
        },
        error : err =>{
          console.log(err);
          
        }
      })
  }
}
