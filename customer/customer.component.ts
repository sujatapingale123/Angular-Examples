import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public name ="Customer Details"
  public currentDate = new Date();
  public mid="name";
  
 
  public txtcolor="text-success";
  public custname="";
  public contact="";
  public message="";
  public bollval=false;
  public color="red";
  
public colors=["Red","Green","Orange","black"]

  onclick(){
    alert("hiii")
  }


  getvals(value){
    alert(value);
  }

  
  constructor() { }

  ngOnInit(): void {
      }

}
