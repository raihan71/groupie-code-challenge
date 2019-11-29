import { Component, OnInit } from '@angular/core';
import { GroupsService } from "../../../services/groups.service";

@Component({
  selector: 'groupie-group-list',
  templateUrl: './group-list.component.html',
  styles: []
})
export class GroupListComponent implements OnInit {
  groups;
  constructor(
    private groupService: GroupsService
  ) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }
  
  deleteGroup(id){
    for (let i = 0; i < this.groups.length; i++) {
      if(this.groups[i].id == id){
        this.groups.splice(i,1);
      }
    }
    this.groupService.deleteGroup(id);
    alert("Success deleted data");
  }

}
