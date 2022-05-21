import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Center } from '../center';

@Component({
  selector: 'view-center',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  id!: number;
  center!: Center;

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
  }

}
