import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi"
  categories:Category[]=[
    {id:1,name:"Leptop"},
    {id:2,name:"Bilgisayar Aksesuarları"},
    {id:3,name:"Kitap"}

  ]
  ngOnInit() {
  }

}
