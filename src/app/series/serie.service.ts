import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay } from 'rxjs';
import { Series } from './series';

@Injectable({ providedIn: 'root' })
export class SeriesService {
  private http = inject(HttpClient);
  private url = '/series.json';  

  getAll(): Observable<Series[]> {
    return this.http.get<Series[]>(this.url).pipe(shareReplay(1));
  }

getAverageSeasons(): Observable<number> {
  return this.getAll().pipe(
    map((list) => {
      if (list.length === 0) return 0;

      let total = 0;
      for (const item of list) {
        total += item.seasons;
      }

      const avg = total / list.length;
      return avg;
    })
  );
}
}
