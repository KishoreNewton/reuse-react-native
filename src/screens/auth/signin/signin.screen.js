import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';

import React from 'react';
import getDeviceDetails from '../../../hooks/get-device-details.hook';
import useRequest from '../../../hooks/use-request.hook';
import { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
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
  } = getDeviceDetails();
  const { doRequest, errors } = useRequest({
    url: 'v1/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
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
    },
    onSuccess: () => console.log('working')
  });

  const onSubmit = async e => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <View>
      <Text>This thing works</Text>
    </View>
  );
};

module.exports = Signin;
