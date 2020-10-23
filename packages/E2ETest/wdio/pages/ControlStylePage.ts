/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 */

import { BasePage, By } from './BasePage';
import { SHOWBORDER_ON_CONTROLSTYLE } from '@react-native-windows/tester/js/examples-win/LegacyTests/Consts';

class ControlStyleTestPage extends BasePage {
  toggleControlBorder() {
    this._controlBorder.click();
  }

  private get _controlBorder() {
    return By(SHOWBORDER_ON_CONTROLSTYLE);
  }
}

export default new ControlStyleTestPage();
