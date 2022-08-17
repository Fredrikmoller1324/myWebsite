import { Injectable } from "@angular/core";
import {createClient, Entry } from "contentful"
import { from } from "rxjs";
import { environment } from "src/environments/environment";

 @Injectable({
  providedIn: 'root',
 })

export class BlogService {
  
  private client = createClient({
    space: environment.spaceID,
    accessToken: environment.accessToken,
  });


  constructor(){}

  getPosts(query?: object){
   const promise = this.client.getEntries(Object.assign({}, query, { content_type: "blogPost" }))
   return from(promise);
  }

  getPostById(id: string){
    const promise = this.client.getEntry(id)
    return from(promise);
  }
}
