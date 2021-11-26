import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-tool-bar',
  templateUrl: './main-tool-bar.component.html',
  styleUrls: ['./main-tool-bar.component.css']
})
export class MainToolBarComponent implements OnInit {

  @Output() currentReportChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(e: any) {
    e.preventDefault();
    console.log(e.currentTarget.id);

    let id = e.currentTarget.id.replace("Report","");
    this.currentReportChange.emit(+id);
  }
}
