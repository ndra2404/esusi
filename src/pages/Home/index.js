import React from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native'
import { ImageHeader, Logo } from '../../assets'
import { Saldo, PesananAktif } from '../../components/'
import ButtonIcon from '../../components/ButtonIcon'
import { WARNA_ABU_ABU } from '../../utils/constant'
import { ScrollView } from 'react-native-gesture-handler'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Indra</Text>
          </View>
        </ImageBackground>
        <Saldo />
        <View style={styles.layanan}>
          <Text style={styles.label}>Main Menu</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Perpus" type="layanan" />
            <ButtonIcon title="Bayaran" type="layanan" />
            <ButtonIcon title="Infromasi" type="layanan" />
          </View>
        </View>
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Jadwal Kelas</Text>
          <PesananAktif title="Metematika 08:00 - 10:00" status="Sedang Berlangsung" />
          <PesananAktif title="Agama Islam 10:00 - 12:00" status="Belum Tersedia" />
          <PesananAktif title="B. Indonesia 13:00 - 14:00" status="Belum Tersedia" />
          <PesananAktif title="Agama Islam 10:00 - 12:00" status="Belum Tersedia" />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.03,
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
  },
  pesananAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
})
