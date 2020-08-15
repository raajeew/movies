import { Injectable } from '@angular/core';
import { movies } from '../data/movies'
import { actors } from '../data/actors'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getMovies(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(movies.length > 0){
            resolve(movies);
          }else{
            reject("Something went wrong! Please try again later.");
          }
        },0)
      })
  }

  getMoviesByTitle(title:any){
    return new Promise((resolve, reject)=>{
     let resultFound =  movies.find((item, index)=>{
        if(movies[index].Title == title){
          return item;
        }
      })
      if(resultFound){
        resolve(resultFound);
      }else{
        reject("Something went wrong! Please try again later.");
      }
    })
  }

  getActors(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(actors.length > 0){
          resolve(actors);
        }else{
          reject("Something went wrong! Please try again later.");
        }
      },0)
    })
  }

  // search movies online by title
  searchMovies(title:any){
    let searchUrl:any = "http://www.omdbapi.com/?s="+title+"&apikey=cf68b94e";
    return this.http.get(searchUrl);
  }


}
