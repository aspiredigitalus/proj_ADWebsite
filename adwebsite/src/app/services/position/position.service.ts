import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPosition } from 'src/app/models/JobPosition';
import { Variables } from 'src/app/Variables';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { }

  getPositionTitleByEmpId(id:string):Observable<any> {
        const options = {
            headers: new HttpHeaders()
                .append('content-type', 'application/json'),
            params: new HttpParams()
                .append('employee_id', id)
        }
        return this.http.get(Variables.baseurl+'/position', options);
    }
}
