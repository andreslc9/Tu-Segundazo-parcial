import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { Brand } from '../brand';
import { of } from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  providers: [VehicleService],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  vehicles: Array<Vehicle>;
  brands: Array<Brand>;
  elements: Array<Brand>;
  quantity: [];

  orderAsc() {
    this.brands.sort(function (a, b) {
      var textA = a.marca;
      var textB = b.marca;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log(this.brands)
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
      this.brands = vehicles.map(x => ({ marca: x.marca }));
      this.orderAsc();
      console.log(this.vehicles);
      console.log(this.brands);
      var counter = 1;
      let uniqueElements = [];
      var i;
      for (i = 0; i < this.brands.length; i++) {
        if (JSON.stringify(this.brands[i]) === JSON.stringify(this.brands[i + 1])) {
          counter++;
        } else {
          uniqueElements.push({ marca: this.brands[i].marca, quantity: counter });
          counter = 1;
        }
      }
      this.elements = uniqueElements.map(x => ({ marca: x.marca, quantity: x.quantity }));
      console.log(this.elements)
    });

  }

  ngOnInit() {
    this.getVehicles();

  }

}
