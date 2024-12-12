import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrl: './basic-info-form.component.css'
})
export class BasicInfoFormComponent implements OnInit{
  form!: FormGroup<IBasicInfoFormGroup>;

  constructor(private controlContainer: ControlContainer) {
  }

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup;
  }
}

export interface IBasicInfoFormGroup {
  name: FormControl<string | null>
}
