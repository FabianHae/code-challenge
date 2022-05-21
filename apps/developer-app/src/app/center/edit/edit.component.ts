import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Center } from '../center';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'edit-center',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  center!: Center;
  form!: FormGroup;

  constructor(
    public centerService: CenterService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['centerId'];
    this.centerService.find(this.id).subscribe((data: Center)=>{
      this.center = data;

    });

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
    this.centerService.update(this.id, this.form.value).subscribe((res:any) => {
      console.log('Center updated successfully!');
      this.router.navigateByUrl('center/index');
    })
  }

}
