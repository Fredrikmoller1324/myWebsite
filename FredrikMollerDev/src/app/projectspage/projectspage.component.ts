import { Component, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Observable } from 'rxjs';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss'],
})
export class ProjectspageComponent implements OnInit {
  constructor(private projectsService: ProjectsService) {}

  projects$: Observable<any> | undefined;

  ngOnInit(): void {
    this.projects$ = this.projectsService.getProjects();
  }

  _returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
