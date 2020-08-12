import { Injectable } from '@angular/core';
import { movies } from '../data/movies'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMovies(){
      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          if(movies.length > 0){
            resolve(movies);
          }else{
            reject("Something went wrong! Please try again later.");
          }
        },300)
      })
  }

  getMoviesById(id:any){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(movies.length > 0){
          resolve(movies[id]);
        }else{
          reject("Something went wrong! Please try again later.");
        }
      },500)
    })
  }

}
