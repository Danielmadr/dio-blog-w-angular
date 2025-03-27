import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    movies = [
    {
      id: 1,
      photoCover: 'https://m.media-amazon.com/images/M/MV5BMjIyNjZmOTEtYWFiYS00YzRhLThhMTktMDUwN2Q3ZDgzZmJmXkEyXkFqcGc@._V1_.jpg',
      cardTitle: 'Capitão América: Admirável Mundo Novo',
      cardDescription: 'Sam Wilson assume o escudo do Capitão América e enfrenta desafios em um mundo em mudança.',
      releaseDate: '13/02/2025'
    },
    {
      id: 2,
      photoCover: 'https://br.web.img2.acsta.net/img/0a/49/0a4956ed2afe35d8b656e01339a1f52c.jpg',
      cardTitle: 'Demolidor: Renascido',
      cardDescription: 'Matt Murdock retorna como Demolidor, enfrentando novas ameaças nas ruas de Hell\'s Kitchen.',
      releaseDate: '04/03/2025'
    },
    {
      id: 3,
      photoCover: 'https://m.media-amazon.com/images/M/MV5BOTRiYjY1ZjQtNzA1OC00NWRiLWExNGYtMTljOWNkMWUyZmJhXkEyXkFqcGc@._V1_.jpg',
      cardTitle: 'Thunderbolts',
      cardDescription: 'Uma equipe de anti-heróis e vilões do MCU se une para missões perigosas em nome do governo.',
      releaseDate: '02/05/2025'
    },
    {
      id: 4,
      photoCover: 'https://br.web.img3.acsta.net/pictures/14/10/28/21/28/104479.jpg',
      cardTitle: 'Coração de Ferro',
      cardDescription: 'Riri Williams, uma jovem prodígio, constrói sua própria armadura e embarca em uma jornada heroica.',
      releaseDate: '04/06/2025'
    },
    {
      id: 5,
      photoCover: 'https://m.media-amazon.com/images/M/MV5BYmY3NGMxNjgtMTM1My00OGZhLTg0NzMtNDY1YzFiNTcxNDA5XkEyXkFqcGc@._V1_.jpg',
      cardTitle: 'Quarteto Fantástico: Primeiros Passos',
      cardDescription: 'A icônica equipe de heróis da Marvel é introduzida ao MCU, explorando suas origens e desafios.',
      releaseDate: '24/07/2025'
    }
  ];

}
