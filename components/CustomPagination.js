import React from 'react';
import { StyleSheet } from 'react-native';
import { Pagination } from 'react-native-swiper-flatlist';

const styles = StyleSheet.create({
  paginationContainer: {
    top: 370,
  },
  pagination: {
    borderRadius: 2,
    height: 4,
    width: 30,
    backgroundColor: '#A9A9A9',
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export const CustomPagination = (props) => {
  return (
    <Pagination
      {...props}
      paginationStyle={styles.paginationContainer}
      paginationStyleItem={styles.pagination}
      paginationDefaultColor="#A9A9A9"
      paginationActiveColor="white"
    />
  );
};