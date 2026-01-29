// swift-tools-version: 5.9
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "LoveNotesResources",
  products: [
    .library(
      name: "LoveNotesResources",
      targets: ["LoveNotesResources"]
    ),
  ],
  targets: [
    .target(
      name: "LoveNotesResources",
      resources: [
        .process("Resources/Icons.xcassets"),
        .process("Resources/Colors.xcassets"),
      ]
    ),
  ]
)
