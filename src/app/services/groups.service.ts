import { Injectable } from '@angular/core';
import { Group } from './../constants/group'

@Injectable({
  providedIn: 'root'
})
export class GroupsService extends Group {

  constructor() { 
    super()
    this.fetch();
  }

  getGroups(){
    let groups = JSON.parse(localStorage.getItem('groups'));
    return groups;
  }

  addGroup(newMbr){
    let groups = JSON.parse(localStorage.getItem('groups'));
    groups.push(newMbr);
    localStorage.setItem('groups',JSON.stringify(groups));
  }

  deleteGroup(id){
    let groups = JSON.parse(localStorage.getItem('groups'));
    for (let i = 0; i < groups.length; i++) {
      if(groups[i].id == id) {
        groups.splice(i,1);
      }     
    }
    localStorage.setItem('groups',JSON.stringify(groups));
  }

  updateGroup(oldMbr, newMbr){
    let groups = JSON.parse(localStorage.getItem('groups'));

    for (let i = 0; i < groups.length; i++) {
      if(groups[i].id == oldMbr.id) {
        groups[i] = newMbr
      }     
    }
    localStorage.setItem('groups',JSON.stringify(groups));
  }
  

}
