import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {WARNA_UTAMA} from '../../utils/constant';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>06:28</Text>
          <Text style={styles.valueSaldo}>Tepat Waktu</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelSaldo}>Jadwal</Text>
          <Text style={styles.valueSaldo}>Bahasa Indonesia</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.labelPoint}>Tagihan :</Text>
          <Text style={styles.valuePoint}>Rp. 0</Text>
        </View>
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.1,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  informasiSaldo: {
    width: '100%',
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold',
  },
  labelPoint: {
    fontSize: 13,
    fontFamily: 'TitilliumWeb-Regular',
  },
  valuePoint: {
    fontSize: 13,
    fontFamily: 'TitilliumWeb-Bold',
    color: WARNA_UTAMA,
  },
  buttonAksi: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
