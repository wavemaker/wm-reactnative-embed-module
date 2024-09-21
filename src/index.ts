import { NativeModulesProxy, EventEmitter, Subscription, requireNativeModule } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to EmbedCommModule.web.ts
// and on native platforms to EmbedCommModule.ts
import EmbedCommModule from './EmbedCommModule';
import EmbedCommModuleView from './EmbedCommModuleView';
import { ChangeEventPayload, EmbedCommModuleViewProps } from './EmbedCommModule.types';

// Get the native constant value.
export const PI = EmbedCommModule.PI;

export function hello(): string {
  return EmbedCommModule.hello();
}

export async function setValueAsync(value: string) {
  const EmbedCommModule = await requireNativeModule('EmbedCommModule');
  return EmbedCommModule && await EmbedCommModule.setValueAsync(value);
}

const emitter = new EventEmitter(EmbedCommModule ?? NativeModulesProxy.EmbedCommModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { EmbedCommModuleView, EmbedCommModuleViewProps, ChangeEventPayload };
