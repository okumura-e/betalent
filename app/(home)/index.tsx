import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
} from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/header';
import EmployeesTable from '@/components/employeesTable';
import api from '@/service/api';
import Employee from './types';

export default function TabLayout() {
  const [searchText, setSearchText] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  
  const loadEmployees = async () => {
    try {
      const { data: employeesList } = await api.get<Employee[]>('employees');
      setEmployees(employeesList);
      setFilteredEmployees(employeesList);
    } catch {
      console.warn('Error loading employees');
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  useEffect(() => {
    if (searchText === '') loadEmployees();
    const filterEmployees = () => {
      const lowerSearchText = searchText.toLowerCase();
      return employees.filter(
        ({ name, job, phone }) =>
          name.toLowerCase().includes(lowerSearchText) ||
          job.toLowerCase().includes(lowerSearchText) ||
          phone.includes(searchText)
      );
    };
    setFilteredEmployees(filterEmployees());
  }, [searchText]);
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Header />
        <Text style={styles.title}>Funcionários</Text>

        <View style={styles.searchContainer}>
          <Feather name="search" size={16} color="#1C1C1C" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#999"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <EmployeesTable employees={filteredEmployees} />

      </View>
    </SafeAreaView>
  );
}
