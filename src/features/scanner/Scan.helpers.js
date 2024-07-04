import {ROUTE} from '../../constants';
import {goBack, navigate, reset} from '../../navigation/NavigationServices';
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

const handleScanSuccess = () => {
  reset({index: 0, routes: [{name: ROUTE.mainNavigator}]});
  navigate(ROUTE.homeScreen);
};

export const handlePresenceOut = async () => {
  try {
    // TODO: melakukan panggilan API ke 'presence-out'
    const response = 'url';
    // console.log(response)
    return {action: handleScanSuccess, message: response.message};
  } catch (error) {
    return {action: goBack, message: error.message};
  }
};

export const handlePresenceIn = async () => {
  try {
    // TODO: melakukan panggilan API ke 'presence-out'
    const response = 'url';
    // console.log(response)
    return {action: handleScanSuccess, message: response.message};
  } catch (error) {
    return {action: goBack, message: error.message};
  }
};

export const handleUnknown = () => {
  return {action: goBack, message: 'Kode QR tidak dikenali.'};
};

// export const handleScanResult = (
//   scanResultValue,
//   attendanceStatus,
//   openModal,
// ) => {
//   const {come, out} = attendanceStatus;

//   switch (scanResultValue) {
//     case 'presensi-masuk':
//       if (!come) {
//         showModalScanningResult(
//           openModal,
//           'Absensi masuk anda berhasil.',
//           handleScanSuccess,
//         );
//         break;
//       } else {
//         showModalScanningResult(
//           'Anda sudah melakukan absen masuk untuk hari ini.',
//           goBack,
//         );
//         break;
//       }

//     case 'presensi-pulang':
//       if (!come) {
//         showModalScanningResult(
//           openModal,
//           'Silahkan melakukan absen masuk terlebih dahulu untuk hari ini.',
//           goBack,
//         );
//         break;
//       } else if (come && !out) {
//         showModalScanningResult(
//           openModal,
//           'Absensi pulang anda berhasil.',
//           handleScanSuccess,
//         );
//         break;
//       } else {
//         showModalScanningResult(
//           'Anda sudah melakukan absen pulang untuk hari ini.',
//           goBack,
//         );
//         break;
//       }

//     default:
//       showModalScanningResult(openModal, 'Kode QR tidak dikenali.', goBack);
//       break;
//   }
// };
