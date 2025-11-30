import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,    
  imports: [RouterOutlet, Header, Footer,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('yashengineering');
}
