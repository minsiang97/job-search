import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Fonts from '@themes/Fonts';
import Text from '@components/Text';

const Recommended: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={Fonts.style.medium}>Hello recommended</Text>
      </View>
    </SafeAreaView>
  );
};

export default Recommended;
