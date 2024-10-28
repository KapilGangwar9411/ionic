import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabTestsPageRoutingModule } from './lab-tests-routing.module';

import { LabTestsPage } from './lab-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabTestsPageRoutingModule
  ],
  declarations: [LabTestsPage]
})
export class LabTestsPageModule {}
