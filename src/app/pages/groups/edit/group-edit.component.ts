import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { GroupsService } from "./../../../services/groups.service";
import { UsersService } from "./../../../services/users.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'groupie-group-edit',
  templateUrl: './group-edit.component.html',
  styles: []
})
export class GroupEditComponent implements OnInit {
  group;
  id;
  name;
  users:any=[];
  members:any=[];
  member;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private groupService: GroupsService
  ) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit() {
    let groups = this.groupService.getGroups();
    this.group=groups.find(resp => resp.id==this.id);
    if(this.group){
      this.name = this.group.name;
      this.members = this.group.members;
    }
    this.subscription = this.userService.getUsers().subscribe(resp => {
      if(resp){
        this.users = resp 
      }else{
        const users = [{name:'Michael'},{name:'Michele'},{name:'Mike'}];
        this.users.push(users);
      }
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSave(){
    if(this.name && this.members){
      let newData = {
        id: this.group.id,
        name: this.name,
        members: this.members
      };
      this.groupService.updateGroup(this.group,newData);
      alert("Success updated data");
      this.router.navigateByUrl(`/`)
    }else{
      alert("Your data is not fully filled, please filled form first");
    }
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

}
