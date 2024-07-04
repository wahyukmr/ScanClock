import {useCallback} from 'react';
import {useModalContext} from '../../../hooks';
import {
  handlePresenceIn,
  handlePresenceOut,
  handleUnknown,
} from '../Scan.helpers';
import DynamicScannerModal from '../components/DynamicScannerModal';

const useHandleScanResult = (attendanceStatus, setAttendanceStatus) => {
  const {openModal} = useModalContext();

  // Fungsi untuk menampilkan modal hasil pemindaian
  const showModalScanningResult = useCallback((actionBtn, detailMsg) => {
    openModal(DynamicScannerModal, {
      titleMsg: 'Hasil pemindaian',
      detailMsg,
      actionBtn,
      titleBtn: 'Kembali',
    });
    navigate(ROUTE.dynamicModal);
  }, []);

  const handleScanResult = useCallback(
    value => {
      const handlers = {
        'presensi-masuk': handlePresenceIn,
        'presensi-pulang': handlePresenceOut,
      };

      const handler = handlers[value] || handleUnknown;

      const newStatusMessage = handler();

      setTimeout(() => {
        showModalScanningResult(
          newStatusMessage.action,
          newStatusMessage.message,
        );
      }, 2000);
    },
    [showModalScanningResult],
  );

  return handleScanResult;
};

export default useHandleScanResult;
