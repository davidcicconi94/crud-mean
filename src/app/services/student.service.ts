import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/Student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private appUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = environment.endpoint;
    this.apiUrl = 'api/students/';
  }

  getStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.appUrl + this.apiUrl);
  }

  deleteStudent(_id: number): Observable<void> {
    return this.http.delete<void>(this.appUrl + this.apiUrl + _id);
  }

  addStudent(student: Student): Observable<void> {
    return this.http.post<void>(this.appUrl + this.apiUrl, student);
  }
}
