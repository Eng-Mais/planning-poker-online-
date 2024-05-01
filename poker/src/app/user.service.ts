import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private gameName: string = '';
  private gameType: string = '';

  constructor() {}

  setGameName(name: string): void {
    this.gameName = name;
  }

  getGameName(): string {
    return this.gameName;
  }

  setGameType(gameType: string): void {
    this.gameType = gameType;
  }

  getGameType(): string {
    return this.gameType;
  }
}
