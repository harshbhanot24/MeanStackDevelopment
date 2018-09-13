import { Injectable} from '@angular/core';
import { Init } from "./Issue_initService";
import { JsonpModule } from '../../../node_modules/@angular/http';

@Injectable()
export class StartServices extends Init {
  constructor() {
    super();
    this.load();
  }

  getIssueCount() {
    let issueList = JSON.parse(localStorage.getItem('IssueData'));
    return issueList.length;
  }

  getIssueList() {
    let issueList = JSON.parse(localStorage.getItem('IssueData'));
    return issueList;
  }

  getIssue(id: any) {
    let issueList = JSON.parse(localStorage.getItem('IssueData'));
    let issue:any = null;
    for (let i = 0; i < issueList.length; i++) {
      if (issueList[i].id == id) {
        issue = issueList[i];
        break;
      }
    }
    return issue;
  }

  addIssue(newIssue: any) {
    let issueList = JSON.parse(localStorage.getItem('IssueData'));
    issueList.push(newIssue);
    localStorage.setItem('IssueData', JSON.stringify(issueList));
  }

  updateIssue(updatedIssue: any) {
    let issueList = JSON.parse(localStorage.getItem('IssueData'));
    for (let i = 0; i < issueList.length; i++) {
      if (issueList[i].id == updatedIssue.id) {
        issueList[i] = updatedIssue;
        
      }
    }
    localStorage.setItem('IssueData', JSON.stringify(issueList));
  }

  deleteIssue(id: any) {
    
    let IssueList = JSON.parse(localStorage.getItem('IssueData'));
    for (let i = 0; i < IssueList.length; i++) {
      if (IssueList[i].id == id) {
        IssueList.splice(i, 1);
      }
    }
    localStorage.setItem('IssueData', JSON.stringify(IssueList));
  }
   BulkDelete()
    {
      
    let IssueList = JSON.parse(localStorage.getItem('IssueData'));
      console.log(JSON.stringify(IssueList));
    let issue: any;
      for (let i = 0; i < IssueList.length; i++) {
       issue = IssueList[i];
       if (issue.selected == true) { 
        for (let i = 0; i < IssueList.length; i++) {
          if (IssueList[i].id == issue.id) {
            IssueList.splice(i, 1);
          }
        }
        localStorage.setItem('IssueData', JSON.stringify(IssueList));
       }

      }
    
   }

   toggle (id : any ){
      let issue: any;
    let IssueList = JSON.parse(localStorage.getItem('IssueData'));
  for (let i = 0; i < IssueList.length; i++) {
       issue = IssueList[i];
       if (issue.id === id) {
       if(issue.selected==false){
        issue.selected=true;
        break;
       }else
       issue.selected=false;
       break;
      }
    
      }
      localStorage.setItem('IssueData', JSON.stringify(IssueList));
   }
}
