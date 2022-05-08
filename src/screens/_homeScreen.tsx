import React from 'react';
import {Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from 'i18next';
import {useNavigation} from '@react-navigation/core';

type Props = {};

export default function _homeScreen({}: Props) {
  const {t} = useTranslation(['home']);
  const navigation = useNavigation();

  const onChangeLang = () => {
    i18n.changeLanguage('ko');
  };

  return <Text>{t('home:startPage')}</Text>;
}
