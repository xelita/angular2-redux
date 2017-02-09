import {Component, OnInit} from "@angular/core";
import {CounterActions} from "./counter.actions";
import {Observable} from "rxjs";
import {NgRedux, select} from "@angular-redux/store";
import {AppState} from "../app.store";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    @select() count$: Observable<number>;

    constructor(private ngRedux: NgRedux<AppState>,
                private actions: CounterActions) {
        //this.count$ = ngRedux.select<number>('count');
    }

    ngOnInit() {
    }

    increment() {
        this.ngRedux.dispatch(this.actions.increment());
    }

    decrement() {
        this.ngRedux.dispatch(this.actions.decrement());
    }
}
