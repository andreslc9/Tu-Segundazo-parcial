import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-list',
  providers: [VehicleService],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  vehicles: Array<Vehicle>;

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
      console.log(this.vehicles);
    });
  }

  ngOnInit() {
    this.getVehicles();
  }

}
