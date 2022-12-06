import { Component } from '@angular/core';
import {SuperheroModel} from "../../../shared/model/superhero.model";
import {MatTableDataSource} from "@angular/material/table";
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-superheroes-table',
  templateUrl: './superheroes-table.component.html',
  styleUrls: ['./superheroes-table.component.scss']
})

export class SuperheroesTableComponent {
  superheroesList: SuperheroModel[] = [
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
    this.dataSource.data=this.superheroesList;
  }

  addSuperhero(){
    this.superheroesList.push({isEditable: true});
    this.dataSource.data=this.superheroesList;
  }

  openDialog(element: SuperheroModel){
    let dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.removeSuperhero(element);
    });

  }
  removeSuperhero(element: SuperheroModel){
      const index = this.superheroesList.findIndex(el => el.name == element.name);
      this.superheroesList.splice(index,1);
      this.dataSource.data=this.superheroesList;
    };

  isEditable(element: SuperheroModel) {
    element.isEditable=true;
  }
  saveChanges(element: SuperheroModel) {
    element.isEditable=false;
  }

}


