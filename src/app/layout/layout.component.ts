import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CoreModule } from '../core/core.module';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnDestroy {
  destroyed = new Subject<void>();
  smallDevice!: boolean;
  currentScreenSize!: string;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';

            this.smallDevice =
              this.currentScreenSize ===
                this.displayNameMap.get(Breakpoints.XSmall) ||
              this.currentScreenSize ===
                this.displayNameMap.get(Breakpoints.Small);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
