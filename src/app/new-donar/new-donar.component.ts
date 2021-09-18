import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonarDataService } from '../donar-data.service';

@Component({
  selector: 'app-new-donar',
  templateUrl: './new-donar.component.html',
  styleUrls: ['./new-donar.component.css']
})
export class NewDonarComponent implements OnInit {
  title="Add New Donar";
  returnData:any;
  bindData:any;
  bloodList = ["A+","A-","AB+","AB-","B+","B-","O+","O-"];
  data:number;
  constructor(private ds:DonarDataService) { }
  ngOnInit() { }

  onSubmit(f:NgForm){
    //console.log(f.value);
    //console.log(this.bindData);
    this.ds.putDonar(f.value).subscribe(
      data => this.returnData = data
    );
    //alert(this.returnData);
  }

}
