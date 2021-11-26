import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';
import { PhotoModel } from 'src/app/models/photo-model';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.css']
})
export class Report3Component implements OnInit {

  photos: PhotoModel[] = [];

  listData: MatTableDataSource<PhotoModel> = new MatTableDataSource<PhotoModel>([]);;
  displayedColumns: string[] = ["id", "title", "thumbnailUrl"];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private reportService: ReportService
  ) { }

  getPhotos(): void {
    this.reportService.getPhotos()
      .subscribe(
        photos => {
          this.photos = photos;

          this.listData = new MatTableDataSource(photos);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
      )
  }

  ngOnInit() {
    this.getPhotos()
  }


}
