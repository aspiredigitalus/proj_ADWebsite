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
/*
    usaResources:Employee[] = [
        new Employee('assets/media/headshots/KGolubski_square.jpg','Kim','Golubski',['CPQ Technical Consultant','Commissions Technical Consultant'],'https://www.linkedin.com/in/kim-golubski/' ),
        new Employee('assets/media/headshots/SKhan_square.jpg','Shamsul','Khan',['CPQ Associate Consultant'],'https://www.linkedin.com/in/shamsulk/' ),
        new Employee('assets/media/headshots/CKim_square.jpg','Carol','Kim',['CPQ Functional Consultant','Web Developer'],'https://www.linkedin.com/in/davidamehoves/' ),
        new Employee('assets/media/headshots/DMehoves_square.jpg','David','Mehoves',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/davidamehoves/' ),
        new Employee('assets/media/headshots/CMunselle_square.jpg','Cory','Munselle',['CPQ Technical Consultant', 'Team Trainer', 'Software Developer'],'https://www.linkedin.com/in/cory-munselle/'),
        new Employee('assets/media/headshots/JPaschall_square.jpg','Justin','Paschall',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/justin-paschall-7a477923a/' ),
        new Employee('assets/media/headshots/MSims_square.jpg','Mattie','Sims',['CPQ Functional Consultant','Commissions Functional Consultant'],'https://www.linkedin.com/in/martha-sims/' ),
        new Employee('assets/media/headshots/ASyed_square.jpeg','Anoosha','Syed',['CPQ Functional Consultant','Commissions Technical Consultant'],'https://www.linkedin.com/in/anoosha-syed/' ),
        new Employee('assets/media/headshots/LYepez_square.jpg','Lucas','Yepez',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/lucas-yepez/' ),
        new Employee('assets/media/headshots/CYount_square.jpg','Caty','Yount',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/catherineyount/' ),
    ];
    uaeResources:Employee[] = [
        new Employee('assets/media/headshots/AGoswami_square.jpg', 'Aishwarya', 'Goswami',['Senior Manager', 'SAP CX'], 'https://www.linkedin.com/in/aishwarya-goswami-0700b077/'),
        new Employee('assets/media/headshots/AGoswami_square.jpg', 'Jamal', ' Mohamed',['Manager', 'SAP Commissions Architect'], 'https://www.linkedin.com/in/jamalmohamedh/'),
        new Employee('assets/media/headshots/AGoswami_square.jpg', 'Karthik', 'Raj',['Manager', 'SAP CPQ Architect'], 'https://www.linkedin.com/in/karthik-raj-0a1953a7/'),
        new Employee('assets/media/headshots/AGoswami_square.jpg', 'Prasanth', 'Murugan',['Project Manager'], 'https://www.linkedin.com/in/prasanth-murugan-8191351b8/')
    ]
*/
    usaResources:Employee[] = [];
    uaeResources:Employee[] = [];
    getUsaResources():Observable<any> {
        const options = {
            headers: new HttpHeaders()
                .append('content-type', 'application/json'),
            params: new HttpParams()
                .append('region', 'USA')
        }
        return this.http.get<Employee[]>(Variables.baseurl+'/employee/region', options);
    }

    getUaeResources():Employee[]{
        return this.uaeResources;
    }
}
