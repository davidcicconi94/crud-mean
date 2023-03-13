import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddEditStudentsComponent } from './add-edit-students/add-edit-students.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ListStudentsComponent, AddEditStudentsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ],
  exports: [ListStudentsComponent, AddEditStudentsComponent],
})
export class StudentsModule {}
