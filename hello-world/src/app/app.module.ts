import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent
    // other components can be declared here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule, // Explicitly imported, though BrowserModule already provides it
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }