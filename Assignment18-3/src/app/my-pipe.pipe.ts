import { Pipe, PipeTransform } from '@angular/core';

//Pipe which capitalizes words in each array item

@Pipe({
  name: 'capitalizeWords'
})
export class MyPipe implements PipeTransform {

    transform(text:string, args:any[]):any {
        return text.split(' ').map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }).join(' ');
    }
}

