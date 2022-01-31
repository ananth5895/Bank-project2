import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: any = "";
  phone: any = "";
  accnum: any = "";
  inibal: any = "";
  avlbal: any = "";

  create() {
    localStorage.setItem("Name", this.name)
    localStorage.setItem("Phone", this.phone)
    localStorage.setItem("Account Number", this.accnum)
    localStorage.setItem("Inital Balance", this.inibal)
    localStorage.setItem("Avaliable Balance", this.avlbal)
  }

}
