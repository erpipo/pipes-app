import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/bird.interface';

@Pipe({
    name: 'birdColor'
})

export class BirdColor implements PipeTransform {
    transform(value: Color): string {
        return Color[value];
    }
}