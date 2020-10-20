import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable, of } from "rxjs";
import {Status, Projekt} from 'src/app/shared/projekt.interface'
import {ProjektService} from 'src/app/shared/projekt.service'

@Component({
  selector: 'app-projektliste4',
  templateUrl: './projektliste4.component.html',
  styleUrls: ['./projektliste4.component.scss']
})
export class Projektliste4Component implements OnInit {
  displayedColumns: string[] = ['titel', 'art', 'vnb', 'status'];
  dataSource: MatTableDataSource<Projekt>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public projekte$: Observable<Projekt[]>;


  expandedElement:Projekt | null;

  constructor(
    private readonly projektService: ProjektService,
  ) {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.projektService.getAllProjekte());
   }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
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

  openProjektDetail(row:Projekt) : void {
    this.expandedElement = this.expandedElement === row ? null : row
  }

}
