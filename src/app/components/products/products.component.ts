import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() prd :any;
  @Output() onDel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMilk(id:string) : void{
     this.onDel.emit(id);   
  }

}
