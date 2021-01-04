import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {AuthService, User} from '../../../core/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  public user$: Observable<User | null> = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

}
