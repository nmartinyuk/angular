import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  standalone: false
})
export class EmployeeListComponent {
  public employees: IEmployee[] = []
  public errorMessage = ""

  constructor(private _employeeService: EmployeeService) {

  }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(
      data => this.employees = data,
      error => this.errorMessage = error
    );
  }
}
