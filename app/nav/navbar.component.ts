import { Component } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [
        `
            .navbar.navbar-nav { font-size: 15px }
            #searchform { margin-right: 100px}
            @media (max-width: 1200px) { #searchForm {display:none}}
        `
    ]

})

export class NavBarComponent{

}