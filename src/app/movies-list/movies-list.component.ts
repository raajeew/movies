import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';
export interface MoviesDataType {
  Title: string;
  Year: string;
  Actors: string;
  Director: string;
  Released: string;
  Rating: string;
}
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  userMessage:any="";
  displayedColumns: string[] = ['title', 'year', 'cast', 'director', 'released', 'imdbRating'];
  dataSource: MatTableDataSource<MoviesDataType>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ds: DataService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.userMessage="Loading...";
    this.ds.getMovies()
    .then((response:any)=>{
        this.userMessage="";
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
    })
    .catch((err)=>{

    })
  }

  // details
  showMovieDetails(index:number,name:any){
    this.router.navigate(['movie-details'], {
      queryParams: {'id':index, 'title':name}
    });
  }

}
