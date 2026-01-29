// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class NotificationCountQuery: GraphQLQuery {
  public static let operationName: String = "notificationCount"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"query notificationCount { currentUser { __typename notificationCount } }"#
    ))

  public init() {}

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Query }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("currentUser", CurrentUser?.self),
    ] }

    /// Get current user
    public var currentUser: CurrentUser? { __data["currentUser"] }

    /// CurrentUser
    ///
    /// Parent Type: `UserType`
    public struct CurrentUser: LoveNotesGraphQL.SelectionSet {
      public let __data: DataDict
      public init(_dataDict: DataDict) { __data = _dataDict }

      public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.UserType }
      public static var __selections: [ApolloAPI.Selection] { [
        .field("__typename", String.self),
        .field("notificationCount", Int.self),
      ] }

      /// Get user notification count
      public var notificationCount: Int { __data["notificationCount"] }
    }
  }
}
