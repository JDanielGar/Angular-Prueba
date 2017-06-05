import { Component } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'



@Component({
    template: `
    <h1>Angular</h1>
    <div>
        <div class="row"> 
          <hr/>
          <div *ngFor="let event of events" class="col-md-5">   
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
          </div>
        </div>
    </div>
    `
})
export class EventListComponent{
  private events:any;

  constructor(private eventService: EventService, private toastr: ToastrService){
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

  ngOnInit(){
    this.events = this.eventService.getEvents()
  }
}