import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
   // Get the Id from the parmeter
   id: number = 0; 
   product : Product | undefined; 
   constructor(private route: ActivatedRoute, private productService: ProductService){
   }

   ngOnInit():void
   {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id){
      this.productService.getProductById(this.id).subscribe((response) => {
          this.product = response; 
          console.log(this.product);
      });
    }
   }
}
