import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomePage implements OnInit {
  location: string = 'Fetching location...';
  loading: boolean = true;
  private openCageApiKey: string = 'bcc9c9065e4f4c74bb5c79e68b58c939';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lng = coordinates.coords.longitude;

      this.getAddressFromCoordinates(lat, lng);
    } catch (error) {
      console.error('Error getting location:', error);
      this.location = 'Unable to fetch location';
      this.loading = false;
    }
  }

  getAddressFromCoordinates(lat: number, lng: number) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.openCageApiKey}`;

    this.http.get(url).subscribe(
      (response: any) => {
        const results = response.results;
        if (results && results.length > 0) {
          this.location = results[0].formatted;
        } else {
          this.location = 'Unable to fetch address';
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching address:', error);
        this.location = 'Unable to fetch address';
        this.loading = false;
      }
    );
  }

  navigateTo(service: string) {
    this.router.navigate([service]);
  }
}
