

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import FingerPrint from "./fingerprint.jsx"; 
 // your fingerprint component
 import LoginScreen from "./login-screen.jsx";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* <FingerPrint /> */}
        <LoginScreen/>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;