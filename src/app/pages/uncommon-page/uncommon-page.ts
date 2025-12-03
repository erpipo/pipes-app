import { Component, input, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'perell',
  gender: 'male',
  age: 32,
  address: 'ambasing'
};
const client2 = {
  name: 'tina',
  gender: 'female',
  age: 33,
  address: 'ambatubus'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage { 
  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if (this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18n Plural

  clientsMap = signal({
    '=0': 'No hay ningún cliente esperando',
    '=1': 'Hay un cliente esperando',
    '=2': 'Hay un par de clientes esperando',
    other: 'Hay # clientes esperando'

  })

  //Slice
  clients = signal([
    'numero1',
    'numero2',
    'numero3',
    'numero4',
    'numero5',
    'numero6',
    'numero7',
    'numero8',
    'numero9',
  ]);

  deleteClient(){
    this.clients.update(prev => prev.slice(1));
  }

  //KeyValue
  profile = {
    name: 'pipo',
    age: 54,
    address: 'pipoland'
  }

  //Async
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos datos');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value+1),
    tap((value) => console.log('tap:',value))
  );
}
