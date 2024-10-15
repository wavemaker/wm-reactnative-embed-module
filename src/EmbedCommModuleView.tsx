import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { EmbedCommModuleViewProps } from './EmbedCommModule.types';

const NativeView: React.ComponentType<EmbedCommModuleViewProps> =
  requireNativeViewManager('EmbedCommModule');

export default function EmbedCommModuleView(props: EmbedCommModuleViewProps) {
  return <NativeView {...props} />;
}
