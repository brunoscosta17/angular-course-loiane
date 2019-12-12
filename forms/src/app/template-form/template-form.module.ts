import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    HttpClient,
    HttpClientModule
  ],
})
export class TemplateFormModule { }
