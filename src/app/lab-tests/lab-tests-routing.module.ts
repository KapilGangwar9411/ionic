import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabTestsPage } from './lab-tests.page';

const routes: Routes = [
  {
    path: '',
    component: LabTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabTestsPageRoutingModule {}
