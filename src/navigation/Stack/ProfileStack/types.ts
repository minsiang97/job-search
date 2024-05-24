import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ProfileStackParamList = {
  Profile: undefined;
  PDFViewer: { fileName: string };
};

export type PDFViewerProps = NativeStackScreenProps<
  ProfileStackParamList,
  'PDFViewer'
>;

export type ProfileProps = NativeStackScreenProps<
  ProfileStackParamList,
  'Profile'
>;
