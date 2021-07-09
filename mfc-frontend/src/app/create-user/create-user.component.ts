import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  first_name: string = '';
  last_name: string = '';
  patronyc: string = '';
  gender: string = 'male';
  calendar: string = '';

  constructor() {}

  ngOnInit(): void {}
}
