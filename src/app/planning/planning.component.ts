import { Component, OnInit } from '@angular/core';
import { PlanningService } from './planning.service';

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
