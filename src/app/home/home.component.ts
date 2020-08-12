import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ds: DataService, private router: Router) { }

  moviesList:any= [];
  userMessage:any="";
  
  // Get all the list of movies
  getMovies(){
    this.userMessage="Loading..."
    this.ds.getMovies()
      .then((response)=>{
        this.moviesList = response;
        this.userMessage = "";
      })
      .catch((err)=>{
        this.userMessage = err;
      })
  }

  showMovieDetails(index:number,name:any){
    this.router.navigate(['movie-details'], {
      queryParams: {'id':index, 'title':name}
    });
  }
  ngOnInit(): void {
    // Load all the movies on page init 
    this.getMovies();
  }

}
