import { Component, OnInit } from '@angular/core';
import { List } from './list';
import { Card } from './card';

@Component({
  selector: 'app-trollo-board',
  templateUrl: './trollo-board.component.html',
  styleUrls: ['./trollo-board.component.css']
})
export class TrolloBoardComponent implements OnInit{

  columns: number = 4;
  originalRowHeight: number = 240;
  rowHeight: number = this.originalRowHeight;
  maximumNumberOfCards = 0;

  lists: List[] = [
    { id: 0, title: 'Todo', content: 'Todo1', columns: 1, cards: [
       { id: 0, title: 'Test1', color: 'red' }
    ]},
    { id: 1, title: 'Fertig', content: 'Todo2', columns: 1, cards: [
       { id: 0, title: 'Test2', color: 'blue' }
    ]}
  ];

  constructor() { }

  ngOnInit() { }
  
  onAddCard(list: List) {
    let card: Card = { id: list.length, title: 'Test1234', color: 'yellow' };
    list.cards.push(card);
	console.log(this.maximumNumberOfCards);
	if(this.maximumNumberOfCards < list.cards.length){
	   this.maximumNumberOfCards = list.cards.length;
	}
	console.log(this.maximumNumberOfCards);
	this.rowHeight = this.originalRowHeight + 100 * (list.cards.length -1);
  }
  
  onAddList() {
    let list = { id: 2, title: 'Fertig 2', content: 'Todo2', columns: 1, cards: [
       { id: 0, title: 'Test2', color: 'blue' }
    ]}
	this.columns = this.lists.length + 1;
	this.lists.push(list);
  }
  
  onRenameList(list: List) {
    list.title = "Hallo Welt";
  }
  
  onRenameCard(card: Card) {
    card.title = "Hallo Welt";
  }
}
