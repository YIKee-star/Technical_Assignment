import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {

  transform(employees: any[], findAge: number): any[] {
    if(!employees|| !findAge){
      return employees;
    }

    return employees.filter(employee=> employee.age == findAge);
  }

}