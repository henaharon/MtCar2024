import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import Title from './Title';
import {Input} from './Input';
import Information from './Information';
import Signature from './Signature';
import { GradientButton } from './GradientButton';


const confirm = 'אישור ושליחה';

const FinalConfirm = ({
  pageTitle,
  inputPlaceholder,
  signatureTitle,
  signatureParagraph,
  informationTitle,
  paragraphs,
}) => {
  return (
    <View style={styles.viewContent}>
      <Title title={pageTitle} />
      <Input
        type="email"
        placeholder={inputPlaceholder}
        required={true}
        width={0.92}
      />
      <Title title={signatureTitle} />
      <Signature />
      <GradientButton
        title={confirm}
        // onPress={}
      />

      <Information title={informationTitle} paragraph={paragraphs} />
    </View>
  );
};

export default FinalConfirm;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: windowHeight * 0.01,
  },
});
