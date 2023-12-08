import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Menu from '../../assets/menu.svg';
import Bell from '../../assets/notification.svg';

const Header = ({title, backgroundColor}) => {
  return (
    <View style={[styles.container, {  backgroundColor: backgroundColor ?? '#fff',}]}>
      <View style={styles.flexRow}>
        <Menu height={20} width={20} />
        <View style={{marginLeft: 15}}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>

      <View style={styles.flexRow}>
        <View style={styles.notificationContainer}>
          <Bell height={20} width={20} />
        </View>

        <Image
          style={styles.image}
          source={{
            uri: 'https://www.w3schools.com/howto/img_avatar.png',
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  image: {
    height: 30,
    width: 30,
    objectFit: 'fill',
    borderRadius: 100,
  },
  notificationContainer: {
    backgroundColor: '#FFF',
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
