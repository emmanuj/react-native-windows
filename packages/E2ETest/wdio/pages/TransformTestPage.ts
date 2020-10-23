/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 */

import { BasePage, By } from './BasePage';
import {
  APPLY_SCALE_TRANSFORM_BUTTON,
  TRANSFORM_TEST_RESULT,
  MEASURE_LAYOUT_BUTTON,
} from '@react-native-windows/tester/js/examples-win/LegacyTests/Consts';

class DirectManipulationPage extends BasePage {
  clickApplyScaleTransform() {
    this.applyScaleTransformButton.click();
  }

  clickMeasureLayoutAndGetResult() {
    this.measureLayoutButton.click();
    return this.transformTestResult.getText();
  }

  private get applyScaleTransformButton() {
    return By(APPLY_SCALE_TRANSFORM_BUTTON);
  }

  private get measureLayoutButton() {
    return By(MEASURE_LAYOUT_BUTTON);
  }

  private get transformTestResult() {
    return By(TRANSFORM_TEST_RESULT);
  }
}

export default new DirectManipulationPage();
