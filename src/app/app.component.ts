import {
  Component,
  HostListener,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'project-ninestack';
  showCards = [false, false, false, false, false, false];
  showExplicationCards = true;
  showDivsCards = [true, false, false, false, false];
  showDivsSecondCards = [true, false, false, false];
  showDivsThirdCards = [true, false];
  showMenuHamb = false;
  showCardPrice = 2;
  showHeader = false;
  appleScreen = '../assets/appleScreen2.png';
  appleScreen2 = '../assets/appleScreen7.png';
  appleScreen3 = '../assets/appleScreen11.png';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  changeCards(position: number) {
    this.showCards[position] = !this.showCards[position];
  }
  changeShowExplicationCards() {
    this.showExplicationCards = !this.showExplicationCards;
  }

  changeShowDivsCards(position: number) {
    if (position == 0) {
      this.showDivsCards[0] = false;
      this.showDivsCards[1] = true;
      this.appleScreen = '../assets/appleScreen3.png';
    }
    if (position == 1) {
      this.showDivsCards[1] = false;
      this.showDivsCards[2] = true;
      this.appleScreen = '../assets/appleScreen4.png';
    }
    if (position == 2) {
      this.showDivsCards[2] = false;
      this.showDivsCards[3] = true;
      this.appleScreen = '../assets/appleScreen5.png';
    }
    if (position == 3) {
      this.showDivsCards[3] = false;
      this.showDivsCards[4] = true;
      this.appleScreen = '../assets/appleScreen6.png';
    }
    if (position == 4) {
      this.showDivsCards[4] = false;
      this.showDivsCards[0] = true;
      this.appleScreen = '../assets/appleScreen2.png';
    }

    if (position == 5) {
      this.showDivsCards[1] = true;
      this.showDivsCards[2] = false;
      this.appleScreen = '../assets/appleScreen3.png';
    }
    if (position == 6) {
      this.showDivsCards[2] = true;
      this.showDivsCards[3] = false;
      this.appleScreen = '../assets/appleScreen4.png';
    }
    if (position == 7) {
      this.showDivsCards[3] = true;
      this.showDivsCards[4] = false;
      this.appleScreen = '../assets/appleScreen5.png';
    }
  }
  changeShowDivsSecondCards(position: number) {
    if (position == 0) {
      this.showDivsSecondCards[0] = false;
      this.showDivsSecondCards[1] = true;
      this.appleScreen2 = '../assets/appleScreen8.png';
    }
    if (position == 1) {
      this.showDivsSecondCards[1] = false;
      this.showDivsSecondCards[2] = true;
      this.appleScreen2 = '../assets/appleScreen9.png';
    }
    if (position == 2) {
      this.showDivsSecondCards[2] = false;
      this.showDivsSecondCards[3] = true;
      this.appleScreen2 = '../assets/appleScreen10.png';
    }
    if (position == 3) {
      this.showDivsSecondCards[3] = false;
      this.showDivsSecondCards[0] = true;
      this.appleScreen2 = '../assets/appleScreen7.png';
    }

    if (position == 4) {
      this.showDivsSecondCards[0] = true;
      this.showDivsSecondCards[1] = false;
      this.appleScreen2 = '../assets/appleScreen7.png';
    }
    if (position == 5) {
      this.showDivsSecondCards[1] = true;
      this.showDivsSecondCards[2] = false;
      this.appleScreen2 = '../assets/appleScreen8.png';
    }
    if (position == 6) {
      this.showDivsSecondCards[2] = true;
      this.showDivsSecondCards[3] = false;
      this.appleScreen2 = '../assets/appleScreen9.png';
    }
  }

  changeShowDivsThirdCards(position: number) {
    if (position == 0) {
      this.showDivsThirdCards[0] = false;
      this.showDivsThirdCards[1] = true;
      this.appleScreen3 = '../assets/appleScreen12.png';
    }
    if (position == 1) {
      this.showDivsThirdCards[0] = true;
      this.showDivsThirdCards[1] = false;
      this.appleScreen3 = '../assets/appleScreen11.png';
    }
  }

  changeShowMenuHamb() {
    this.showMenuHamb = !this.showMenuHamb;
  }

  changeShowCardPrice(position: boolean) {
    if (position && this.showCardPrice <= 2) {
      this.showCardPrice++;
    } else if (!position && this.showCardPrice > 1) {
      this.showCardPrice--;
    } else if (!position && this.showCardPrice == 1) {
      this.showCardPrice = 3;
    } else if (position && this.showCardPrice == 3) {
      this.showCardPrice = 1;
    }
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const triggerHeight = window.innerHeight - 400;
      this.showHeader = scrollPosition >= triggerHeight;
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.onScroll();
    }
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
