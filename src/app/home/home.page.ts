import { Http } from '@angular/http';
import { GitserviceService } from './../services/gitservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: any[];
  private baseUrl = "https://api.github.com/users/";
  private endUrl = "/repos";
  constructor(private service: GitserviceService,public http: Http){
    
  }

  /*getProfile(userid){
    return this.http.get(this.baseUrl + userid + this.endUrl)
            .subscribe(res => res.json());
  } */

  getRepos(input: HTMLInputElement){
      let getUserid = { userid: input.value };
      let i = 0;
      this.http.get(this.baseUrl + getUserid.userid + this.endUrl)
            .subscribe(response => {
              if(response.json().length === 0)
              {
                this.posts = [response.json().length];
             //   alert('No repositories for this userID');
             /*   setTimeout(() => {
                  window.location.reload();
                }, 1);  */
              }
              else
             {
                this.posts = response.json();
              }
            },
            (error: Response) => {
               if(error.status === 404)
                 this.posts = [error.status];
                 console.log(this.posts);
              //   alert('UserID not found!!');
              /*   setTimeout(() => {
                  window.location.reload();
                }, 1); */
            });


  }
  
}
