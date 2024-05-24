import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { GorhomBottomSheetProps } from 'components/BottomSheet/types';
import React, { forwardRef, useCallback } from 'react';

const SpringBottomSheet = forwardRef<BottomSheetModal, GorhomBottomSheetProps>(
  (props, ref) => {
    const {
      snapPoints,
      children,
      containerStyle,
      enablePanDownToClose,
      onDismiss,
      ...restProps
    } = props;

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior={'none'}
        />
      ),
      [],
    );
    return (
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={ref}
        containerStyle={[containerStyle]}
        enablePanDownToClose={enablePanDownToClose}
        backdropComponent={renderBackdrop}
        onDismiss={onDismiss}
        {...restProps}>
        {children}
      </BottomSheetModal>
    );
  },
);

export default SpringBottomSheet;
