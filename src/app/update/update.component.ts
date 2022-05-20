import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-update',
templateUrl: './update.component.html',
styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  newEmployeeClicked = false;
  searchTerm: string;
  findAge: number;
  myValue:any;
  positionSelected:string;
  isDialogOpen = false; 
  

  employees = [{serialNo:1, name:"Aman Khanna", position:"CEO",startDate:"05/18/2019",endDate:"09/24/2020", age:27},
  {serialNo:2, name:"Peter Parker", position:"Front-end Developer", startDate:"05/18/2012",endDate:"01/02/2016", age:32},
  {serialNo:3, name:"Anjali Sharma", position:"Managing Director", startDate:"06/18/2017",endDate:"12/18/2019", age:22},
  {serialNo:4, name:"Kabir Khan", position:"Chief Financial Office", startDate:"05/06/2016",endDate:"07/18/2020", age:28},
  {serialNo:5, name:"Anand Raj", position:"Online Manager", startDate:"05/01/2017",endDate:"11/18/2018", age:29},
  {serialNo:6, name: "Shabana Noor", position:"Chief Technology officer", startDate:"12/08/2013",endDate:"03/18/2015", age:33},
  {serialNo:7, name:"Geet Kaur", position:"Back-end Developer", startDate:"05/18/2019",endDate:"06/18/2021", age:22},
  {serialNo:8, name:"Amar Gill", position:"Front-end developer", startDate:"05/08/2016",endDate:"01/18/2019", age:23}  
  ];
  constructor() { }

  ngOnInit() {

  }

  model: any = {};
  model2: any = {}; 

  addEmployee() {
    this.model.serialNo = (this.employees.length) +1;
    this.employees.push(this.model);
    this.model = {};    
  }

  deleteEmployee(i) {
   this.employees.splice(i,1);
  //console.log(i);
  }


  editEmployee(i) {
     if(this.isDialogOpen == false){
      this.isDialogOpen = !this.isDialogOpen;
    }
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.age = this.employees[i].age;
    this.model2.startDate = this.employees[i].startDate;
     this.model2.endDate = this.employees[i].endDate;
    this.myValue = i;
    }

  updateEmployee() {
  let editEmployeeInfo = this.myValue;
  for(let i = 0; i < this.employees.length; i++) {
    if(i == editEmployeeInfo) {
      this.employees[i] = this.model2;
      this.model2 = {};
    }
  }
  }


  addNewEmployeeBtn() {
  this.newEmployeeClicked = !this.newEmployeeClicked;  
  }

  closeAddDialog(){
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }

  
  closeEditDialog(){    
     this.isDialogOpen = !this.isDialogOpen;
  }
  
}
