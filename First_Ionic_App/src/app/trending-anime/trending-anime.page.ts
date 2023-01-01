import { ActivatedRoute, Router } from '@angular/router';
import { CommonApiService } from './../Service/common-api.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-anime',
  templateUrl: './trending-anime.page.html',
  styleUrls: ['./trending-anime.page.scss'],
})
export class TrendingAnimePage implements OnInit {

  trending:any;
  constructor(private api: CommonApiService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getTrendingAnime();
  }

  getTrendingAnime(){
    this.api.getTrendingAnime().subscribe((res:any) =>{
      this.trending = res.data
      console.log(res)
    })
  }

  Detail(id:any){
    this.router.navigate(['detail'],{queryParams:{id}})
  }

  navigate(){
    this.router.navigate(['home'])
  }

}
