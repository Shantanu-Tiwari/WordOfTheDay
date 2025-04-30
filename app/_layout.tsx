import { Stack } from "expo-router";
import Header from "./components/header";
import './globals.css';
export default function RootLayout() {
  return (
      <>
        <Header />
        <Stack
            screenOptions={{
              headerShown: false,
            }}
        />
      </>
  );
}
