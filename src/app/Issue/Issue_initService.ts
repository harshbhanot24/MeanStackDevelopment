export class Init {
    load() {
      if (localStorage.getItem('IssueData') === null || localStorage.getItem('IssueData') == undefined) {
        console.log("Creating the initial set of issue ...");
        var issues = [
          {
            id: 1,
            description: "first issue",
            severity: "Minor",
            status: "Open",
            CreatedDate: "21-03-19",
            ResolvedDate:"21-01-19",
            selected:false
          },
          {
            id: 2,
            description: "Second Issue",
            severity: "Major",
            status: "Idle",
            CreatedDate: "1-01-19",
            ResolvedDate:"21-01-19",
            selected:false
          },
          {
            id: 3,
            description: "Ram",
            severity: "Critical",
            status: "Closed",
            CreatedDate: "21-01-19",
            ResolvedDate:"21-01-19",
            selected: false
          }
        ];
        localStorage.setItem('IssueData', JSON.stringify(issues));
      }
      else {
        console.log("Loaded the issues from local storage ...");
      }
    }
  }
  