import { Component, Input } from '@angular/core';
import { main } from 'src/app/modules/data-model/data.module';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  @Input() detail!: main;

  // for typewriter effect
  currentTextIndex = 0;
  currentlyDisplayedText = '';

  constructor() {}

  ngOnInit(): void {
    this.typeWriterEffect();
  }

  typeWriterEffect() {
    const currentText = this.detail.titles[this.currentTextIndex];
    const textLength = currentText.length;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < textLength) {
        // Update the string being displayed with a new character
        this.currentlyDisplayedText = currentText.substring(0, i + 1);
        i++;
      } else {
        // Move on to the next string in the array
        clearInterval(typingInterval);
        setTimeout(() => {
          this.currentTextIndex++;
          if (this.currentTextIndex >= this.detail.titles.length) {
            // If we've reached the end of the array, start over
            this.currentTextIndex = 0;
          }
          // Start the typewriter effect again
          this.typeWriterEffect();
        }, 2000); // Wait for 2 seconds before moving on to the next string
      }
    }, 100); // Wait for 0.1 seconds before adding another character
  }
}
