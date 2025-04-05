import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <div *ngIf="errorMessage; else elseBlock">
      <p style="color: red;">{{errorMessage}}</p>
    </div>
    <ng-template #elseBlock>
      <h3>You selected department with id = {{departmentId}}</h3>
    </ng-template>
  `,
  styles: ``,
  standalone: false
})
export class DepartmentDetailsComponent {
  public departmentId: number | undefined | null = null;
  public errorMessage: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idParam: string | null = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      let id: number = parseInt(idParam, 10);
      if (!isNaN(id) && idParam === '' + id) {
        this.departmentId = id;
      } else {
        this.errorMessage = 'id parameter missing';
        throw Error('id parameter missing');
      }
    } else {
      this.errorMessage = 'id parameter missing';
      throw Error('id parameter missing');
    }    
  }
}
