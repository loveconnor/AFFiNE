// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class UpdateAppConfigMutation: GraphQLMutation {
  public static let operationName: String = "updateAppConfig"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"mutation updateAppConfig($updates: [UpdateAppConfigInput!]!) { updateAppConfig(updates: $updates) }"#
    ))

  public var updates: [UpdateAppConfigInput]

  public init(updates: [UpdateAppConfigInput]) {
    self.updates = updates
  }

  public var __variables: Variables? { ["updates": updates] }

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Mutation }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("updateAppConfig", LoveNotesGraphQL.JSONObject.self, arguments: ["updates": .variable("updates")]),
    ] }

    /// update app configuration
    public var updateAppConfig: LoveNotesGraphQL.JSONObject { __data["updateAppConfig"] }
  }
}
