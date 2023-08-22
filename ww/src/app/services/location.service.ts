import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  //public lat:any;
  //public lng:any;
   lat = -37.840935;
   lng = 144.946457;

  constructor() { }

public ngOnInit(): void {
  this.getLocation();
}

getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((GeolocationPosition: GeolocationPosition) => {
      if (GeolocationPosition) {
        console.log("Latitude: " + GeolocationPosition.coords.latitude +
          "Longitude: " + GeolocationPosition.coords.longitude);
        this.lat = GeolocationPosition.coords.latitude;
        this.lng = GeolocationPosition.coords.longitude;
        console.log(this.lat);
        console.log(this.lat);
      }
    },
      (error: GeolocationPositionError) => console.log(error));
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

}