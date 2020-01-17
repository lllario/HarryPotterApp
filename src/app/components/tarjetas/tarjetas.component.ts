import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent{

  @Input() items: any[] = [];

  constructor(private router: Router) { }
  
  verHouse(item: any){
    let houseId;
    houseId = item._id;
    this.router.navigate(['/house', houseId]);
  }
}
