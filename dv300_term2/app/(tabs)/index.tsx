import { Image, StyleSheet, Platform, Pressable, ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container_big}>
      <ThemedView style={styles.styledView_big} />
      <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign up to continue</Text>

      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#A9A9A9" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A9A9A9" secureTextEntry />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}> 
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  container_big: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#003680',
  },
  styledView_big: {
    backgroundColor: 'white',
    height: 400,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#A9A9A9',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
    marginBottom: 20,
    fontSize: 16,
    paddingLeft: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#A9A9A9',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFBF5E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
     
});
