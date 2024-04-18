import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private studentService: StudentService) { }

  students: { id: number, first_name: string, last_name: string, phone: string }[] = [];
  newStudent: { first_name: string, last_name: string, phone: string } = { first_name: '', last_name: '', phone: '' };
  showForm: boolean = false;

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentService.getAllStudents().subscribe(
      (res: any) => {
        console.log('Response from API:', res); // Debugging log
        this.students = res.data.students;
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        console.log('Student deleted successfully');
        this.students = this.students.filter(student => student.id !== id);
      },
      (error) => {
        console.error('Error deleting student:', error);
      }
    );
  }

  addStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(
      (res: any) => {
        console.log('Student added successfully:', res);
        
        this.fetchStudents();
        
        this.newStudent = { first_name: '', last_name: '', phone: '' };
        this.showForm = false;
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  editStudent(student: any) {
    const { id, ...studentData } = student;
    this.studentService.updateStudent(id, studentData).subscribe(
      (res: any) => {
        console.log('Student updated successfully:', res);
        
        // Assign updated student data to newStudent
        this.newStudent = { ...studentData }; 
        
        this.showForm = true;
      },
      (error) => {
        console.error('Error updating student:', error);
      }
    );
  }
}  
