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

  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<AddEditStudentsComponent>,
    private fb: FormBuilder
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
  }
}
