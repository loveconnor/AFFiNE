// @generated
// This file was automatically generated and should not be edited.

@_exported import ApolloAPI

public struct LicenseBody: LoveNotesGraphQL.SelectionSet, Fragment {
  public static var fragmentDefinition: StaticString {
    #"fragment licenseBody on License { __typename expiredAt installedAt quantity recurring validatedAt variant }"#
  }

  public let __data: DataDict
  public init(_dataDict: DataDict) { __data = _dataDict }

  public static var __parentType: any ApolloAPI.ParentType { LoveNotesGraphQL.Objects.License }
  public static var __selections: [ApolloAPI.Selection] { [
    .field("__typename", String.self),
    .field("expiredAt", LoveNotesGraphQL.DateTime?.self),
    .field("installedAt", LoveNotesGraphQL.DateTime.self),
    .field("quantity", Int.self),
    .field("recurring", GraphQLEnum<LoveNotesGraphQL.SubscriptionRecurring>.self),
    .field("validatedAt", LoveNotesGraphQL.DateTime.self),
    .field("variant", GraphQLEnum<LoveNotesGraphQL.SubscriptionVariant>?.self),
  ] }

  public var expiredAt: LoveNotesGraphQL.DateTime? { __data["expiredAt"] }
  public var installedAt: LoveNotesGraphQL.DateTime { __data["installedAt"] }
  public var quantity: Int { __data["quantity"] }
  public var recurring: GraphQLEnum<LoveNotesGraphQL.SubscriptionRecurring> { __data["recurring"] }
  public var validatedAt: LoveNotesGraphQL.DateTime { __data["validatedAt"] }
  public var variant: GraphQLEnum<LoveNotesGraphQL.SubscriptionVariant>? { __data["variant"] }
}
