import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import { Center } from '../center';

@Component({
  selector: 'index-center',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  centers: Center[] = [];

  constructor(public centerService: CenterService) { }

  ngOnInit(): void {
    this.centerService.getAll().subscribe((data: Center[])=>{
      this.centers = data;
      console.log(this.centers);
    })
  }

  deleteCenter(id:number){
    this.centerService.delete(id).subscribe(res => {
      this.centers = this.centers.filter(item => item.id !== id);
      console.log('Center deleted successfully!');
    })
  }
}
