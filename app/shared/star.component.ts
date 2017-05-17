import { Component } from "@angular/core";

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent {
    starWidth: number;
    rating: number = 4;
}