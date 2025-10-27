import { Component, inject,OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { SeriesService } from '../serie.service';   
import { Series } from '../series';

import { NgIf, NgFor, DecimalPipe } from '@angular/common';            

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [NgIf, NgFor, DecimalPipe],
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {  // 👈 Export público
  private svc = inject(SeriesService);

  series: Series[] = [];
  average = 0;
  selected: Series | null = null;

  ngOnInit(): void {
    this.svc.getAll().subscribe(list => {
      this.series = list;
      let total = 0;
      for (const s of this.series) total += s.seasons;
      this.average = this.series.length ? total / this.series.length : 0;
    });
  }

  select(s: Series) { this.selected = s; }
}
