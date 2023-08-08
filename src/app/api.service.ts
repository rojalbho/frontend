import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}
  getJobDetails() {
    console.log('getJobDetails() called');
    let jobDetailArray = [
      {
        id: 1,
        name: 'Java Developer',
        employmentType: 'Contract',
        location: 'Reston, VA',
        jobType: 'Web development',
        datePosted: '05/30/2023',
        jobDesc: 'This is job description JD',
        jobResp: 'This is job Respondsibility JD'
      }, {
        id: 2, 
        name: 'QA engineer', 
        employmentType: 'Contract',
        location: 'Boston, MA',
        jobType: 'Quality Assuarance',
        datePosted: '06/30/2023',
        jobDesc: 'This is job description QA',
        jobResp: 'This is job Respondsibility QA'
      }, {
        id: 3,
        name: 'Third Job',
        employmentType: 'Full time',
        location: 'Houstonton, VA',
        jobType: 'Web development',
        datePosted: '07/30/2023',
        jobDesc: 'This is job description',
        jobResp: 'This is job Respondsibility'
      }
    ];

    return jobDetailArray;
  }
}






