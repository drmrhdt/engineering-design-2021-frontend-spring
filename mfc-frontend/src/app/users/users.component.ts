import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users;

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((users) => (this.users = users));
  }

  clear(table: Table) {
    table.clear();
  }
}
