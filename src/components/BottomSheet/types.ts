import { BottomSheetProps } from '@gorhom/bottom-sheet';

export interface GorhomBottomSheetProps extends BottomSheetProps {
  onDismiss?: () => void;
}
