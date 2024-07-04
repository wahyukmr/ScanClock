import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {ROUTE} from '../../../constants';
import {useModalContext} from '../../../hooks';
import {navigate, replace} from '../../../navigation/NavigationServices';
import {checkCameraAvailability} from '../Scan.helpers';
import CameraPermissionModal from '../components/CameraPermissionModal';

const useCameraPermission = () => {
  const {openModal} = useModalContext();
  const device = useCameraDevice('back');

  const checkCameraPermission = () => {
    const permission = Camera.getCameraPermissionStatus();

    if (permission === 'granted') {
      replace(ROUTE.codeScanner);
    } else {
      openModal(CameraPermissionModal);
      navigate(ROUTE.dynamicModal);
    }
  };

  const handleActionScannerBtn = async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') {
      openModal(CameraPermissionModal);
      navigate(ROUTE.dynamicModal);
      return;
    }

    const isCameraAvailable = checkCameraAvailability(device, openModal);
    if (!isCameraAvailable) return;

    navigate(ROUTE.codeScanner);
  };

  return {handleActionScannerBtn, checkCameraPermission};
};

export default useCameraPermission;
