import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  colorSwitch: BehaviorSubject<string> = new BehaviorSubject<string>('bg-gradient-primary');
  constructor() { }
  
}
