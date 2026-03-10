// import React, { useState, useRef } from "react";
// import { View, Image } from "react-native";
// import { Button, Text } from "react-native-paper";
// import { CameraView, useCameraPermissions } from "expo-camera";
// import * as Sharing from "expo-sharing";

// const Home = () => {

//   const cameraRef = useRef(null);
//   const [imagePath, setImagePath] = useState(null);
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     return <Text>Loading...</Text>;
//   }

//   if (!permission.granted) {
//     return (
//       <Button mode="contained" onPress={requestPermission}>
//         Request Camera Access
//       </Button>
//     );
//   }

//   const capture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setImagePath(photo.uri);
//     }
//   };

//   const share = async () => {
//     const available = await Sharing.isAvailableAsync();
//     if (available && imagePath) {
//       await Sharing.shareAsync(imagePath);
//     }
//   };

//   return (
//     <View>
//       <CameraView
//         style={{ width: "100%", height: 300 }}
//         facing="front"
//         ref={cameraRef}
//       />

//       <Button mode="contained" onPress={capture}>
//         Take Picture
//       </Button>

//       {imagePath ? (
//         <Image source={{ uri: imagePath }} style={{ width: 200, height: 200 }} />
//       ) : (
//         <Text>No Captured Image</Text>
//       )}

//       <Button mode="contained" onPress={share}>
//         Share
//       </Button>
//     </View>
//   );
// };

// export default Home;


import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import FingerPrint from "./home.jsx";  // your fingerprint component

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <FingerPrint />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;