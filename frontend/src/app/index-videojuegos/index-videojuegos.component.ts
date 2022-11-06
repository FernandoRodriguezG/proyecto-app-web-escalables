import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatIcon } from '@angular/material/icon';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
};

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-index-videojuegos',
  templateUrl: './index-videojuegos.component.html',
  styleUrls: ['./index-videojuegos.component.css']
})
export class IndexVideojuegosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit','actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  @ViewChild(MatSort) sort: any =  MatSort;

   constructor(private router: Router) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
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

  agregarVideojuego(): void{
    this.router.navigateByUrl('/videojuegos/nuevo');
  }

  editVideojuego(id:number): void{
    this.router.navigateByUrl('/videojuegos/nuevo/'+id);
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
