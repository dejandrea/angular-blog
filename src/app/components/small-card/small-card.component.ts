import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  // @Input()
  photoCover:string = "";

  // @Input()
  cardTitle:string = ``;

  @Input()
  id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    //console.log(this.id)
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id )[0]

    this.cardTitle = result.title
    this.photoCover = result.photo

  }
}
