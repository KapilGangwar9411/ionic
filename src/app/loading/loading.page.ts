// import { Component, OnInit } from '@angular/core';
// import { Geolocation } from '@capacitor/geolocation';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-loading',
//   templateUrl: './loading.page.html',
//   styleUrls: ['./loading.page.scss'],
// })
// export class LoadingPage implements OnInit {
//   private openCageApiKey: string = 'bcc9c9065e4f4c74bb5c79e68b58c939';
//   private readonly loadingScreenDuration: number = 5000; // Duration to keep the loading screen visible (in milliseconds)

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit() {
//     this.fetchLocationWithTimeout();
//   }

//   async fetchLocationWithTimeout() {
//     // Create a promise that resolves after the loading screen duration
//     const timeoutPromise = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('timeout');
//       }, this.loadingScreenDuration);
//     });

//     // Create a promise that fetches the location
//     const locationPromise = this.getCurrentLocation();

//     // Wait for either the location fetching or the timeout to complete
//     const result = await Promise.race([locationPromise, timeoutPromise]);

//     if (result === 'timeout') {
//       // If the timeout occurs, navigate with a timeout message
//       this.router.navigate(['/homepage'], { queryParams: { location: 'Unable to fetch location' } });
//     }
//   }

//   async getCurrentLocation() {
//     try {
//       const coordinates = await Geolocation.getCurrentPosition();
//       const lat = coordinates.coords.latitude;
//       const lng = coordinates.coords.longitude;
//       return this.getAddressFromCoordinates(lat, lng);
//     } catch (error) {
//       console.error('Error getting location:', error);
//       this.router.navigate(['/homepage'], { queryParams: { location: 'Unable to fetch location' } });
//     }
//   }

//   getAddressFromCoordinates(lat: number, lng: number) {
//     const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.openCageApiKey}`;

//     return this.http.get(url).toPromise().then((response: any) => {
//       const results = response.results;
//       const location = results && results.length > 0 ? results[0].formatted : 'Unable to fetch address';
//       this.router.navigate(['/homepage'], { queryParams: { location } });
//     }).catch((error) => {
//       console.error('Error fetching address:', error);
//       this.router.navigate(['/homepage'], { queryParams: { location: 'Unable to fetch address' } });
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  private openCageApiKey: string = 'bcc9c9065e4f4c74bb5c79e68b58c939';
  private readonly loadingScreenDuration: number = 3000;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchLocationWithTimeout();
  }

  async fetchLocationWithTimeout() {
    // Create a promise that fetches the location
    const locationPromise = this.getCurrentLocation();

    // Wait for the loading screen duration
    await new Promise(resolve => setTimeout(resolve, this.loadingScreenDuration));

    // Regardless of location fetching result, navigate to the homepage
    this.router.navigate(['/homepage'], { queryParams: { location: 'Redirecting after 5 seconds' } });
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lng = coordinates.coords.longitude;
      return this.getAddressFromCoordinates(lat, lng);
    } catch (error) {
      console.error('Error getting location:', error);
      // You can choose to navigate or handle the error differently here if desired
    }
  }

  getAddressFromCoordinates(lat: number, lng: number) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.openCageApiKey}`;

    return this.http.get(url).toPromise().then((response: any) => {
      const results = response.results;
      const location = results && results.length > 0 ? results[0].formatted : 'Unable to fetch address';
      // You can choose to handle the address if desired
    }).catch((error) => {
      console.error('Error fetching address:', error);
      // You can choose to handle the error differently here if desired
    });
  }
}

