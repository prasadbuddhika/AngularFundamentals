import {Component, Input, Output} from '@angular/core'

@Component
(
    {
        selector:'<event-thumbnail>',
        template:`
        <div class="well hoverwell thumbnail">
        <h2>{{inputEvent.name}}</h2>
        <div>{{inputEvent.date}}</div>
        <div>{{inputEvent.time}}</div>
        <div>\${{inputEvent.price}}</div>                
        <div>
            <span>Location:{{inputEvent.location.address}}</span>
            <span class="pad-left">{{inputEvent.location.city}}, {{inputEvent.location.country}}</span>
        </div>
        </div>`,
        styles:[`.pad-left {margin-left: 10px;}
        .well div {color:#bbb;}`]
    }
)
export class EventThumbnailComponent{

    @Input() inputEvent:any

}