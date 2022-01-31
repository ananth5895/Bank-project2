import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratices',
  templateUrl: './pratices.component.html',
  styleUrls: ['./pratices.component.css']
})
export class PraticesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // name:any= ""


  // days: Array<string>=["sunday", "monday","tuesday","wenesday","thusday","friday","saturday"];


  // gen1:any=''

  // gen(step:any){
  //   console.log("name  :" +step)
  //   // this.gen1=step
  // }

  
  small(name:any)
  {
    console.log("name :" +name);
    
  }


  // imageurl="../assets/images/image-1";


  

}
