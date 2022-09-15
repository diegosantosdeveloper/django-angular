import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  member = { name: '', surname: '', phone: ''};

  constructor(private api: ApiService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  save() {
    this.api.createMember(this.member).subscribe(
      {next: (data) => this.appComponent.members.push(data)}
    )
  }
}
