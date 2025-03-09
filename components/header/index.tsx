import React from 'react';
import { View, Text, Image } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require("../../assets/images/be-talent-logo.svg")} />
        </View>
    );
}
