import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Todos</Text>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Index;
