import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StartServices } from "./IssueServices";
import { jsonpFactory } from '../../../node_modules/@angular/http/src/http_module';

@Component({
  selector: 'editemployee-form',
  templateUrl: './editissue-form.component.html'
})
export class EditIssueFormComponent {
  severity: string[] = ["Minor", "Major", "Critical"];
  status: string[] = ["Open", "Idle", "Closed"];
  constructor(private issueService: StartServices, private route: ActivatedRoute, private router: Router) { }
  id: any;
  issue: any;

  ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
          this.id = +params['id'];
      });
      this.issue = this.issueService.getIssue(this.id);
  }

  onSubmit(formValue: any){
    console.log("Form Value is here in edit mode= " + JSON.stringify(formValue, null, 4));
    let updatedIssue= {
          id: this.issue.id,
          description: formValue.description,
          severity: formValue.severity,
          status: formValue.status,
          CreatedDate: formValue.CreatedDate,
          ResolvedDate:formValue.ResolvedDate,
          selected:false
        };
       this.issueService.updateIssue(updatedIssue);
    this.router.navigate(['issues']);//see this shit too
  }
}
