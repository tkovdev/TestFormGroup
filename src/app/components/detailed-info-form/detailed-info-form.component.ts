import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detailed-info-form',
  templateUrl: './detailed-info-form.component.html',
  styleUrl: './detailed-info-form.component.css'
})
export class DetailedInfoFormComponent implements OnInit{
    form!: FormGroup<IDetailedInfoFormGroup>;

    constructor(private controlContainer: ControlContainer) {
    }

    ngOnInit(): void {
      this.form = this.controlContainer.control as FormGroup;

      this.form.parent?.get('basicInfo')?.valueChanges.subscribe((c) => {
        console.log(c)
      });
    }
}

export interface IDetailedInfoFormGroup {
  age: FormControl<number | null>
}
