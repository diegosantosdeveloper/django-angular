import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api:ApiService) { }
  selected_member: any = { name: ''};

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.api.getMember(Number(id)).subscribe(
      {next: (data) => this.selected_member = data}
    )
  }
}
