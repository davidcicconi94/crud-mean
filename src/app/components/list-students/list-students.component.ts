import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Student } from 'src/app/interfaces/Student';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent {
  displayedColumns: string[] = ['name', 'lastname', 'genre', 'dni', 'bornDate'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
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
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
];
