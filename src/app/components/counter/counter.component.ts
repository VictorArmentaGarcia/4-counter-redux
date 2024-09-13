import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Counter redux';
  counter: number = 0;

  incrementar() : void{
    this.counter++;
  }

  decrementar(): void {
    this.counter--;
  } 

  reset(): void {
    this.counter = 0;
  }

}
