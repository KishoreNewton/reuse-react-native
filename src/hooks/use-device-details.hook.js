import {
  getApplicationName,
  getAvailableLocationProviders,
  getBaseOs,
  getBrand,
  getDevice,
  getDeviceId,
  getDeviceToken,
  getIpAddress,
  getMacAddress,
  getPhoneNumber,
  getSystemName,
  getSystemVersion,
  getUniqueId,
  getVersion,
  isEmulator,
  isLocationEnabled,
  isTablet
} from 'react-native-device-info';

/**
 * Get Required details about the running device
 */
export default () => {
  return {
    getPhoneNumber,
    getApplicationName,
    getAvailableLocationProviders,
    getBaseOs,
    getBrand,
    getDevice,
    getDeviceId,
    getDeviceToken,
    getIpAddress,
    getMacAddress,
    getSystemName,
    getSystemVersion,
    getUniqueId,
    getVersion,
    isEmulator,
    isLocationEnabled,
    isTablet
  };
};
