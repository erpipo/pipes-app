import { Pipe, PipeTransform } from '@angular/core';
import { Bird } from '../interfaces/bird.interface';

@Pipe({
    name: 'birdFilter'
})

export class BirdFilterPipe implements PipeTransform {
    transform(value: Bird[], search: string): Bird[] {
        
        if(!search) return value;
        search = search.toLocaleLowerCase();
        return value.filter(bird => bird.name.toLocaleLowerCase().includes(search));
    }
}