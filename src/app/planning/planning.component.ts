import { Component, OnInit } from '@angular/core';
import { PlanningService } from './planning.service';
import { ApplicationModule } from '../routing/application.module';
import { AppRoutingModule } from '../routing/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: 'planning.component.html',
  styleUrls: ['planning.component.css']
})
export class PlanningComponent implements OnInit{
  title = "planning";

  ngOnInit(): void {
    
  }

  constructor(private planningService: PlanningService) {}
  
  
}
