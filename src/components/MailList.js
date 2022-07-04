import React, {useCallback} from 'react';
import {StyleSheet, View, Platform, FlatList} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import MailItem from './MailItem';
import SearchBar from './SearchBar';

const MailList = ({data}) => {
  const onLoadListener = useCallback(({elapsedTimeInMs}) => {
    if (Platform.OS === 'android') {
      console.log('Load time on Pixel 2: ', elapsedTimeInMs);
    }

    if (Platform.OS === 'ios') {
      console.log('Load time on iPhone 13: ', elapsedTimeInMs);
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* <FlatList
        ListHeaderComponent={SearchBar}
        ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
        data={data}
        renderItem={MailItem}
        keyExtractor={item => item.id}
      /> */}
      <FlashList
        ListHeaderComponent={SearchBar}
        ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
        data={data}
        renderItem={MailItem}
        estimatedItemSize={data.length}
        onLoad={onLoadListener}
      />
    </View>
  );
};

export default MailList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {},
  ListHeaderComponentStyle: {
    marginBottom: 20,
  },
});
