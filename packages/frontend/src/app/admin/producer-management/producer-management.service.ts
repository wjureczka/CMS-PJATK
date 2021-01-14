import { Injectable } from '@angular/core';
import {HttpClient, HttpResponseBase} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Producer {
  producerId: number;
  producerName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProducerManagementService {

  constructor(private http: HttpClient) { }

  public getProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>('/api/producers');
  }

  public addProducer(producerName: string): Observable<Producer> {
    return this.http.post<Producer>('/api/producers', { producerName });
  }

  public deleteProducer(producerId: number): Observable<HttpResponseBase> {
    return this.http.delete<HttpResponseBase>(`/api/producers/${producerId}`);
  }

  public editProducer(producer: Producer): Observable<HttpResponseBase> {
    return this.http.put<HttpResponseBase>('/api/producers', producer);
  }
}
