// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public class AddContextCategoryMutation: GraphQLMutation {
  public static let operationName: String = "addContextCategory"
  public static let operationDocument: ApolloAPI.OperationDocument = .init(
    definition: .init(
      #"mutation addContextCategory($options: AddContextCategoryInput!) { addContextCategory(options: $options) { __typename id createdAt type docs { __typename id createdAt status } } }"#
    ))

  public var options: AddContextCategoryInput

  public init(options: AddContextCategoryInput) {
    self.options = options
  }

  public var __variables: Variables? { ["options": options] }

  public struct Data: LoveNotesGraphQL.SelectionSet {
    public let __data: DataDict
    public init(_dataDict: DataDict) { __data = _dataDict }

    public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.Mutation }
    public static var __selections: [ApolloAPI.Selection] { [
      .field("addContextCategory", AddContextCategory.self, arguments: ["options": .variable("options")]),
    ] }

    /// add a category to context
    public var addContextCategory: AddContextCategory { __data["addContextCategory"] }

    /// AddContextCategory
    ///
    /// Parent Type: `CopilotContextCategory`
    public struct AddContextCategory: LoveNotesGraphQL.SelectionSet {
      public let __data: DataDict
      public init(_dataDict: DataDict) { __data = _dataDict }

      public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.CopilotContextCategory }
      public static var __selections: [ApolloAPI.Selection] { [
        .field("__typename", String.self),
        .field("id", LoveNotesGraphQL.ID.self),
        .field("createdAt", LoveNotesGraphQL.SafeInt.self),
        .field("type", GraphQLEnum<LoveNotesGraphQL.ContextCategories>.self),
        .field("docs", [Doc].self),
      ] }

      public var id: LoveNotesGraphQL.ID { __data["id"] }
      public var createdAt: LoveNotesGraphQL.SafeInt { __data["createdAt"] }
      public var type: GraphQLEnum<LoveNotesGraphQL.ContextCategories> { __data["type"] }
      public var docs: [Doc] { __data["docs"] }

      /// AddContextCategory.Doc
      ///
      /// Parent Type: `CopilotContextDoc`
      public struct Doc: LoveNotesGraphQL.SelectionSet {
        public let __data: DataDict
        public init(_dataDict: DataDict) { __data = _dataDict }

        public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.CopilotContextDoc }
        public static var __selections: [ApolloAPI.Selection] { [
          .field("__typename", String.self),
          .field("id", LoveNotesGraphQL.ID.self),
          .field("createdAt", LoveNotesGraphQL.SafeInt.self),
          .field("status", GraphQLEnum<LoveNotesGraphQL.ContextEmbedStatus>?.self),
        ] }

        public var id: LoveNotesGraphQL.ID { __data["id"] }
        public var createdAt: LoveNotesGraphQL.SafeInt { __data["createdAt"] }
        public var status: GraphQLEnum<LoveNotesGraphQL.ContextEmbedStatus>? { __data["status"] }
      }
    }
  }
}
