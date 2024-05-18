import {
  JobCategory,
  JobList,
  JobState,
  JobType,
} from 'screens/JobSearch/types';

export const recommendedJobList: JobList[] = [
  {
    id: 1,
    jobTitle: 'Senior Mobile Engineer',
    minimumSalary: 5000,
    maximumSalary: 10000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: `
        <div style="min-width: 300px;
          margin: 0 auto;
          height: 1000px;
          position: relative;
        ">
          <div style="min-height: 100px;position: relative; background: #ffd6cd; width=100vw;" id="section1">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 1</h1>
          </div>
          <div style="min-height: 100px;position: relative; background: #ddebfd; width=100vw;" id="section2">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 2</h1>
          </div>
        </div>
        </div>
      `,
    companyInfo: {
      registrationNo: '43985734A-10',
      companyName: 'Example Sdn Bhd',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
  },
  {
    id: 2,
    jobTitle: 'Senior Full Stack Engineer',
    minimumSalary: 5000,
    maximumSalary: 10000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: `
        <div style="min-width: 300px;
          margin: 0 auto;
          height: 1000px;
          position: relative;
        ">
          <div style="min-height: 100px;position: relative; background: #ffd6cd; width=100vw;" id="section1">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 1</h1>
          </div>
          <div style="min-height: 100px;position: relative; background: #ddebfd; width=100vw;" id="section2">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 2</h1>
          </div>
        </div>
        </div>
      `,
    companyInfo: {
      registrationNo: '43985734A-11',
      companyName: 'Example Sdn Bhd 2',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
  },
  {
    id: 3,
    jobTitle: 'Senior DevOps Engineer',
    minimumSalary: 10000,
    maximumSalary: 20000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: `
        <div style="min-width: 300px;
          margin: 0 auto;
          height: 1000px;
          position: relative;
        ">
          <div style="min-height: 100px;position: relative; background: #ffd6cd; width=100vw;" id="section1">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 1</h1>
          </div>
          <div style="min-height: 100px;position: relative; background: #ddebfd; width=100vw;" id="section2">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 2</h1>
          </div>
        </div>
        </div>
      `,
    companyInfo: {
      registrationNo: '43985734A-13',
      companyName: 'Example Sdn Bhd 3',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
  },
  {
    id: 4,
    jobTitle: 'Senior Web Engineer',
    minimumSalary: 5000,
    maximumSalary: 10000,
    category: JobCategory.IT,
    jobType: JobType.PART_TIME,
    description: `
        <div style="min-width: 300px;
          margin: 0 auto;
          height: 1000px;
          position: relative;
        ">
          <div style="min-height: 100px;position: relative; background: #ffd6cd; width=100vw;" id="section1">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 1</h1>
          </div>
          <div style="min-height: 100px;position: relative; background: #ddebfd; width=100vw;" id="section2">
              <h1 style="text-align: center;
                line-height: 500px;
                color: #666666;
                margin: 0;">Section 2</h1>
          </div>
        </div>
        </div>
      `,
    companyInfo: {
      registrationNo: '43985734A-13',
      companyName: 'Example Sdn Bhd 4',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
  },
];
