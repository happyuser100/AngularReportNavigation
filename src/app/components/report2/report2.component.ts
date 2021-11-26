import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';

import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {

  users: UserModel[] = [];

  listData: MatTableDataSource<UserModel> = new MatTableDataSource<UserModel>([]);;
  displayedColumns: string[] = ["name", "email", "website"];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private reportService: ReportService
  ) { }

  getUsers(): void {
    this.reportService.getUsers()
      .subscribe(
        users => {
          this.users = users;

          this.listData = new MatTableDataSource(users);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
      )
  }

  ngOnInit() {
    this.getUsers()
  }
}
