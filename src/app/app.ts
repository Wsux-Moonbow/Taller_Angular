import { Component } from '@angular/core';
import { SeriesListComponent } from './series/series-list/series-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SeriesListComponent],
  template: '<app-series-list></app-series-list>'
})
export class AppComponent {}
