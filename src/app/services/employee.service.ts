import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { employeeList } from '../models/employee-list';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    /** for the sample */
    return of(employeeList);
    /** In the real-time API get all */
    // return this.http.get(``);
  }
}
