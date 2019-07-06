import { NgModule } from '@angular/core';
import { SignComponent } from './sign/sign.component';
import { RouterModule } from '@angular/router';
import {
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignComponent, TodoComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule {}
