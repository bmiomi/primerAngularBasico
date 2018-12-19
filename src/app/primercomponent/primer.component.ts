import { Component }  from '@angular/core';
import {book} from '../book.model';

@Component({
    selector:'componente_1',
    templateUrl:'./primer.component.html',
    styleUrls:['./primer.component.css']
})

export class Componente_1{

    mybook = new book (12,'aho ahgo','Antonio','www.libros.com/pruevame');
    constructor(){
    }
    
    get currentbook(){
        return JSON.stringify(this.mybook)
    }
}
