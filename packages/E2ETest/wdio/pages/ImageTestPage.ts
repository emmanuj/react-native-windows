/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 */

import { BasePage, By } from './BasePage';
import {
  SHOW_IMAGE_BORDER,
  SET_RTL_MODE,
} from '@react-native-windows/tester/js/examples-win/LegacyTests/Consts';

class ImageTestPage extends BasePage {
  toggleImageBorder() {
    this._imageBorder.click();
  }

  toggleRTLMode() {
    this._rtlButton.click();
  }

  private get _imageBorder() {
    return By(SHOW_IMAGE_BORDER);
  }

  private get _rtlButton() {
    return By(SET_RTL_MODE);
  }
}

export default new ImageTestPage();
