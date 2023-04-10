import { Component } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Checklist Item #1', step: 1, type: 'lobby' },
  { position: 2, name: 'Checklist Item #2', step: 4, type: 'lobby' },
  { position: 3, name: 'Checklist Item #3', step: 6, type: 'lobby' },
];
