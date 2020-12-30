import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  public selectedProcessor: object | undefined;

  public selectedGraphicCard: object | undefined;

  public selectedMotherBoard: object | undefined;

  public selectedRAM: object | undefined;

  public selectedPowerSupply: object | undefined;

  public selectedComputerCase: object | undefined;

  constructor() { }

  public fetchProductsWithCategory(category: string) {
    console.log('fetch', category);
  }

  public validateProductsCompatibility() {
    console.log('validateProductsCompatibility');
  }
}
