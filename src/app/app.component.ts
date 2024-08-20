import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: "Ryan", country: "USA" },
    { id: 2, name: "Maria", country: "USA" },
    { id: 3, name: "Santi", country: "USA" }
  ];

  selectedEmployee: Employee = new Employee();
  openForEdit(employee: Employee){
    this.selectedEmployee = employee;
  }

  addOrEdit(){
    
  if(this.selectedEmployee.id == 0){
    this.selectedEmployee.id =  this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);
  }

    
    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
 
  }

}
 