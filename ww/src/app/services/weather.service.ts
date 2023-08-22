import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationService } from './location.service';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '8a7ea9b5a31ded0da424542bd4537067';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  lat:any;
  lon:any;

  constructor(private http: HttpClient,
              private locationService:LocationService) {}

  getCurrentWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  getWeatherForecast(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  /*getGps(): Observable<any> {
    const url = `${this.apiUrl}weather?lat=${this.locationService.lat}&lon=${this.locationService.lng}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }*/

  getGps(): Observable<any> {
    const url = `${this.apiUrl}weather?lat=${this.locationService.lat}&lon=${this.locationService.lng}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }


  
}