import { Component, OnInit } from '@angular/core';
import { DonarDataService } from '../donar-data.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-donars',
  templateUrl: './donars.component.html',
  styleUrls: ['./donars.component.css']
})
export class DonarsComponent implements OnInit {
  title="Donar List";
  donars:Object;
  bloodList = [];
  selectedBlood:object = {blood:""};
  constructor(private data: DonarDataService) { this.bloodList = data.bloodList }

  ngOnInit() {
    this.data.getDonars().subscribe(
      data => this.donars = data
    );
  }
  
  onSubmit(model:NgForm){    
    //console.log(model.value);
    this.RefreshList(model.value);
    this.selectedBlood=model.value;
  }
  onDelClick(id:number){
    //console.log(this.blood);
    this.data.delDonar(id).subscribe(
      obj => this.RefreshList(this.selectedBlood)
    );
  }
  RefreshList(model){
    this.data.getAvailDonars(model).subscribe(
      data => this.donars = data
    );
  }

}
