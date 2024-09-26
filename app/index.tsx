import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
        }}
      />
      <Text>HomePage</Text>
      <Link href={'/details'}>go to details</Link>
    </View>
  );
};

export default HomePage;

function LogoTitle() {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Home</Text>
      <Image
        style={[styles.image]}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
