import {CounterActions} from "./counter.actions";
import {AppState} from "../app.store";
import {Action} from "redux";

export function counterReducer(lastState: AppState, action: Action): AppState {
    switch (action.type) {

        case CounterActions.INCREMENT:
            return {count: lastState.count + 1};

        case CounterActions.DECREMENT:
            return {count: lastState.count - 1};
    }

    // We don't care about any other actions right now.
    return lastState;
}