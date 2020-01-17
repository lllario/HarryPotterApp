import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HarryappService {
  
  constructor(private http: HttpClient) { 

  }

  getQuery(query: string, nameHouse?: string){
    const url = `https://www.potterapi.com/v1/${query}`;

    const params = new HttpParams()
    .set('key', '$2a$10$uNxqktZT7j6gYoG4nQ/rw.XHwuI/9UMXr/vnOqZqwy..E05DAJiFq')
    .set('house', nameHouse);

    return this.http.get(url, {params});
  }

  getHouses(){
    return this.getQuery('houses');
  }

  getHouse(id: string){
    return this.getQuery(`houses/${id}`);
  }

  getMembers(houseName: string){
    return this.getQuery(`characters`, houseName);
  }
}
