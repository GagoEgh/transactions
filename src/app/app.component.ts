import { Component, OnInit } from '@angular/core';
import { DataTransactionService } from './shared/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public service: DataTransactionService) { }

  ngOnInit(): void {
    this.service.getTransations()
  }
}
