import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ActivityStackParamList = {
  ActivityScreenTabs: undefined;
  JobDetails: { id: number; title: string };
};

export type ActivityJobDetailsProps = NativeStackScreenProps<
  ActivityStackParamList,
  'JobDetails'
>;
