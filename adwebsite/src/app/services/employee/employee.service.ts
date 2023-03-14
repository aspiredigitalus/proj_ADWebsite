import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  usaResources:Employee[] = [
    new Employee('assets/media/headshots/KGolubski_square.jpg','Kim','Golubski',['CPQ Technical Consultant','Commissions Technical Consultant'],'https://www.linkedin.com/in/kim-golubski/' ),
    new Employee('assets/media/headshots/SKhan_square.jpg','Shamsul','Khan',['CPQ Associate Consultant'],'https://www.linkedin.com/in/shamsulk/' ),
    new Employee('assets/media/headshots/DMehoves_square.jpg','Carol','Kim',['CPQ Functional Consultant','Web Developer'],'https://www.linkedin.com/in/davidamehoves/' ),
    new Employee('assets/media/headshots/DMehoves_square.jpg','David','Mehoves',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/davidamehoves/' ),
    new Employee('assets/media/headshots/CMunselle_square.jpg','Cory','Munselle',['CPQ Technical Consultant', 'Team Trainer', 'Software Developer'],'https://www.linkedin.com/in/cory-munselle/'),
    new Employee('assets/media/headshots/DMehoves_square.jpg','Justin','Paschall',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/justin-paschall-7a477923a/' ),
    new Employee('assets/media/headshots/MSims_square.jpg','Mattie','Sims',['CPQ Functional Consultant','Commissions Functional Consultant'],'https://www.linkedin.com/in/martha-sims/' ),
    new Employee('assets/media/headshots/DMehoves_square.jpg','Anoosha','Syed',['CPQ Functional Consultant','Commissions Technical Consultant'],'https://www.linkedin.com/in/anoosha-syed/' ),
    new Employee('assets/media/headshots/DMehoves_square.jpg','Lucas','Yepez',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/lucas-yepez/' ),
    new Employee('assets/media/headshots/CYount_square.jpg','Caty','Yount',['CPQ Technical Consultant','Software Developer'],'https://www.linkedin.com/in/catherineyount/' ),
  ];
  constructor() {}

  getUsaResources():Employee[] {
    return this.usaResources;
  }
}
