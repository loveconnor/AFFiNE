// The Swift Programming Language
// https://docs.swift.org/swift-book

import SwiftUI
import UIKit

public enum LoveNotesColors: String, CaseIterable {
  case buttonPrimary = "lovenotes.button.primary"
  case iconActivated = "lovenotes.icon.activated"
  case iconPrimary = "lovenotes.icon.primary"
  case layerBackgroundPrimary = "lovenotes.layer.background.primary"
  case layerBackgroundSecondary = "lovenotes.layer.background.secondary"
  case layerBorder = "lovenotes.layer.border"
  case layerPureWhite = "lovenotes.layer.pureWhite"
  case textEmphasis = "lovenotes.text.emphasis"
  case textLink = "lovenotes.text.link"
  case textListDotAndNumber = "lovenotes.text.listDotAndNumber"
  case textPlaceholder = "lovenotes.text.placeholder"
  case textPrimary = "lovenotes.text.primary"
  case textPureWhite = "lovenotes.text.pureWhite"
  case textSecondary = "lovenotes.text.secondary"
  case textTertiary = "lovenotes.text.tertiary"

  @available(iOS 13.0, *)
  public var color: Color {
    Color(rawValue, bundle: .module)
  }

  public var uiColor: UIColor {
    UIColor(named: rawValue, in: .module, compatibleWith: nil) ?? .clear
  }
}

public enum LoveNotesIcons: String, CaseIterable {
  case arrowDown = "ArrowDown"
  case arrowUpBig = "ArrowUpBig"
  case box = "Box"
  case broom = "Broom"
  case bubble = "Bubble"
  case calendar = "Calendar"
  case camera = "Camera"
  case checkCircle = "CheckCircle"
  case close = "Close"
  case image = "Image"
  case more = "More"
  case page = "Page"
  case plus = "Plus"
  case settings = "Settings"
  case think = "Think"
  case tools = "Tools"
  case upload = "Upload"
  case web = "Web"

  @available(iOS 13.0, *)
  public var image: Image {
    Image(rawValue, bundle: .module)
  }

  @available(iOS 13.0, *)
  public var uiImage: UIImage {
    UIImage(named: rawValue, in: .module, with: .none) ?? UIImage()
  }
}
