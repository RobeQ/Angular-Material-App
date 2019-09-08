import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    {{ text | summary:40}}
    <input [(ngModel)]="mail" (keyup.enter)="getMail()"/>
    `
})

export class CoursesComponent {
    text = "Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test";
    mail = "my@op.pl";

    getMail() {
        console.log(this.mail);
    }
}