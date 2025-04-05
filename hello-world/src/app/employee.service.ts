import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './IEmployee';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  private _url: string = "assets/data/employees.json";

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient
    .get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error("Error occured and catched!");
    return throwError(() => new Error(error.message || "Server Error"));
  }
}
