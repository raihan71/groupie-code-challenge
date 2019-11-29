import { Component, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { v4 as uuid } from "uuid";
import { UsersService } from "../../../services/users.service";
import { GroupsService } from './../../../services/groups.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'groupie-group-add',
  templateUrl: './group-add.component.html',
  styles: []
})
export class GroupAddComponent implements OnInit {
  users:any=[];
  members:any=[];
  member:any;
  usersrption: Subscription;
  name:string;
  group;

  constructor(
    private usersService: UsersService,
    private groupService: GroupsService,
    private router: Router
  ) { 
  }


  ngOnInit() {
    this.usersrption = this.usersService.getUsers().subscribe(resp => {
      this.users = resp
    });

    this.group = this.groupService.getGroups();
  }

  ngOnDestroy(){
    this.usersrption.unsubscribe()
  }

  inputName(event:any){
    this.name = event.target.value;
  }

  addMembers(){
    if(this.member)
      this.members.push(this.member);
  }

  deleteMember(member){
    for (let i = 0; i < this.members.length; i++) {
      if(this.members[i] == member){
        this.members.splice(i,1);
      }
    }
  }

  onSave(){
    if(this.name && this.members){
      let newMember = {
        id:uuid(),
        name: this.name,
        members: this.members
      };
      this.group.push(newMember);
      this.groupService.addGroup(newMember);
      alert("Success added data");
      this.router.navigateByUrl(`/`);
    }else{
      alert("Your data is not fully filled, please filled form first");
    }
  }

}
