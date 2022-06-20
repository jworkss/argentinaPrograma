import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  
  misFrontEnd: any;
  misBackEnd: any;

constructor(private datosPortfolio: PortfolioService) { }

ngOnInit(): void {

  this.datosPortfolio.obtenerDatos().subscribe(data => {
    this.misFrontEnd = data.skills.frontEnd;
  })

  this.datosPortfolio.obtenerDatos().subscribe(data => {
    this.misBackEnd = data.skills.backEnd;
  })




}


}
