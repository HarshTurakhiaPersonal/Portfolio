import { Component, OnInit } from '@angular/core';
import { navs } from './constant/constant';
import details from 'src/assets/data/data.json';
import { FirestoreService } from './service/firestore/firestore.service';
import { data } from './modules/data-model/data.module';
import { MonsterComponent } from './components/monster/monster.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  loading = false;

  constructor(private firestore: FirestoreService, private monster: MonsterComponent) {}

  ngOnInit(): void {}

  navs = navs;
  details = details;

  isDarkEnable = sessionStorage.getItem("vfx_theme")=='t'? true: false;

  toggleDarkMode(): void {
    this.isDarkEnable = !this.isDarkEnable;
    sessionStorage.setItem("vfx_theme", this.isDarkEnable?'t':'f');
    this.monster.changeTheme();
  }
}
