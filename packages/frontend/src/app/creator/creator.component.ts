import { Component, OnInit } from '@angular/core';
import {CreatorService} from './creator.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  constructor(private creatorService: CreatorService) { }

  ngOnInit(): void {
  }

  public handleProcessorChange($event): void {
    console.log($event);
  }

  public handleRAMChange($event): void {
    console.log($event);
  }

  public handleGraphicCardChange($event): void {
    console.log($event);
  }

  public handlePowerSupplyChange($event): void {
    console.log($event);
  }

  public handleMotherboardChange($event): void {
    console.log($event);
  }

  public handleComputerCaseChange($event): void {
    console.log($event);
  }
}
