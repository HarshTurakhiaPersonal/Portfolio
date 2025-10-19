import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() socials: any[] = [];
  @Input() name: string = '';
  theme: string;

  constructor() {
    this.theme = '';
  }

  ngOnInit() {
    // Get the current theme
    // This assumes you have a global CSS class that sets the current theme
    this.theme = document.body.className;
  }
}
