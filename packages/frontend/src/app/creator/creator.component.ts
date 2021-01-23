import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CreatorProduct, CreatorService} from './creator.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnDestroy {

  constructor(private creatorService: CreatorService, private router: Router) { }

  ngOnDestroy(): void {
    this.creatorService.resetCreator();
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
