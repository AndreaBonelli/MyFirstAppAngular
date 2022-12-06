import { Component } from '@angular/core';
import {PopModel} from "../../../shared/model/pop.model";
import {MatTableDataSource} from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
//import {PopModel} from "../../../shared/model/pop.model";
//import {DialogComponent} from "../../../shared/components/dialog";

@Component({
  selector: 'app-pop-list',
  templateUrl: './pop-list.component.html',
  styleUrls: ['./pop-list.component.scss']
})

export class PopListComponent {
  popList: PopModel[] = [
    {
      name: 'Bruce Wayne',
      superheroName: 'Batman',
      superPower: 'money',
      powerLevel: 4,
      isEditable: false
    },
    {
      name: 'Clark Kent',
      superheroName: 'Superman',
      superPower: 'alien',
      powerLevel: 10,
      isEditable: false
    },
    {
      name: 'Peter Parker',
      superheroName: 'Spiderman',
      superPower: 'Spider abilities',
      powerLevel: 5,
      isEditable: false
    }
  ];

  displayedColumns: string[] = ['name', 'superheroName', 'superPower', 'powerLevel','actions'];

  dataSource = new MatTableDataSource();

  constructor(public dialog: MatDialog) {
    this.dataSource.data=this.popList;
  }

  addSuperhero(){
    this.popList.push({isEditable: true});
    this.dataSource.data=this.popList;
  }

  removeSuperhero(element: PopModel){
      const index = this.popList.findIndex(el => el.name == element.name);
      this.popList.splice(index,1);
      this.dataSource.data=this.popList;

    /*
    let dialogRef = this.dialog.open( {
    width: '250px',
    data: { name: this.name, animal: this.animal }
  */
    };

  isEditable(element: PopModel) {
    element.isEditable=true;
  }
  saveChanges(element: PopModel) {
    element.isEditable=false;
  }

}


