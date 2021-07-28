import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigationBarItems } from 'src/app/core/constants';
import { NavigationBarItem } from 'src/app/core/models';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  items: NavigationBarItem[] = navigationBarItems;

  showFullPageMenu: boolean = false;

  animateIcon: { [iconName: string]: boolean } = {
    menu: false,
    search: false,
    close: false,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  performNavigation(path: string) {
    this.router.navigate([path]);
    if (this.showFullPageMenu) {
      this.showFullPageMenu = false;
    }
  }

  performToggleFullPageMenu(iconName: string) {
    this.animateIconHelper(iconName);
    setTimeout(() => {
      this.showFullPageMenu = !this.showFullPageMenu;
    }, 400);
  }

  performToggleSearchBar() {
    this.animateIconHelper('search');
  }

  animateIconHelper(iconName: string) {
    this.animateIcon[iconName] = true;
    setTimeout(() => {
      this.animateIcon[iconName] = false;
    }, 200);
  }
}
