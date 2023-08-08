import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
  viewdata:any

  constructor(private api:ServicesService){

  }

  ngOnInit(): void {
    this.api.details()
    .subscribe(
      (res:any)=>{
      console.log(res.data);
      this.viewdata=res.data
      
  
    },
    (res:any)=>{
      console.log(res.error);
      
    }
    )
     
   }

}
