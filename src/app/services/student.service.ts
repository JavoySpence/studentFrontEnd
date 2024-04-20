import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_URL = "http://localhost:8080/api/v1/students";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/all-students`);
  }

  getSingleStudent(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/single-student/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    );
  }

  addStudent(studentData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/addStudent`, studentData);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/delete/${id}`);
  }

  updateStudent(id: number, studentData: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update/${id}`, studentData);
  }
}
