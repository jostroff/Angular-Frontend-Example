import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { switchMap, map } from 'rxjs/operators';
// import { Console } from 'console';

@Component({
  selector: 'app-hphc-head',
  templateUrl: './hphc-head.component.html',
  styleUrls: ['./hphc-head.component.css']
})
export class HphcHeadComponent implements OnInit {

  user_id: string;

  // // constructor() { }
  // constructor(private router: Router
  //   // , private userService: UserService
  //   ) {
  //   this.user = new User();
  // }

  user$: Observable<User>; //Yes, needs $ sign to function properly.

  //Note: Need this to be private router => This sets the actual router here.
  constructor(route: ActivatedRoute, private router: Router, userService: UserService) {
    this.user$ = route.params.pipe(
      map(params => params.id),
      switchMap(id => userService.find(id))
    ); //Constructor necessary for routing the user ID to the observable.
  }

  ngOnInit(): void {

  }
  //Expects something in input function.
  onSubmit() {
    this.router.navigate([`/hphc-head/${this.user_id}`]);
    this.user_id = ""; //Do we want to set this to null?
  }
  
}
