import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonarDataService } from '../donar-data.service';

@Component({
  selector: 'app-filter-donar',
  templateUrl: './filter-donar.component.html',
  styleUrls: ['./filter-donar.component.css']
})
export class FilterDonarComponent implements OnInit {
  @Output() onFilter = new EventEmitter<NgForm>(); 
  blood="";
  bloodList = [];

  constructor(private ds: DonarDataService) { this.bloodList = ds.bloodList; }

  ngOnInit() {
  }
  onSubmit(model:NgForm){  
    this.onFilter.emit(model);
  }
}
