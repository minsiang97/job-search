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
    minimumSalary: 50000000,
    maximumSalary: 100000000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: {
      mainDescription: 'Seeking a skilled Senior Mobile Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
      <div>
      <p style="font-weight: 600">Responsibilities</p>
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
        <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
        <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
      </ul>
    </div>
      `,
    },
    companyInfo: {
      registrationNo: '43985734A-10',
      companyName: 'Example Sdn Bhd',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-05-19 6:00:00',
    keywords: [
      'Mobile Engineer',
      'Mobile Application Developer',
      'Frontend Developer',
      'React Native',
      'React',
      'Flutter',
      'iOS',
      'Android',
      'Java',
      'Kotlin',
      'Objective-C',
      'Swift',
      'Senior',
      'Senior Mobile Engineer',
      'Javascript',
    ],
  },
  {
    id: 2,
    jobTitle: 'Senior Full Stack Engineer',
    minimumSalary: 5000,
    maximumSalary: 10000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: {
      mainDescription:
        'Seeking a skilled Senior Full Stack Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-11',
      companyName: 'Example Sdn Bhd 2',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-05-17 14:00:00',
    keywords: [
      'React',
      'NodeJs',
      'Frontend',
      'Backend',
      'Full Stack Developer',
      'Senior Full Stack Engineer',
      'Javascript',
      'MERN',
    ],
  },
  {
    id: 3,
    jobTitle: 'Senior DevOps Engineer',
    minimumSalary: 10000,
    maximumSalary: 20000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: {
      mainDescription: 'Seeking a skilled Senior DevOps Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-13',
      companyName: 'Example Sdn Bhd 3',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-05-15 10:00:00',
    keywords: ['DevOps', 'DevOps Engineer', 'Senior DevOps Engineer'],
  },
  {
    id: 4,
    jobTitle: 'Senior Web Engineer',
    minimumSalary: 5000,
    maximumSalary: 10000,
    category: JobCategory.IT,
    jobType: JobType.PART_TIME,
    description: {
      mainDescription: 'Seeking a skilled Senior Web Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-13',
      companyName: 'Example Sdn Bhd 4',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-03-11 15:00:00',
    keywords: [
      'Senior Web Engineer',
      'Software Developer',
      'Software Engineer',
      'Web Application Developer',
    ],
  },
  {
    id: 5,
    jobTitle: 'Mobile Engineer',
    minimumSalary: 3000,
    maximumSalary: 6000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: {
      mainDescription: 'Seeking a skilled Mobile Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-10',
      companyName: 'Example Sdn Bhd',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-05-19 6:00:00',
    keywords: [
      'mobile engineer',
      'mobile application developer',
      'frontend developer',
      'react native',
      'react',
      'flutter',
      'ios',
      'android',
      'java',
      'kotlin',
      'objective-c',
      'swift',
      'mobile engineer',
      'javascript',
    ],
  },
];

export const jobList: JobList[] = [
  ...recommendedJobList,
  {
    id: 6,
    jobTitle: 'Full Stack Engineer',
    minimumSalary: 3000,
    maximumSalary: 6000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: {
      mainDescription: 'Seeking a skilled Full Stack Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-11',
      companyName: 'Example Sdn Bhd 2',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-05-17 14:00:00',
    keywords: [
      'react',
      'nodejs',
      'frontend',
      'backend',
      'full stack developer',
      'full stack engineer',
      'javascript',
      'mern',
    ],
  },
  {
    id: 7,
    jobTitle: 'DevOps Engineer',
    minimumSalary: 7000,
    maximumSalary: 10000,
    category: JobCategory.IT,
    jobType: JobType.FULL_TIME,
    description: {
      mainDescription: 'Seeking a skilled DevOps Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-13',
      companyName: 'Example Sdn Bhd 3',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-05-15 10:00:00',
    keywords: ['devops', 'devops engineer'],
  },
  {
    id: 8,
    jobTitle: 'Web Engineer',
    minimumSalary: 3000,
    maximumSalary: 6000,
    category: JobCategory.IT,
    jobType: JobType.PART_TIME,
    description: {
      mainDescription: 'Seeking a skilled Web Engineer to the team',
      bulletDescription: `
      <div style="color: #495057">
      <ul style="padding-left: 10px">
        <li style="padding-left: 10px">Good working culture</li>
        <li style="padding-left: 10px">Competitive compensation package</li>
        <li style="padding-left: 10px">Flexible working hours</li>
        <li style="padding-left: 10px">Remote working arrangement</li>
      </ul>
    </div>
    `,
      jobDescription: `
    <div>
    <p style="font-weight: 600">Responsibilities</p>
    <ul style="padding-left: 10px">
      <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
      <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
      <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
    </ul>
  </div>
    `,
    },
    companyInfo: {
      registrationNo: '43985734A-13',
      companyName: 'Example Sdn Bhd 4',
    },
    jobLocation: {
      state: JobState.KUALA_LUMPUR,
      area: 'Old Klang Road',
    },
    createdAt: '2024-03-11 15:00:00',
    keywords: [
      'web engineer',
      'software developer',
      'software engineer',
      'web application developer',
    ],
  },
];
