import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';

export default function CalendarScreen({navagation}) {
  const [date, setDate] = useState();
  function show() {}
  return (
    <View style={styles.container}>
      <View style={styles.wrapCalendar}>
        <CalendarList
          onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // Enable or disable scrolling of calendar list
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
        />
      </View>
      <View style={styles.wrapList}>
        <View style={styles.elementList}>
          <Text>Thu nhập</Text>
          <Text>0 đồng</Text>
        </View>
        <View style={styles.elementList}>
          <Text>Chi tiêu</Text>
          <Text>0 đồng</Text>
        </View>
        <View style={styles.elementList}>
          <Text>Tổng</Text>
          <Text>0 đồng</Text>
        </View>
      </View>
      <ScrollView style={styles.wrapDetail}>
        <View style={styles.titleDetail}>
          <Text style={styles.titleDetailText}>06/01/2013</Text>
          <Text style={styles.titleDetailText}>-150000</Text>
        </View>
        <View style={styles.contentDetail}>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wrapCalendar: {
    borderWidth: 2,
    borderColor: 'pink',
  },
  wrapList: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'pink',
  },
  elementList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapDetail: {
    borderWidth: 2,
    borderColor: 'pink',
  },
  titleDetail: {
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleDetailText:{
    flex:1,
    borderWidth: 2,
    borderColor: 'pink',
  },
  calendar: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});