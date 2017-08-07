import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './app.component.html',
})

export class AppComponent {
    lvset: any;
    enablelistview: boolean;

    constructor() {
        this.enablelistview = true;
        this.lvset = {
            selectedItemIndex: 0, PersistSelection: true, mouseUp: "headChange" };
    }
}
