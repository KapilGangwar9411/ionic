import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSignupPageRoutingModule } from './login-signup-routing.module';

import { LoginSignupPage } from './login-signup.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginSignupPageRoutingModule
  ],
  declarations: [LoginSignupPage]
})
export class LoginSignupPageModule {}
