// @generated
// This file was automatically generated and should not be edited.

import ApolloAPI

public protocol SelectionSet: ApolloAPI.SelectionSet & ApolloAPI.RootSelectionSet
where Schema == LoveNotesGraphQL.SchemaMetadata {}

public protocol InlineFragment: ApolloAPI.SelectionSet & ApolloAPI.InlineFragment
where Schema == LoveNotesGraphQL.SchemaMetadata {}

public protocol MutableSelectionSet: ApolloAPI.MutableRootSelectionSet
where Schema == LoveNotesGraphQL.SchemaMetadata {}

public protocol MutableInlineFragment: ApolloAPI.MutableSelectionSet & ApolloAPI.InlineFragment
where Schema == LoveNotesGraphQL.SchemaMetadata {}

public enum SchemaMetadata: ApolloAPI.SchemaMetadata {
  public static let configuration: any ApolloAPI.SchemaConfiguration.Type = SchemaConfiguration.self

  public static func objectType(forTypename typename: String) -> ApolloAPI.Object? {
    switch typename {
    case "AggregateBucketHitsObjectType": return LoveNotesGraphQL.Objects.AggregateBucketHitsObjectType
    case "AggregateBucketObjectType": return LoveNotesGraphQL.Objects.AggregateBucketObjectType
    case "AggregateResultObjectType": return LoveNotesGraphQL.Objects.AggregateResultObjectType
    case "AppConfigValidateResult": return LoveNotesGraphQL.Objects.AppConfigValidateResult
    case "BlobUploadInit": return LoveNotesGraphQL.Objects.BlobUploadInit
    case "BlobUploadPart": return LoveNotesGraphQL.Objects.BlobUploadPart
    case "BlobUploadedPart": return LoveNotesGraphQL.Objects.BlobUploadedPart
    case "ChatMessage": return LoveNotesGraphQL.Objects.ChatMessage
    case "CommentChangeObjectType": return LoveNotesGraphQL.Objects.CommentChangeObjectType
    case "CommentChangeObjectTypeEdge": return LoveNotesGraphQL.Objects.CommentChangeObjectTypeEdge
    case "CommentObjectType": return LoveNotesGraphQL.Objects.CommentObjectType
    case "CommentObjectTypeEdge": return LoveNotesGraphQL.Objects.CommentObjectTypeEdge
    case "ContextMatchedDocChunk": return LoveNotesGraphQL.Objects.ContextMatchedDocChunk
    case "ContextMatchedFileChunk": return LoveNotesGraphQL.Objects.ContextMatchedFileChunk
    case "ContextWorkspaceEmbeddingStatus": return LoveNotesGraphQL.Objects.ContextWorkspaceEmbeddingStatus
    case "Copilot": return LoveNotesGraphQL.Objects.Copilot
    case "CopilotContext": return LoveNotesGraphQL.Objects.CopilotContext
    case "CopilotContextBlob": return LoveNotesGraphQL.Objects.CopilotContextBlob
    case "CopilotContextCategory": return LoveNotesGraphQL.Objects.CopilotContextCategory
    case "CopilotContextDoc": return LoveNotesGraphQL.Objects.CopilotContextDoc
    case "CopilotContextFile": return LoveNotesGraphQL.Objects.CopilotContextFile
    case "CopilotHistories": return LoveNotesGraphQL.Objects.CopilotHistories
    case "CopilotHistoriesTypeEdge": return LoveNotesGraphQL.Objects.CopilotHistoriesTypeEdge
    case "CopilotModelType": return LoveNotesGraphQL.Objects.CopilotModelType
    case "CopilotModelsType": return LoveNotesGraphQL.Objects.CopilotModelsType
    case "CopilotPromptConfigType": return LoveNotesGraphQL.Objects.CopilotPromptConfigType
    case "CopilotPromptMessageType": return LoveNotesGraphQL.Objects.CopilotPromptMessageType
    case "CopilotPromptType": return LoveNotesGraphQL.Objects.CopilotPromptType
    case "CopilotQuota": return LoveNotesGraphQL.Objects.CopilotQuota
    case "CopilotWorkspaceConfig": return LoveNotesGraphQL.Objects.CopilotWorkspaceConfig
    case "CopilotWorkspaceFile": return LoveNotesGraphQL.Objects.CopilotWorkspaceFile
    case "CopilotWorkspaceFileTypeEdge": return LoveNotesGraphQL.Objects.CopilotWorkspaceFileTypeEdge
    case "CopilotWorkspaceIgnoredDoc": return LoveNotesGraphQL.Objects.CopilotWorkspaceIgnoredDoc
    case "CopilotWorkspaceIgnoredDocTypeEdge": return LoveNotesGraphQL.Objects.CopilotWorkspaceIgnoredDocTypeEdge
    case "CredentialsRequirementType": return LoveNotesGraphQL.Objects.CredentialsRequirementType
    case "DeleteAccount": return LoveNotesGraphQL.Objects.DeleteAccount
    case "DocHistoryType": return LoveNotesGraphQL.Objects.DocHistoryType
    case "DocPermissions": return LoveNotesGraphQL.Objects.DocPermissions
    case "DocType": return LoveNotesGraphQL.Objects.DocType
    case "DocTypeEdge": return LoveNotesGraphQL.Objects.DocTypeEdge
    case "EditorType": return LoveNotesGraphQL.Objects.EditorType
    case "GrantedDocUserType": return LoveNotesGraphQL.Objects.GrantedDocUserType
    case "GrantedDocUserTypeEdge": return LoveNotesGraphQL.Objects.GrantedDocUserTypeEdge
    case "InvitationType": return LoveNotesGraphQL.Objects.InvitationType
    case "InvitationWorkspaceType": return LoveNotesGraphQL.Objects.InvitationWorkspaceType
    case "InviteLink": return LoveNotesGraphQL.Objects.InviteLink
    case "InviteResult": return LoveNotesGraphQL.Objects.InviteResult
    case "InviteUserType": return LoveNotesGraphQL.Objects.InviteUserType
    case "InvoiceType": return LoveNotesGraphQL.Objects.InvoiceType
    case "License": return LoveNotesGraphQL.Objects.License
    case "LimitedUserType": return LoveNotesGraphQL.Objects.LimitedUserType
    case "ListedBlob": return LoveNotesGraphQL.Objects.ListedBlob
    case "Mutation": return LoveNotesGraphQL.Objects.Mutation
    case "NotificationObjectType": return LoveNotesGraphQL.Objects.NotificationObjectType
    case "NotificationObjectTypeEdge": return LoveNotesGraphQL.Objects.NotificationObjectTypeEdge
    case "PageInfo": return LoveNotesGraphQL.Objects.PageInfo
    case "PaginatedCommentChangeObjectType": return LoveNotesGraphQL.Objects.PaginatedCommentChangeObjectType
    case "PaginatedCommentObjectType": return LoveNotesGraphQL.Objects.PaginatedCommentObjectType
    case "PaginatedCopilotHistoriesType": return LoveNotesGraphQL.Objects.PaginatedCopilotHistoriesType
    case "PaginatedCopilotWorkspaceFileType": return LoveNotesGraphQL.Objects.PaginatedCopilotWorkspaceFileType
    case "PaginatedDocType": return LoveNotesGraphQL.Objects.PaginatedDocType
    case "PaginatedGrantedDocUserType": return LoveNotesGraphQL.Objects.PaginatedGrantedDocUserType
    case "PaginatedIgnoredDocsType": return LoveNotesGraphQL.Objects.PaginatedIgnoredDocsType
    case "PaginatedNotificationObjectType": return LoveNotesGraphQL.Objects.PaginatedNotificationObjectType
    case "PasswordLimitsType": return LoveNotesGraphQL.Objects.PasswordLimitsType
    case "PublicUserType": return LoveNotesGraphQL.Objects.PublicUserType
    case "Query": return LoveNotesGraphQL.Objects.Query
    case "ReleaseVersionType": return LoveNotesGraphQL.Objects.ReleaseVersionType
    case "RemoveAvatar": return LoveNotesGraphQL.Objects.RemoveAvatar
    case "ReplyObjectType": return LoveNotesGraphQL.Objects.ReplyObjectType
    case "RevealedAccessToken": return LoveNotesGraphQL.Objects.RevealedAccessToken
    case "SearchDocObjectType": return LoveNotesGraphQL.Objects.SearchDocObjectType
    case "SearchNodeObjectType": return LoveNotesGraphQL.Objects.SearchNodeObjectType
    case "SearchResultObjectType": return LoveNotesGraphQL.Objects.SearchResultObjectType
    case "SearchResultPagination": return LoveNotesGraphQL.Objects.SearchResultPagination
    case "ServerConfigType": return LoveNotesGraphQL.Objects.ServerConfigType
    case "StreamObject": return LoveNotesGraphQL.Objects.StreamObject
    case "SubscriptionPrice": return LoveNotesGraphQL.Objects.SubscriptionPrice
    case "SubscriptionType": return LoveNotesGraphQL.Objects.SubscriptionType
    case "TranscriptionItemType": return LoveNotesGraphQL.Objects.TranscriptionItemType
    case "TranscriptionResultType": return LoveNotesGraphQL.Objects.TranscriptionResultType
    case "UserImportFailedType": return LoveNotesGraphQL.Objects.UserImportFailedType
    case "UserQuotaHumanReadableType": return LoveNotesGraphQL.Objects.UserQuotaHumanReadableType
    case "UserQuotaType": return LoveNotesGraphQL.Objects.UserQuotaType
    case "UserQuotaUsageType": return LoveNotesGraphQL.Objects.UserQuotaUsageType
    case "UserSettingsType": return LoveNotesGraphQL.Objects.UserSettingsType
    case "UserType": return LoveNotesGraphQL.Objects.UserType
    case "WorkspaceDocMeta": return LoveNotesGraphQL.Objects.WorkspaceDocMeta
    case "WorkspacePermissions": return LoveNotesGraphQL.Objects.WorkspacePermissions
    case "WorkspaceQuotaHumanReadableType": return LoveNotesGraphQL.Objects.WorkspaceQuotaHumanReadableType
    case "WorkspaceQuotaType": return LoveNotesGraphQL.Objects.WorkspaceQuotaType
    case "WorkspaceRolePermissions": return LoveNotesGraphQL.Objects.WorkspaceRolePermissions
    case "WorkspaceType": return LoveNotesGraphQL.Objects.WorkspaceType
    case "WorkspaceUserType": return LoveNotesGraphQL.Objects.WorkspaceUserType
    case "tokenType": return LoveNotesGraphQL.Objects.TokenType
    default: return nil
    }
  }
}

public enum Objects {}
public enum Interfaces {}
public enum Unions {}
