import { Component, computed, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { birds } from '../../data/bird.data';
import { CanFly } from "../../pipes/can-fly.pipe";
import { BirdColor } from "../../pipes/bird-color.pipe";
import { TitleCasePipe } from "@angular/common";
import { BirdHabitat } from "../../pipes/bird-habitat.pipe";
import { birdSort } from "../../pipes/bird-sort.pipe";
import { Bird } from '../../interfaces/bird.interface';
import { BirdFilterPipe } from '../../pipes/bird-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFly, BirdColor, TitleCasePipe, BirdHabitat, birdSort, BirdFilterPipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage { 
  name = signal('pipo');

  lowerUpper = signal(true);

  birds = signal(birds);

  sortBy = signal<keyof Bird>('id');

  searchQuery = signal('');
}
