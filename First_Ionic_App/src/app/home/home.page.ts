import { CommonApiService } from './../Service/common-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  Animes:any;
  constructor(private api: CommonApiService,private router: Router) {}

  ngOnInit(): void {
    this.getAnime();
  }


  getAnime(){
      this.api.getAllAnime('anime').subscribe((res:any) =>{
        this.Animes = res.data
        console.log(this.Animes)
      })
  }

  Detail(id:any){
    this.router.navigate(['detail'],{queryParams:{id}})
  }

  navigate(){
    this.router.navigate(['trending-anime'])
  }
}
