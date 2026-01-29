// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class CreateWorkspaceMutation: GraphQLMutation {
  public static let operationName: String = "createWorkspace"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"mutation createWorkspace { createWorkspace { __typename id public createdAt } }"#
    ))

  public init() {}

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Mutation }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("createWorkspace", CreateWorkspace.self),
    ] }

    /// Create a new workspace
    public var createWorkspace: CreateWorkspace { __data["createWorkspace"] }

    /// CreateWorkspace
    ///
    /// Parent Type: `WorkspaceType`
    public struct CreateWorkspace: LoveNotesGraphQL.SelectionSet {
      public let __data: DataDict
      public init(_dataDict: DataDict) { __data = _dataDict }

      public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.WorkspaceType }
      public static var __selections: [ApolloAPI.Selection] { [
        .field("__typename", String.self),
        .field("id", LoveNotesGraphQL.ID.self),
        .field("public", Bool.self),
        .field("createdAt", LoveNotesGraphQL.DateTime.self),
      ] }

      public var id: LoveNotesGraphQL.ID { __data["id"] }
      /// is Public workspace
      public var `public`: Bool { __data["public"] }
      /// Workspace created date
      public var createdAt: LoveNotesGraphQL.DateTime { __data["createdAt"] }
    }
  }
}
