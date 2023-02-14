package com.wavemaker.reactnative.embed

import com.facebook.react.bridge.ReadableMap
import expo.modules.kotlin.Promise
import java.util.HashMap


interface MessageProcessor {
    fun process(message: ReadableMap?, promise: Promise?)
}

class CommunicationService private constructor() {
    private val processorMap: MutableMap<String, MessageProcessor> = HashMap()
    fun onMessage(messageType: String, message: ReadableMap?, promise: Promise?) {
        val processor = processorMap[messageType]
        processor?.process(message, promise)
    }

    fun process(messageType: String, processor: MessageProcessor) {
        processorMap[messageType] = processor
    }

    fun removeProcessor(messageType: String) {
        this.processorMap.remove(messageType)
    }

    companion object {
        val INSTANCE = CommunicationService()
    }
}