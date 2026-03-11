import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Info } from './info/info';
import { Rsvp } from './rsvp/rsvp';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Info, Rsvp, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}