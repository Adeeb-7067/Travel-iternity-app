// app/_layout.js
import { Stack, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {/* Add a redirect to the profile page when the app first loads */}
      <Redirect href="/profile" />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}