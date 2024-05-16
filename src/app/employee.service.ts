import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import{ Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080/api/v1/employees"
  getEmployeeList():Observable<Employee[]>{
   return  this.http.get<Employee[]>(`${this.baseUrl}`) ;
  }
  createEmployee(employee:Employee):Observable<object>{
    return this.http.post(`${this.baseUrl}`,employee);

  }
  getEmployeeById(id:number):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/${id}`)

  }
  updateEmployee(id:number, employee:Employee):Observable<object>{
   return this.http.put(`${this.baseUrl}/${id}`,employee)
  }
 
deleteEmployeeById(id:number):Observable<object>{
  return this.http.delete(`${this.baseUrl}/${id}`)

}

}
