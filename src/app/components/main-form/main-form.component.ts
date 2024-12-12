import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit{
  form: FormGroup;
  constructor() {
    this.form = new FormGroup<any>({
      basicInfo: new FormGroup({})
    });
  }

  ngOnInit(): void {
    this.form.get('basicInfo')?.valueChanges.subscribe(() => {
      console.log(this.form.get('basicInfo')?.getRawValue())
    })
  }


}
