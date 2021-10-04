import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCalculator';

  number1 = 0;
  number2 = 0;
  result = 0;

  num1(value : any){
    this.number1 = parseInt(value);
    console.log(this.number1);
  }

  num2(value : any){
    this.number2 = parseInt(value);
    console.log(this.number2)
  }

  onClickAddition(){
    this.result = (this.number1 + this.number2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  onClickSubtraction(){
    this.result = (this.number1 - this.number2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  onClickMultiplication(){
    this.result = (this.number1 * this.number2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }

  onClickDivision(){
    this.result = (this.number1 / this.number2);
    let finalResult = document.getElementById("result") as HTMLInputElement;
    finalResult.valueAsNumber = this.result;
  }
}



