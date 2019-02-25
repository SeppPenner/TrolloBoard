import { Card } from './card';

export class List {
  id: number;
  title: string;
  content: string;
  columns: number;
  cards: Card[];
}