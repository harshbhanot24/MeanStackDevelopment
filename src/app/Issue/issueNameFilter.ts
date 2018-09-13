import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'issueNameFilter'})
export class issueNameFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((issue) =>
            issue.description.toLocaleLowerCase().startsWith(filter) != false) : value;
    }
}
