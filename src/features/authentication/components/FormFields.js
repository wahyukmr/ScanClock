import React from 'react';
import {Text} from 'react-native';
import {ROUTE} from '../../../constants';
import {useThemedStyles} from '../../../hooks';
import {authenticationStyles} from '../../../styles';
import PickerField from './PickerField';
import TextInputField from './TextInputField';

const FormFields = ({type}) => {
  const styles = useThemedStyles(authenticationStyles);
  const {REGISTER_SCREEN, LOGIN_SCREEN} = ROUTE;
  const isRegister = type === REGISTER_SCREEN;

  return (
    <>
      <Text style={styles.header}>
        ~ {isRegister ? REGISTER_SCREEN : LOGIN_SCREEN} ~
      </Text>
      {isRegister && (
        <>
          <TextInputField
            label="Nama Lengkap"
            name="name"
            icon="account"
            placeholder="Masukan nama..."
            keyboardType="default"
            autoCapitalize="words"
            autoComplete="username"
            accessibilityLabel="Bidang nama lengkap"
          />
          <PickerField
            label="Pilih Gender"
            name="gender"
            icon="gender-male-female"
            accessibilityLabel="Bidang pilih gender"
            items={[
              {label: 'Pria', value: 'pria'},
              {label: 'Wanita', value: 'wanita'},
            ]}
          />
          <TextInputField
            label="Nomor Telepon"
            name="phone"
            icon="phone"
            placeholder="08123456789"
            keyboardType="phone-pad"
            autoComplete="tel"
            accessibilityLabel="Bidang nomor telepon"
          />
        </>
      )}
      <TextInputField
        label="Email"
        name="email"
        icon="email"
        placeholder="contoh@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        accessibilityLabel="Bidang email"
      />
      <TextInputField
        label="Password"
        name="password"
        icon="lock"
        placeholder="Masukan kata sandi..."
        autoComplete="current-password"
        secureTextEntry={true}
        autoCapitalize="none"
        keyboardType="default"
        accessibilityLabel="Bidang kata sandi"
      />
      {isRegister && (
        <>
          <PickerField
            label="Pilih Divisi"
            name="division"
            icon="domain"
            accessibilityLabel="Bidang pilih divisi"
            items={[
              {label: 'Divisi 1', value: 'divisi 1'},
              {label: 'Divisi 2', value: 'divisi 2'},
            ]}
            placeholder="Nama Pilihan Divisi"
          />
          <PickerField
            label="Pilih Departemen"
            name="department"
            icon="office-building"
            accessibilityLabel="Bidang pilih departemen"
            items={[
              {label: 'Departemen 1', value: 'departemen 1'},
              {label: 'Departemen 2', value: 'departemen 2'},
            ]}
            placeholder="Nama Pilihan Departemen"
          />
          <PickerField
            label="Pilih Cabang"
            name="branch"
            icon="map-marker"
            accessibilityLabel="Bidang pilih cabang"
            items={[
              {label: 'Cabang 1', value: 'cabang 1'},
              {label: 'Cabang 2', value: 'cabang 2'},
            ]}
            placeholder="Nama Pilihan Cabang"
          />
          <PickerField
            label="Pilih Jabatan"
            name="position"
            icon="briefcase"
            accessibilityLabel="Bidang pilih jabatan"
            items={[
              {label: 'Staff', value: 'staff'},
              {label: 'Supervisor', value: 'supervisor'},
              {label: 'Manager', value: 'manager'},
            ]}
          />
        </>
      )}
    </>
  );
};

export default FormFields;
