import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav-autosize-example.html',
  styleUrls: ['sidenav-autosize-example.css'],
})
export class SidenavAutosizeExample {
  showFiller = false;
  displayedColumns = ['position', 'name', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  name: string;
  position: number;
  step: number;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'LAX', step: 1, symbol: 'H' },
  { position: 2, name: 'ALB', step: 4, symbol: 'He' },
  { position: 3, name: 'JFK', step: 6, symbol: 'Li' },
];

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
