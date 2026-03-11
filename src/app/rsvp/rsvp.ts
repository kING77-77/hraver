import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelegramService } from '../telegram';
@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.css',
})
export class Rsvp {

  name = ''
  surname = ''
  come = ''
  guests = 1

  constructor(private telegram: TelegramService) {}

  send(e: Event) {

    e.preventDefault()

    this.telegram.send({
      name: this.name,
      surname: this.surname,
      come: this.come,
      guests: this.guests
    })
  if(this.name == '' || this.surname == '' || this.come == ''){
    alert('Խնդրում ենք լրացնել բոլոր դաշտերը!')
    return
  }
    alert('Շնորհակալություն պատասխանի համար!')
  }
}