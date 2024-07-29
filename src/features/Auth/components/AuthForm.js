import React, {useState} from 'react';
import {useFetchOptions} from '../hooks/useFetchOptions';
import InputField from './InputField';
import SelectField from './SelectField';

const AuthForm = ({isLoginType}) => {
  const [selectedDivision, setSelectedDivision] = useState();

  const {
    data: divisions,
    isLoading: loadDevision,
    error: errDevision,
  } = useFetchOptions('divisions', !isLoginType);
  const {
    data: branches,
    isLoading: loadBranche,
    error: errBranche,
  } = useFetchOptions('branches', !isLoginType);
  const {
    data: departments,
    isLoading: loadDepartment,
    error: errDepartment,
  } = useFetchOptions(
    'departments',
    {divisionId: selectedDivision},
    !isLoginType,
  );

  const divisionItems = divisions?.map(division => ({
    label: division.name,
    value: division.id,
  }));
  const departmentItems =
    departments && Array.isArray(departments)
      ? departments?.map(department => ({
          label: department.name,
          value: department.id,
        }))
      : [{label: departments?.data, value: ''}];
  const branchItems = branches?.map(branch => ({
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
            items={divisionItems}
            loading={loadDevision}
            error={errDevision}
            placeholder={
              divisions ? 'Nama Pilihan Divisi' : 'Gagal Mengambil Divisi'
            }
            onValueChange={setSelectedDivision}
          />
          <SelectField
            label="Pilih Departemen"
            name="department"
            icon="office-building"
            accessibilityLabel="Bidang pilih departemen"
            items={departments ? departmentItems : departments}
            loading={loadDepartment}
            error={errDepartment}
            placeholder={
              departments
                ? 'Nama Pilihan Departemen'
                : 'Gagal Mengambil Departemen'
            }
          />
          <SelectField
            label="Pilih Cabang"
            name="branch"
            icon="map-marker"
            accessibilityLabel="Bidang pilih cabang"
            items={branchItems}
            loading={loadBranche}
            error={errBranche}
            placeholder={
              branches ? 'Nama Pilihan Cabang' : 'Gagal Mengambil Cabang'
            }
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
