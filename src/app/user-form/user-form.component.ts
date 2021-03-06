import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent { //Note: This is all unused now.

  user: User;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

  goToUser(id: string) {
    this.router.navigate(['/users/{id}'])
  }

  goToHead(){
    this.router.navigate(['/hphc-head']) //New. Needed? Idk.
  }
}
