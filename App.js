import React, { useState } from 'react';
import { View } from 'react-native';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Navbar onMenuPress={() => setSidebarVisible(true)} />
      {sidebarVisible && <Sidebar onClose={() => setSidebarVisible(false)} />}
      <LoginScreen />
    </View>
  );
}
