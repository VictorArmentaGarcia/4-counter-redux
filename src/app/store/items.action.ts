import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component], incremente', props<{ add:number }>());
export const decrement = createAction('[Counter Component], decrement', props<{ remove: number }>());
export const reset = createAction('[Counter Component], reset');