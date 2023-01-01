import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService implements OnInit {

  baseUrl = 'https://kitsu.io/api/edge/'
  constructor(private https: HttpClient) { }

  ngOnInit(): void {
    
  }


  getAllAnime(method:any){
    return this.https.get(this.baseUrl + method).pipe(catchError(err => this.ErrorHandler(err)),map(res =>{
      console.log(res);
      return res;
    }))
  }

  getSingleDetail(method:any){
    return this.https.get(this.baseUrl + 'anime/' + method).pipe(catchError(err => this.ErrorHandler(err)),map(res =>{
      console.log(res);
      return res;
    }))
  }

  getTrendingAnime(){
    return this.https.get(this.baseUrl + 'trending/anime').pipe(catchError(err => this.ErrorHandler(err)),map(res =>{
      console.log(res);
      return res;
    }))
  }


  private ErrorHandler(handler: HttpErrorResponse){
    let message = '';
    let statusCode = handler.status;
    if(statusCode === 401){
      console.log(statusCode);
    }
    if(handler.error instanceof ProgressEvent){
      console.log('in Progress Event');
      message = 'Network Error';
    }else{
      message = handler.error.message;
      console.error(
        `BackEnd Code returned With ${handler.status}, ` +
        `body Was ${handler.error}`
      )
    }
    return throwError(message);
  }
}
