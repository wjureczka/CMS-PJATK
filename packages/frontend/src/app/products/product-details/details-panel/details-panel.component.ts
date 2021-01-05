import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss']
})
export class DetailsPanelComponent implements OnInit {

  @Input() price: number;

  @Input() description: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
