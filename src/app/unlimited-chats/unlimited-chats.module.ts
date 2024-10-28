import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnlimitedChatsPageRoutingModule } from './unlimited-chats-routing.module';

import { UnlimitedChatsPage } from './unlimited-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnlimitedChatsPageRoutingModule
  ],
  declarations: [UnlimitedChatsPage]
})
export class UnlimitedChatsPageModule {}
