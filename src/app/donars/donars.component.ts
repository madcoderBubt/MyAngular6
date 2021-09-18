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
  blood = "";
  constructor(private data: DonarDataService) { this.bloodList = data.bloodList }

  ngOnInit() {
    this.data.getDonars().subscribe(
      data => this.donars = data
    );
  }
  
  onSubmit(model:NgForm){    
    this.data.getAvailDonars(model.value).subscribe(
      data => this.donars = data
    );
  }
  onDelClick(id:number){
    //console.log(this.blood);
    this.data.delDonar(id).subscribe(
      obj => alert(obj)
    );
  }

}
