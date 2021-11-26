import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlbumModel } from 'src/app/models/album-model';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {

  albums: AlbumModel[] = [];

  listData: MatTableDataSource<AlbumModel> =  new MatTableDataSource<AlbumModel>([]);;
  displayedColumns : string[] = ["id", "title"];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(
    private reportService: ReportService
  ) { }

  getAlbums(): void {
    this.reportService.getAlbums()
      .subscribe(
        albums => {
          this.albums = albums;

          this.listData = new MatTableDataSource(albums);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        }
      )
  }

  ngOnInit() {
    this.getAlbums()
  }
}
