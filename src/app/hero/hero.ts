import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
scroll(){
document.getElementById('info')?.scrollIntoView({
behavior:'smooth'
})
}
}
