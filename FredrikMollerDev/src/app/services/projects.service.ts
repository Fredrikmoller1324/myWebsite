import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {createClient, Entry } from "contentful"
import { from } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private client = createClient({
    space: environment.spaceID,
    accessToken: environment.accessToken,
  });

  constructor() { }

  getProjects(query?: object){
    const promise = this.client.getEntries(Object.assign({}, query, { content_type: "projects" }))
    return from(promise);
   }
}
