// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class GetWorkspaceEmbeddingStatusQuery: GraphQLQuery {
  public static let operationName: String = "getWorkspaceEmbeddingStatus"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"query getWorkspaceEmbeddingStatus($workspaceId: String!) { queryWorkspaceEmbeddingStatus(workspaceId: $workspaceId) { __typename total embedded } }"#
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
      .field("queryWorkspaceEmbeddingStatus", QueryWorkspaceEmbeddingStatus.self, arguments: ["workspaceId": .variable("workspaceId")]),
    ] }

    /// query workspace embedding status
    public var queryWorkspaceEmbeddingStatus: QueryWorkspaceEmbeddingStatus { __data["queryWorkspaceEmbeddingStatus"] }

    /// QueryWorkspaceEmbeddingStatus
    ///
    /// Parent Type: `ContextWorkspaceEmbeddingStatus`
    public struct QueryWorkspaceEmbeddingStatus: LoveNotesGraphQL.SelectionSet {
      public let __data: DataDict
      public init(_dataDict: DataDict) { __data = _dataDict }

      public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.ContextWorkspaceEmbeddingStatus }
      public static var __selections: [ApolloAPI.Selection] { [
        .field("__typename", String.self),
        .field("total", LoveNotesGraphQL.SafeInt.self),
        .field("embedded", LoveNotesGraphQL.SafeInt.self),
      ] }

      public var total: LoveNotesGraphQL.SafeInt { __data["total"] }
      public var embedded: LoveNotesGraphQL.SafeInt { __data["embedded"] }
    }
  }
}
