import { Component} from '@angular/core';
import { HarryappService} from '../../services/harryapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  houses: any[] = [];
  totalMembers: number;
  error: boolean;
  mensajeError: string;
  loading: boolean;

  constructor(private harry: HarryappService) { 
    this.loading = true;
    this.error = false;
    this.harry.getHouses().subscribe((data: any) => {
        this.houses = data;
        this.loading = false;
      }, (errorServicio) => {
        this.error = true;
        this.loading = false;
        this.mensajeError = errorServicio.message;
      });
  }
}
