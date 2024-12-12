import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainFormComponent} from "./main-form/main-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BasicInfoFormComponent} from "./basic-info-form/basic-info-form.component";
import {DetailedInfoFormComponent} from "./detailed-info-form/detailed-info-form.component";
import {SecondaryFormComponent} from "./secondary-form/secondary-form.component";



@NgModule({
  declarations: [MainFormComponent, BasicInfoFormComponent, DetailedInfoFormComponent, SecondaryFormComponent],
  exports: [
    MainFormComponent,
    SecondaryFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
