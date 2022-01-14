import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { ImageHeader, Logo } from '../../assets';
import { Saldo, PesananAktif } from '../../components/';
import { WARNA_ABU_ABU, WARNA_UTAMA } from '../../utils/constant';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBookReader,
  faChild,
  faCalendarDay,
  faMoneyBillWave,
  faTasks,
  faChalkboard,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Indra</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Menu</Text>
          <View style={styles.iconLayanan}>
            <TouchableOpacity style={styles.menu}>
              <FontAwesomeIcon icon={faChild} size={20} color={'white'} />
              <Text style={styles.textMenu}>Siswa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <FontAwesomeIcon icon={faBookReader} size={20} color={'white'} />
              <Text style={styles.textMenu}>Guru</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <FontAwesomeIcon icon={faCalendarDay} size={20} color={'white'} />
              <Text style={styles.textMenu}>Jadwal</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconLayanan}>
            <TouchableOpacity style={styles.menu}>
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                size={20}
                color={'white'}
              />
              <Text style={styles.textMenu}>SPP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <FontAwesomeIcon icon={faTasks} size={20} color={'white'} />
              <Text style={styles.textMenu}>Tugas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menu}>
              <FontAwesomeIcon icon={faChalkboard} size={20} color={'white'} />
              <Text style={styles.textMenu}>Kelas</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Jadwal Kelas</Text>
          <PesananAktif
            title="Metematika 08:00 - 10:00(Hadir)"
            status="Sedang Berlangsung"
          />
          <PesananAktif
            title="Agama Islam 10:00 - 12:00"
            status="Belum Tersedia"
          />
          <PesananAktif
            title="B. Indonesia 13:00 - 14:00"
            status="Belum Tersedia"
          />
          <PesananAktif
            title="Agama Islam 10:00 - 12:00"
            status="Belum Tersedia"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  textMenu: {
    color: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.19,
    height: windowHeight * 0.06,
    
  },
  hello: {
    marginTop: windowHeight * 0.02,
  },
  selamat: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
    marginBottom: 10,
    width: '92%',
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  menu: {
    borderRadius: 10,
    width: 70,
    height: 50,
    alignItems: 'center',
    flex: 0.2,
    paddingTop: 8,
    backgroundColor: WARNA_UTAMA,
  },
});
