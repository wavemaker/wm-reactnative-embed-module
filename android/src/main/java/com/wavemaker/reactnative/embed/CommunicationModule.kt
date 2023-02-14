package com.wavemaker.reactnative.embed;

import com.facebook.react.bridge.ReadableMap
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class CommunicationModule : Module() {
  init {
    val self = this;
    CommunicationService.INSTANCE.process("close", object : MessageProcessor {
      override fun process(message: ReadableMap?, promise: Promise?) {
        self.appContext.activityProvider?.currentActivity?.finish();
      }
    });
  }
  override fun definition() = ModuleDefinition {
    Name("EmbedCommModule")

    AsyncFunction("sendToNative") { messageType: String, message: ReadableMap?, promise: Promise? ->
      CommunicationService.INSTANCE.onMessage(messageType, message, promise);
    }
  }
}