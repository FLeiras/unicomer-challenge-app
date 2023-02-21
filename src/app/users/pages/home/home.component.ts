import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/interfaces/user.interface';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  public users: User[] = [];

  constructor(private UserService: UserService) {}
  ngOnInit(): void {
    this.UserService.getUsers().subscribe((user) => (this.users = user));
  }
}
