import { Component, effect, signal } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from "@angular/common";

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage { 
  nameLower = signal('victor');
  nameUpper = signal('VICTOR');
  fullName = signal('viCtOr CaNo');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleaunp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date);
    }, 1000);

    onCleaunp(() => {
    clearInterval(interval);
    })
  });
}
