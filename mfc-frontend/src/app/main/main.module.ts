import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [CommonModule, TableModule, RouterModule],
})
export class MainModule {}
