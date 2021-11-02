import { Component, OnInit, Type} from '@angular/core';
import { Router } from '@angular/router';
import { Types } from 'src/app/enums/types';
import { DataTransactionService } from '../../shared/transactions.service'


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  Types = Types


  constructor(public service: DataTransactionService,public rout:Router) { }
  
  ngOnInit(): void {

  }

  public goList():void {
    this.rout.navigate(['/navigator'],{queryParams:{tab:`${Types.income}`}})
  }
}

