import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  //ri-moon-line change-theme

  constructor(){}
  public myClass: boolean = true;

  ngOnInit(): void {
  }


  changeClass():void{

    this.myClass = !this.myClass
  }



}
