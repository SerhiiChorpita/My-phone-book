import { Output, Pipe, PipeTransform } from '@angular/core';
import { UserData } from './lesson04.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  @Output() public newUsers: UserData[] = [];
  public checkName: any;

  transform(arrUser: UserData[], field: any): UserData[] {
    if (!arrUser) return [];
    if (!field) return arrUser;
    if (
      arrUser.filter((userName) =>
        userName.name.toLowerCase().includes(field.toLowerCase())
      ) &&
      arrUser.filter((userName) =>
        userName.name.toLowerCase().includes(field.toLowerCase())
      ) &&
      arrUser.filter((userNumber) =>
        userNumber.number.toString().includes(field)
      )
    ) {
      this.newUsers = [];
      let res1 = arrUser.filter((userName) =>
        userName.name.toLowerCase().includes(field.toLowerCase())
      );
      let res2 = arrUser.filter((userSurname) =>
        userSurname.surname.toLowerCase().includes(field.toLowerCase())
      );
      let res3 = arrUser.filter((userNumber) =>
        userNumber.number.toString().includes(field)
      );

      res1.forEach((arr, ind, array) => {
        this.checkName = array;
        this.newUsers.push(arr);
      });

      res2.forEach((arr, ind) => {
        if (this.checkName[ind] === arr && this.checkName[ind - 1] === arr) {
          this.newUsers.push(arr);
          console.log(this.checkName[ind]);
        }
      });
      res3.forEach((arr, ind) => {
        this.newUsers.push(arr);
      });
    }
    return this.newUsers;
  }
}