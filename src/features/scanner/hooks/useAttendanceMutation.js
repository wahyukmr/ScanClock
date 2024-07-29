import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useModalContext} from '../../../hooks';
import {delay} from '../../../utils/delay';
import {handleStatusModal} from '../../../utils/handleStatusModal';
import {attendanceCheckerService} from '../services/attendanceCheckerService';

export const useAttendanceMutation = () => {
  const {openModal} = useModalContext();
  const queryClient = useQueryClient();

  const errorMessage = message => {
    if (message.includes('BELUM PRESENSI MASUK')) {
      return 'Anda belum presensi masuk, silahkan absensi masuk terlebih dahulu';
    }
    if (
      message.includes(
        'SUDAH PRESENSI PULANG HARI INI, CUKUP SEKALI AJA PRESENSINYA',
      )
    ) {
      return 'Anda sudah presensi pulang, tidak perlu melakukan presensi lagi';
    }
    if (
      message.includes('SUDAH PRESENSI HARI INI, CUKUP SEKALI AJA PRESENSINYA')
    ) {
      return 'Anda sudah presensi masuk hari ini, tidak perlu melakukan presensi lagi';
    }
    return null;
  };

  return useMutation({
    mutationFn: ({attendance, status}) =>
      attendanceCheckerService.doAttendance(attendance, status),
    onMutate: async newAttendance => {
      await queryClient.cancelQueries('attendance');
      const previousPresences = queryClient.getQueryData('attendance');

      queryClient.setQueryData('attendance', old => [
        ...(old || []),
        newAttendance,
      ]);

      await delay(1000);

      return {previousPresences};
    },
    onSuccess: data => {
      const error = errorMessage(data.message);
      if (error) {
        throw new Error(error);
      }

      handleStatusModal(openModal, false, 'Pemindaian sukses', data.message);
    },
    onError: (error, __, context) => {
      if (context?.previousPresences) {
        queryClient.setQueryData('attendance', context.previousPresences);
      }

      throw new Error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries('attendance');
    },
  });
};
