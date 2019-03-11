import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <h3>
      Department list
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span>{{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public hiddenId;
  public selectedId;
  public departments = [
    {"id":1 , "name": "Angular"},
    {"id":2 , "name": "mongo"},
    {"id":3 , "name": "node"},
    {"id":4 , "name": "Ruby"},
    {"id":5 , "name": "Bootstrap"}
   ];

  constructor(private router: Router , private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
  });
    this.hiddenId = this.departments.length;
  }

  onSelect(department) {

    this.router.navigate(['/departments', department.id]);

  }
  isSelected(department){
    return department.id === this.selectedId;
  }

}
