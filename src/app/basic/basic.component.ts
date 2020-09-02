import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-basic',
    template: '<h1 id="header"> This is inline Template ->{{somedata}}</h1>',
    styles: ['#header{background-color: yellow;}']
})

export class BasicComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }

    somedata = 'Some Data';
}