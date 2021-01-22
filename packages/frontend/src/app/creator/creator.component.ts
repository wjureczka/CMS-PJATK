import { Component, OnInit } from '@angular/core';
import {CreatorProduct, CreatorService} from './creator.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  constructor(private creatorService: CreatorService, private router: Router) { }

  ngOnInit(): void {
  }

  public handleAddToCartClick(): void {
    this.creatorService.addSetToCart();
    this.router.navigate(['/cart']);
  }

  public handleProcessorChange($event: CreatorProduct): void {
    this.creatorService.selectedProcessor = $event;
  }

  public handleRAMChange($event): void {
    this.creatorService.selectedRAM = $event;
  }

  public handleGraphicCardChange($event): void {
    this.creatorService.selectedGraphicCard = $event;
  }

  public handlePowerSupplyChange($event): void {
    this.creatorService.selectedPowerSupply = $event;
  }

  public handleMotherboardChange($event): void {
    this.creatorService.selectedMotherBoard = $event;
  }

  public handleComputerCaseChange($event): void {
    this.creatorService.selectedComputerCase = $event;
  }
}
