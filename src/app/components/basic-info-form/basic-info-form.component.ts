import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, FormGroupName} from "@angular/forms";

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrl: './basic-info-form.component.css'
})
export class BasicInfoFormComponent implements OnInit{
  form!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.form = this.rootFormGroup.form.get('basicInfo') as FormGroup
    this.form.setControl('name', new FormControl({value: null, disabled: false}))

    console.log(this.form)

  }

}
