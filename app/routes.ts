import { Routes } from '@angular/router'
import { EventListComponent } from './event/event-list.component'
import { EventDetailsComponent } from './event/event-details/event-details.component'
import { CreateEventComponent } from './event/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouterActivator } from './event/event-details/event-route-activator.service'

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]