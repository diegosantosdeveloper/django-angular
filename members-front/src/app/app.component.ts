import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {name: 'Member 01', id: 1, surname: 'Sales', phone: 'http://www.minhapp.com/photo01'}, 
    {name: 'Member 02', id: 2, surname: 'Fitzgerald', phone: 'http://www.minhapp.com/photo02'},
    {name: 'Member 03', id: 3, surname: 'Alonso', phone: 'http://www.minhapp.com/photo02'}
  ]

  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe({
      next: (data) => this.members = data,
      error: () => console.log("Aconteceu um erro!!!")
    });
  }

  memberClicked = (member:any) => {
    this.router.navigate(['member-detail', member.id]);
  }
}
