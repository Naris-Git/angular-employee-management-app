import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements  OnInit {

  employees:Employee[]=[];
id:any=null;
constructor(private es:EmployeeService,
  private  router:Router,
  private route:ActivatedRoute){

}

  ngOnInit(): void {
   this.getEmployees();
   //this.id=this.route.snapshot.params['id'];
  }
private  getEmployees(){
    this.es.getEmployeeList().subscribe((res:any)=>
    this.employees=res)
    console.log(this.employees)
  }
  updateEmployee(id:number){
this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.es.deleteEmployeeById(id).subscribe(data=>{
this.getEmployees();
    })
  }
  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }
}