import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  movies:any=[];
  userMessage:string="";
  movieTitle:string="";
  constructor(private ds:DataService) { }

  onEnter(event:any){
    if (event.key === "Enter") {
      this.search();
    }
  };

  search(){
    if(this.movieTitle){
      this.userMessage="loading..";
      this.ds.searchMovies(this.movieTitle).subscribe((res:any)=>{
        this.movies = res.Search;
        if(this.movies){
          this.userMessage = "";
        }else{
          this.userMessage = res.Error;
        }
      })
    }else{
      this.userMessage = "Please enter a movie title"
    }
  }

  ngOnInit(): void {
      
  }



}
