/*
  Drop legacy triggers/functions that referenced feature_id after the feature_id columns
  were removed from user_features/workspace_features.
*/

DROP TRIGGER IF EXISTS user_features_set_feature_id ON "user_features";
DROP FUNCTION IF EXISTS set_user_feature_id_from_name();

DROP TRIGGER IF EXISTS workspace_features_set_feature_id ON "workspace_features";
DROP FUNCTION IF EXISTS set_workspace_feature_id_from_name();

DROP FUNCTION IF EXISTS ensure_feature_exists(TEXT);
