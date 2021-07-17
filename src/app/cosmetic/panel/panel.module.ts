import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';

import { PanelComponent } from './panel.component';
import { BirdsEyeViewPageComponent } from './pages/birds-eye-view-page/birds-eye-view-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [PanelComponent, BirdsEyeViewPageComponent, AboutPageComponent, ContactPageComponent],
  imports: [CommonModule, PanelRoutingModule],
})
export class PanelModule {}
