import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <p>
      department-details works!
    </p>
    <p>
        <button (click)="showOverview()"> Overview</button>
        <button (click)="contactDetails()"> Contact</button>
    </p>
    <router-outlet></router-outlet>
    <h3> you selecte departments {{departmentId}}</h3>
    <a (click)="goPrevious()">Previous </a>
    <a (click)="goNext()"> Next</a>
    <br>
    <button (click)="gotoDepartments()">Button</button>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private actRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    //let id = parseInt(this.actRoute.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.actRoute.paramMap.subscribe((params: ParamMap) =>{
        let id = parseInt(params.get('id'));
        this.departmentId = id;
    });
  }
  goPrevious(){
      let previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    let selectedId = this.departmentId;
    this.router.navigate(['/departments',{id:selectedId , test: 'testvalue'}]);
  }

  showOverview(){

    this.router.navigate(['overview'], {relativeTo: this.actRoute});
  }
  contactDetails(){

    this.router.navigate(['contact'],{relativeTo:this.actRoute});

  }
}
