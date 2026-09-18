import {
  Component,
  inject,
  signal,
  HostListener,
  computed,
  OnInit
} from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  readonly themeService = inject(ThemeService);
  readonly isDark = computed(() => this.themeService.theme() === 'dark');
  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal<string>('home');

  readonly navItems: NavItem[] = [
    { label: 'About',      href: '#about'      },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Skills',     href: '#skills'     },
    { label: 'Contact',    href: '#contact'    }
  ];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const scrollY = window.scrollY;

    // Check if at the bottom of the page
    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
      this.activeSection.set('contact');
      return;
    }

    // Check sections in reverse order (bottom to top)
    const sectionIds = ['contact', 'skills', 'projects', 'experience', 'about'];
    const triggerOffset = 220;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - triggerOffset;
        if (scrollY >= top) {
          this.activeSection.set(id);
          return;
        }
      }
    }

    this.activeSection.set('home');
  }
}
