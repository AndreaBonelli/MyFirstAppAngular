import { Component } from '@angular/core';

// Questo decoratore soecifica che questa classe è un componente
@Component({
  selector: 'app-root', // proprietà che definisce il selettore per visualizzare questo elemento nell'html
  templateUrl: './app.component.html', // ptrh che definisce il file html di riferimento per questo componente
  styleUrls: ['./app.component.scss'] // array contente le path dei fogli di stile di questo componente
})
// Il componente è una classe
export class AppComponent {
  title = 'MyFirstApp';
}
