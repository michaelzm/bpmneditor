import { Type } from '@angular/core';

export class BpmnElement {
    constructor(public component: Type<any>, public data: any) {}
}
