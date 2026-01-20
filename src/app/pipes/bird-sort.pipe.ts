import { Pipe, PipeTransform } from '@angular/core';
import { Bird } from '../interfaces/bird.interface';

@Pipe({
    name: 'birdSort'
})

export class birdSort implements PipeTransform {
    transform(value: Bird[], sortBy: keyof Bird): Bird[] {
       if(!sortBy) return value;
       switch(sortBy){
        case 'name':
            return value.sort((a,b) => a.name.localeCompare(b.name));
        case 'canFly':
            return value.sort((a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));
        case 'color':
            return value.sort((a, b) => a.color - b.color);
        case 'habitat':
            return value.sort((a, b) => a.habitat - b.habitat);
        default:
            return value
       }
    }
}

function a(a: Bird, b: Bird): number {
    throw new Error('Function not implemented.');
}
