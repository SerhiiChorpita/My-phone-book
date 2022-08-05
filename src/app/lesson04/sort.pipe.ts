import { Pipe, PipeTransform } from '@angular/core';
import { UserData } from './lesson04.component';
import { bgStatus1 } from './lesson04.component';
import { bgStatus2 } from './lesson04.component';
import { bgStatus3 } from './lesson04.component';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(arrUser: UserData[], sort: any): UserData[] {
    if (!arrUser) return [];
    if (!sort) return arrUser;
    if (sort === 'bgStatus1') {
      if (bgStatus1)
        return arrUser.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
      return arrUser.sort((a, b) =>
        a.name < b.name ? 1 : a.name > b.name ? -1 : 0
      );
    } else if (sort === 'bgStatus2') {
      if (bgStatus2)
        return arrUser.sort((a, b) =>
          a.surname > b.surname ? 1 : a.surname < b.surname ? -1 : 0
        );
      else if (!bgStatus2)
        return arrUser.sort((a, b) =>
          a.surname < b.surname ? 1 : a.surname > b.surname ? -1 : 0
        );
    }
    if (bgStatus3)
      return arrUser.sort((a, b) =>
        a.number > b.number ? 1 : a.number < b.number ? -1 : 0
      );
    return arrUser.sort((a, b) =>
      a.number < b.number ? 1 : a.number > b.number ? -1 : 0
    );
  }
}
