import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then(m => m.SplashPageModule),
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login-signup/login-signup.module').then(m => m.LoginSignupPageModule),
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepagePageModule),
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsPageModule),
  },
  {
    path: 'medicines',
    loadChildren: () => import('./medicines/medicines.module').then(m => m.MedicinesPageModule),
  },
  {
    path: 'lab-tests',
    loadChildren: () => import('./lab-tests/lab-tests.module').then(m => m.LabTestsPageModule),
  },
  {
    path: 'unlimited-chats',
    loadChildren: () => import('./unlimited-chats/unlimited-chats.module').then(m => m.UnlimitedChatsPageModule),
  },
  {
    path: 'audio-call',
    loadChildren: () => import('./audio-call/audio-call.module').then(m => m.AudioCallPageModule),
  },
  {
    path: 'video-call',
    loadChildren: () => import('./video-call/video-call.module').then(m => m.VideoCallPageModule),
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
