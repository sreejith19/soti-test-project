import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any[]=[];
  catId:any;
  subId:any;
  constructor(private dataService : DataService, private activatedRoute:ActivatedRoute, private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.catId=this.activatedRoute.snapshot.paramMap.get('catId');
    this.subId=this.activatedRoute.snapshot.paramMap.get('subId');
    
    console.log(this.subId);
    if(this.subId){
      this.dataService.getProductsBySubId(this.subId).subscribe((data:any)=>{
        this.products=data.data;
      });
    }
    else if(this.catId){
      this.dataService.getProductsByCatId(this.catId).subscribe((data:any)=>{
        this.products=data.data;
      });
    }
    else{
      this.dataService.getProducts().subscribe((data:any)=>{
        this.products=data.data;
      });
    }
  }

  ngOnInit(): void {
  }
  onClickHandler(id:any){
    this.router.navigate(["/products/details",id]);
  }

}
