import { Injectable } from '@angular/core';
import { environment } from 'enviroments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

}
