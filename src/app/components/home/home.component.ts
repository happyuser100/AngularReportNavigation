import { getLocaleNumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedTabId?: number;
  lblReport1?: string;
  lblReport2?: string;
  lblReport3?: string;
  lblReport4?: string;

  constructor() { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.selectedTabId = 0;
    this.getLabels();
  }
  getLabels() {
    this.lblReport1 = "Report 1";
    this.lblReport2 = "Report 2";
    this.lblReport3 = "Report 3";
    this.lblReport4 = "Report 4";
  }

  tabChanged(event: MatTabChangeEvent) {
    debugger
    this.selectedTabId = event.index;
  }

  currentReportChange(report: number) {
    console.log("report=" + report);
    this.selectedTabId = report;
  }
}


