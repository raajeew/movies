import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails:any={};
  userMessage:any="";
  pageTitle:any="";

  constructor(private activatedRoute: ActivatedRoute, private ds:DataService) { }

  ngOnInit(): void {
    this.userMessage = "Loading..."
    this.activatedRoute.queryParams.subscribe(params => {
        this.pageTitle = params.title;
        this.ds.getMoviesById(params.id).then((response)=>{
          this.movieDetails = response;
          this.userMessage="";
        });
     })
  }

}
