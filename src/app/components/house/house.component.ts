import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryappService } from 'src/app/services/harryapp.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styles: []
})
export class HouseComponent implements OnInit {
  house: any = {};
  members: any[]= [];
  totalMembers:number;
  error: boolean;
  mensajeError: string;
  dtOptions: DataTables.Settings = {};
  temp: boolean = false;
  loading: boolean;

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      processing: true
    };
  }

  constructor(private router: ActivatedRoute, private harryapp: HarryappService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getHouse(params['id']);
    }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.message;
    });
  }

  getHouse(id: string){
    this.harryapp.getHouse(id)
      .subscribe(house => {
        this.house = house[0];
        this.getMembers(this.house.name);
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.message;
    });
  }

  getMembers(houseName: string){
    this.harryapp.getMembers(houseName)
      .subscribe((members: any) => {
        this.members = members;
        this.totalMembers = this.members.length;
        this.temp = true;
        this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.message;
    });
  }
}
