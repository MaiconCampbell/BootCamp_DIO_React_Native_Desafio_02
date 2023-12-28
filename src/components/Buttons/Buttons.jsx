import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { styles } from "./ButtonStyles";

export function Buttons() {
  return (
    <>
      <TouchableOpacity style={[styles.btn, styles.btnLinkedin]}>
        <FontAwesome name="linkedin" size={30} color="#FFF" />
        <Text style={styles.btnText}>LINKEDIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnGitHub]}>
        <FontAwesome name="github-alt" size={30} color="#FFF" />
        <Text style={styles.btnText}>GITHUB</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnInstagram]}>
        <FontAwesome name="instagram" size={30} color="#FFF" />
        <Text style={styles.btnText}>INSTAGRAM</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.btnYoutube]}>
        <FontAwesome name="youtube-square" size={30} color="#FFF" />
        <Text style={styles.btnText}>YOUTUBE</Text>
      </TouchableOpacity>
    </>
  );
}
