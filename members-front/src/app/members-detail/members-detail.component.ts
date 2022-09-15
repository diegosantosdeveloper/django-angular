import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private api:ApiService,
    private appComponent: AppComponent) { }
  selected_member: any = { name: ''};
  selected_id: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (param: ParamMap) => {
        let id = parseInt(param.get('id')??'0');
        this.loadMember(id);
      }
    );
    
  }

  loadMember(id: Number) {
    this.api.getMember(id).subscribe(
      {next: (data) => this.selected_member = data}
    )
  }

  update() {
    this.api.updateMember(this.selected_member).subscribe(
      {next: (data) => this.selected_member = data}
    )
  }

  create() {
    this.router.navigate(['new-member']);
  }

  delete() {
    this.api.deleteMember(this.selected_member.id).subscribe(
      {next: (data) => {
        let i;
        this.appComponent.members.forEach((element, index) => {
          if (element.id == this.selected_member.id) {
            i = index;
          }
        });
        this.appComponent.members.splice(Number(i), 1);
      }
      }
    )
  }
} 
