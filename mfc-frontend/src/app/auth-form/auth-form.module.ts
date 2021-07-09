import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthFormComponent } from './auth-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
  ],
  exports: [AuthFormComponent],
})
export class AuthFormModule {}
