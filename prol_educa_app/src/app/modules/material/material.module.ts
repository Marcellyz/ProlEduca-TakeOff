import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MATERIAL_MODULES = [
 MatButtonModule,
 MatIconModule,
 MatToolbarModule,
 MatCardModule,
 MatInputModule,
MatFormFieldModule,
MatDialogModule,
MatSnackBarModule,
MatProgressSpinnerModule
];

@NgModule({
declarations: [],
exports: MATERIAL_MODULES
})
export class MaterialModule { }