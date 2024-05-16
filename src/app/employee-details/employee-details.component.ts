import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent  implements OnInit{
  id:any=null;
  employee:Employee=new Employee();
  constructor(private es:EmployeeService,
    private route:ActivatedRoute,
    private  router:Router){

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  this.es.getEmployeeById(this.id).subscribe((data:any)=>{
    this.employee=data;

    console.log(this.employee);
    
  })

}
}
