import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  id:any;
  constructor(private dataService:DataService, private activatedRoute:ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getProductById(this.id).subscribe((response:any)=>{
      this.product=response.data;
      // console.log(this.product);
    });
   }

  ngOnInit(): void {
  }

}
