import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { IDepartment } from '../department';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department list</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: ``,
  standalone: false
})
export class DepartmentListComponent {
  public departments: IDepartment[] = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  public selectedId: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam) {
        const id = parseInt(idParam, 10);
        if (!isNaN(id)) {
          this.selectedId = id;
        }
      }
    });
  }

  onSelect(department: {id: number, name: string}) {
    // Get current path segments without matrix parameters
    const currentPath = this.activatedRoute.snapshot.url
    .map(segment => segment.path)
    .join('/');
    // Navigate absolutely by reconstructing the URL with the department id appended.
    this.router.navigate([`/${currentPath}`, department.id]);
  }

  isSelected(department: IDepartment) {
    return department.id === this.selectedId;
  }
}
