import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'
})
export class TelegramService {

token='8727387426:AAGhXFNSykGJXkW9TpckFq44GCpjQLdkars'
chatId='1887985880,'

send(data:any){

const text =
`Новый гость:

Անուն: ${data.name}
Ազգանուն: ${data.surname}
Կգա: ${data.come}
Հյուրերի քանակ: ${data.guests}`

fetch(`https://api.telegram.org/bot${this.token}/sendMessage`,{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
chat_id:this.chatId,
text:text
})
})

}

}