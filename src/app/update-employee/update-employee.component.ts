import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:any=null;
  constructor(private es:EmployeeService,
    private route:ActivatedRoute,
    private  router:Router){

  }

ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.es.getEmployeeById(this.id).subscribe((data:any)=>{
    this.employee=data;
  })
}


  employee:Employee= new Employee();
  onSubmit(){
   this.es.updateEmployee(this.id,this.employee).subscribe(data=>{
    this.goToEmployeeList();
   })
  }
  goToEmployeeList(){
    this.router.navigate(["/employees"]);
    
    }
}
