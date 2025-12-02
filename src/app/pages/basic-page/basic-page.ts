import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from "@angular/common";
import { LocaleService } from '../../services/locale.service';
import { AvailableLocale } from '../../services/locale.service';


@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage { 

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

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

  changeLocale(locale: AvailableLocale){
    this.localeService.changeLocale(locale);
  }
}
