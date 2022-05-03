import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelResultBooks } from 'src/app/models/modelResultBooks';
import { Authors  } from 'src/app/models/Authors';
import { Publisher } from 'src/app/models/Publisher';
import { Observable } from 'rxjs';
import { UrlApli } from 'src/assets/config/urlConfig';
import { retry, catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private handleError: any;
  private urlApi = UrlApli;
  constructor(
    private http: HttpClient
  ) { }
  _getBooks(descripcion: string): Observable<modelResultBooks[]> {  
    return this.http.get<modelResultBooks[]>(`${this.urlApi}BooksMgmt`)                                                                
      .pipe(retry(0), catchError(this.handleError), map((response) => {
        return response;
      }));
  }

  _getAuthors(): Observable<Authors[]> {  
    return this.http.get<Authors[]>(`${this.urlApi}AuthorsMgmt`)                                                                
      .pipe(retry(0), catchError(this.handleError), map((response) => {
        return response;
      }));
  }

  _getPublisher(): Observable<Publisher[]> {  
    return this.http.get<Publisher[]>(`${this.urlApi}PublisherMgMt`)                                                                
      .pipe(retry(0), catchError(this.handleError), map((response) => {
        return response;
      }));
  }

}
