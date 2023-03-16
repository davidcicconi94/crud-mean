import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Student } from 'src/app/interfaces/Student';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStudentsComponent } from '../add-edit-students/add-edit-students.component';
import { StudentService } from 'src/app/services/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'lastname',
    'genre',
    'dni',
    'bornDate',
    'actions',
  ];
  dataSource: MatTableDataSource<Student>;

  loading: boolean = false;

  durationInSeconds: number = 3;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private _studentService: StudentService,
    private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getStundents();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addOrEdit(dni?: number): void {
    console.log(dni);
    const dialogRef = this.dialog.open(AddEditStudentsComponent, {
      width: '550px',
      height: '550px',
      data: { dni },
    });

    dialogRef.afterClosed().subscribe((ref: boolean) => {
      if (ref) this.getStundents();
    });
  }

  getStundents() {
    this.loading = true;

    this._studentService.getStudent().subscribe((data: any) => {
      this.loading = false;
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteStudent(_id: number): void {
    this.loading = true;
    this._studentService.deleteStudent(_id).subscribe((data) => {
      this.loading = false;
      this.getStundents();
      this.deletedMsg();
    });
  }

  deletedMsg(): void {
    this._snackBar.open(`Student was successfully deleted.`, '', {
      duration: this.durationInSeconds * 1000,
    });
  }
}
