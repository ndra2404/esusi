import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const onSuccess = (e) => {
  var data = JSON.parse(e.data);
  alert(data.sekolahname);
};
const Pesanan = () => {
  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      topContent={<Text style={styles.centerText}>scan the QR code.</Text>}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
