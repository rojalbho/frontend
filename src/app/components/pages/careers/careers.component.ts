/*import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  
  jobDetail: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.jobDetail = this.apiService.getJobDetails();
    console.log(this.jobDetail)
  }

}*/
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  jobDetails: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.jobDetails = this.apiService.getJobDetails();
  }

  openJobDescription(jobId: number): void {
    this.router.navigate(['job-desc', jobId]);
  }
}




