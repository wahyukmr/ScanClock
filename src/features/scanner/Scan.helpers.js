import {ROUTE} from '../../constants';
import {goBack, navigate} from '../../navigation/navigationServices';
import DynamicScannerModal from './components/DynamicScannerModal';

export const checkCameraAvailability = (device, openModal) => {
  if (!device) {
    openModal(DynamicScannerModal, {
      titleMsg: 'Perangkat Kamera tidak tersedia',
      detailMsg:
        'Tidak ada perangkat kamera yang tersedia pada perangkat Anda. \n\nSilakan pastikan perangkat Anda memiliki kamera yang berfungsi dan coba lagi.',
      actionBtn: goBack,
      titleBtn: 'Kembali',
    });
    navigate(ROUTE.dynamicModal);
    return false;
  }
  return true;
};
