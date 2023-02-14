import ExpoModulesCore

public class EmbedCommModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('EmbedCommModule')` in JavaScript.
    Name("EmbedCommModule")

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("sendToNative") { (type: String, message: [String: Any]) in
        return CommunicationService.INSTANCE.onMessage(messageType: type, message: message as NSDictionary?, promise: nil);
    }
  }
}


public class CommunicationService {
    public static let INSTANCE = CommunicationService();
    
    var processorMap = [String: (message: NSDictionary?, promise: Promise?) -> Any]();
     
    public func onMessage(messageType: String, message: NSDictionary?, promise: Promise?) -> Any {
        return processorMap[messageType]?(message, promise) as Any
    }

    public func process(messageType: String, processor: @escaping (_ message: NSDictionary?, _ promise: Promise?) -> Any) {
        processorMap[messageType] = processor
    }

    public func removeProcessor(messageType: String) {
        processorMap.removeValue(forKey: messageType)
    }

}
