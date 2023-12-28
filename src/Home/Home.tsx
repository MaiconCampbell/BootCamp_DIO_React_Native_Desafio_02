import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./HomeStyles";
import { Buttons } from "../components/Buttons/Buttons";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerAvatar}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars.githubusercontent.com/u/34654210?s=400&amp;u=c455ae0742f1f1b230d86a194b02638f9aa12ea6&amp;v=4",
            }}
          />
        </View>

        <View>
          <Text style={styles.title}>Maicon Campbell</Text>
          <Text style={styles.name}>@campbellMaicon</Text>
        </View>
      </View>

      <View style={styles.containerBtns}>
        <Buttons />
      </View>

      <Footer />
    </View>
  );
}
