import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { mergeMap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MailerService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private geoServ: GeolocationService) { }



  private serverApi = this.baseUrl;
  public getAllLists(): Observable<List[]> {
      return this.geoServ.getGeoLocation().pipe(
          mergeMap(({ latitude, longitude }) =>
              this.http.get<any>(`${this.serverApi}/yelp/?lat=${latitude}&long=${longitude}`)
          ),
          map(res => res.businesses));
  }

}