import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  constructor(private blogService:BlogService) {}

  blogPosts$: Observable<any> | undefined

  ngOnInit(): void {
   this.blogPosts$ = this.blogService.getPosts();
  }

}
