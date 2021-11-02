import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Types } from '../enums/types';
import { TransationResponse, Transation } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataTransactionService {
  public transations: Transation[] = [];
  public length: number = 0
  public types = ["income", "investment", "outcome", "loan"];
  constructor(private http: HttpClient) { }

  public getTransations(): void {
    this.http.get<TransationResponse>('assets/data.json').
      subscribe((response: TransationResponse) => {
        this.transations = response.data;
      });
  }

}
