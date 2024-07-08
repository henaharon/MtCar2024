import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TimerScreen from "./src/screens/Timer/TimerScreen";
import HardwareIntro from "./src/screens/E1/HardwareIntro";
import ConnectToChat from "./src/screens/E1/HardwareConnectToChat";
import HomePage from "./src/screens/homepage/HomePage";
import RoadsideAssistance from "./src/screens/E1/RoadsideAssistance";
import DriversCall from "./src/screens/DriversCall/DriversCall";
import DriversContactUs from "./src/screens/DriversContactUs/components/DriversContactUs";
import ElectricVehicle from "./src/screens/ElectricVehicle/ElectricVehicle";
import DriversSideMenu from "./src/screens/DriversSideMenu/DriverSideMenu";
import MyProfile from "./src/screens/Profile/MyProfile";
import GuidesScreen from "./src/screens/Guides/GuidesScreen";
import AccidentReportIntro from "./src/screens/AccidentReport/AccidentReportIntro";
import CallDialogScreen from "./src/screens/AccidentReport/CallDialog/CallDialogScreen";
import AccidentReportOnboarding from "./src/screens/AccidentReport/AccidentReportForm/AccidentReportOnboarding";
import DamageReport from "./src/screens/AccidentReport/DamageReport/DamageReport";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen
        name="AccidentReportStack"
        component={AccidentReportStack}
      />
      <Stack.Screen name="ElectricVehicle" component={ElectricVehicle} />
      <Stack.Screen name="AccidentReportIntro" component={DamageReport} />
    </Stack.Navigator>
  );
}

function AccidentReportStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AccidentReportIntro"
        component={AccidentReportIntro}
      />
      <Stack.Screen name="CallDialog" component={CallDialogScreen} />
      <Stack.Screen name="DamageReport" component={DamageReport} />
      <Stack.Screen
        name="AccidentReportForm"
        component={AccidentReportOnboarding}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      // drawerContent={(props) => <DriversSideMenu {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="DriversContactUs" component={DriversContactUs} />
      <Drawer.Screen name="DriversCall" component={DriversCall} />
      <Drawer.Screen name="TimerScreen" component={TimerScreen} />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="HardwareIntro" component={HardwareIntro} />
      <Drawer.Screen name="ConnectToChat" component={ConnectToChat} />
      <Drawer.Screen name="RoadsideAssistance" component={RoadsideAssistance} />
      <Drawer.Screen name="Guides" component={GuidesScreen} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
export default App;
