import { Component } from '@angular/core';
import {CreatingGameComponent} from "./creating-game/creating-game.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CreatingGameComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planning Poker Online';
  gameName="Create Game";
}
