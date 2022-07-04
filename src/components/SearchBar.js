import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MenuIcon from '../images/menu.png';

export default function SearchBar() {
  return (
    <>
      <View style={styles.container}>
        <Image source={MenuIcon} style={styles.menuIcon} />
        <Text style={styles.input}>E-postalarda arama yapın</Text>
        <View style={styles.profileContainer}>
          <Text style={styles.profileAvatar}>K</Text>
        </View>
      </View>
      <Text style={styles.sectionHeader}>BİRİNCİL</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#404040',
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#fafafa',
  },
  profileContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 15,
    color: '#fafafa',
  },
  sectionHeader: {
    fontSize: 12,
    color: '#7a7a7a',
    marginTop: 10,
  },
});
