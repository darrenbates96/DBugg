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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  performNavigation(path: string) {
    this.router.navigate([path]);
  }
}
