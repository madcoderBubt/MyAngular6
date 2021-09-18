import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonarDataService {
  apiUrl = "https://localhost:44354/api/";  
  bloodList = ["A+","A-","AB+","AB-","B+","B-","O+","O-"];
  
  constructor(private http:HttpClient) { }

  getDonars(){
    return this.http.get(this.apiUrl+"Donar");
  }
  getDonar(id){
    return this.http.get(this.apiUrl+"Donar/"+id);
  }
  getAvailDonars(model){
    if(model.blood!="")
      return this.http.request("POST",this.apiUrl+"Donar/Search",{
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(model)
      });
    else
      return this.getDonars();
  }
  putDonar(model){
    return this.http.post(this.apiUrl+"Donar", JSON.stringify(model),{
      headers:{
        "Content-Type": "application/json",
      }
    });
  }
  delDonar(id){
    return this.http.delete(this.apiUrl+"Donar/"+id);
  }
}
