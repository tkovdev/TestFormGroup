import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainFormComponent} from "./main-form/main-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BasicInfoFormComponent} from "./basic-info-form/basic-info-form.component";



@NgModule({
  declarations: [MainFormComponent, BasicInfoFormComponent],
  exports: [
    MainFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
