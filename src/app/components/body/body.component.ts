import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public imagenes = [
    {
      url: '/assets/img/20181122165644-musica.jpeg'
    },
    {
      url: '/assets/img/musica-electronica-sin-copyright-1.jpg'
    },
    {
      url: '/assets/img/frases_de_musica_cortas_para_pensar_10_600.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
