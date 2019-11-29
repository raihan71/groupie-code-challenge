export class Group {
  fetch() {
    if(localStorage.getItem('groups') === null || localStorage.getItem('groups') == undefined){
      alert('No Groups Founds...');
      let groups = [
        {
          id: 1,
          name: 'Group Six',
          members: ['Ervin Howell', 'Mrs. Dennis Schulist']
        }
      ];
      localStorage.setItem('groups',JSON.stringify(groups));
      return;
    }else{
      alert('Found Groups...')
    }
  }
}