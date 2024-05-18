import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '@components/Text';
import Fonts from '@themes/Fonts';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { recommendedJobList } from '@data/recommendedJob';
import Color from '@themes/Color';

const JobSearch: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.searchContainer}>
        <Text style={Fonts.style.h2}>Hello</Text>
        <TextInput style={styles.textInput} placeholder="Enter keywords" />
        <Button
          buttonText="Search"
          buttonType="primary"
          style={styles.button}
        />
      </View>
      <View style={styles.recommendedJobListContainer}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={recommendedJobList}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.card}>
                <Text>{item.jobTitle}</Text>
                <Text>{item.companyInfo.companyName}</Text>
                <Text>
                  {item.jobLocation.state}
                  {item.jobLocation.area ? `, ${item.jobLocation.area}` : null}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobSearch;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  textInput: {
    marginVertical: 15,
  },
  button: {
    marginVertical: 10,
  },
  searchContainer: {
    paddingBottom: 20,
  },
  recommendedJobListContainer: {
    paddingTop: 20,
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  card: {
    borderColor: Color.dividerGrey,
    borderWidth: 1,
    backgroundColor: Color.white,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 6,
  },
});
