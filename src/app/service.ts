import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: "root"
  })

export class services {


  constructor(protected httpClient: HttpClient) { }
  

  addSale(sendObject): Observable<any> {
    return this.httpClient.post('http://localhost:3000/sales', sendObject, { observe: 'response' });
}

  findSale(id : string):Observable<any> {
    return this.httpClient.get('http://localhost:3000/sales/'+ id);
  }

  updateSale(sendObject,id:string): Observable<any> {
    return this.httpClient.put<any>('http://localhost:3000/sales/'+id,sendObject ,{ observe: 'response' });
  }

}