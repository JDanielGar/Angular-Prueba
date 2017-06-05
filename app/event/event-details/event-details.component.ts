import { Component } from '@angular/core'
import { EventService } from '../shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl : '/app/event/event-details/event-details.component.html',
    styles : [`
        .container { padding: 0px 20px; }
        .event-image {height: 100px; }
    `]
})

export class EventDetailsComponent{
    private event:any
    constructor(private eventService:EventService, private route:ActivatedRoute){
    }
    ngOnInit(){
        this.event = this.eventService.getEvent(this.route.snapshot.params['id'])
    }

}