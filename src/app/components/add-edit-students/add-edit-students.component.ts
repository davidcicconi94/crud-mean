import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-edit-students',
  templateUrl: './add-edit-students.component.html',
  styleUrls: ['./add-edit-students.component.css'],
})
export class AddEditStudentsComponent {
  form: FormGroup;
  loading: boolean = false;
  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<AddEditStudentsComponent>,
    private fb: FormBuilder,
    private _studentService: StudentService
  ) {
    this.maxDate = new Date();

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      lastname: ['', Validators.required],
      genre: ['', Validators.required],
      dni: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      bornDate: [null, Validators.required],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addOrEdit() {
    if (this.form.invalid) return;

    const student: Student = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      genre: this.form.value.genre,
      dni: this.form.value.dni,
      bornDate: this.form.value.bornDate,
    };

    this.loading = true;

    this._studentService.addStudent(student).subscribe((data) => {
      this.loading = false;
      this.closeDialog();
    });
  }
}
