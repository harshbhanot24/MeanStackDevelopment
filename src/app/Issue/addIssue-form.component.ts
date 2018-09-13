import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StartServices } from "./IssueServices";

@Component({
  selector: 'addIssue-form',
  templateUrl: './addIssue-form.component.html'
})
export class AddIssueFormComponent {
  severities: string[] = ["Low", "Medium", "High"];
  statuses: string[] = ["Open", "In-Progress", "Closed"];

  constructor(private IssueService: StartServices, private router: Router) { }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 6));
    let issueCount = this.IssueService.getIssueCount();
    let newIssue = {
          id: issueCount + 1,
          description: formValue.description,
          severity: formValue.severity,
          status: formValue.status,
          CreatedDate: formValue.CreatedDate,
          ResolvedDate: formValue.ResolvedDate,
          selected: false
        };
    this.IssueService.addIssue(newIssue);
    this.router.navigate(['issues']);
  }
}
