import { Component } from '@angular/core'




@Component({
    selector: 'event-list',
    template: `
    <div>
        <h1>Angular</h1>
        <hr/>
        <div class="well">
            <h2> Hello Fucking World </h2>
        </div>
        <event-thumbnail [event]="event1"></event-thumbnail>
    </div>`

})
export class EventListComponent{
    event1 = {
        id: 1,
        name: 'Angular',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.0,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location : {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data){
        console.log("Data", data)
    }
}