import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-component/home-component.component';
import { IssuesComponent } from './Issue/issuesComponent';
import { IssueComponent } from './Issue/issueComponent';
import { AddIssueFormComponent } from './Issue/addIssue-form.component';
import { EditIssueFormComponent } from './Issue/editissue-form.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:id', component: IssueComponent },
  { path: 'addissue', component: AddIssueFormComponent},
  { path: 'editIssue/:id', component: EditIssueFormComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
