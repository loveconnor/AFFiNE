// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class UpdateAccountFeaturesMutation: GraphQLMutation {
  public static let operationName: String = "updateAccountFeatures"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"mutation updateAccountFeatures($userId: String!, $features: [FeatureType!]!) { updateUserFeatures(id: $userId, features: $features) }"#
    ))

  public var userId: String
  public var features: [GraphQLEnum<FeatureType>]

  public init(
    userId: String,
    features: [GraphQLEnum<FeatureType>]
  ) {
    self.userId = userId
    self.features = features
  }

  public var __variables: Variables? { [
    "userId": userId,
    "features": features
  ] }

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Mutation }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("updateUserFeatures", [GraphQLEnum<LoveNotesGraphQL.FeatureType>].self, arguments: [
        "id": .variable("userId"),
        "features": .variable("features")
      ]),
    ] }

    /// update user enabled feature
    public var updateUserFeatures: [GraphQLEnum<LoveNotesGraphQL.FeatureType>] { __data["updateUserFeatures"] }
  }
}
