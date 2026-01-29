// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class AppConfigQuery: GraphQLQuery {
  public static let operationName: String = "appConfig"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"query appConfig { appConfig }"#
    ))

  public init() {}

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Query }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("appConfig", LoveNotesGraphQL.JSONObject.self),
    ] }

    /// get the whole app configuration
    public var appConfig: LoveNotesGraphQL.JSONObject { __data["appConfig"] }
  }
}
