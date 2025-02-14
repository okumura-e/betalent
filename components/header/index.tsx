import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';

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

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 79,
    },
    headerLogo: {
        fontSize: 16,
        fontWeight: '500',
        borderRadius: 50,
        backgroundColor: '#F5F5F5',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        right: -4,
        top: -4,
        backgroundColor: '#0066FF',
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '700',
    },
});
