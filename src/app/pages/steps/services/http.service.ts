import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _http = inject(HttpClient);

  getSteps(): Observable<any> {
    return this._http.get(`${environment.BACK_URL}/steps`);
  }
}
