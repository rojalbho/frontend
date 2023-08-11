/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.css']
})
export class JobDescComponent implements OnInit {
jobDetail: any;

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.css']
})
export class JobDescComponent implements OnInit {
  jobDetail: any;

  constructor(private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const jobId = this.route.snapshot.params.id;
    this.jobDetail = this.apiService.getJobDetails().find(job => job.id === +jobId);
  }
}

