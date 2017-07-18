import { NgModule } from '@angular/core'
import { BrowserModule} from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { EventListComponent } from './event/event-list.component'
import { EventThumbnailComponent } from './event/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './event/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './event/event-details/event-details.component'
import { EventRouterActivator } from './event/event-details/event-route-activator.service'
import { CreateEventComponent } from './event/create-event.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],
    declarations: [EventsAppComponent,
    EventListComponent, 
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component],
    providers: [
        EventService, 
        ToastrService, 
        EventRouterActivator,
        { 
            provide: 'canDeactivateCreateEvent', 
            useValue: checkDirtyState
        }],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty){
        return window.confirm('¿Seguro que deseas salir de la pantalla?.')
    }
    return true
}