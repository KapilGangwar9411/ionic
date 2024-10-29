import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navCntl: NavController) {

    this.navCntl.navigateForward('/splash');
    setTimeout(() => {
      this.navCntl.navigateRoot(['/login']);
    }, 5000);
  }

}
