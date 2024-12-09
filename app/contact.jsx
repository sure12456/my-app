import { View, Text, StyleSheet, Image, Appearance } from 'react-native'
import React from 'react'
import icon from '@/assets/images/coffee-icon.png'
import { Colors } from '@/constants/Colors';

const Contact = () => {

  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const styles = CreateSyles(theme, colorScheme)

  return (
    <View style={styles.container}>
      <Image 
        source={icon}
        style={styles.mainImage}
        resizeMode='cover'
      />
      <View>
        <Text style={styles.text}>Coffee Shop</Text>
        <Text style={styles.subtext}>Address: {'\n'}AP, India IN</Text>
        <Text style={styles.subtext}>Contact: {'\n'}1101010101, PIN 19190 IN</Text>
        <Text style={styles.subtext}>Mail: {'\n'}testmail@testit.com {'\n'} End of text</Text>
      </View>
    </View>
  )
}

export default Contact


function CreateSyles(theme, colorScheme) {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme.background, 
      }, 
      text: {
        fontSize: 42,
        fontWeight: 'bold',
        color: theme.text,
        padding: 10, 
      },
      subtext: {
        fontSize: 36, 
        fontWeight: 'semibold',
        color: theme.text,
        paddingTop: 20,
        paddingLeft: 30,
      },
      mainImage: {
        width: '100%',
        height: '35%',
      }
    })
}


