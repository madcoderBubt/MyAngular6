import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as internal from 'assert';
import { DonarDataService } from '../donar-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements OnInit {
  title="Donar Details";
  data: any;
  constructor(private httpResponse: DonarDataService,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.data = params.id );
  }

  ngOnInit() {
    this.httpResponse.getDonar(this.data).subscribe(
      (data:any) => this.data = data
    );
  }

}
