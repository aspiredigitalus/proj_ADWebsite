import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { Variables } from 'src/app/Variables';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) {}
    

    usaResources = [];
    uaeResources = [];
    indiaResources = [];
    getUsaResources():Observable<any> {
        console.log("get USA Resources");
        const options = {
            headers: new HttpHeaders()
                .append('content-type', 'application/json')
                .append('Access-Control-Allow-Origin', '*'),
            params: new HttpParams()
                .append('region', 'USA')
        }
        return this.http.get(Variables.baseurl+'api/employee/region', options);
    }

    getUaeResources():Observable<any> {
        const options = {
            headers: new HttpHeaders()
                .append('content-type', 'application/json')
                .append('Access-Control-Allow-Origin', '*'),
            params: new HttpParams()
                .append('region', 'UAE')
        }
        return this.http.get(Variables.baseurl+'api/employee/region', options);
    }
    getIndiaResources():Observable<any> {
        const options = {
            headers: new HttpHeaders()
                .append('content-type', 'application/json')
                .append('Access-Control-Allow-Origin', '*'),
            params: new HttpParams()
                .append('region', 'India')
        }
        return this.http.get(Variables.baseurl+'api/employee/region', options);
    }
}
