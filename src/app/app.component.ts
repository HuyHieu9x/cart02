import { Component } from '@angular/core';
import { Product } from './components/products/product.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProgramming';

  currentItem = 'Sum of Milk :';
  numberMilk:number = 0;

  products : Product[] = [
    {
      id : 'pd01',
      name : 'MILO',
      description : 'Ngon hon khi uong lanh',
      image : 'https://www.nestlemilo.com.vn/sites/default/files/2021-12/hop-giay-uong-lien_Thumb_180ml_0.png',
      price : 12000,
      quantity : 2
    },
    {
      id : 'pd02',
      name : 'OVANTINE',
      description : 'Ngon hon khi uong cung milo',
      image : 'https://minhcaumart.vn/media/com_eshop/products/8850086191404.jpg',
      price : 11000,
      quantity : 3
    }

  ]

  deleteMilk(id:string){
    alert('del '+id);
    const index = this.products.findIndex(product  => product.id === id);

    if(index != -1){
      this.products.splice(index,1);
    }

    let numberMilk = 0;

    for (const item of this.products) {
     
    }

    this.numberMilk = numberMilk;
  }  

}
