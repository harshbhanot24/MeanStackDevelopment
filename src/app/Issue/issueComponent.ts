import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { StartServices } from "./IssueServices";



@Component({
    templateUrl: './SingleIssuecomponent.html',
 
})
export class IssueComponent implements OnInit {
    id: any;
    issue: any;
    
    constructor(private issueService: StartServices, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this.issue = this.issueService.getIssue(this.id);
    }

    goBack(): void {
        this.location.back();
    }
}
