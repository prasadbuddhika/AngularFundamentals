import {Component} from '@angular/core'

@Component({

    selector:'event-list',
    // templateUrl:'app/events/events-list.component.html'
    template:`<div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr>
    <event-thumbnail  [inputEvent]="event" > </event-thumbnail>
    </div>`
})
export class EventsListComponent
{
    event ={
        id:1,
        name:'Angular Connect',
        date:'9/26/2036',
        time:'10:00',
        price:599.99,
        imageUrl:'/app/assets/images/angularconnect-sheild.png',
        location:{
            address:'1057 DT',
            city :'London',
            country :'England'
        }
    }

}