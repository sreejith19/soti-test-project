import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subcategories:any[]=[];
  catId:any;
  constructor(private dataService:DataService, private activatedRoute : ActivatedRoute) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    this.dataService.getSubCategoryByCatId(this.catId).subscribe((data:any)=>{
      this.subcategories=data.data;
    });
   }

  ngOnInit(): void {
  }

}
