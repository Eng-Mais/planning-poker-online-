import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit {
  gameName: string = ''; 
  gameType: string = ''; 
  cardList: number[] = [];
  selectedCard: number | null = null; 
  cardsPicked: boolean = false;
  countdownStarted: boolean = false;
  countdownValue: number = 2;
  countdownInProgress: boolean = false;
  countdownFinished: boolean = false;
  average: number =0;
  selectedCards: number[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.gameName = this.userService.getGameName();
    this.gameType = this.userService.getGameType();

    if (this.gameType.includes('Fibonacci')) {
      this.cardList = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    } else if (this.gameType.includes('Numbers 1-15')) {
      this.cardList = Array.from({ length: 15 }, (_, i) => i + 1);
    } else if (this.gameType.includes('Powers of 2')) {
      this.cardList = [0, 1, 2, 4, 8, 16, 32, 64];
    }
  }


  displayNameEntered = false;
  displayName: string = '';
  register = true;
  overlay = true;
  submitDisplayName(): void {
      if (this.displayName.trim() !== '') {
          this.displayNameEntered = true;
          this.register = false;
          this.overlay = false;
      }
  }


  onCardClick(card: number): void {
    console.log('Clicked card:', card);
    this.selectedCard = card; 
    this.cardsPicked = true;
    this.calculateAverage(card); 
  }

  revealCards(): void {
    console.log('Revealing cards...');

  }

  startCountdown(): void {
    this.countdownStarted = true;
    this.countdownInProgress = true;
    this.updateCountdown();
  }
  
  updateCountdown(): void {
    setTimeout(() => {
      if (this.countdownValue > 0) {
        this.countdownValue--;
        this.updateCountdown();
      } else {
        // Countdown finished
        this.countdownStarted = false;
        this.countdownInProgress = false;
        this.countdownFinished = true;
        this.countdownValue = 0; 
        this.revealCards()
      }
    }, 800);
  }

  finsihCountdown(): void{
    console.log("countdown fisnihed");
    this.countdownStarted = false;
    this.countdownInProgress = false;
    this.countdownFinished = true;
  }
  calculateAverage(selectedCard: number): void {
    // Add the selected card to the array of selected cards
    this.selectedCards.push(selectedCard);

    // Calculate the sum of selected cards
    let sum = 0;
    for (const card of this.selectedCards) {
        sum += card;
    }

    // Calculate the average
    if (this.selectedCards.length > 0) {
        this.average = sum / this.selectedCards.length;
    } else {
        this.average = 0; // Set average to 0 if no cards are selected to avoid division by zero
    }
}

}
