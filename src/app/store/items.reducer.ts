import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const initialState = 0;

export const countReducer = createReducer(
    initialState,
    on(increment, (state, { add }) => state + add),
    on(decrement, (state, { remove }) => state - remove),
    on(reset, (state) => 0)
)