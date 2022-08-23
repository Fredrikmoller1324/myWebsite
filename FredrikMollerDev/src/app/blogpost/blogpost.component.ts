import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../services/blog.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


const options = {
  renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) =>
          `<img class="img-fluid" src="https://${node.data.target.fields.file.url}"/>`
  },
};

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  blogPost$: Observable<any> | undefined;

 

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.blogPost$ = this.blogService.getPostById(id);
    });
  }

  _returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText,options);
  }
}
