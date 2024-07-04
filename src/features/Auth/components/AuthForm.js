import React from 'react';
import useDependentOptions from '../hooks/useDependentOptions';
import {useFetchOptions} from '../hooks/useFetchOptions';
import InputField from './InputField';
import SelectField from './SelectField';

const AuthForm = ({isLoginType}) => {
  const {
    options: devisions,
    loading: loadDevision,
    error: errDevision,
  } = useFetchOptions('divisions');
  const {selectedDivision, handleDivisionChange} = useDependentOptions();
  const {
    options: departments,
    loading: loadDepartment,
    error: errDepartment,
  } = useFetchOptions('departments', {divisionId: selectedDivision});
  const {
    options: branches,
    loading: loadBranche,
    error: errBranche,
  } = useFetchOptions('branches');

  const devisionItems = devisions.map(devision => ({
    label: devision.name,
    value: devision.id,
  }));
  const departmentItems =
    !errDepartment &&
    departments.map(department => ({
      label: department.name,
      value: department.id,
    }));
  const branchItems = branches.map(branch => ({
    label: branch.name,
    value: branch.id,
  }));

  return (
    <>
      {!isLoginType && (
        <>
          <InputField
            label="Nama Lengkap"
            name="name"
            icon="account"
            keyboardType="default"
            placeholder="Masukan nama..."
            autoCapitalize="words"
            autoComplete="off"
            accessibilityLabel="Bidang nama lengkap"
          />
          <SelectField
            label="Pilih Gender"
            name="gender"
            icon="gender-male-female"
            accessibilityLabel="Bidang pilih gender"
            items={[
              {label: 'Pria', value: 'pria'},
              {label: 'Wanita', value: 'wanita'},
            ]}
          />
          <InputField
            label="Nomor Telepon"
            name="phone"
            icon="phone"
            placeholder="08123456789"
            keyboardType="phone-pad"
            autoComplete="off"
            accessibilityLabel="Bidang nomor telepon"
          />
        </>
      )}
      <InputField
        label="Email"
        name="email"
        icon="email"
        placeholder="contoh@email.com"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="off"
        accessibilityLabel="Bidang email"
      />
      <InputField
        label="Password"
        name="password"
        icon="lock"
        placeholder="Masukan kata sandi..."
        autoComplete="off"
        secureTextEntry={true}
        autoCapitalize="none"
        keyboardType="default"
        accessibilityLabel="Bidang kata sandi"
      />
      {!isLoginType && (
        <>
          <SelectField
            label="Pilih Divisi"
            name="division"
            icon="domain"
            accessibilityLabel="Bidang pilih divisi"
            items={devisionItems}
            loading={loadDevision}
            error={errDevision}
            placeholder="Nama Pilihan Divisi"
            onValueChange={handleDivisionChange}
          />
          <SelectField
            label="Pilih Departemen"
            name="department"
            icon="office-building"
            accessibilityLabel="Bidang pilih departemen"
            items={departmentItems}
            loading={loadDepartment}
            error={errDepartment}
            placeholder="Nama Pilihan Departemen"
          />
          <SelectField
            label="Pilih Cabang"
            name="branch"
            icon="map-marker"
            accessibilityLabel="Bidang pilih cabang"
            items={branchItems}
            loading={loadBranche}
            error={errBranche}
            placeholder="Nama Pilihan Cabang"
          />
          <SelectField
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

export default AuthForm;
