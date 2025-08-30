import React from "react";
import { View, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    background-color: #2e4b32;
    padding: 10px 0;
    width: 100%;
    position: absolute;
    bottom: 20;
    left: 0;
    right: 0;
`;

export default function NavBar({ navigation }) {
  return (
      <Container>
          <TouchableOpacity onPress={() => navigation.navigate('Screen1')}>
              <FontAwesome name="home" size={30} color="#f5f3e7" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
              <FontAwesome5 name="pizza" size={30} color="#f5f3e7" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Screen3')}>
              <FontAwesome5 name="shopping-cart" size={30} color="#f5f3e7" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Screen4')}>
              <Ionicons name="calendar-outline" size={30} color="#f5f3e7" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Screen5')}>
              <Ionicons name="person-circle-outline" size={30} color="#f5f3e7" />
          </TouchableOpacity>
      </Container>
  );
}
