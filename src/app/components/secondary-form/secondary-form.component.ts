import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IBasicInfoFormGroup} from "../basic-info-form/basic-info-form.component";
import {IDetailedInfoFormGroup} from "../detailed-info-form/detailed-info-form.component";

@Component({
  selector: 'app-secondary-form',
  templateUrl: './secondary-form.component.html',
  styleUrl: './secondary-form.component.css'
})
export class SecondaryFormComponent implements OnInit{
  form: FormGroup<ISecondaryFormGroup>;
  constructor() {
    this.form = new FormGroup<ISecondaryFormGroup>({
      basicInfo: new FormGroup<IBasicInfoFormGroup>({
        name: new FormControl<string | null>({value: null, disabled: false})
      }),
      detailedInfo: new FormGroup<IDetailedInfoFormGroup>({
        age: new FormControl<number | null>({value: null, disabled: false})
      })
    })
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe((c) => {
      console.log(c)
    })
  }
}

export interface ISecondaryFormGroup {
  basicInfo: FormGroup<IBasicInfoFormGroup>,
  detailedInfo: FormGroup<IDetailedInfoFormGroup>
}
