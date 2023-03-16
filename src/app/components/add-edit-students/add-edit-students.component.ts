import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  title: string = 'Add a new student';
  dni: number | undefined;
  buttonName: string = 'Add';

  constructor(
    public dialogRef: MatDialogRef<AddEditStudentsComponent>,
    private fb: FormBuilder,
    private _studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.maxDate = new Date();

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      lastname: ['', Validators.required],
      genre: ['', Validators.required],
      dni: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      bornDate: [null, Validators.required],
    });
    this.dni = data.dni;
  }

  ngOnInit(): void {
    this.isEdit(this.dni);
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  isEdit(dni: number | undefined) {
    if (dni !== undefined) {
      this.title = 'Edit student';
      this.buttonName = 'Edit';

      this.getStudent(dni);
    }
  }

  getStudent(dni: number) {
    this._studentService.getStudentByDni(dni).subscribe((data: Student) => {
      this.form.setValue({
        name: data.name,
        lastname: data.lastname,
        genre: data.genre,
        dni: data.dni,
        bornDate: data.bornDate,
      });
    });
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

      this.dialogRef.close(true);
    });
  }
}
