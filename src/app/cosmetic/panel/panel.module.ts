import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';

import { PanelComponent } from './panel.component';
import { BirdsEyeViewPageComponent } from './pages/birds-eye-view-page/birds-eye-view-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { BirdsEyeViewService } from 'src/app/core/services/birds-eye-view/birds-eye-view.service';

@NgModule({
	declarations: [
		PanelComponent,
		BirdsEyeViewPageComponent,
		AboutPageComponent,
		ContactPageComponent,
		NavigationBarComponent,
	],
	imports: [CommonModule, PanelRoutingModule],
})
export class PanelModule {}
