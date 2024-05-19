import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type JobSearchStackParamList = {
  JobSearch: undefined;
  JobSearchResult: { search: string };
  JobDetails: { id: number; title: string };
  RecommendedJobs: undefined;
};

export type JobSearchResultProps = NativeStackScreenProps<
  JobSearchStackParamList,
  'JobSearchResult'
>;

export type JobSearchProps = NativeStackScreenProps<
  JobSearchStackParamList,
  'JobSearch'
>;

export type JobDetailsProps = NativeStackScreenProps<
  JobSearchStackParamList,
  'JobDetails'
>;

export type RecommendedJobsProps = NativeStackScreenProps<
  JobSearchStackParamList,
  'RecommendedJobs'
>;

export enum HeaderTitleAlignType {
  CENTER = 'center',
  LEFT = 'left',
}
