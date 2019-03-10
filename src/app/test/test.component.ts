import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-test',
  template: `
      <h1 class="h1">
        Welcome {{name}}
      </h1>
      <h2 [class]="successClass">{{greeting()}}</h2>
      <h2 class="text-danger">Rakiba</h2>
      <h3>{{siteUrl}}</h3>
      <h2 [class.text-special]="hasError"> this is special</h2>
      <input [id]="mId" type="text" value="tahashin" >
      <h2 [ngClass]= "messageClass">This is ng directive for using Multiple Css class</h2>
      <h2 [style.color]="'orange'">this is style binding</h2>
      <h2 [style.color]="hasError ? 'red' :'orange'">this is style binding conditional</h2>
      <h2 [style.color]="yellowColor">this is style binding class</h2>
      <h2 [ngStyle]="stylePropertyng">This is ngstyle directive binding</h2>
      <button (click) = "onClick($event)"> Greet </button>
      <h2 class="text-bold"> {{greetting}} This is Data binding</h2>
      <button (click)="greetings='Welcome Tahashin'">Greet this is data binding</button>
      <input #eventbindingvar type="text">
      <button (click)="logmessages(eventbindingvar.value)"> Event Demo</button>
      <h2> This is event binding {{logValueshow()}}</h2>
      <hr/>
      <p>This is form demo</p>
      <input [(ngModel)]="ngmodeldemo" type="text">
      {{ngmodeldemo}}
      <hr/>
      <p>Structural Directive if else block</p>
      <h2 *ngIf="displayName; else elseblockone">
        Tahashin
      </h2>
      <ng-template #elseblockone>
        <h2>Content is hidden in elseblock</h2>
      </ng-template>
      <hr/>
      <p>Structural Directive if then else block</p>
      <h2 *ngIf="newdisplayName; then thenblock;else elseblock">
      Tahashin
      </h2>
    <ng-template #thenblock>
    <h2>Content is in thenblock</h2>
    </ng-template>
    <ng-template #elseblock>
    <h2>Content is in elseblock</h2>
    </ng-template>
      <hr>
      <p>This is ngfor tutorial</p>
      <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
      <div style="{{color}}"> </div>
      </div>
      <hr>
      <p> This is decoretaor expression</p>
      <div>
       <p>This is input decorator</p>
        <h2> {{"Hello" + parentName}}</h2>
        <h2>{{parentName | uppercase }}</h2>
        <h2> {{parentName | titlecase}}  </h2>
        <h2> {{parentName | slice:2}}  </h2>

        <h2> {{24 | currency }}  </h2>
        <h2> {{24 | currency : 'GBP' }}  </h2>
      </div>
      <p>This is output decorator</p>
      <button (click)="fireevent()">Output decorator</button>
      `,
  styles: [`
  .h1 {
    color:green;

  }
  .text-bold{
    font-weight: bolder;
  }
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {
  public name = 'tahashin';
  public colors = ["red","yellow","orange"];
  //@Input() public parentData;
  @Input('parentData') public parentName;
  @Output() public chilAttrName = new EventEmitter();
  displayName = false;
  public ngmodeldemo = '';
  public mId = 'test_id';
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public boldText = 'text-bold';
  public yellowColor = 'yellow';
  public greetting = '';
  public logValue = '';
  newdisplayName = true;
  public messageClass = {
    'text-bold': this.boldText,
    'text-success': this.hasError,
    'text-danger': !this.hasError,
    'text-special': this.isSpecial
};
public stylePropertyng = {
  color : 'blue',
  fontStyle : 'italic'
};

  constructor() { }

  public siteUrl = window.location.href;

  ngOnInit() {
  }

  greeting() {
    return 'This is from greeting function';
  }

  onClick(event) {
    console.log(event);
    this.greetting = 'Welcome' + ' ' + this.name;

  }

  logmessages(value) {
    this.logValue = value;
    console.log(value);
  }

  logValueshow() {

    return this.logValue;
  }

  fireevent(){

    this.chilAttrName.emit("hay hay re");
  }

}
