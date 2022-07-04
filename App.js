import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import MailList from './src/components/MailList';

const data = {
  owner: 'Shopify',
  title: 'Furkan has a new order for 4 items totaling $94.00.',
  desc: 'Furkan has a new order for 4 items totaling $94.00',
  date: '2 July',
};

const mailArr = [];
mailArr.length = 10000;

const mailData = mailArr.fill(data).map(item => {
  return {...item, id: Math.random()};
});

export default function App() {
  return (
    <View style={styles.container}>
      <MailList data={mailData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 50 : 20,
  },
});
