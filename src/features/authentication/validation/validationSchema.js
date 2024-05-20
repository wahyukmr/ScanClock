import * as Yup from 'yup';

const baseSchema = Yup.object().shape({
  name: Yup.string().required('Nama diperlukan'),
  gender: Yup.string().required('Gender diperlukan'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Nomor telepon tidak valid')
    .required('Nomor telepon diperlukan'),
  email: Yup.string().email('Email tidak valid').required('Email diperlukan'),
  password: Yup.string()
    .min(6, 'Kata sandi minimal 6 karakter')
    .required('Kata sandi diperlukan'),
  division: Yup.string().required('Divisi diperlukan'),
  department: Yup.string().required('Departemen diperlukan'),
  branch: Yup.string().required('Cabang diperlukan'),
  position: Yup.string().required('Jabatan diperlukan'),
});

export const loginSchema = baseSchema.pick(['email', 'password']);
export const registerSchema = baseSchema;
