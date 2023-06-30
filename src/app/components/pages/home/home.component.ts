import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  name: String
  subject:String
  phone_number:BigInteger


  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submitted")
  }

}
