import { EdgelessClipboardConfig } from '@blocksuite/lovenotes-block-surface';
import { type BlockSnapshot } from '@blocksuite/store';

export class EdgelessClipboardEmbedGithubConfig extends EdgelessClipboardConfig {
  static override readonly key = 'lovenotes:embed-github';

  override createBlock(githubEmbed: BlockSnapshot): string | null {
    if (!this.surface) return null;

    const {
      xywh,
      style,
      owner,
      repo,
      githubType,
      githubId,
      url,
      caption,
      image,
      status,
      statusReason,
      title,
      description,
      createdAt,
      assignees,
    } = githubEmbed.props;

    const embedGithubId = this.crud.addBlock(
      'lovenotes:embed-github',
      {
        xywh,
        style,
        owner,
        repo,
        githubType,
        githubId,
        url,
        caption,
        image,
        status,
        statusReason,
        title,
        description,
        createdAt,
        assignees,
      },
      this.surface.model.id
    );
    return embedGithubId;
  }
}
