import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IBasicInfoFormGroup} from "../basic-info-form/basic-info-form.component";
import {IDetailedInfoFormGroup} from "../detailed-info-form/detailed-info-form.component";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit{
  form: FormGroup<IMainFormGroup>;
  constructor() {
    this.form = new FormGroup<IMainFormGroup>({
      basicInfo: new FormGroup<IBasicInfoFormGroup>({
        name: new FormControl<string | null>({value: null, disabled: false})
      }),
      detailedInfo: new FormGroup<IDetailedInfoFormGroup>({
        age: new FormControl<number | null>({value: null, disabled: false})
      })
    })
  }

  ngOnInit(): void {
  }
}

export interface IMainFormGroup {
  basicInfo: FormGroup<IBasicInfoFormGroup>,
  detailedInfo: FormGroup<IDetailedInfoFormGroup>
}
