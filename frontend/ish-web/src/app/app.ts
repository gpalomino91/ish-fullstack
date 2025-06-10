import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ish-web';
}
