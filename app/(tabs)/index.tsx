import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createHomeStyles } from "../../assets/styles/home.styles";
import Header from "../../components/Header";
import TodoInput from "../../components/TodoInput";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homestyles = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homestyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homestyles.safeArea}>
        <Header />
        <TodoInput />
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>toggle the mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
