import { Component, OnInit } from '@angular/core';
import { StartServices } from "./IssueServices";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  
})
export class IssuesComponent implements OnInit {
  Issues: any[];
  show: boolean = true;
  showSev: boolean = true;showStat: boolean = true;showCdata: boolean = true;showRdate: boolean = true;
    
    
  
  constructor(private IssueService: StartServices) { }

  ngOnInit() {
    this.Issues = this.IssueService.getIssueList();
    console.log("on start we have"+this.Issues);
  }
 
  reset(){
    this.show = true;
    this.showSev= true;
    this.showStat= true;
    this.showCdata=true;
    this.showRdate = true;
  }
  deleteIssue(Issueid: any) {
    this.IssueService.deleteIssue(Issueid);
    this.Issues = this.IssueService.getIssueList();
  }
  BulkDeleteIssue() {
    
    this.IssueService.BulkDelete();
    this.Issues = this.IssueService.getIssueList();
  }
  toggle(id)
    {
      this.IssueService.toggle(id);  
  }

}
