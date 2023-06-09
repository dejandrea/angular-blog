import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  // @Input()
  photoCover:string = "";

  // @Input()
  cardTitle:string = "";

  // @Input()
  cardDescription:string = ``;

  @Input()
  id:string = "1";

  constructor() {
    this.setValuesToComponent(this.id)
  }

  ngOnInit(): void {
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id )[0]

    this.cardTitle = result.title
    this.photoCover = result.photo
    this.cardDescription = result.description
  }

}
