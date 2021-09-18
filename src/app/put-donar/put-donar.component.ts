import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DonarDataService } from '../donar-data.service';

@Component({
  selector: 'app-put-donar',
  templateUrl: './put-donar.component.html',
  styleUrls: ['./put-donar.component.css']
})
export class PutDonarComponent implements OnInit {
  title="Edit Donar";
  returnData:any;
  bindData:any;
  bloodList = [];
  data:number;
  constructor(private ds:DonarDataService,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.data = params.id );
    this.bloodList = ds.bloodList;
  }

  ngOnInit() {
    if(this.data==null){
      //alert("Null param");
    }else{
      this.ds.getDonar(this.data).subscribe(
        data => this.bindData = data
      );
      //alert(typeof this.bindData.lastDonation);
    }
  }
  onSubmit(f:NgForm){
    //console.log(f.value);
    //console.log(this.bindData);
    this.ds.putDonar(this.bindData).subscribe(
      data => this.returnData = data
    );
    //alert(this.returnData);
  }

}
