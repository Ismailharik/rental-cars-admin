import { Customer } from "./customer.model"
import { Vehicle } from "./vehilce.model"

export interface Order {
    id:number 
    pickUpDate: Date,
    duration: number,
    officeId: number,
    vehicleId: number,
    totalPrice: number,
    confirmed: boolean,
    customer: Customer,
    vehicle: Vehicle,
    customerId: number,
    paid:boolean
}