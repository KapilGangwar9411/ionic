import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './homepage.page';
import { HomepagePageRoutingModule } from './homepage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomepagePageModule {}
