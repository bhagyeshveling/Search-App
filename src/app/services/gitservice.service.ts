import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  baseUrl: String;
  endUrl: String;
  
  constructor(public http: Http) {
    this.baseUrl = 'https://api.github.com/users/';
    this.endUrl = "/repos";
   }

   /*getProfile(userid){
    return this.http.get(this.baseUrl + userid)
            .subscribe(res => res.json());
  } */

  getRepos(userid){
    return this.http.get(this.baseUrl + userid + this.endUrl)
            .subscribe(res=>res.json());
  }

}
