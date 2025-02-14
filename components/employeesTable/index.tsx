import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

interface TableProps {
    employees: any[]
}

export default function EmployeesTable({ employees }: TableProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const EmployeeDetails = ({ employee }: { employee: any }) => (
        <View style={styles.detailsContainer}>
            <View style={styles.detailsContent}>
                <Image source={{ uri: employee.avatar }} style={styles.detailsAvatar} />
                <View style={styles.detailsInfo}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Cargo:</Text>
                        <Text style={styles.detailValue}>{employee.role}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Admissão:</Text>
                        <Text style={styles.detailValue}>{employee.admissionDate}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Telefone:</Text>
                        <Text style={styles.detailValue}>{employee.phone}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View>
            <View style={styles.listHeader}>
                <Text style={styles.columnHeader}>Foto</Text>
                <Text style={[styles.columnHeader, styles.nameColumn]}>Nome</Text>
                <Text style={[styles.columnHeader, styles.lastColumn]}>•</Text>
            </View>

            <FlatList
                data={employees}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity
                            style={styles.employeeRow}
                            onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                            <Image source={{ uri: item.avatar }} style={styles.avatar} />
                            <Text style={styles.employeeName}>{item.name}</Text>
                            <Feather
                                name={expandedId === item.id ? "chevron-up" : "chevron-down"}
                                size={20}
                                color="#0066FF"
                            />
                        </TouchableOpacity>
                        {expandedId === item.id && <EmployeeDetails employee={item} />}
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listHeader: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#EDEFFB',
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    columnHeader: {
        fontSize: 14,
        color: '#666',
        width: 60,
    },
    nameColumn: {
        flex: 1,
    },
    lastColumn: {
        width: 20,
        fontWeight: '500',
        fontSize: 16,
        color: '#1C1C1C'
    },
    employeeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#DFDFDF',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12,
    },
    employeeName: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    detailsContainer: {
        backgroundColor: '#F8F9FE',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    detailsContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    detailsAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    detailsInfo: {
        flex: 1,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    detailLabel: {
        width: 80,
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    detailValue: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
});