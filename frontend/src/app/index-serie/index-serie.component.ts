import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
};

@Component({
  selector: 'app-index-serie',
  templateUrl: './index-serie.component.html',
  styleUrls: ['./index-serie.component.css']
})
export class IndexSerieComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit','actions'];
  dataSource: MatTableDataSource<UserData>;
  series:any;

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort: any =  MatSort;

   constructor(private router: Router, private _ServerService: ServerService) {
    // Create 100 users

    this._ServerService.getServer('/series').then(
      (data:any) => {
        console.log(data);
        this.series = data;
      }, (error: any) => {
        console.log(error);
      }
      );
      
    this.dataSource = new MatTableDataSource(this.series);
    // Assign the data to the data source for the table to render
    
  }

  ngAfterViewInit() {
    
    this.paginator._intl.itemsPerPageLabel = 'Series por página';
    this.paginator._intl.getRangeLabel = this.getRangeLabel;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRangeLabel = (page: number, pageSize: number, length: number): any => {
    if (length === 0 || pageSize === 0) {
        return '0 de ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
};

  ngOnInit(): void {
    
  }

  agregarSerie(): void{
    this.router.navigateByUrl('/series/serie');
  }

  editSerie(id:number): void{
    this.router.navigateByUrl('/series/serie/'+id);
  }

}

