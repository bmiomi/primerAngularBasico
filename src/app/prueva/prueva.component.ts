import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueva',
  templateUrl: './prueva.component.html',
  styleUrls: ['./prueva.component.css']
})
export class PruevaComponent implements OnInit {

  elementos=['elemento_1','elemento_2','elemento_3','elemento_4','elemento_5','elemento_6','elemento_7','elemento_8','elemento_9','elemento_10']

  estado=true;

  agregar(elemento){
    console.log(elemento.value);
    this.elementos.push(elemento.value)
    return false; //<evitamos que se recarge la paguina
  }

  constructor() { }
  
  ngOnInit() {

  }

}
