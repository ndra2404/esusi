import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconAkun,
  IconAkunActive,
  IconHome,
  IconHomeActive,
  IconPesanan,
  IconPesananActive,
} from '../../assets';
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faChild,
  faCalendarDay,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;

    if (label === 'Presensi')
      return isFocused ? <IconPesananActive /> : <IconPesanan />;

    if (label === 'Profile')
      return isFocused ? <IconAkunActive /> : <IconAkun />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <FontAwesomeIcon
        icon={
          label === 'Home' ? faHome : label === 'Presensi' ? faQrcode : faChild
        }
        size={24}
        color={isFocused ? WARNA_UTAMA : WARNA_DISABLE}
      />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 8,
  }),
});
