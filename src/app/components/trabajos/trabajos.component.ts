import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  misTrabajos: any;
  
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.misTrabajos = data.proyectos;
    })
  }

}
