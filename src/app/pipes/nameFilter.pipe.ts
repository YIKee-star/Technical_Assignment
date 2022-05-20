import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(employees: any[], searchTerm: string): any[] {
    if(!employees|| !searchTerm){
      return employees;
    }
    return employees.filter(employee=> employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);
  }

}