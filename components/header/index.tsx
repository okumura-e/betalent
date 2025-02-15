import React from 'react';
import { View, Text } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import styles from './styles';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.headerLogo}>
                <Text>CG</Text>
            </View>
            <View style={styles.notificationContainer}>
                <Octicons name="bell" size={32} color="black" />
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>02</Text>
                </View>
            </View>
        </View>
    );
}
