import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  urlBase: string = '';
  paises: any[] = [];
  constructor(private httpClient: HttpClient) {
    this.urlBase = 'https://restcountries.com/v3.1/';
  }
  getPaises(continent: string): Observable<any[]> {
    let temp = this.httpClient.get<any[]>(`${this.urlBase}region/${continent}`);
    this.urlBase = 'https://restcountries.com/v3.1/';
    return temp;
  }
}
