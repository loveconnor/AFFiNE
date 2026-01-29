// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class GetWorkspaceSubscriptionQuery: GraphQLQuery {
  public static let operationName: String = "getWorkspaceSubscription"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"query getWorkspaceSubscription($workspaceId: String!) { workspace(id: $workspaceId) { __typename subscription { __typename id status plan recurring start end nextBillAt canceledAt variant } } }"#
    ))

  public var workspaceId: String

  public init(workspaceId: String) {
    self.workspaceId = workspaceId
  }

  public var __variables: Variables? { ["workspaceId": workspaceId] }

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Query }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("workspace", Workspace.self, arguments: ["id": .variable("workspaceId")]),
    ] }

    /// Get workspace by id
    public var workspace: Workspace { __data["workspace"] }

    /// Workspace
    ///
    /// Parent Type: `WorkspaceType`
    public struct Workspace: LoveNotesGraphQL.SelectionSet {
      public let __data: DataDict
      public init(_dataDict: DataDict) { __data = _dataDict }

      public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.WorkspaceType }
      public static var __selections: [ApolloAPI.Selection] { [
        .field("__typename", String.self),
        .field("subscription", Subscription?.self),
      ] }

      /// The team subscription of the workspace, if exists.
      public var subscription: Subscription? { __data["subscription"] }

      /// Workspace.Subscription
      ///
      /// Parent Type: `SubscriptionType`
      public struct Subscription: LoveNotesGraphQL.SelectionSet {
        public let __data: DataDict
        public init(_dataDict: DataDict) { __data = _dataDict }

        public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.SubscriptionType }
        public static var __selections: [ApolloAPI.Selection] { [
          .field("__typename", String.self),
          .field("id", String?.self),
          .field("status", GraphQLEnum<LoveNotesGraphQL.SubscriptionStatus>.self),
          .field("plan", GraphQLEnum<LoveNotesGraphQL.SubscriptionPlan>.self),
          .field("recurring", GraphQLEnum<LoveNotesGraphQL.SubscriptionRecurring>.self),
          .field("start", LoveNotesGraphQL.DateTime.self),
          .field("end", LoveNotesGraphQL.DateTime?.self),
          .field("nextBillAt", LoveNotesGraphQL.DateTime?.self),
          .field("canceledAt", LoveNotesGraphQL.DateTime?.self),
          .field("variant", GraphQLEnum<LoveNotesGraphQL.SubscriptionVariant>?.self),
        ] }

        @available(*, deprecated, message: "removed")
        public var id: String? { __data["id"] }
        public var status: GraphQLEnum<LoveNotesGraphQL.SubscriptionStatus> { __data["status"] }
        /// The 'Free' plan just exists to be a placeholder and for the type convenience of frontend.
        /// There won't actually be a subscription with plan 'Free'
        public var plan: GraphQLEnum<LoveNotesGraphQL.SubscriptionPlan> { __data["plan"] }
        public var recurring: GraphQLEnum<LoveNotesGraphQL.SubscriptionRecurring> { __data["recurring"] }
        public var start: LoveNotesGraphQL.DateTime { __data["start"] }
        public var end: LoveNotesGraphQL.DateTime? { __data["end"] }
        public var nextBillAt: LoveNotesGraphQL.DateTime? { __data["nextBillAt"] }
        public var canceledAt: LoveNotesGraphQL.DateTime? { __data["canceledAt"] }
        public var variant: GraphQLEnum<LoveNotesGraphQL.SubscriptionVariant>? { __data["variant"] }
      }
    }
  }
}
