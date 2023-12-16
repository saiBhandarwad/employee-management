import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee-form.component.html',
  styleUrl: './add-employee-form.component.css'
})
export class AddEmployeeFormComponent implements OnInit {
  employeeArray: Array<any> = []
  elem: any
  firstname: any = ""
  lastname: any = ""
  email: any = ""
  salary: any = ""
  doj: any = ""
  employee: any
  firstnameElem: any
  lastnameElem: any
  emailElem: any
  salaryElem: any
  dojElem: any
  addBtnElem: any
  updateBtnElem: any
  updateElemIndex: any

  ngOnInit(): void {
    this.elem = <HTMLInputElement>document.querySelector(".container")
    this.firstnameElem = <HTMLInputElement>document.getElementById("firstname")
    this.lastnameElem = <HTMLInputElement>document.getElementById("lastname")
    this.emailElem = <HTMLInputElement>document.getElementById("email")
    this.salaryElem = <HTMLInputElement>document.getElementById("salary")
    this.dojElem = <HTMLInputElement>document.getElementById("doj")
    this.addBtnElem = <HTMLInputElement>document.getElementById("add-btn")
    this.updateBtnElem = <HTMLInputElement>document.getElementById("update-btn")
  }

  resetForm() {
    this.firstnameElem.value = "";
    this.lastnameElem.value = "";
    this.emailElem.value = "";
    this.salaryElem.value = "";
    this.dojElem.value = "";
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.salary = "";
    this.doj = "";
  }
  resetFormBinded = this.resetForm.bind(this)
  handleAddFormBinded = this.handleAddForm.bind(this)
  handleAddForm(classNameToAdd: string, classNameToRemove: string, index: any = null) {
    this.elem.classList.add(classNameToAdd)
    this.elem.classList.remove(classNameToRemove)
    if (index != null) {
      this.updateElemIndex = index
      this.updateBtnElem.classList.remove("hide-btn")
      this.addBtnElem.classList.add("hide-btn")
      this.employee = this.employeeArray[index]
      this.firstnameElem.value = this.employee.firstname,
        this.lastnameElem.value = this.employee.lastname,
        this.emailElem.value = this.employee.email,
        this.salaryElem.value = this.employee.salary,
        this.dojElem.value = this.employee.doj
    } else {
      this.updateBtnElem.classList.add("hide-btn")
      this.addBtnElem.classList.remove("hide-btn")
      this.resetFormBinded()
    }

  }
  addEmployee() {

    this.employeeArray.push({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      salary: this.salary,
      doj: this.doj,
    })
    this.resetFormBinded()
  }
  updateEmployee() {
    this.employeeArray.splice(this.updateElemIndex, 1, {
      firstname: this.firstnameElem.value,
      lastname: this.lastnameElem.value,
      email: this.emailElem.value,
      salary: this.salaryElem.value,
      doj: this.dojElem.value,

    })
  }
}
