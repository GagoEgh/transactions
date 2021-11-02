import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransactionService } from 'src/app/shared/transactions.service';
import {Transation } from 'src/app/shared/interfaces';
import {Types} from "../../enums/types"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tab: any;
  list:any =[];
  Types = Types
  constructor(public service: DataTransactionService, public route: Router,
    public activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((result: any) => {
      this.tab = result['tab'];
      this.list = this.service.transations.filter((transation:Transation)=>transation.type ===this.service.types[this.tab])
    })

  }

}
