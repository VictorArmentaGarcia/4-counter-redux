import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  title: string = 'Counter redux';
  counter2?: number;

  constructor(private store: Store<{counter8: number}>){
    this.counter2 = 0;
    this.store.select('counter8').subscribe( count => {
      this.counter2 = count;
    } )
  }

  incrementar() : void{
    //this.counter++;
    this.store.dispatch(increment({ add: 3 }));
  }

  decrementar(): void {
    //this.counter--;
    this.store.dispatch(decrement( {remove: 2 } ));
  } 

  reset(): void {
    //this.counter = 0;
    this.store.dispatch(reset());
  }

}
