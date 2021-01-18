import { useState } from 'react';
import {  set } from 'lodash';
import initialData from './data.json';

function useConfig() {
  const [settingsData, setDefaultSettings] = useState(initialData);

  const onChangeSettingsData = (key, value) => {
    set(settingsData, key, value);
    setDefaultSettings({ ...settingsData });
  };

  return {
    settingsData,
    onChangeSettingsData
  };
}
export { useConfig };
