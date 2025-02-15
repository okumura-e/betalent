import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '@/components/header';
import EmployeesTable from '@/components/employeesTable';

// Dados dos funcionários
const employees = [
  {
    id: '1',
    name: 'Giovana L. Arruda',
    avatar: 'https://v0.dev/placeholder.svg?height=40&width=40',
    role: 'Desenvolvedora Frontend',
    admissionDate: '15/03/2022',
    phone: '(11) 99999-1234',
  },
  {
    id: '2',
    name: 'Vanessa Machado',
    avatar: 'https://v0.dev/placeholder.svg?height=40&width=40',
    role: 'UX Designer',
    admissionDate: '22/06/2021',
    phone: '(11) 99999-5678',
  },
  // ... adicione os dados dos outros funcionários aqui
];

export default function TabLayout() {
  const [searchText, setSearchText] = useState('');

  // Função para filtrar funcionários
  const filteredEmployees = employees.filter((employee) => {
    const searchLower = searchText.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLower) ||
      employee.role.toLowerCase().includes(searchLower) ||
      employee.phone.includes(searchText)
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* header  */}
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

      {/* lista */}
      <EmployeesTable employees={employees}/>
      
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    margin: 16,
  },
  title: {
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFB',
    marginHorizontal: 16,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
  },
});