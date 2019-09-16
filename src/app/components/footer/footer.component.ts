import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public imagenes = [
    {
      url: '/assets/img/musica-electronica-sin-copyright-1.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
