import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-steps',
  imports: [],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent implements OnInit {
  private _httpService = inject(HttpService);

  ngOnInit(): void {
    this._httpService.getSteps().subscribe((result) => {
      console.log(result);
    });
  }
}
