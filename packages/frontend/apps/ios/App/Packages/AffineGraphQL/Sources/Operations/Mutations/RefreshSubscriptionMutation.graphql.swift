// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class RefreshSubscriptionMutation: GraphQLMutation {
  public static let operationName: String = "refreshSubscription"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"mutation refreshSubscription { refreshUserSubscriptions { __typename id status plan recurring start end nextBillAt canceledAt variant } }"#
    ))

  public init() {}

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Mutation }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("refreshUserSubscriptions", [RefreshUserSubscription].self),
    ] }

    /// Refresh current user subscriptions and return latest.
    public var refreshUserSubscriptions: [RefreshUserSubscription] { __data["refreshUserSubscriptions"] }

    /// RefreshUserSubscription
    ///
    /// Parent Type: `SubscriptionType`
    public struct RefreshUserSubscription: LoveNotesGraphQL.SelectionSet {
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
