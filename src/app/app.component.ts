import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  darkMode = false;

  constructor() {
    const saved = localStorage.getItem('darkMode');
    this.darkMode = saved === 'true';
    this.applyTheme();
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.applyTheme();
  }

  applyTheme() {
    document.body.className = this.darkMode ? 'dark-theme' : 'light-theme';
  }
}


