// swift-tools-version: 5.9
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "LoveNotesPaywall",
  platforms: [
    .iOS(.v16),
    .macOS(.v14), // just for build so LLM can verify their code
  ],
  products: [
    .library(
      name: "LoveNotesPaywall",
      targets: ["LoveNotesPaywall"]
    ),
  ],
  dependencies: [
    .package(path: "../LoveNotesResources"),
    .package(url: "https://github.com/RevenueCat/purchases-ios-spm.git", from: "5.55.3"),
  ],
  targets: [
    .target(
      name: "LoveNotesPaywall",
      dependencies: [
        "LoveNotesResources",
        .product(name: "RevenueCat", package: "purchases-ios-spm"),
      ]
    ),
  ]
)
