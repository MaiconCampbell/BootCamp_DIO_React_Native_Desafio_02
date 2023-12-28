import React from "react";
import { View, Text } from "react-native";

import { styles } from "./FooterStyles";

export function Footer() {
  return (
    <View style={styles.containerFooter}>
      <Text style={styles.title}>Feito com 💖 por Maicon Campbell</Text>
      <Text style={[styles.title, { fontWeight: "bold", fontStyle: "italic" }]}>
        "Melhor feito do que perfeito"
      </Text>
    </View>
  );
}
