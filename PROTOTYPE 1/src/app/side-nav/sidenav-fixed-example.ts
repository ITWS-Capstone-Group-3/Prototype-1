import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

/** @title Fixed sidenav */
@Component({
  selector: 'sidenav-fixed-example',
  templateUrl: 'sidenav-fixed-example.html',
  styleUrls: ['sidenav-fixed-example.css'],
})
export class SidenavFixedExample {
  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private _formBuilder: FormBuilder) {}

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */