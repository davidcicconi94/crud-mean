import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Student } from 'src/app/interfaces/Student';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditStudentsComponent } from '../add-edit-students/add-edit-students.component';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent {
  displayedColumns: string[] = [
    'name',
    'lastname',
    'genre',
    'dni',
    'bornDate',
    'actions',
  ];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(studentsList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addOrEdit(): void {
    const dialogRef = this.dialog.open(AddEditStudentsComponent, {
      width: '550px',
      height: '550px',
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const studentsList: Student[] = [
  {
    name: 'Mia',
    lastname: 'Cicconi',
    genre: 'Female',
    dni: 57982183,
    bornDate: new Date('2021-10-28'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'Estefania',
    lastname: 'Astudillo',
    genre: 'Female',
    dni: 41002931,
    bornDate: new Date('1998-05-23'),
  },
  {
    name: 'Lionel',
    lastname: 'Messi',
    genre: 'Male',
    dni: 10101101,
    bornDate: new Date('1987-06-24'),
  },
  {
    name: 'Maria Magdalena',
    lastname: 'Santos',
    genre: 'Female',
    dni: 23334253,
    bornDate: new Date('1982-01-13'),
  },
  {
    name: 'Tukulito',
    lastname: 'Sakayama',
    genre: 'Male',
    dni: 30229831,
    bornDate: new Date('2002-04-02'),
  },
];
