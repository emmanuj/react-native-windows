/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 */

import { BasePage, By } from './BasePage';
import {
  TEXTINPUT_ON_TEXTINPUT,
  ML_TEXTINPUT_ON_TEXTINPUT,
  CAP_TEXTINPUT_ON_TEXTINPUT,
  CURTEXT_ON_TEXTINPUT,
} from '@react-native-windows/tester/js/examples-win/LegacyTests/Consts';

class TextInputTestPage extends BasePage {
  clickTextInput() {
    this.textInput.click();
  }

  clickMultilineTextInput() {
    this.multiLineTextInput.click();
  }

  clearAndTypeOnTextInput(text: string) {
    this.textInput.setValue(text);
  }

  clearAndEnterOnTextInput(text: string) {
    this.textInput.setValue(text);
    this.textInput.addValue('Enter');
  }

  clearAndTypeOnMLTextInput(text: string) {
    this.multiLineTextInput.setValue(text);
  }

  clearAndTypeOnAutoCapTextInput(text: string) {
    this.autoCapTextInput.setValue(text);
  }

  appendNewLineOnMLText(text: string) {
    this.multiLineTextInput.addValue('End');
    this.multiLineTextInput.addValue('Enter');
    this.multiLineTextInput.addValue(text);
  }

  getTextInputCurText() {
    return this.curTextInput.getText();
  }

  getTextInputText() {
    return this.textInput.getText();
  }

  getMLTextInputText() {
    return this.multiLineTextInput.getText();
  }

  getAutoCapTextInput() {
    return this.autoCapTextInput.getText();
  }

  private get textInput() {
    return By(TEXTINPUT_ON_TEXTINPUT);
  }

  private get curTextInput() {
    return By(CURTEXT_ON_TEXTINPUT);
  }

  private get multiLineTextInput() {
    return By(ML_TEXTINPUT_ON_TEXTINPUT);
  }

  private get autoCapTextInput() {
    return By(CAP_TEXTINPUT_ON_TEXTINPUT);
  }
}

export default new TextInputTestPage();
