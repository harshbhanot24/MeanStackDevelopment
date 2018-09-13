import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { IssuesComponent } from './Issue/issuesComponent';
import { IssueComponent } from './Issue/issueComponent';
import { AddIssueFormComponent } from './Issue/addIssue-form.component';
import { EditIssueFormComponent } from './Issue/editissue-form.component';
import { StartServices } from './Issue/IssueServices';
import { HomeComponent } from './home-component/home-component.component';
import { issueNameFilterPipe} from './Issue/issueNameFilter';
@NgModule({
  declarations: [
    AppComponent, IssuesComponent, HomeComponent, IssueComponent, issueNameFilterPipe, AddIssueFormComponent,EditIssueFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [StartServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
