import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnlimitedChatsPage } from './unlimited-chats.page';

const routes: Routes = [
  {
    path: '',
    component: UnlimitedChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnlimitedChatsPageRoutingModule {}
