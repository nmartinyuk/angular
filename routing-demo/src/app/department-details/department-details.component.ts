import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <div *ngIf="errorMessage; else elseBlock">
      <p style="color: red;">{{errorMessage}}</p>
    </div>
    <ng-template #elseBlock>
      <h3>You selected department with id = {{departmentId}}</h3>
      <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>
      </p>
      <router-outlet></router-outlet>
      <p>
        <button (click)="goPrevious()">Previous</button>
        <button (click)="goNext()">Next</button>
      </p>
      <div>
        <button (click)="goToDepartments()">Back</button>
      </div>
    </ng-template>
  `,
  styles: ``,
  standalone: false
})
export class DepartmentDetailsComponent {
  public departmentId: number = 0;
  public errorMessage: string | undefined;

  constructor(private activetedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {  
    this.activetedRoute.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        const id = parseInt(idParam, 10);
        if (!isNaN(id)) {
          this.departmentId = id;
        } else {
          this.errorMessage = 'Invalid department id';
        }
      } else {
        this.errorMessage = 'id parameter missing';
      }
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId], {relativeTo: this.activetedRoute})
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId], {relativeTo: this.activetedRoute})
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.activetedRoute})
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activetedRoute});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activetedRoute});
  }
}
