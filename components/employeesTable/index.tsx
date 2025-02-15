import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Employee } from '../../app/(home)/types'
import styles from './styles';

export default function EmployeesTable({ employees }: { employees: Employee[] }) {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    
    const formatData = (data: string, type: string) => {
        if (type === "date") {
            const date = new Date(data);
            const day = `0${date.getDate()}`.slice(-2);
            const month = `0${date.getMonth() + 1}`.slice(-2);
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        } else {
            const number = data.replace(/\D/g, '');
            const areaCode = number.slice(0, 2);
            const prefix = number.slice(2, 4);
            const line = number.slice(4);
            return `+${areaCode} (${prefix})${data[4]} ${line.slice(1, 5)}-${line.slice(5)}`;
        }
    };

    const EmployeeDetails = ({ employee }: { employee: Employee }) => (
        <View style={styles.detailsContainer}>
            <View style={styles.detailsContent}>
                <View style={styles.detailsInfo}>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Cargo:</Text>
                        <Text style={styles.detailValue}>{employee.job}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Admissão:</Text>
                        <Text style={styles.detailValue}>{formatData(employee.admission_date, "date")}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={styles.detailLabel}>Telefone:</Text>
                        <Text style={styles.detailValue}>{formatData(employee.phone, "phone")}</Text>
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
                    <View style={styles.employeeItem}>
                        <TouchableOpacity
                            style={styles.employeeRow}
                            onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        >
                            <Image source={{ uri: item.image }} style={styles.avatar} />
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