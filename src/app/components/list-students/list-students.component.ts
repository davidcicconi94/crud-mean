import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent {
  displayedColumns: string[] = ['name', 'lastname', 'genre', 'dni', 'bornDate'];
  dataSource = studentsList;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const studentsList: Student[] = [
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
  {
    name: 'David',
    lastname: 'Cicconi',
    genre: 'Male',
    dni: 37447255,
    bornDate: new Date('1994-08-13'),
  },
];
