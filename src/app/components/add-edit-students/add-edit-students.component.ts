import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-add-edit-students',
  templateUrl: './add-edit-students.component.html',
  styleUrls: ['./add-edit-students.component.css'],
})
export class AddEditStudentsComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddEditStudentsComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      genre: ['', Validators.required],
      dni: [null, Validators.required],
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

    console.log(student);
  }
}
