// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class ListNotificationsQuery: GraphQLQuery {
  public static let operationName: String = "listNotifications"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"query listNotifications($pagination: PaginationInput!) { currentUser { __typename notifications(pagination: $pagination) { __typename totalCount edges { __typename cursor node { __typename id type level read createdAt updatedAt body } } pageInfo { __typename startCursor endCursor hasNextPage hasPreviousPage } } } }"#
    ))

  public var pagination: PaginationInput

  public init(pagination: PaginationInput) {
    self.pagination = pagination
  }

  public var __variables: Variables? { ["pagination": pagination] }

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
        .field("notifications", Notifications.self, arguments: ["pagination": .variable("pagination")]),
      ] }

      /// Get current user notifications
      public var notifications: Notifications { __data["notifications"] }

      /// CurrentUser.Notifications
      ///
      /// Parent Type: `PaginatedNotificationObjectType`
      public struct Notifications: LoveNotesGraphQL.SelectionSet {
        public let __data: DataDict
        public init(_dataDict: DataDict) { __data = _dataDict }

        public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.PaginatedNotificationObjectType }
        public static var __selections: [ApolloAPI.Selection] { [
          .field("__typename", String.self),
          .field("totalCount", Int.self),
          .field("edges", [Edge].self),
          .field("pageInfo", PageInfo.self),
        ] }

        public var totalCount: Int { __data["totalCount"] }
        public var edges: [Edge] { __data["edges"] }
        public var pageInfo: PageInfo { __data["pageInfo"] }

        /// CurrentUser.Notifications.Edge
        ///
        /// Parent Type: `NotificationObjectTypeEdge`
        public struct Edge: LoveNotesGraphQL.SelectionSet {
          public let __data: DataDict
          public init(_dataDict: DataDict) { __data = _dataDict }

          public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.NotificationObjectTypeEdge }
          public static var __selections: [ApolloAPI.Selection] { [
            .field("__typename", String.self),
            .field("cursor", String.self),
            .field("node", Node.self),
          ] }

          public var cursor: String { __data["cursor"] }
          public var node: Node { __data["node"] }

          /// CurrentUser.Notifications.Edge.Node
          ///
          /// Parent Type: `NotificationObjectType`
          public struct Node: LoveNotesGraphQL.SelectionSet {
            public let __data: DataDict
            public init(_dataDict: DataDict) { __data = _dataDict }

            public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.NotificationObjectType }
            public static var __selections: [ApolloAPI.Selection] { [
              .field("__typename", String.self),
              .field("id", LoveNotesGraphQL.ID.self),
              .field("type", GraphQLEnum<LoveNotesGraphQL.NotificationType>.self),
              .field("level", GraphQLEnum<LoveNotesGraphQL.NotificationLevel>.self),
              .field("read", Bool.self),
              .field("createdAt", LoveNotesGraphQL.DateTime.self),
              .field("updatedAt", LoveNotesGraphQL.DateTime.self),
              .field("body", LoveNotesGraphQL.JSONObject.self),
            ] }

            public var id: LoveNotesGraphQL.ID { __data["id"] }
            /// The type of the notification
            public var type: GraphQLEnum<LoveNotesGraphQL.NotificationType> { __data["type"] }
            /// The level of the notification
            public var level: GraphQLEnum<LoveNotesGraphQL.NotificationLevel> { __data["level"] }
            /// Whether the notification has been read
            public var read: Bool { __data["read"] }
            /// The created at time of the notification
            public var createdAt: LoveNotesGraphQL.DateTime { __data["createdAt"] }
            /// The updated at time of the notification
            public var updatedAt: LoveNotesGraphQL.DateTime { __data["updatedAt"] }
            /// The body of the notification, different types have different fields, see UnionNotificationBodyType
            public var body: LoveNotesGraphQL.JSONObject { __data["body"] }
          }
        }

        /// CurrentUser.Notifications.PageInfo
        ///
        /// Parent Type: `PageInfo`
        public struct PageInfo: LoveNotesGraphQL.SelectionSet {
          public let __data: DataDict
          public init(_dataDict: DataDict) { __data = _dataDict }

          public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.PageInfo }
          public static var __selections: [ApolloAPI.Selection] { [
            .field("__typename", String.self),
            .field("startCursor", String?.self),
            .field("endCursor", String?.self),
            .field("hasNextPage", Bool.self),
            .field("hasPreviousPage", Bool.self),
          ] }

          public var startCursor: String? { __data["startCursor"] }
          public var endCursor: String? { __data["endCursor"] }
          public var hasNextPage: Bool { __data["hasNextPage"] }
          public var hasPreviousPage: Bool { __data["hasPreviousPage"] }
        }
      }
    }
  }
}
