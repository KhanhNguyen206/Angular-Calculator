import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  first: number;
  second: number;
  operator: string;
  result: number;

  onChangeFirst(first) {
    this.first = Number(first);
  }

  onChangeSecond(second) {
    this.second = Number(second);
  }

  onSelectOperator(operator) {
    this.operator = operator;
  }

  calculator() {
    switch (this.operator) {
      case '+':
        this.result = this.first + this.second;
        break;
      case '-':
        this.result = this.first - this.second;
        break;
      case '*':
        this.result = this.first * this.second;
        break;
      case '/':
        this.result = this.first / this.second;
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
