import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';
import { FireService } from '../services/fire.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //searchTerm?: string;
  iconUrl?: string;

  weatherData: any;
  city:any = 'london';// Default city, you can update it to match your requirement

  constructor(private weatherService: WeatherService,
              private router: Router,
              private fireService:FireService
              //private favoritesService:FavoritesService 
              ) {}

  ngOnInit() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.iconUrl = `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`;
        console.log(this.weatherData); // Check the data in the console
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  gps(){
    this.weatherService.getGps().subscribe(
      (data) => {
        this.weatherData = data;
        this.iconUrl = `http://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`;
        console.log(this.weatherData); // Check the data in the console
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addToFavorites() {
    //this.favoritesService.addToFavorites(this.weatherData);
  }

  navigateToFavorites() {
    this.router.navigate(['/favorites']);
  }

  async logout()
  {
    const res = await this.fireService.cikisYap();
    if (res)
    //console.log(res);
    this.router.navigateByUrl('/login');
    else
    this.fireService.presentAlert('Çıkış yapılamadı, lütfen tekrar deneyin');
  }

}
