/*
 * forgerock-react-native-sample
 *
 * use-toggle.js
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { useState, useCallback } from 'react';

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((bool) => !bool), []);
  return [state, toggle];
}
