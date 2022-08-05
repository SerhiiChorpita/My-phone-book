import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss'],
})
export class Lesson04Component implements OnInit {
  @Input() newUsers: UserData[] = [];
  public arrUser: UserData[] = [
    { name: 'pavlo', surname: 'pavliv', number: '3298123756' },
    { name: 'sofia', surname: 'zhuk', number: '3299123786' },
    { name: 'ira', surname: 'tytar', number: '3297654745' },
    { name: 'vasylyna', surname: 'vrublevska', number: '3292789752' },
    { name: 'alejandro', surname: 'del rio albrechet', number: '3289045753' },
    { name: 'petro', surname: 'petriv', number: '3291065777' },
    { name: 'petya', surname: 'zhuk', number: '3292400757' },
  ];
  public mainSearch!: any;
  public checkNewPhone: boolean = false;
  public field = '';
  public type = '';
  public addFN: string = '';
  public addSN: string = '';
  public addPN: string = '';
  public freePN!: number;

  public visible: string = 'visibility:visible; opacity: 1';
  public hidden: string = 'visibility:hidden; opacity: 0';
  public bgVisible: string = 'visibility:visible';
  public bgHidden: string = 'visibility:hidden';
  public checkVisbl: boolean = false;

  public checkSaveBtn!: boolean;
  public editStatus: boolean = false;
  public editIndex!: number;

  public checkSort1: boolean = false;
  public checkSort2: boolean = false;
  public checkSort3: boolean = false;
  public backGrVisibl1: boolean = false;
  public backGrVisibl2: boolean = false;
  public backGrVisibl3: boolean = false;
  public backGrStatus1: boolean = false;
  public backGrStatus2: boolean = false;
  public backGrStatus3: boolean = false;
  public backUp: string =
    'background-image: url(/assets/image/sort-amount-down.svg)';
  public backDown: string =
    'background-image: url(/assets/image/sort-amount-up.svg)';

  public userData!: UserData;

  constructor() { }

  ngOnInit(): void { }

  addPhone(): void {
    this.checkNewPhone = !this.checkNewPhone;
    this.checkSaveBtn = true;
  }
  addName() {
    if (this.addFN && this.addSN && this.addPN) {
      this.userData = {
        name: this.addFN,
        surname: this.addSN,
        number: this.addPN,
      };
      this.arrUser.push(this.userData);
      this.addFN = '';
      this.addSN = '';
      this.addPN = '';
    }
  }
  updateName(): void {
    if (this.addFN && this.addSN && this.addPN) {
      this.arrUser[this.editIndex].name = this.addFN;
      this.arrUser[this.editIndex].surname = this.addSN;
      this.arrUser[this.editIndex].number = this.addPN;
      this.addFN = '';
      this.addSN = '';
      this.addPN = '';
    }
  }
  editAdd(index: number): void {
    this.checkVisbl = !this.checkVisbl;
    this.editIndex = index;
    this.checkSaveBtn = false;
    if (!this.field) {
      this.addFN = this.arrUser[this.editIndex].name;
      this.addSN = this.arrUser[this.editIndex].surname;
      this.addPN = this.arrUser[this.editIndex].number;
    } else {
      this.addFN = this.newUsers[this.editIndex].name;
      this.addSN = this.newUsers[this.editIndex].surname;
      this.addPN = this.newUsers[this.editIndex].number;
    }
  }
  deleteName(index: number) {
    this.arrUser.splice(index, 1);
  }
  closeAddWindow() {
    this.addFN = '';
    this.addSN = '';
    this.addPN = '';
  }
  visibility(): void {
    this.checkVisbl = !this.checkVisbl;
  }
  sortMe(check: boolean, arr: Array<string>): any {
    if (check) return arr.sort(), arr.reverse();
    else if (!check) return arr.sort();
  }
  bGrStatus1(): boolean {
    this.backGrStatus2 = false;
    this.backGrStatus3 = false;
    this.fastUpdate(true, false, false);
    this.backGrStatus1 = !this.backGrStatus1;
    return (bgStatus1 = this.backGrStatus1);
  }
  bGrStatus2(): boolean {
    this.backGrStatus1 = false;
    this.backGrStatus3 = false;
    this.fastUpdate(false, true, false);
    this.backGrStatus2 = !this.backGrStatus2;
    return (bgStatus2 = this.backGrStatus2);
  }
  bGrStatus3(): boolean {
    this.backGrStatus1 = false;
    this.backGrStatus2 = false;
    this.fastUpdate(false, false, true);
    this.backGrStatus3 = !this.backGrStatus3;
    return (bgStatus3 = this.backGrStatus3);
  }
  fastUpdate(first: boolean, second: boolean, third: boolean) {
    this.backGrVisibl1 = first;
    this.backGrVisibl2 = second;
    this.backGrVisibl3 = third;
  }
  changeSort(type: string): void {
    this.type = type;
    console.log(this.type);
  }
}

export let bgStatus1!: boolean;
export let bgStatus2!: boolean;
export let bgStatus3!: boolean;

export interface UserData {
  name: string;
  surname: string;
  number: string;
}
