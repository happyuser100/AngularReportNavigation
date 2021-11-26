import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';
import { PhotoModel } from 'src/app/models/photo-model';
import { PostModel } from 'src/app/models/post-model';


@Component({
  selector: 'app-report4',
  templateUrl: './report4.component.html',
  styleUrls: ['./report4.component.css']
})
export class Report4Component implements OnInit {

  posts: PostModel[] = [];

  listData: MatTableDataSource<PostModel> = new MatTableDataSource<PostModel>([]);;
  displayedColumns: string[] = ["id", "name", "title", "body"];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private reportService: ReportService
  ) { }

  getPosts(): void {
    this.reportService.getPosts()
      .subscribe(
        posts => {
          this.posts = posts;

          this.listData = new MatTableDataSource(posts);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
      )
  }

  ngOnInit() {
    this.getPosts()
  }


}
