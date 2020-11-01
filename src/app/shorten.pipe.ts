import { Pipe, PipeTransform } from '@angular/core';

//declerator ekak @component wage
@Pipe({
    name: 'shorten'//meka thama pipe name eka, Selector eka wage//meka thaa wena than wala use karanne
})
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number){
        if(value.length > limit){
            return value.substr(0, limit) + '...';//this will return only first 10 characters
        }else{
            return value;
        }
        //shorten: 15 parameterizing the pipe// thawa parameter tyenam shorten: 15:20 ehema values denawaks
    }
    //pipe ekak kiyanne api deyak denawa monawa hari karala e deya eliyata gannawa
    //you put something and you get something out.
}