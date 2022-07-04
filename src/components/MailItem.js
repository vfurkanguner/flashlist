import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Logo from '../images/shopify.png';

const MailItem = ({item}) => {
  // console.log(item.id);
  return (
    <View style={styles.container}>
      <View style={[styles.avatarContainer]}>
        <Text>{item.owner.charAt(0)}</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleAndHourContainer}>
          <Text style={styles.owner}>{item.owner}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
    </View>
  );
};

export default MailItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    marginLeft: 10,
    flex: 1,
  },
  titleAndHourContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  owner: {
    fontSize: 16,
    color: '#fafafa',
    fontWeight: '800',
  },
  date: {
    fontSize: 12,
    color: '#fafafa',
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fafafa',
  },
  desc: {
    fontSize: 12,
    color: '#7a7a7a',
  },
});
