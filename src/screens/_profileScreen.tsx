import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import {useNavigation} from '@react-navigation/native';

type Props = {};

export default function _profileScreen({}: Props) {
  const {t} = useTranslation(['profile']);
  const navigation = useNavigation();

  const onChangeLang = () => {
    i18n.changeLanguage('ko');
  };

  return <Text>{t('profile:startPage')}</Text>;
}
