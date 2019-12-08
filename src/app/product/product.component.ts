import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyServices:AlertifyService) { }
  title = "Ürün Listesi"
  filterText = ""
  products:Product[]=[
    {id:1,name:"Asus 5000 laptop",price:2500,categoryId:1,imageUrl:"https://media.istockphoto.com/photos/man-using-laptop-with-blank-screen-at-table-in-the-office-picture-id868873268",description:"Asus laptop"},
    {id:2,name:"A4text mouse",price:25,categoryId:2,imageUrl:"https://images.freeimages.com/images/large-previews/048/blue-wireless-mouse-3-1243242.jpg",description:"A4 tect mouse"},
    {id:3,name:"Samsung A70",price:25,categoryId:2,imageUrl:"https://cdn.akakce.com/samsung/samsung-galaxy-a70-128gb-z.jpg",description:"A4 tect mouse"}

  ];
  ngOnInit() {
  }

  addToCard(product){
    this.alertifyServices.error(product.name + " Added");
  }

}
