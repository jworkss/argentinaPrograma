import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  misTrabajos:any;
  misFrontEnd:any;
  misBackEnd:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.misTrabajos = data.proyectos;
    })

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.misFrontEnd = data.skills.frontEnd;
    })

    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.misBackEnd = data.skills.backEnd;
    })


  }

}
