import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location:any){
    return this.http.get('http://api.weatherstack.com/current?access_key=b1b2628e0e40bbc87cc8d92fd5f480c2&query=' + location);
}


}
