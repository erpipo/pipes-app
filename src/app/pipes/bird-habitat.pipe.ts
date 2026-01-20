import { Pipe, PipeTransform } from '@angular/core';
import { Color, Habitat } from '../interfaces/bird.interface';

@Pipe({
    name: 'birdHabitat'
})

export class BirdHabitat implements PipeTransform {
    transform(value: Habitat): string {
        return Habitat[value];
    }
}