import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { DataService } from '../data/data.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface ActorName {
  name: string;
  children?: ActorName[];
}

const TREE_DATA: ActorName[] = [];

/** Flat node with expandable and level information */
interface ActorFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent {
  constructor(private ds:DataService){
    this.getActors();
  }
  private _transformer = (node: ActorName, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ActorFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  getActors(){
    this.ds.getActors().then(
      (response:any)=>{
        this.dataSource.data = response;
      }
    )
  }

  hasChild = (_: number, node: ActorFlatNode) => node.expandable;
}