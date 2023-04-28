/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';


import { VehicleListComponent } from './vehicle-list.component';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { By } from '@angular/platform-browser';

describe('VehicleListComponent', () => {
 let component: VehicleListComponent;
 let fixture: ComponentFixture<VehicleListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehicleListComponent ],
     providers: [ VehicleService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VehicleListComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 3; i++) {
     const vehicle = new Vehicle(
       faker.datatype.number(),
       faker.vehicle.manufacturer(),
       faker.vehicle.vehicle(),
       faker.vehicle.vrm(),
       faker.vehicle.model(),
       faker.datatype.number(),
       faker.vehicle.color(),
       faker.image.imageUrl(),
     );
     component.vehicles.push(vehicle);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
   console.log(component.vehicles)
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 //Prueba de creación de la tabla
 it("Component has a table", () => {
  expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 //Prueba de creación de los encabezados
 it('should have 4 <th> elements', () => {
  expect(debug.queryAll(By.css('th'))).toHaveSize(4);
 });

 //Prueba de que existan 3 filas en la tabla del campo id
 it('should have 3 <td id=id> elements)', () => {
  expect(debug.queryAll(By.css('#id'))).toHaveSize(3);
 });

 //Prueba de que existan 3 filas en la tabla del campo marca
 it('should have 3 <td id=marca> elements)', () => {
  expect(debug.queryAll(By.css('#marca'))).toHaveSize(3);
 });

 //Prueba de que existan 3 filas en la tabla del campo linea
 it('should have 3 <td id=linea> elements)', () => {
  expect(debug.queryAll(By.css('#linea'))).toHaveSize(3);
 });

 //Prueba de que existan 3 filas en la tabla del campo modelo
 it('should have 3 <td id=modelo> elements)', () => {
  expect(debug.queryAll(By.css('#modelo'))).toHaveSize(3);
 });

 //Prueba de que existan 3 filas cada una con 4 elementos
 it('should have 12 <td> elements (3 rows * 4 columns)', () => {
  expect(debug.queryAll(By.css('td'))).toHaveSize(12);
 });
});
