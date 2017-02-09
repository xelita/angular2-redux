import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NgReduxModule, NgRedux} from "@angular-redux/store";
import {CounterComponent} from "./counter/counter.component";
import {CounterActions} from "./counter/counter.actions";
import {INITIAL_STATE, AppState} from "./app.store";
import {rootReducer} from "./app.reducers";

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [CounterActions],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(ngRedux: NgRedux<AppState>) {
        ngRedux.configureStore(
            rootReducer, INITIAL_STATE);
    }
}
