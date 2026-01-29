import { LiveData } from '@toeverything/infra';

export class TemplateDocSetting {
  enablePageTemplate$ = new LiveData<boolean>(false);
  pageTemplateDocId$ = new LiveData<string | undefined>(undefined);

  updatePageTemplateDocId(id?: string) {
    this.pageTemplateDocId$.next(id);
  }
  togglePageTemplate(enabled: boolean) {
    this.enablePageTemplate$.next(enabled);
  }
  updateEnablePageTemplate(enabled: boolean) {
    this.enablePageTemplate$.next(enabled);
  }
}
