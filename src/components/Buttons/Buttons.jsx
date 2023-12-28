import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "./ButtonStyles";

export function Buttons() {
  return (
    <>
      <TouchableOpacity style={[styles.btn, styles.btnLinkedin]}>
        <Text style={styles.btnText}>LINKEDIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnGitHub]}>
        <Text style={styles.btnText}>GITHUB</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnInstagram]}>
        <Text style={styles.btnText}>📺 INSTAGRAM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnYoutube]}>
        <Text style={styles.btnText}>📹 YOUTUBE</Text>
      </TouchableOpacity>
    </>
  );
}
