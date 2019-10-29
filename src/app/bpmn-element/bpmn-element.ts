import { Type } from '@angular/core';

export class BpmnElement {
    public type: string;
    constructor(public component: Type<any>, public typeOfElement: string, public data: any) {
        this.type = this.typeOfElement;
    }
}
