import { Component, OnInit, ViewChild } from '@angular/core';
import {  NgForm, NgModel } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  // form: FormGroup;
  id: number = 0;
  @ViewChild('studentForm') studentForm?: NgForm;
  constructor(
    // private fb: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    if (this.id > 0 ){
      const sub = this.studentService.getSingleStudent(this.id).subscribe(res => {
        console.log(JSON.stringify(res));
        if (res['status']==='success'){
          const dataStudent = res['data']!['students'][0];
            // console.log(JSON.stringify(dataStudent));
            console.log(JSON.stringify(res['data']!['students'][0]['first_name']));
          this.studentForm?.setValue({
            first_name: dataStudent['first_name'],
            last_name: dataStudent['last_name'],
            phone: dataStudent['phone']
          });

        }
      });
    }
  }

  updateStudent(oForm:NgForm){
    console.log(oForm.value);
    this.studentService.updateStudent(this.id, oForm.value).subscribe((res)=>{
    this.router.navigateByUrl('/');
    }
   
    );
  }

  populateFormWithStudentData() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.studentService.getSingleStudent(id).subscribe(
        student => {
          // this.form.patchValue({
          //   firstName: student.first_name,
          //   lastName: student.last_name,
          //   phone: student.phone
          // });
        },
        error => {
          console.error('Error fetching student data:', error);
        }
      );
    });
  }
}
