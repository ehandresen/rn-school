import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
