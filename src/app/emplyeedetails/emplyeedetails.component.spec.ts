import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeedetailsComponent } from './emplyeedetails.component';

describe('EmplyeedetailsComponent', () => {
  let component: EmplyeedetailsComponent;
  let fixture: ComponentFixture<EmplyeedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyeedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
