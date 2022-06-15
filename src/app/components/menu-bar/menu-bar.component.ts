import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

translate: TranslateService;

ls: boolean = false;
en: boolean = false;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

  trans(lang: string) {
    if (lang === 'en') {
      this.en = !this.en;
      this.ls = false;

      if (this.en == true) {
        this.translate.use('en');
      } else if (this.en == false) {
        this.translate.use('de');
      }
    }
    if (lang === 'ls') {
      this.en = false;
      this.ls = !this.ls;

      if (this.ls == true) {
        this.translate.use('ls');
      } else if (this.ls == false) {
        this.translate.use('de');
      }
    }
  }

}
