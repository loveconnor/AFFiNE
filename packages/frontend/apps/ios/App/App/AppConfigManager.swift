import Foundation

final class AppConfigManager {
  struct AppConfig: Decodable {
    let lovenotesVersion: String
  }

  static var lovenotesVersion: String?

  static func getLoveNotesVersion() -> String {
    if lovenotesVersion == nil {
      let file = Bundle(for: AppConfigManager.self).url(forResource: "capacitor.config", withExtension: "json")!
      let data = try! Data(contentsOf: file)
      let config = try! JSONDecoder().decode(AppConfig.self, from: data)
      lovenotesVersion = config.lovenotesVersion
    }

    return lovenotesVersion!
  }
}
