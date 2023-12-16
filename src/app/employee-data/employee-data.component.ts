import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AddEmployeeFormComponent } from '../add-employee-form/add-employee-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-data',
  standalone: true,
  imports: [AddEmployeeFormComponent,CommonModule],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css'
})

export class EmployeeDataComponent implements AfterViewInit{
  handleAddForm:any;
  resetForm:any;
  employeeArray:Array<any> = []
  elem:any;

  @ViewChild(AddEmployeeFormComponent) addEmployee!: { handleAddFormBinded : any, elem:any, employeeArray:any , resetFormBinded:any };
  ngAfterViewInit(): void {
    this.handleAddForm = this.addEmployee.handleAddFormBinded 
    this.resetForm = this.addEmployee.resetFormBinded 
    this.elem = this.addEmployee.elem
    this.employeeArray = this.addEmployee.employeeArray
  }
  deleteEmployee(i:number){
    this.employeeArray.splice(i,1)
    // console.log(i);
  }
  editEmployee(i:number){
    this.handleAddForm("display-block","display-none",i)
  }
}

