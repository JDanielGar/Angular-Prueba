import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">Oops, pagina no encontrada</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px; 
      font-size: 20px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}