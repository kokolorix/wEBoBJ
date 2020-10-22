import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from "rxjs";
import { Status, Projekt } from 'src/app/shared/projekt.interface'
import { ProjektService } from 'src/app/shared/projekt.service'
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-projektliste4',
  templateUrl: './projektliste4.component.html',
  styleUrls: ['./projektliste4.component.scss']
})
export class Projektliste4Component implements OnInit {
  displayedColumns: string[] = ['details', 'titel', 'art', 'vnb', 'status'];
  dataSource: MatTableDataSource<Projekt>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public filter: string;
  public projekte$: Observable<Projekt[]>;

  public projektIds: number[];
  public expandedElement: Projekt | null;

  constructor(
    private router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly projektService: ProjektService,
  ) {
    // Assign the data to the data source for the table to render
    this.activatedRoute.params.subscribe((params) => {
      if(params.filter)
        this.filter = (params.filter as string).trim().toLowerCase();
    });
    this.dataSource = new MatTableDataSource(this.projektService.getAllProjekte());
    this.dataSource.filter = this.filter;
    this.projektIds = this.dataSource.filteredData.map(x => x.id);
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filter;

    this.projektIds = this.dataSource.filteredData.map(x => x.id);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openProjektDetail(row: Projekt): void {
    let url:string = `/projekt4/${row.id}`;
    if (this.filter) 
      url += `/${this.filter}/${this.projektIds}`;
    
      this.router.navigateByUrl(url).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
    }

}
