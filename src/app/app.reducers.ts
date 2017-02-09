import {CounterActions} from "./counter/counter.actions";
import {Action} from "redux";
import {AppState} from "./app.store";
import {counterReducer} from "./counter/counter.reducers";

export function rootReducer(lastState: AppState, action: Action): AppState {

    return counterReducer(lastState, action);
}