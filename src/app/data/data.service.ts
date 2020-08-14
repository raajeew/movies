import { Injectable } from '@angular/core';
import { movies } from '../data/movies'
import { actors } from '../data/actors'
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
        },500)
      })
  }

  getMoviesByTitle(title:any){
    console.log(title);
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
      // setTimeout(()=>{
      //   if(movies.length > 0){
      //     resolve(movies[id]);
      //   }else{
      //     reject("Something went wrong! Please try again later.");
      //   }
      // },10)
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
      },500)
    })
}

}
