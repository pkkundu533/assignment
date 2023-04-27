import { Component, OnInit } from '@angular/core';
import { UserInformationService } from './user-information.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {

  constructor(private userInformationService: UserInformationService) { }
  public userInformation: User[] = [];
  ngOnInit(): void {
    this.userInformationService.getUserInformation().subscribe((userData: User[]) => {
      console.log(userData);
      this.userInformation = userData;

    })
  }

}
