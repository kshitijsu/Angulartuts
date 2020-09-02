import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular, Kshitij';
  StrInterPoEle = 'Part of Element';
  strTmplExpression = '';
  CustomAttrVal = 'demo';
  isValueSet = true;
  curSize = 50;
  labelmsg = '';
  ObjEmp = new Emp();
  today = '12/12/2012';
  size = 20;

  currentClasses: {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      'one': true, 'two': false, 'three': true
    };
  }

  currentStyles: {};

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': true ? 'italic' : 'normal',
      'font-weight': false ? 'bold' : 'normal',
      'font-size': this.size > 30 ? '24px' : '42px'
    };
  }

  getFullName(fn: string, ln: string) { return fn + ' ' + ln; }

  clickHandler(earg): void { console.log('Called ....'); console.log(earg); }

  updateValue(value: any) { this.labelmsg = value; }
}
class Emp { empName = 'Ganesh'; }
