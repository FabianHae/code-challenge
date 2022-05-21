import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'create-center',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public centerService: CenterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      branch: new FormControl('', [Validators.required]),
      company_name: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.centerService.create(this.form.value).subscribe((res:any) => {
      console.log('Center created successfully!');
      this.router.navigateByUrl('center/index');
    })
  }

}
