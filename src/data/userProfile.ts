import { JobState } from 'screens/JobSearch/types';
import { User } from 'screens/Profile/types';

export const user: User = {
  name: 'Ong Min Siang',
  location: JobState.KUALA_LUMPUR,
  summary:
    'My varied experience in IT (e.g. programming, software architecture, user experience (UX) designer, web developer, etc) stems from a simple desire to empower human lives with computing technologies. The world is becoming smaller and smaller by the day. Geographical boundaries are disappearing; cultural differences are fading. The human race is coming together.That’s what drives me: helping to pave the way towards an empowered global society.',
  workingExperience: [
    {
      title: 'Full Stack Engineer',
      companyName: 'Bjak Sdn Bhd',
      isCurrentEmployment: true,
      startDate: new Date('2024-04-01'),
      endDate: null,
      summary: `<div>
            <p style="font-weight: 600">Responsibilities</p>
            <ul style="padding-left: 10px">
              <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
              <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
              <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
            </ul>
          </div>`,
    },
    {
      title: 'Senior Mobile Engineer',
      companyName: 'Pertama Digital Berhad',
      isCurrentEmployment: false,
      startDate: new Date('2023-04-01'),
      endDate: new Date('2024-04-01'),
      summary: `<div>
              <p style="font-weight: 600">Responsibilities</p>
              <ul style="padding-left: 10px">
                <li style="padding-left: 10px">Develop and maintain responsive user interfaces</li>
                <li style="padding-left: 10px">Collaborate closely with UI/UX designers to implement pixel-perfect designs and ensure a seamless user experience</li>
                <li style="padding-left: 10px">Integrate with backend APIs to fetch and display data, ensuring data consistency and error handling</li>
              </ul>
            </div>`,
    },
  ],
  skills: [
    'Microsoft Excel',
    'Microsoft Word',
    'React',
    'React Native',
    'Javascript',
    'Typescript',
    'MongoDB',
    'Nodejs',
    'ExpressJs',
    'HTML',
    'CSS',
  ],
  languages: ['Bahasa Malaysia', 'English', 'Mandarin', 'Cantonese'],
  resume: '../../assets/pdf/Ong-Min-Siang-FlowCV-Resume-20240422.pdf',
};
