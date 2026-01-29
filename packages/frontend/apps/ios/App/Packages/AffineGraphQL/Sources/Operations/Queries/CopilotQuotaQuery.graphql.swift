// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class CopilotQuotaQuery: GraphQLQuery {
  public static let operationName: String = "copilotQuota"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"query copilotQuota { currentUser { __typename copilot { __typename quota { __typename limit used } } } }"#
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
        .field("copilot", Copilot.self),
      ] }

      public var copilot: Copilot { __data["copilot"] }

      /// CurrentUser.Copilot
      ///
      /// Parent Type: `Copilot`
      public struct Copilot: LoveNotesGraphQL.SelectionSet {
        public let __data: DataDict
        public init(_dataDict: DataDict) { __data = _dataDict }

        public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Copilot }
        public static var __selections: [ApolloAPI.Selection] { [
          .field("__typename", String.self),
          .field("quota", Quota.self),
        ] }

        /// Get the quota of the user in the workspace
        public var quota: Quota { __data["quota"] }

        /// CurrentUser.Copilot.Quota
        ///
        /// Parent Type: `CopilotQuota`
        public struct Quota: LoveNotesGraphQL.SelectionSet {
          public let __data: DataDict
          public init(_dataDict: DataDict) { __data = _dataDict }

          public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.CopilotQuota }
          public static var __selections: [ApolloAPI.Selection] { [
            .field("__typename", String.self),
            .field("limit", LoveNotesGraphQL.SafeInt?.self),
            .field("used", LoveNotesGraphQL.SafeInt.self),
          ] }

          public var limit: LoveNotesGraphQL.SafeInt? { __data["limit"] }
          public var used: LoveNotesGraphQL.SafeInt { __data["used"] }
        }
      }
    }
  }
}
