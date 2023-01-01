import { CommonApiService } from './../Service/common-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  animeId:any;
  animeName:any;
  animeDetail:any;
  coverImg:any;
  posterImg:any;
  animeTitle:any;
  animeDescription:any;
  startedDate:any;
  animeStatus:any;
  animeageRating:any;
  animeRating:any;
  animeEnd:any;
  constructor(private api: CommonApiService, private route: ActivatedRoute,private router: Router) {
    this.route.queryParams.subscribe(param =>{
      this.animeId = (param['id'])
    })
   }

  ngOnInit() {
    this.getDetails();
  }

  navigate(){
    this.router.navigate(['trending-anime'])
  }

  navigateAnime(){
    this.router.navigate(['home'])
  }

  getDetails(){
    this.api.getSingleDetail(this.animeId).subscribe((res:any) =>{
      this.animeName = res.data.attributes.titles.en_jp;
      this.animeDetail = res.data.attributes;
      if(res.data.attributes.coverImage != null){
        this.coverImg = res.data.attributes.coverImage.small
      }else{
        this.coverImg = ''
      };
      this.posterImg = res.data.attributes.posterImage.tiny;
      this.animeTitle = res.data.attributes.titles.en_jp;
      this.animeDescription = res.data.attributes.description;
      this.startedDate = res.data.attributes.startDate;
      this.animeStatus = res.data.attributes.status;
      this.animeageRating = res.data.attributes.ageRatingGuide;
      this.animeRating = res.data.attributes.averageRating;
      this.animeEnd = res.data.attributes.endDate;
      console.log(res);
    })
  }

}
