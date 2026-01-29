// @ts-nocheck
/* eslint-disable */
import { createElement, useMemo, type ComponentType, type JSX } from "react";
import { useTranslation, Trans, type TransProps } from "react-i18next";
type TypedTransProps<Value, Components, Context extends string | undefined = undefined> = Omit<TransProps<string, never, never, Context>, "values" | "ns" | "i18nKey"> & ({} extends Value ? {} : {
    values: Value;
}) & {
    components: Components;
};
function createProxy(initValue: (key: string) => any) {
    function define(key: string) {
        const value = initValue(key);
        Object.defineProperty(container, key, { value, configurable: true });
        return value;
    }
    const container = {
        __proto__: new Proxy({ __proto__: null }, {
            get(_, key) {
                if (typeof key === "symbol")
                    return undefined;
                return define(key);
            },
        }),
    };
    return new Proxy(container, {
        getPrototypeOf: () => null,
        setPrototypeOf: (_, v) => v === null,
        getOwnPropertyDescriptor: (_, key) => {
            if (typeof key === "symbol")
                return undefined;
            if (!(key in container))
                define(key);
            return Object.getOwnPropertyDescriptor(container, key);
        },
    });
}
export function useLoveNotesI18N(): {
    /**
      * `Back to my Content`
      */
    ["404.back"](): string;
    /**
      * `Sorry, you do not have access or this content does not exist...`
      */
    ["404.hint"](): string;
    /**
      * `Sign in to another account`
      */
    ["404.signOut"](): string;
    /**
      * `LoveNotes Cloud`
      */
    ["LoveNotes Cloud"](): string;
    /**
      * `All docs`
      */
    ["All pages"](): string;
    /**
      * `App version`
      */
    ["App Version"](): string;
    /**
      * `Available offline`
      */
    ["Available Offline"](): string;
    /**
      * `Bold`
      */
    Bold(): string;
    /**
      * `Cancel`
      */
    Cancel(): string;
    /**
      * `Click to replace photo`
      */
    ["Click to replace photo"](): string;
    /**
      * `Collections`
      */
    Collections(): string;
    /**
      * `Complete`
      */
    Complete(): string;
    /**
      * `Confirm`
      */
    Confirm(): string;
    /**
      * `Continue`
      */
    Continue(): string;
    /**
      * `Convert to `
      */
    ["Convert to "](): string;
    /**
      * `Copied link to clipboard`
      */
    ["Copied link to clipboard"](): string;
    /**
      * `Copied to clipboard`
      */
    ["Copied to clipboard"](): string;
    /**
      * `Copy`
      */
    Copy(): string;
    /**
      * `Create`
      */
    Create(): string;
    /**
      * `Created`
      */
    Created(): string;
    /**
      * `Customise`
      */
    Customize(): string;
    /**
      * `Colors`
      */
    Colors(): string;
    /**
      * `Database file already loaded`
      */
    DB_FILE_ALREADY_LOADED(): string;
    /**
      * `Invalid database file`
      */
    DB_FILE_INVALID(): string;
    /**
      * `Database file migration failed`
      */
    DB_FILE_MIGRATION_FAILED(): string;
    /**
      * `Database file path invalid`
      */
    DB_FILE_PATH_INVALID(): string;
    /**
      * `Date`
      */
    Date(): string;
    /**
      * `Delete`
      */
    Delete(): string;
    /**
      * `Deleted`
      */
    Deleted(): string;
    /**
      * `Disable`
      */
    Disable(): string;
    /**
      * `Disable public sharing`
      */
    ["Disable Public Sharing"](): string;
    /**
      * `Disable snapshot`
      */
    ["Disable Snapshot"](): string;
    /**
      * `Divider`
      */
    Divider(): string;
    /**
      * `Edgeless`
      */
    Edgeless(): string;
    /**
      * `Edit`
      */
    Edit(): string;
    /**
      * `Editor version`
      */
    ["Editor Version"](): string;
    /**
      * `Enable`
      */
    Enable(): string;
    /**
      * `Enable LoveNotes Cloud`
      */
    ["Enable LoveNotes Cloud"](): string;
    /**
      * `If enabled, the data in this workspace will be backed up and synchronised via LoveNotes Cloud.`
      */
    ["Enable LoveNotes Cloud Description"](): string;
    /**
      * `Full Backup`
      */
    ["Full Backup"](): string;
    /**
      * `Export a complete workspace backup`
      */
    ["Full Backup Description"](): string;
    /**
      * `Sync all cloud data and export a complete workspace backup`
      */
    ["Full Backup Hint"](): string;
    /**
      * `Quick Export`
      */
    ["Quick Export"](): string;
    /**
      * `Skip cloud synchronization and quickly export current data(some attachments or docs may be missing)`
      */
    ["Quick Export Description"](): string;
    /**
      * `Export failed`
      */
    ["Export failed"](): string;
    /**
      * `Export success`
      */
    ["Export success"](): string;
    /**
      * `Export to HTML`
      */
    ["Export to HTML"](): string;
    /**
      * `Export to Markdown`
      */
    ["Export to Markdown"](): string;
    /**
      * `Export to PNG`
      */
    ["Export to PNG"](): string;
    /**
      * `File already exists`
      */
    FILE_ALREADY_EXISTS(): string;
    /**
      * `Favourite`
      */
    Favorite(): string;
    /**
      * `Favourited`
      */
    Favorited(): string;
    /**
      * `Favourites`
      */
    Favorites(): string;
    /**
      * `Feedback`
      */
    Feedback(): string;
    /**
      * `Found 0 results`
      */
    ["Find 0 result"](): string;
    /**
      * `Go back`
      */
    ["Go Back"](): string;
    /**
      * `Go forward`
      */
    ["Go Forward"](): string;
    /**
      * `Got it`
      */
    ["Got it"](): string;
    /**
      * `Heading {{number}}`
      */
    Heading(options: {
        readonly number: string;
    }): string;
    /**
      * `Image`
      */
    Image(): string;
    /**
      * `Import`
      */
    Import(): string;
    /**
      * `Info`
      */
    Info(): string;
    /**
      * `Invitation sent`
      */
    ["Invitation sent"](): string;
    /**
      * `Invited members have been notified with email to join this Workspace.`
      */
    ["Invitation sent hint"](): string;
    /**
      * `Invite`
      */
    Invite(): string;
    /**
      * `Invite members`
      */
    ["Invite Members"](): string;
    /**
      * `Invited members will collaborate with you in current workspace`
      */
    ["Invite Members Message"](): string;
    /**
      * `Insufficient team seat`
      */
    ["insufficient-team-seat"](): string;
    /**
      * `Joined workspace`
      */
    ["Joined Workspace"](): string;
    /**
      * `Leave`
      */
    Leave(): string;
    /**
      * `Hyperlink (with selected text)`
      */
    Link(): string;
    /**
      * `Loading...`
      */
    Loading(): string;
    /**
      * `Local`
      */
    Local(): string;
    /**
      * `Member`
      */
    Member(): string;
    /**
      * `Members`
      */
    Members(): string;
    /**
      * `Manage members here, invite new member by email.`
      */
    ["Members hint"](): string;
    /**
      * `New doc`
      */
    ["New Page"](): string;
    /**
      * `Owner`
      */
    Owner(): string;
    /**
      * `Page`
      */
    Page(): string;
    /**
      * `Pen`
      */
    Pen(): string;
    /**
      * `Pending`
      */
    Pending(): string;
    /**
      * `Collaborator`
      */
    Collaborator(): string;
    /**
      * `Under Review`
      */
    ["Under-Review"](): string;
    /**
      * `Need More Seats`
      */
    ["Need-More-Seats"](): string;
    /**
      * `Allocating Seat`
      */
    ["Allocating Seat"](): string;
    /**
      * `Admin`
      */
    Admin(): string;
    /**
      * `Publish`
      */
    Publish(): string;
    /**
      * `Published to web`
      */
    ["Published to Web"](): string;
    /**
      * `Quick search`
      */
    ["Quick Search"](): string;
    /**
      * `Search`
      */
    ["Quick search"](): string;
    /**
      * `Recent`
      */
    Recent(): string;
    /**
      * `Remove from workspace`
      */
    ["Remove from workspace"](): string;
    /**
      * `Remove photo`
      */
    ["Remove photo"](): string;
    /**
      * `Remove special filter`
      */
    ["Remove special filter"](): string;
    /**
      * `Removed successfully`
      */
    ["Removed successfully"](): string;
    /**
      * `Rename`
      */
    Rename(): string;
    /**
      * `Retry`
      */
    Retry(): string;
    /**
      * `Save`
      */
    Save(): string;
    /**
      * `Select`
      */
    Select(): string;
    /**
      * `Sign in`
      */
    ["Sign in"](): string;
    /**
      * `Sign in and enable`
      */
    ["Sign in and Enable"](): string;
    /**
      * `Sign out`
      */
    ["Sign out"](): string;
    /**
      * `Snapshot`
      */
    Snapshot(): string;
    /**
      * `Storage`
      */
    Storage(): string;
    /**
      * `Storage and export`
      */
    ["Storage and Export"](): string;
    /**
      * `Successfully deleted`
      */
    ["Successfully deleted"](): string;
    /**
      * `Successfully joined!`
      */
    ["Successfully joined!"](): string;
    /**
      * `Switch`
      */
    Switch(): string;
    /**
      * `Switch view`
      */
    switchView(): string;
    /**
      * `Sync`
      */
    Sync(): string;
    /**
      * `Synced with LoveNotes Cloud`
      */
    ["Synced with LoveNotes Cloud"](): string;
    /**
      * `Tags`
      */
    Tags(): string;
    /**
      * `Text`
      */
    Text(): string;
    /**
      * `Theme`
      */
    Theme(): string;
    /**
      * `Title`
      */
    Title(): string;
    /**
      * `Trash`
      */
    Trash(): string;
    /**
      * `Unknown error`
      */
    UNKNOWN_ERROR(): string;
    /**
      * `Undo`
      */
    Undo(): string;
    /**
      * `Unpin`
      */
    Unpin(): string;
    /**
      * `Untitled`
      */
    Untitled(): string;
    /**
      * `Update workspace name success`
      */
    ["Update workspace name success"](): string;
    /**
      * `Updated`
      */
    Updated(): string;
    /**
      * `Upload`
      */
    Upload(): string;
    /**
      * `Users`
      */
    Users(): string;
    /**
      * `Version`
      */
    Version(): string;
    /**
      * `Visit workspace`
      */
    ["Visit Workspace"](): string;
    /**
      * `Workspace name`
      */
    ["Workspace Name"](): string;
    /**
      * `Workspace Owner`
      */
    ["Workspace Owner"](): string;
    /**
      * `Workspace profile`
      */
    ["Workspace Profile"](): string;
    /**
      * `Workspace settings`
      */
    ["Workspace Settings"](): string;
    /**
      * `{{name}}'s settings`
      */
    ["Workspace Settings with name"](options: {
        readonly name: string;
    }): string;
    /**
      * `{{name}} is saved locally`
      */
    ["Workspace saved locally"](options: {
        readonly name: string;
    }): string;
    /**
      * `Zoom in`
      */
    ["Zoom in"](): string;
    /**
      * `Zoom out`
      */
    ["Zoom out"](): string;
    /**
      * `Unknown User`
      */
    ["Unknown User"](): string;
    /**
      * `Deleted User`
      */
    ["Deleted User"](): string;
    /**
      * `all`
      */
    all(): string;
    /**
      * `current`
      */
    current(): string;
    /**
      * `created at {{time}}`
      */
    ["created at"](options: {
        readonly time: string;
    }): string;
    /**
      * `last updated at {{time}}`
      */
    ["updated at"](options: {
        readonly time: string;
    }): string;
    /**
      * `Automatically check for new updates periodically.`
      */
    ["com.lovenotes.aboutLoveNotes.autoCheckUpdate.description"](): string;
    /**
      * `Check for updates automatically`
      */
    ["com.lovenotes.aboutLoveNotes.autoCheckUpdate.title"](): string;
    /**
      * `Automatically download updates (to this device).`
      */
    ["com.lovenotes.aboutLoveNotes.autoDownloadUpdate.description"](): string;
    /**
      * `Download updates automatically`
      */
    ["com.lovenotes.aboutLoveNotes.autoDownloadUpdate.title"](): string;
    /**
      * `View the LoveNotes Changelog.`
      */
    ["com.lovenotes.aboutLoveNotes.changelog.description"](): string;
    /**
      * `Discover what's new`
      */
    ["com.lovenotes.aboutLoveNotes.changelog.title"](): string;
    /**
      * `Check for update`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.button.check"](): string;
    /**
      * `Download update`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.button.download"](): string;
    /**
      * `Restart to update`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.button.restart"](): string;
    /**
      * `Retry`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.button.retry"](): string;
    /**
      * `New version is ready`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.description"](): string;
    /**
      * `Manually check for updates.`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.check"](): string;
    /**
      * `Checking for updates...`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.checking"](): string;
    /**
      * `Downloading the latest version...`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.downloading"](): string;
    /**
      * `Unable to connect to the update server.`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.error"](): string;
    /**
      * `You've got the latest version of LoveNotes.`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.latest"](): string;
    /**
      * `Restart to apply update.`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.restart"](): string;
    /**
      * `New update available ({{version}})`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.subtitle.update-available"](options: {
        readonly version: string;
    }): string;
    /**
      * `Check for updates`
      */
    ["com.lovenotes.aboutLoveNotes.checkUpdate.title"](): string;
    /**
      * `Communities`
      */
    ["com.lovenotes.aboutLoveNotes.community.title"](): string;
    /**
      * `LoveNotes community`
      */
    ["com.lovenotes.aboutLoveNotes.contact.community"](): string;
    /**
      * `Contact us`
      */
    ["com.lovenotes.aboutLoveNotes.contact.title"](): string;
    /**
      * `Official website`
      */
    ["com.lovenotes.aboutLoveNotes.contact.website"](): string;
    /**
      * `Privacy`
      */
    ["com.lovenotes.aboutLoveNotes.legal.privacy"](): string;
    /**
      * `Legal Info`
      */
    ["com.lovenotes.aboutLoveNotes.legal.title"](): string;
    /**
      * `Terms of use`
      */
    ["com.lovenotes.aboutLoveNotes.legal.tos"](): string;
    /**
      * `Information about LoveNotes`
      */
    ["com.lovenotes.aboutLoveNotes.subtitle"](): string;
    /**
      * `About LoveNotes`
      */
    ["com.lovenotes.aboutLoveNotes.title"](): string;
    /**
      * `App version`
      */
    ["com.lovenotes.aboutLoveNotes.version.app"](): string;
    /**
      * `Editor version`
      */
    ["com.lovenotes.aboutLoveNotes.version.editor.title"](): string;
    /**
      * `Version`
      */
    ["com.lovenotes.aboutLoveNotes.version.title"](): string;
    /**
      * `Get started`
      */
    ["com.lovenotes.ai-onboarding.edgeless.get-started"](): string;
    /**
      * `Lets you think bigger, create faster, work smarter and save time for every project.`
      */
    ["com.lovenotes.ai-onboarding.edgeless.message"](): string;
    /**
      * `Upgrade to unlimited usage`
      */
    ["com.lovenotes.ai-onboarding.edgeless.purchase"](): string;
    /**
      * `Right-clicking to select content AI`
      */
    ["com.lovenotes.ai-onboarding.edgeless.title"](): string;
    /**
      * `Lets you think bigger, create faster, work smarter and save time for every project.`
      */
    ["com.lovenotes.ai-onboarding.general.1.description"](): string;
    /**
      * `Meet LoveNotes AI`
      */
    ["com.lovenotes.ai-onboarding.general.1.title"](): string;
    /**
      * `Answer questions, draft docs, visualize ideas - LoveNotes AI can save you time at every possible step. Powered by GPT's most powerful model.`
      */
    ["com.lovenotes.ai-onboarding.general.2.description"](): string;
    /**
      * `Chat with LoveNotes AI`
      */
    ["com.lovenotes.ai-onboarding.general.2.title"](): string;
    /**
      * `Get insightful answer to any question, instantly.`
      */
    ["com.lovenotes.ai-onboarding.general.3.description"](): string;
    /**
      * `Edit inline with LoveNotes AI`
      */
    ["com.lovenotes.ai-onboarding.general.3.title"](): string;
    /**
      * `Expand thinking. Untangle complexity. Breakdown and visualise your content with crafted mindmap and presentable slides with one click.`
      */
    ["com.lovenotes.ai-onboarding.general.4.description"](): string;
    /**
      * `Make mind-map and presents with AI`
      */
    ["com.lovenotes.ai-onboarding.general.4.title"](): string;
    /**
      * `LoveNotes AI is ready`
      */
    ["com.lovenotes.ai-onboarding.general.5.title"](): string;
    /**
      * `Get started`
      */
    ["com.lovenotes.ai-onboarding.general.get-started"](): string;
    /**
      * `Next`
      */
    ["com.lovenotes.ai-onboarding.general.next"](): string;
    /**
      * `Back`
      */
    ["com.lovenotes.ai-onboarding.general.prev"](): string;
    /**
      * `Get unlimited usage`
      */
    ["com.lovenotes.ai-onboarding.general.purchase"](): string;
    /**
      * `Remind me later`
      */
    ["com.lovenotes.ai-onboarding.general.skip"](): string;
    /**
      * `Try for free`
      */
    ["com.lovenotes.ai-onboarding.general.try-for-free"](): string;
    /**
      * `Dismiss`
      */
    ["com.lovenotes.ai-onboarding.local.action-dismiss"](): string;
    /**
      * `Get started`
      */
    ["com.lovenotes.ai-onboarding.local.action-get-started"](): string;
    /**
      * `Lets you think bigger, create faster, work smarter and save time for every project.`
      */
    ["com.lovenotes.ai-onboarding.local.message"](): string;
    /**
      * `Meet LoveNotes AI`
      */
    ["com.lovenotes.ai-onboarding.local.title"](): string;
    /**
      * `New`
      */
    ["com.lovenotes.ai-scroll-tip.tag"](): string;
    /**
      * `Meet LoveNotes AI`
      */
    ["com.lovenotes.ai-scroll-tip.title"](): string;
    /**
      * `View`
      */
    ["com.lovenotes.ai-scroll-tip.view"](): string;
    /**
      * `Please switch to edgeless mode`
      */
    ["com.lovenotes.ai.action.edgeless-only.dialog-title"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.ai.login-required.dialog-cancel"](): string;
    /**
      * `Sign in`
      */
    ["com.lovenotes.ai.login-required.dialog-confirm"](): string;
    /**
      * `To use LoveNotes AI, please sign in to your LoveNotes Cloud account.`
      */
    ["com.lovenotes.ai.login-required.dialog-content"](): string;
    /**
      * `Sign in to continue`
      */
    ["com.lovenotes.ai.login-required.dialog-title"](): string;
    /**
      * `Failed to insert template, please try again.`
      */
    ["com.lovenotes.ai.template-insert.failed"](): string;
    /**
      * `LoveNotes AI`
      */
    ["com.lovenotes.ai.chat-panel.title"](): string;
    /**
      * `LoveNotes AI is loading history...`
      */
    ["com.lovenotes.ai.chat-panel.loading-history"](): string;
    /**
      * `Embedding {{done}}/{{total}}`
      */
    ["com.lovenotes.ai.chat-panel.embedding-progress"](options: Readonly<{
        done: string;
        total: string;
    }>): string;
    /**
      * `Delete this history?`
      */
    ["com.lovenotes.ai.chat-panel.session.delete.confirm.title"](): string;
    /**
      * `Do you want to delete this AI conversation history? Once deleted, it cannot be recovered.`
      */
    ["com.lovenotes.ai.chat-panel.session.delete.confirm.message"](): string;
    /**
      * `History deleted`
      */
    ["com.lovenotes.ai.chat-panel.session.delete.toast.success"](): string;
    /**
      * `Failed to delete history`
      */
    ["com.lovenotes.ai.chat-panel.session.delete.toast.failed"](): string;
    /**
      * `All docs`
      */
    ["com.lovenotes.all-pages.header"](): string;
    /**
      * `Star us`
      */
    ["com.lovenotes.app-sidebar.star-us"](): string;
    /**
      * `Download update`
      */
    ["com.lovenotes.appUpdater.downloadUpdate"](): string;
    /**
      * `Downloading`
      */
    ["com.lovenotes.appUpdater.downloading"](): string;
    /**
      * `Restart to install update`
      */
    ["com.lovenotes.appUpdater.installUpdate"](): string;
    /**
      * `Open download page`
      */
    ["com.lovenotes.appUpdater.openDownloadPage"](): string;
    /**
      * `Update available`
      */
    ["com.lovenotes.appUpdater.updateAvailable"](): string;
    /**
      * `Discover what's new!`
      */
    ["com.lovenotes.appUpdater.whatsNew"](): string;
    /**
      * `Customise the appearance of the client.`
      */
    ["com.lovenotes.appearanceSettings.clientBorder.description"](): string;
    /**
      * `Client border style`
      */
    ["com.lovenotes.appearanceSettings.clientBorder.title"](): string;
    /**
      * `Choose your colour mode`
      */
    ["com.lovenotes.appearanceSettings.color.description"](): string;
    /**
      * `Colour mode`
      */
    ["com.lovenotes.appearanceSettings.color.title"](): string;
    /**
      * `Edit all LoveNotes theme variables here`
      */
    ["com.lovenotes.appearanceSettings.customize-theme.description"](): string;
    /**
      * `Customize Theme`
      */
    ["com.lovenotes.appearanceSettings.customize-theme.title"](): string;
    /**
      * `Images`
      */
    ["com.lovenotes.appearanceSettings.images.title"](): string;
    /**
      * `Smooth image rendering`
      */
    ["com.lovenotes.appearanceSettings.images.antialiasing.title"](): string;
    /**
      * `When disabled, images are rendered using nearest-neighbor scaling for crisp pixels.`
      */
    ["com.lovenotes.appearanceSettings.images.antialiasing.description"](): string;
    /**
      * `Reset all`
      */
    ["com.lovenotes.appearanceSettings.customize-theme.reset"](): string;
    /**
      * `Open Theme Editor`
      */
    ["com.lovenotes.appearanceSettings.customize-theme.open"](): string;
    /**
      * `Choose your font style`
      */
    ["com.lovenotes.appearanceSettings.font.description"](): string;
    /**
      * `Font style`
      */
    ["com.lovenotes.appearanceSettings.font.title"](): string;
    /**
      * `Mono`
      */
    ["com.lovenotes.appearanceSettings.fontStyle.mono"](): string;
    /**
      * `Sans`
      */
    ["com.lovenotes.appearanceSettings.fontStyle.sans"](): string;
    /**
      * `Serif`
      */
    ["com.lovenotes.appearanceSettings.fontStyle.serif"](): string;
    /**
      * `Select the language for the interface.`
      */
    ["com.lovenotes.appearanceSettings.language.description"](): string;
    /**
      * `Display language`
      */
    ["com.lovenotes.appearanceSettings.language.title"](): string;
    /**
      * `Use background noise effect on the sidebar.`
      */
    ["com.lovenotes.appearanceSettings.noisyBackground.description"](): string;
    /**
      * `Noise background on the sidebar`
      */
    ["com.lovenotes.appearanceSettings.noisyBackground.title"](): string;
    /**
      * `Sidebar`
      */
    ["com.lovenotes.appearanceSettings.sidebar.title"](): string;
    /**
      * `Customize your LoveNotes appearance`
      */
    ["com.lovenotes.appearanceSettings.subtitle"](): string;
    /**
      * `Menubar`
      */
    ["com.lovenotes.appearanceSettings.menubar.title"](): string;
    /**
      * `Enable menubar app`
      */
    ["com.lovenotes.appearanceSettings.menubar.toggle"](): string;
    /**
      * `Display the menubar app in the tray for quick access to LoveNotes or meeting recordings.`
      */
    ["com.lovenotes.appearanceSettings.menubar.description"](): string;
    /**
      * `Window behavior`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.title"](): string;
    /**
      * `Quick open from tray icon`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.openOnLeftClick.toggle"](): string;
    /**
      * `Open LoveNotes when left‑clicking the tray icon.`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.openOnLeftClick.description"](): string;
    /**
      * `Minimize to tray`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.minimizeToTray.toggle"](): string;
    /**
      * `Minimize LoveNotes to the system tray.`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.minimizeToTray.description"](): string;
    /**
      * `Close to tray`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.closeToTray.toggle"](): string;
    /**
      * `Close LoveNotes to the system tray.`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.closeToTray.description"](): string;
    /**
      * `Start minimized`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.startMinimized.toggle"](): string;
    /**
      * `Start LoveNotes minimized to the system tray.`
      */
    ["com.lovenotes.appearanceSettings.menubar.windowBehavior.startMinimized.description"](): string;
    /**
      * `Theme`
      */
    ["com.lovenotes.appearanceSettings.theme.title"](): string;
    /**
      * `Appearance settings`
      */
    ["com.lovenotes.appearanceSettings.title"](): string;
    /**
      * `Use transparency effect on the sidebar.`
      */
    ["com.lovenotes.appearanceSettings.translucentUI.description"](): string;
    /**
      * `Translucent UI on the sidebar`
      */
    ["com.lovenotes.appearanceSettings.translucentUI.title"](): string;
    /**
      * `Show linked doc in sidebar`
      */
    ["com.lovenotes.appearanceSettings.showLinkedDocInSidebar.title"](): string;
    /**
      * `Control whether to show the structure of linked docs in the sidebar.`
      */
    ["com.lovenotes.appearanceSettings.showLinkedDocInSidebar.description"](): string;
    /**
      * `Your current email is {{email}}. We'll send a temporary verification link to this email.`
      */
    ["com.lovenotes.auth.change.email.message"](options: {
        readonly email: string;
    }): string;
    /**
      * `Please enter your new email address below. We will send a verification link to this email address to complete the process.`
      */
    ["com.lovenotes.auth.change.email.page.subtitle"](): string;
    /**
      * `Congratulations! You have successfully updated the email address associated with your LoveNotes Cloud account.`
      */
    ["com.lovenotes.auth.change.email.page.success.subtitle"](): string;
    /**
      * `Email address updated!`
      */
    ["com.lovenotes.auth.change.email.page.success.title"](): string;
    /**
      * `Change email address`
      */
    ["com.lovenotes.auth.change.email.page.title"](): string;
    /**
      * `Forgot password`
      */
    ["com.lovenotes.auth.forget"](): string;
    /**
      * `Later`
      */
    ["com.lovenotes.auth.later"](): string;
    /**
      * `Open LoveNotes`
      */
    ["com.lovenotes.auth.open.lovenotes"](): string;
    /**
      * `Download app`
      */
    ["com.lovenotes.auth.open.lovenotes.download-app"](): string;
    /**
      * `Try again`
      */
    ["com.lovenotes.auth.open.lovenotes.try-again"](): string;
    /**
      * `Still have problems?`
      */
    ["com.lovenotes.auth.open.lovenotes.still-have-problems"](): string;
    /**
      * `Continue with Browser`
      */
    ["com.lovenotes.auth.open.lovenotes.continue-with-browser"](): string;
    /**
      * `Download Latest Client`
      */
    ["com.lovenotes.auth.open.lovenotes.download-latest-client"](): string;
    /**
      * `Open here instead`
      */
    ["com.lovenotes.auth.open.lovenotes.doc.open-here"](): string;
    /**
      * `Edit settings`
      */
    ["com.lovenotes.auth.open.lovenotes.doc.edit-settings"](): string;
    /**
      * `Requires LoveNotes desktop app version 0.18 or later.`
      */
    ["com.lovenotes.auth.open.lovenotes.doc.footer-text"](): string;
    /**
      * `Please set a password of {{min}}-{{max}} characters with both letters and numbers to continue signing up with `
      */
    ["com.lovenotes.auth.page.sent.email.subtitle"](options: Readonly<{
        min: string;
        max: string;
    }>): string;
    /**
      * `Welcome to LoveNotes Cloud, you are almost there!`
      */
    ["com.lovenotes.auth.page.sent.email.title"](): string;
    /**
      * `Password`
      */
    ["com.lovenotes.auth.password"](): string;
    /**
      * `Invalid password`
      */
    ["com.lovenotes.auth.password.error"](): string;
    /**
      * `Set password failed`
      */
    ["com.lovenotes.auth.password.set-failed"](): string;
    /**
      * `Reset password`
      */
    ["com.lovenotes.auth.reset.password"](): string;
    /**
      * `You will receive an email with a link to reset your password. Please check your inbox.`
      */
    ["com.lovenotes.auth.reset.password.message"](): string;
    /**
      * `Password reset successful`
      */
    ["com.lovenotes.auth.reset.password.page.success"](): string;
    /**
      * `Reset your LoveNotes Cloud password`
      */
    ["com.lovenotes.auth.reset.password.page.title"](): string;
    /**
      * `Send reset link`
      */
    ["com.lovenotes.auth.send.reset.password.link"](): string;
    /**
      * `Send set link`
      */
    ["com.lovenotes.auth.send.set.password.link"](): string;
    /**
      * `Send verification link`
      */
    ["com.lovenotes.auth.send.verify.email.hint"](): string;
    /**
      * `Verification code`
      */
    ["com.lovenotes.auth.sign.auth.code"](): string;
    /**
      * `Invalid verification code`
      */
    ["com.lovenotes.auth.sign.auth.code.invalid"](): string;
    /**
      * `Continue with code`
      */
    ["com.lovenotes.auth.sign.auth.code.continue"](): string;
    /**
      * `Resend code`
      */
    ["com.lovenotes.auth.sign.auth.code.resend"](): string;
    /**
      * `Resend in {{second}}s`
      */
    ["com.lovenotes.auth.sign.auth.code.resend.hint"](options: {
        readonly second: string;
    }): string;
    /**
      * `Sent`
      */
    ["com.lovenotes.auth.sent"](): string;
    /**
      * `The verification link failed to be sent, please try again later.`
      */
    ["com.lovenotes.auth.sent.change.email.fail"](): string;
    /**
      * `Verification link has been sent.`
      */
    ["com.lovenotes.auth.sent.change.email.hint"](): string;
    /**
      * `Reset password link has been sent.`
      */
    ["com.lovenotes.auth.sent.change.password.hint"](): string;
    /**
      * `Your password has been updated! You can sign in LoveNotes Cloud with new password!`
      */
    ["com.lovenotes.auth.sent.reset.password.success.message"](): string;
    /**
      * `Set password link has been sent.`
      */
    ["com.lovenotes.auth.sent.set.password.hint"](): string;
    /**
      * `Your password has saved! You can sign in LoveNotes Cloud with email and password!`
      */
    ["com.lovenotes.auth.sent.set.password.success.message"](): string;
    /**
      * `Verification link has been sent.`
      */
    ["com.lovenotes.auth.sent.verify.email.hint"](): string;
    /**
      * `Save Email`
      */
    ["com.lovenotes.auth.set.email.save"](): string;
    /**
      * `Set password`
      */
    ["com.lovenotes.auth.set.password"](): string;
    /**
      * `Please set a password of {{min}}-{{max}} characters with both letters and numbers to continue signing up with `
      */
    ["com.lovenotes.auth.set.password.message"](options: Readonly<{
        min: string;
        max: string;
    }>): string;
    /**
      * `Maximum {{max}} characters`
      */
    ["com.lovenotes.auth.set.password.message.maxlength"](options: {
        readonly max: string;
    }): string;
    /**
      * `Minimum {{min}} characters`
      */
    ["com.lovenotes.auth.set.password.message.minlength"](options: {
        readonly min: string;
    }): string;
    /**
      * `Password set successful`
      */
    ["com.lovenotes.auth.set.password.page.success"](): string;
    /**
      * `Set your LoveNotes Cloud password`
      */
    ["com.lovenotes.auth.set.password.page.title"](): string;
    /**
      * `Set a password at least {{min}} letters long`
      */
    ["com.lovenotes.auth.set.password.placeholder"](options: {
        readonly min: string;
    }): string;
    /**
      * `Confirm password`
      */
    ["com.lovenotes.auth.set.password.placeholder.confirm"](): string;
    /**
      * `Save password`
      */
    ["com.lovenotes.auth.set.password.save"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.auth.sign-out.confirm-modal.cancel"](): string;
    /**
      * `Sign Out`
      */
    ["com.lovenotes.auth.sign-out.confirm-modal.confirm"](): string;
    /**
      * `After signing out, the Cloud Workspaces associated with this account will be removed from the current device, and signing in again will add them back.`
      */
    ["com.lovenotes.auth.sign-out.confirm-modal.description"](): string;
    /**
      * `Sign out?`
      */
    ["com.lovenotes.auth.sign-out.confirm-modal.title"](): string;
    /**
      * `If you haven't received the email, please check your spam folder.`
      */
    ["com.lovenotes.auth.sign.auth.code.message"](): string;
    /**
      * `Sign in with magic link`
      */
    ["com.lovenotes.auth.sign.auth.code.send-email.sign-in"](): string;
    /**
      * `Terms of conditions`
      */
    ["com.lovenotes.auth.sign.condition"](): string;
    /**
      * `Continue with email`
      */
    ["com.lovenotes.auth.sign.email.continue"](): string;
    /**
      * `Invalid email`
      */
    ["com.lovenotes.auth.sign.email.error"](): string;
    /**
      * `Enter your email address`
      */
    ["com.lovenotes.auth.sign.email.placeholder"](): string;
    /**
      * `Sign in`
      */
    ["com.lovenotes.auth.sign.in"](): string;
    /**
      * `Confirm your email`
      */
    ["com.lovenotes.auth.sign.in.sent.email.subtitle"](): string;
    /**
      * `Self-Hosted`
      */
    ["com.lovenotes.auth.sign.add-selfhosted.title"](): string;
    /**
      * `Connect to a Self-Hosted Instance`
      */
    ["com.lovenotes.auth.sign.add-selfhosted"](): string;
    /**
      * `Server URL`
      */
    ["com.lovenotes.auth.sign.add-selfhosted.baseurl"](): string;
    /**
      * `Connect`
      */
    ["com.lovenotes.auth.sign.add-selfhosted.connect-button"](): string;
    /**
      * `Unable to connect to the server.`
      */
    ["com.lovenotes.auth.sign.add-selfhosted.error"](): string;
    /**
      * `Privacy policy`
      */
    ["com.lovenotes.auth.sign.policy"](): string;
    /**
      * `Sign up`
      */
    ["com.lovenotes.auth.sign.up"](): string;
    /**
      * `Create your account`
      */
    ["com.lovenotes.auth.sign.up.sent.email.subtitle"](): string;
    /**
      * `The app will automatically open or redirect to the web version. If you encounter any issues, you can also click the button below to manually open the LoveNotes app.`
      */
    ["com.lovenotes.auth.sign.up.success.subtitle"](): string;
    /**
      * `Your account has been created and you're now signed in!`
      */
    ["com.lovenotes.auth.sign.up.success.title"](): string;
    /**
      * `You have successfully signed in. The app will automatically open or redirect to the web version. if you encounter any issues, you can also click the button below to  manually open the LoveNotes app.`
      */
    ["com.lovenotes.auth.signed.success.subtitle"](): string;
    /**
      * `You're almost there!`
      */
    ["com.lovenotes.auth.signed.success.title"](): string;
    /**
      * `Server error, please try again later.`
      */
    ["com.lovenotes.auth.toast.message.failed"](): string;
    /**
      * `You have been signed in, start to sync your data with LoveNotes Cloud!`
      */
    ["com.lovenotes.auth.toast.message.signed-in"](): string;
    /**
      * `Unable to sign in`
      */
    ["com.lovenotes.auth.toast.title.failed"](): string;
    /**
      * `Signed in`
      */
    ["com.lovenotes.auth.toast.title.signed-in"](): string;
    /**
      * `Your current email is {{email}}. We'll send a temporary verification link to this email.`
      */
    ["com.lovenotes.auth.verify.email.message"](options: {
        readonly email: string;
    }): string;
    /**
      * `Back`
      */
    ["com.lovenotes.backButton"](): string;
    /**
      * `LoveNotes Cloud`
      */
    ["com.lovenotes.brand.lovenotesCloud"](): string;
    /**
      * `Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec`
      */
    ["com.lovenotes.calendar-date-picker.month-names"](): string;
    /**
      * `Today`
      */
    ["com.lovenotes.calendar-date-picker.today"](): string;
    /**
      * `Su,Mo,Tu,We,Th,Fr,Sa`
      */
    ["com.lovenotes.calendar-date-picker.week-days"](): string;
    /**
      * `Host by LoveNotes.Pro, Save, sync, and backup all your data.`
      */
    ["com.lovenotes.cloud-scroll-tip.caption"](): string;
    /**
      * `LoveNotes Cloud`
      */
    ["com.lovenotes.cloud-scroll-tip.title"](): string;
    /**
      * `Collections`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.collections"](): string;
    /**
      * `Create`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.creation"](): string;
    /**
      * `Edgeless`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.edgeless"](): string;
    /**
      * `General`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.general"](): string;
    /**
      * `Help`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.help"](): string;
    /**
      * `Layout controls`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.layout"](): string;
    /**
      * `Navigation`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.navigation"](): string;
    /**
      * `Docs`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.pages"](): string;
    /**
      * `Recent`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.recent"](): string;
    /**
      * `Settings`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.settings"](): string;
    /**
      * `Tags`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.tags"](): string;
    /**
      * `Updates`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.updates"](): string;
    /**
      * `Edgeless commands`
      */
    ["com.lovenotes.cmdk.lovenotes.category.editor.edgeless"](): string;
    /**
      * `Insert object`
      */
    ["com.lovenotes.cmdk.lovenotes.category.editor.insert-object"](): string;
    /**
      * `Doc Commands`
      */
    ["com.lovenotes.cmdk.lovenotes.category.editor.page"](): string;
    /**
      * `Results`
      */
    ["com.lovenotes.cmdk.lovenotes.category.results"](): string;
    /**
      * `Change client border style to`
      */
    ["com.lovenotes.cmdk.lovenotes.client-border-style.to"](): string;
    /**
      * `Change colour mode to`
      */
    ["com.lovenotes.cmdk.lovenotes.color-mode.to"](): string;
    /**
      * `Contact us`
      */
    ["com.lovenotes.cmdk.lovenotes.contact-us"](): string;
    /**
      * `Create "{{keyWord}}" doc and insert`
      */
    ["com.lovenotes.cmdk.lovenotes.create-new-doc-and-insert"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `New "{{keyWord}}" edgeless`
      */
    ["com.lovenotes.cmdk.lovenotes.create-new-edgeless-as"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `New "{{keyWord}}" page`
      */
    ["com.lovenotes.cmdk.lovenotes.create-new-page-as"](options: {
        readonly keyWord: string;
    }): string;
    /**
      * `Change display language to`
      */
    ["com.lovenotes.cmdk.lovenotes.display-language.to"](): string;
    /**
      * `Add to favourites`
      */
    ["com.lovenotes.cmdk.lovenotes.editor.add-to-favourites"](): string;
    /**
      * `Start presentation`
      */
    ["com.lovenotes.cmdk.lovenotes.editor.edgeless.presentation-start"](): string;
    /**
      * `Remove from favourites`
      */
    ["com.lovenotes.cmdk.lovenotes.editor.remove-from-favourites"](): string;
    /**
      * `Restore from trash`
      */
    ["com.lovenotes.cmdk.lovenotes.editor.restore-from-trash"](): string;
    /**
      * `Reveal doc history modal`
      */
    ["com.lovenotes.cmdk.lovenotes.editor.reveal-page-history-modal"](): string;
    /**
      * `This doc has been moved to the trash, you can either restore or permanently delete it.`
      */
    ["com.lovenotes.cmdk.lovenotes.editor.trash-footer-hint"](): string;
    /**
      * `Change font style to`
      */
    ["com.lovenotes.cmdk.lovenotes.font-style.to"](): string;
    /**
      * `Change full width layout to`
      */
    ["com.lovenotes.cmdk.lovenotes.full-width-layout.to"](): string;
    /**
      * `Change default width for new pages in to standard`
      */
    ["com.lovenotes.cmdk.lovenotes.default-page-width-layout.standard"](): string;
    /**
      * `Change default width for new pages in to full width`
      */
    ["com.lovenotes.cmdk.lovenotes.default-page-width-layout.full-width"](): string;
    /**
      * `Change current page width to standard`
      */
    ["com.lovenotes.cmdk.lovenotes.current-page-width-layout.standard"](): string;
    /**
      * `Change current page width to full width`
      */
    ["com.lovenotes.cmdk.lovenotes.current-page-width-layout.full-width"](): string;
    /**
      * `Getting started`
      */
    ["com.lovenotes.cmdk.lovenotes.getting-started"](): string;
    /**
      * `Import workspace`
      */
    ["com.lovenotes.cmdk.lovenotes.import-workspace"](): string;
    /**
      * `Insert this link to the current doc`
      */
    ["com.lovenotes.cmdk.lovenotes.insert-link"](): string;
    /**
      * `Collapse left sidebar`
      */
    ["com.lovenotes.cmdk.lovenotes.left-sidebar.collapse"](): string;
    /**
      * `Expand left sidebar`
      */
    ["com.lovenotes.cmdk.lovenotes.left-sidebar.expand"](): string;
    /**
      * `Go to all docs`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.goto-all-pages"](): string;
    /**
      * `Go to edgeless list`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.goto-edgeless-list"](): string;
    /**
      * `Go to page list`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.goto-page-list"](): string;
    /**
      * `Go to trash`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.goto-trash"](): string;
    /**
      * `Go to workspace`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.goto-workspace"](): string;
    /**
      * `Go to account settings`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.open-account-settings"](): string;
    /**
      * `Go to Settings`
      */
    ["com.lovenotes.cmdk.lovenotes.navigation.open-settings"](): string;
    /**
      * `New edgeless`
      */
    ["com.lovenotes.cmdk.lovenotes.new-edgeless-page"](): string;
    /**
      * `New page`
      */
    ["com.lovenotes.cmdk.lovenotes.new-page"](): string;
    /**
      * `New workspace`
      */
    ["com.lovenotes.cmdk.lovenotes.new-workspace"](): string;
    /**
      * `Change noise background on the sidebar to`
      */
    ["com.lovenotes.cmdk.lovenotes.noise-background-on-the-sidebar.to"](): string;
    /**
      * `Restart to upgrade`
      */
    ["com.lovenotes.cmdk.lovenotes.restart-to-upgrade"](): string;
    /**
      * `OFF`
      */
    ["com.lovenotes.cmdk.lovenotes.switch-state.off"](): string;
    /**
      * `ON`
      */
    ["com.lovenotes.cmdk.lovenotes.switch-state.on"](): string;
    /**
      * `Change translucent UI on the sidebar to`
      */
    ["com.lovenotes.cmdk.lovenotes.translucent-ui-on-the-sidebar.to"](): string;
    /**
      * `What's new`
      */
    ["com.lovenotes.cmdk.lovenotes.whats-new"](): string;
    /**
      * `Search docs or paste link...`
      */
    ["com.lovenotes.cmdk.docs.placeholder"](): string;
    /**
      * `Insert links`
      */
    ["com.lovenotes.cmdk.insert-links"](): string;
    /**
      * `No results found`
      */
    ["com.lovenotes.cmdk.no-results"](): string;
    /**
      * `No results found for`
      */
    ["com.lovenotes.cmdk.no-results-for"](): string;
    /**
      * `Type a command or search anything...`
      */
    ["com.lovenotes.cmdk.placeholder"](): string;
    /**
      * `Switch to $t(com.lovenotes.edgelessMode)`
      */
    ["com.lovenotes.cmdk.switch-to-edgeless"](): string;
    /**
      * `Switch to $t(com.lovenotes.pageMode)`
      */
    ["com.lovenotes.cmdk.switch-to-page"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.collection-bar.action.tooltip.delete"](): string;
    /**
      * `Edit`
      */
    ["com.lovenotes.collection-bar.action.tooltip.edit"](): string;
    /**
      * `Pin to sidebar`
      */
    ["com.lovenotes.collection-bar.action.tooltip.pin"](): string;
    /**
      * `Unpin`
      */
    ["com.lovenotes.collection-bar.action.tooltip.unpin"](): string;
    /**
      * `Do you want to add a document to the current collection? If it is filtered based on rules, this will add a set of included rules.`
      */
    ["com.lovenotes.collection.add-doc.confirm.description"](): string;
    /**
      * `Add new doc to this collection`
      */
    ["com.lovenotes.collection.add-doc.confirm.title"](): string;
    /**
      * `Doc already exists`
      */
    ["com.lovenotes.collection.addPage.alreadyExists"](): string;
    /**
      * `Added successfully`
      */
    ["com.lovenotes.collection.addPage.success"](): string;
    /**
      * `Add docs`
      */
    ["com.lovenotes.collection.addPages"](): string;
    /**
      * `Add rules`
      */
    ["com.lovenotes.collection.addRules"](): string;
    /**
      * `All collections`
      */
    ["com.lovenotes.collection.allCollections"](): string;
    /**
      * `Empty collection`
      */
    ["com.lovenotes.collection.emptyCollection"](): string;
    /**
      * `Collection is a smart folder where you can manually add docs or automatically add docs through rules.`
      */
    ["com.lovenotes.collection.emptyCollectionDescription"](): string;
    /**
      * `HELP INFO`
      */
    ["com.lovenotes.collection.helpInfo"](): string;
    /**
      * `Edit collection`
      */
    ["com.lovenotes.collection.menu.edit"](): string;
    /**
      * `Rename`
      */
    ["com.lovenotes.collection.menu.rename"](): string;
    /**
      * `Removed successfully`
      */
    ["com.lovenotes.collection.removePage.success"](): string;
    /**
      * `No collections`
      */
    ["com.lovenotes.collections.empty.message"](): string;
    /**
      * `New collection`
      */
    ["com.lovenotes.collections.empty.new-collection-button"](): string;
    /**
      * `Collections`
      */
    ["com.lovenotes.collections.header"](): string;
    /**
      * `Couldn't copy image`
      */
    ["com.lovenotes.copy.asImage.notAvailable.title"](): string;
    /**
      * `The 'Copy as image' feature is only available on our desktop app. Please download and install the client to access this feature.`
      */
    ["com.lovenotes.copy.asImage.notAvailable.message"](): string;
    /**
      * `Download Client`
      */
    ["com.lovenotes.copy.asImage.notAvailable.action"](): string;
    /**
      * `Image copied`
      */
    ["com.lovenotes.copy.asImage.success"](): string;
    /**
      * `Image copy failed`
      */
    ["com.lovenotes.copy.asImage.failed"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.confirmModal.button.cancel"](): string;
    /**
      * `Ok`
      */
    ["com.lovenotes.confirmModal.button.ok"](): string;
    /**
      * `Current year`
      */
    ["com.lovenotes.currentYear"](): string;
    /**
      * `Deleting {{count}} tags cannot be undone, please proceed with caution.`
      */
    ["com.lovenotes.delete-tags.confirm.multi-tag-description"](options: {
        readonly count: string;
    }): string;
    /**
      * `Delete tag?`
      */
    ["com.lovenotes.delete-tags.confirm.title"](): string;
    /**
      * `{{count}} tag deleted`
    
      * - com.lovenotes.delete-tags.count_one: `{{count}} tag deleted`
    
      * - com.lovenotes.delete-tags.count_other: `{{count}} tags deleted`
      */
    ["com.lovenotes.delete-tags.count"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} tag deleted`
      */
    ["com.lovenotes.delete-tags.count_one"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} tags deleted`
      */
    ["com.lovenotes.delete-tags.count_other"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `Delete workspace from this device and optionally delete all data.`
      */
    ["com.lovenotes.deleteLeaveWorkspace.description"](): string;
    /**
      * `Leave workspace`
      */
    ["com.lovenotes.deleteLeaveWorkspace.leave"](): string;
    /**
      * `After you leave, you will not be able to access content within this workspace.`
      */
    ["com.lovenotes.deleteLeaveWorkspace.leaveDescription"](): string;
    /**
      * `Docs`
      */
    ["com.lovenotes.docs.header"](): string;
    /**
      * `Draw with a blank whiteboard`
      */
    ["com.lovenotes.draw_with_a_blank_whiteboard"](): string;
    /**
      * `Earlier`
      */
    ["com.lovenotes.earlier"](): string;
    /**
      * `Edgeless mode`
      */
    ["com.lovenotes.edgelessMode"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.editCollection.button.cancel"](): string;
    /**
      * `Create`
      */
    ["com.lovenotes.editCollection.button.create"](): string;
    /**
      * `Create collection`
      */
    ["com.lovenotes.editCollection.createCollection"](): string;
    /**
      * `Filters`
      */
    ["com.lovenotes.editCollection.filters"](): string;
    /**
      * `Docs`
      */
    ["com.lovenotes.editCollection.pages"](): string;
    /**
      * `Clear selected`
      */
    ["com.lovenotes.editCollection.pages.clear"](): string;
    /**
      * `Rename collection`
      */
    ["com.lovenotes.editCollection.renameCollection"](): string;
    /**
      * `Rules`
      */
    ["com.lovenotes.editCollection.rules"](): string;
    /**
      * `No results`
      */
    ["com.lovenotes.editCollection.rules.empty.noResults"](): string;
    /**
      * `No docs meet the filtering rules`
      */
    ["com.lovenotes.editCollection.rules.empty.noResults.tips"](): string;
    /**
      * `No rules`
      */
    ["com.lovenotes.editCollection.rules.empty.noRules"](): string;
    /**
      * `Add selected doc`
      */
    ["com.lovenotes.editCollection.rules.include.add"](): string;
    /**
      * `is`
      */
    ["com.lovenotes.editCollection.rules.include.is"](): string;
    /**
      * `is-not`
      */
    ["com.lovenotes.editCollection.rules.include.is-not"](): string;
    /**
      * `Doc`
      */
    ["com.lovenotes.editCollection.rules.include.page"](): string;
    /**
      * `“Selected docs” refers to manually adding docs rather than automatically adding them through rule matching. You can manually add docs through the “Add selected docs” option or by dragging and dropping.`
      */
    ["com.lovenotes.editCollection.rules.include.tips"](): string;
    /**
      * `What is "Selected docs"？`
      */
    ["com.lovenotes.editCollection.rules.include.tipsTitle"](): string;
    /**
      * `Selected docs`
      */
    ["com.lovenotes.editCollection.rules.include.title"](): string;
    /**
      * `Preview`
      */
    ["com.lovenotes.editCollection.rules.preview"](): string;
    /**
      * `Reset`
      */
    ["com.lovenotes.editCollection.rules.reset"](): string;
    /**
      * `automatically`
      */
    ["com.lovenotes.editCollection.rules.tips.highlight"](): string;
    /**
      * `Save`
      */
    ["com.lovenotes.editCollection.save"](): string;
    /**
      * `Save as new collection`
      */
    ["com.lovenotes.editCollection.saveCollection"](): string;
    /**
      * `Search doc...`
      */
    ["com.lovenotes.editCollection.search.placeholder"](): string;
    /**
      * `Untitled collection`
      */
    ["com.lovenotes.editCollection.untitledCollection"](): string;
    /**
      * `Update collection`
      */
    ["com.lovenotes.editCollection.updateCollection"](): string;
    /**
      * `Collection is a smart folder where you can manually add docs or automatically add docs through rules.`
      */
    ["com.lovenotes.editCollectionName.createTips"](): string;
    /**
      * `Name`
      */
    ["com.lovenotes.editCollectionName.name"](): string;
    /**
      * `Collection name`
      */
    ["com.lovenotes.editCollectionName.name.placeholder"](): string;
    /**
      * `Default to Edgeless mode`
      */
    ["com.lovenotes.editorDefaultMode.edgeless"](): string;
    /**
      * `Default to Page mode`
      */
    ["com.lovenotes.editorDefaultMode.page"](): string;
    /**
      * `Add docs`
      */
    ["com.lovenotes.empty.collection-detail.action.add-doc"](): string;
    /**
      * `Add rules`
      */
    ["com.lovenotes.empty.collection-detail.action.add-rule"](): string;
    /**
      * `Collection is a smart folder where you can manually add docs or automatically add docs through rules.`
      */
    ["com.lovenotes.empty.collection-detail.description"](): string;
    /**
      * `Empty collection`
      */
    ["com.lovenotes.empty.collection-detail.title"](): string;
    /**
      * `Add collection`
      */
    ["com.lovenotes.empty.collections.action.new-collection"](): string;
    /**
      * `Create your first collection here.`
      */
    ["com.lovenotes.empty.collections.description"](): string;
    /**
      * `Collection management`
      */
    ["com.lovenotes.empty.collections.title"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.empty.docs.action.new-doc"](): string;
    /**
      * `Create your first doc here.`
      */
    ["com.lovenotes.empty.docs.all-description"](): string;
    /**
      * `Docs management`
      */
    ["com.lovenotes.empty.docs.title"](): string;
    /**
      * `Deleted docs will appear here.`
      */
    ["com.lovenotes.empty.docs.trash-description"](): string;
    /**
      * `Create a new tag for your documents.`
      */
    ["com.lovenotes.empty.tags.description"](): string;
    /**
      * `Tag management`
      */
    ["com.lovenotes.empty.tags.title"](): string;
    /**
      * `There's no doc here yet`
      */
    ["com.lovenotes.emptyDesc"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.enableLoveNotesCloudModal.button.cancel"](): string;
 
    /**
      * `Choose an instance.`
      */
    ["com.lovenotes.enableLoveNotesCloudModal.custom-server.description"](): string;
    /**
      * `Hide error`
      */
    ["com.lovenotes.error.hide-error"](): string;
    /**
      * `Doc content is missing`
      */
    ["com.lovenotes.error.no-page-root.title"](): string;
    /**
      * `It takes longer to load the doc content.`
      */
    ["com.lovenotes.error.loading-timeout-error"](): string;
    /**
      * `Refetch`
      */
    ["com.lovenotes.error.refetch"](): string;
    /**
      * `Reload LoveNotes`
      */
    ["com.lovenotes.error.reload"](): string;
    /**
      * `Refresh`
      */
    ["com.lovenotes.error.retry"](): string;
    /**
      * `Something is wrong...`
      */
    ["com.lovenotes.error.unexpected-error.title"](): string;
    /**
      * `Please request a new reset password link.`
      */
    ["com.lovenotes.expired.page.subtitle"](): string;
    /**
      * `Please request a new link.`
      */
    ["com.lovenotes.expired.page.new-subtitle"](): string;
    /**
      * `This link has expired...`
      */
    ["com.lovenotes.expired.page.title"](): string;
    /**
      * `Please try it again later.`
      */
    ["com.lovenotes.export.error.message"](): string;
    /**
      * `Export failed due to an unexpected error`
      */
    ["com.lovenotes.export.error.title"](): string;
    /**
      * `Print`
      */
    ["com.lovenotes.export.print"](): string;
    /**
      * `Please open the download folder to check.`
      */
    ["com.lovenotes.export.success.message"](): string;
    /**
      * `Exported successfully`
      */
    ["com.lovenotes.export.success.title"](): string;
    /**
      * `Add to favourites`
      */
    ["com.lovenotes.favoritePageOperation.add"](): string;
    /**
      * `Remove from favourites`
      */
    ["com.lovenotes.favoritePageOperation.remove"](): string;
    /**
      * `Filter`
      */
    ["com.lovenotes.filter"](): string;
    /**
      * `Add Filter Rule`
      */
    ["com.lovenotes.filter.add-filter"](): string;
    /**
      * `after`
      */
    ["com.lovenotes.filter.after"](): string;
    /**
      * `before`
      */
    ["com.lovenotes.filter.before"](): string;
    /**
      * `contains all`
      */
    ["com.lovenotes.filter.contains all"](): string;
    /**
      * `contains one of`
      */
    ["com.lovenotes.filter.contains one of"](): string;
    /**
      * `does not contains all`
      */
    ["com.lovenotes.filter.does not contains all"](): string;
    /**
      * `does not contains one of`
      */
    ["com.lovenotes.filter.does not contains one of"](): string;
    /**
      * `Empty`
      */
    ["com.lovenotes.filter.empty-tag"](): string;
    /**
      * `Empty`
      */
    ["com.lovenotes.filter.empty"](): string;
    /**
      * `false`
      */
    ["com.lovenotes.filter.false"](): string;
    /**
      * `is`
      */
    ["com.lovenotes.filter.is"](): string;
    /**
      * `is empty`
      */
    ["com.lovenotes.filter.is empty"](): string;
    /**
      * `is not empty`
      */
    ["com.lovenotes.filter.is not empty"](): string;
    /**
      * `Favourited`
      */
    ["com.lovenotes.filter.is-favourited"](): string;
    /**
      * `Shared`
      */
    ["com.lovenotes.filter.is-public"](): string;
    /**
      * `between`
      */
    ["com.lovenotes.filter.between"](): string;
    /**
      * `last 3 days`
      */
    ["com.lovenotes.filter.last 3 days"](): string;
    /**
      * `last 7 days`
      */
    ["com.lovenotes.filter.last 7 days"](): string;
    /**
      * `last 15 days`
      */
    ["com.lovenotes.filter.last 15 days"](): string;
    /**
      * `last 30 days`
      */
    ["com.lovenotes.filter.last 30 days"](): string;
    /**
      * `this week`
      */
    ["com.lovenotes.filter.this week"](): string;
    /**
      * `this month`
      */
    ["com.lovenotes.filter.this month"](): string;
    /**
      * `this quarter`
      */
    ["com.lovenotes.filter.this quarter"](): string;
    /**
      * `this year`
      */
    ["com.lovenotes.filter.this year"](): string;
    /**
      * `last`
      */
    ["com.lovenotes.filter.last"](): string;
    /**
      * `Save view`
      */
    ["com.lovenotes.filter.save-view"](): string;
    /**
      * `true`
      */
    ["com.lovenotes.filter.true"](): string;
    /**
      * `Add filter`
      */
    ["com.lovenotes.filterList.button.add"](): string;
    /**
      * `Display`
      */
    ["com.lovenotes.explorer.display-menu.button"](): string;
    /**
      * `Grouping`
      */
    ["com.lovenotes.explorer.display-menu.grouping"](): string;
    /**
      * `Remove group`
      */
    ["com.lovenotes.explorer.display-menu.grouping.remove"](): string;
    /**
      * `Ordering`
      */
    ["com.lovenotes.explorer.display-menu.ordering"](): string;
    /**
      * `View in Page mode`
      */
    ["com.lovenotes.header.mode-switch.page"](): string;
    /**
      * `View in Edgeless Canvas`
      */
    ["com.lovenotes.header.mode-switch.edgeless"](): string;
    /**
      * `Add tag`
      */
    ["com.lovenotes.header.option.add-tag"](): string;
    /**
      * `Duplicate`
      */
    ["com.lovenotes.header.option.duplicate"](): string;
    /**
      * `Open in desktop app`
      */
    ["com.lovenotes.header.option.open-in-desktop"](): string;
    /**
      * `View all frames`
      */
    ["com.lovenotes.header.option.view-frame"](): string;
    /**
      * `View table of contents`
      */
    ["com.lovenotes.header.option.view-toc"](): string;
    /**
      * `Table of contents`
      */
    ["com.lovenotes.header.menu.toc"](): string;
    /**
      * `Contact us`
      */
    ["com.lovenotes.helpIsland.contactUs"](): string;
    /**
      * `Getting started`
      */
    ["com.lovenotes.helpIsland.gettingStarted"](): string;
    /**
      * `Help and feedback`
      */
    ["com.lovenotes.helpIsland.helpAndFeedback"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.history-vision.tips-modal.cancel"](): string;
    /**
      * `Enable LoveNotes Cloud`
      */
    ["com.lovenotes.history-vision.tips-modal.confirm"](): string;
    /**
      * `The current workspace is a local workspace, and we do not support version history for it at the moment. You can enable LoveNotes Cloud. This will sync the workspace with the Cloud, allowing you to use this feature.`
      */
    ["com.lovenotes.history-vision.tips-modal.description"](): string;
    /**
      * `History vision needs LoveNotes Cloud`
      */
    ["com.lovenotes.history-vision.tips-modal.title"](): string;
    /**
      * `Back to doc`
      */
    ["com.lovenotes.history.back-to-page"](): string;
    /**
      * `You are about to restore the current version of the doc to the latest version available. This action will overwrite any changes made prior to the latest version.`
      */
    ["com.lovenotes.history.confirm-restore-modal.hint"](): string;
    /**
      * `Load more`
      */
    ["com.lovenotes.history.confirm-restore-modal.load-more"](): string;
    /**
      * `LIMITED DOC HISTORY`
      */
    ["com.lovenotes.history.confirm-restore-modal.plan-prompt.limited-title"](): string;
    /**
      * `HELP INFO`
      */
    ["com.lovenotes.history.confirm-restore-modal.plan-prompt.title"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.history.confirm-restore-modal.pro-plan-prompt.upgrade"](): string;
    /**
      * `Restore`
      */
    ["com.lovenotes.history.confirm-restore-modal.restore"](): string;
    /**
      * `This document is such a spring chicken, it hasn't sprouted a single historical sprig yet!`
      */
    ["com.lovenotes.history.empty-prompt.description"](): string;
    /**
      * `Empty`
      */
    ["com.lovenotes.history.empty-prompt.title"](): string;
    /**
      * `Restore current version`
      */
    ["com.lovenotes.history.restore-current-version"](): string;
    /**
      * `Version history`
      */
    ["com.lovenotes.history.version-history"](): string;
    /**
      * `View history version`
      */
    ["com.lovenotes.history.view-history-version"](): string;
    /**
      * `Create into a New Workspace`
      */
    ["com.lovenotes.import-template.dialog.createDocToNewWorkspace"](): string;
    /**
      * `Create doc to "{{workspace}}"`
      */
    ["com.lovenotes.import-template.dialog.createDocToWorkspace"](options: {
        readonly workspace: string;
    }): string;
    /**
      * `Create doc with "{{templateName}}" template`
      */
    ["com.lovenotes.import-template.dialog.createDocWithTemplate"](options: {
        readonly templateName: string;
    }): string;
    /**
      * `Failed to import template, please try again.`
      */
    ["com.lovenotes.import-template.dialog.errorImport"](): string;
    /**
      * `Failed to load template, please try again.`
      */
    ["com.lovenotes.import-template.dialog.errorLoad"](): string;
    /**
      * `Create into a New Workspace`
      */
    ["com.lovenotes.import-clipper.dialog.createDocToNewWorkspace"](): string;
    /**
      * `Create doc to "{{workspace}}"`
      */
    ["com.lovenotes.import-clipper.dialog.createDocToWorkspace"](options: {
        readonly workspace: string;
    }): string;
    /**
      * `Failed to import content, please try again.`
      */
    ["com.lovenotes.import-clipper.dialog.errorImport"](): string;
    /**
      * `Failed to load content, please try again.`
      */
    ["com.lovenotes.import-clipper.dialog.errorLoad"](): string;
    /**
      * `Support Markdown/Notion`
      */
    ["com.lovenotes.import_file"](): string;
    /**
      * `LoveNotes workspace data`
      */
    ["com.lovenotes.import.lovenotes-workspace-data"](): string;
    /**
      * `Docx`
      */
    ["com.lovenotes.import.docx"](): string;
    /**
      * `Import your .docx file.`
      */
    ["com.lovenotes.import.docx.tooltip"](): string;
    /**
      * `HTML`
      */
    ["com.lovenotes.import.html-files"](): string;
    /**
      * `This is an experimental feature that is not perfect and may cause your data to be missing after import.`
      */
    ["com.lovenotes.import.html-files.tooltip"](): string;
    /**
      * `Markdown files (.md)`
      */
    ["com.lovenotes.import.markdown-files"](): string;
    /**
      * `Markdown with media files (.zip)`
      */
    ["com.lovenotes.import.markdown-with-media-files"](): string;
    /**
      * `Please upload a markdown zip file with attachments, experimental function, there may be data loss.`
      */
    ["com.lovenotes.import.markdown-with-media-files.tooltip"](): string;
    /**
      * `If you'd like to request support for additional file types, feel free to let us know on`
      */
    ["com.lovenotes.import.modal.tip"](): string;
    /**
      * `Notion`
      */
    ["com.lovenotes.import.notion"](): string;
    /**
      * `Import your Notion data. Supported import formats: HTML with subpages.`
      */
    ["com.lovenotes.import.notion.tooltip"](): string;
    /**
      * `Snapshot`
      */
    ["com.lovenotes.import.snapshot"](): string;
    /**
      * `Import your LoveNotes workspace and page snapshot file.`
      */
    ["com.lovenotes.import.snapshot.tooltip"](): string;
    /**
      * `.lovenotes file`
      */
    ["com.lovenotes.import.dotlovenotesfile"](): string;
    /**
      * `Import your LoveNotes db file (.lovenotes)`
      */
    ["com.lovenotes.import.dotlovenotesfile.tooltip"](): string;
    /**
      * `Import failed, please try again.`
      */
    ["com.lovenotes.import.status.failed.message"](): string;
    /**
      * `No file selected`
      */
    ["com.lovenotes.import.status.failed.message.no-file-selected"](): string;
    /**
      * `Import failure`
      */
    ["com.lovenotes.import.status.failed.title"](): string;
    /**
      * `Importing your workspace data, please wait patiently.`
      */
    ["com.lovenotes.import.status.importing.message"](): string;
    /**
      * `Importing...`
      */
    ["com.lovenotes.import.status.importing.title"](): string;
    /**
      * `Your document has been imported successfully, thank you for choosing LoveNotes. Any questions please feel free to feedback to us`
      */
    ["com.lovenotes.import.status.success.message"](): string;
    /**
      * `Import completed`
      */
    ["com.lovenotes.import.status.success.title"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.inviteModal.button.cancel"](): string;
    /**
      * `Maybe later`
      */
    ["com.lovenotes.issue-feedback.cancel"](): string;
    /**
      * `Create issue on GitHub`
      */
    ["com.lovenotes.issue-feedback.confirm"](): string;
    /**
      * `Got feedback? We're all ears! Create an issue on GitHub to let us know your thoughts and suggestions`
      */
    ["com.lovenotes.issue-feedback.description"](): string;
    /**
      * `Share your feedback on GitHub`
      */
    ["com.lovenotes.issue-feedback.title"](): string;
    /**
      */
    /**
      * `{{count}} more articles`
      */
        readonly count: string;
    }): string;
    /**
      * `Created`
      */
    /**
      * `You haven't created anything yet`
      */
    /**
      * `You haven't updated anything yet`
      */
    /**
      * `Updated`
      */
    /**
      */
    /**
      */
    /**
      * `Just now`
      */
    ["com.lovenotes.just-now"](): string;
    /**
      * `Align center`
      */
    ["com.lovenotes.keyboardShortcuts.alignCenter"](): string;
    /**
      * `Align left`
      */
    ["com.lovenotes.keyboardShortcuts.alignLeft"](): string;
    /**
      * `Align right`
      */
    ["com.lovenotes.keyboardShortcuts.alignRight"](): string;
    /**
      * `Append to daily note`
      */
    ["com.lovenotes.keyboardShortcuts.appendDailyNote"](): string;
    /**
      * `Body text`
      */
    ["com.lovenotes.keyboardShortcuts.bodyText"](): string;
    /**
      * `Bold`
      */
    ["com.lovenotes.keyboardShortcuts.bold"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.keyboardShortcuts.cancel"](): string;
    /**
      * `Code block`
      */
    ["com.lovenotes.keyboardShortcuts.codeBlock"](): string;
    /**
      * `Copy private link`
      */
    ["com.lovenotes.keyboardShortcuts.copy-private-link"](): string;
    /**
      * `Connector`
      */
    ["com.lovenotes.keyboardShortcuts.connector"](): string;
    /**
      * `Divider`
      */
    ["com.lovenotes.keyboardShortcuts.divider"](): string;
    /**
      * `Expand/collapse sidebar`
      */
    ["com.lovenotes.keyboardShortcuts.expandOrCollapseSidebar"](): string;
    /**
      * `Go back`
      */
    ["com.lovenotes.keyboardShortcuts.goBack"](): string;
    /**
      * `Go forward`
      */
    ["com.lovenotes.keyboardShortcuts.goForward"](): string;
    /**
      * `Group`
      */
    ["com.lovenotes.keyboardShortcuts.group"](): string;
    /**
      * `Group as database`
      */
    ["com.lovenotes.keyboardShortcuts.groupDatabase"](): string;
    /**
      * `Hand`
      */
    ["com.lovenotes.keyboardShortcuts.hand"](): string;
    /**
      * `Heading {{number}}`
      */
    ["com.lovenotes.keyboardShortcuts.heading"](options: {
        readonly number: string;
    }): string;
    /**
      * `Image`
      */
    ["com.lovenotes.keyboardShortcuts.image"](): string;
    /**
      * `Increase indent`
      */
    ["com.lovenotes.keyboardShortcuts.increaseIndent"](): string;
    /**
      * `Inline code`
      */
    ["com.lovenotes.keyboardShortcuts.inlineCode"](): string;
    /**
      * `Italic`
      */
    ["com.lovenotes.keyboardShortcuts.italic"](): string;
    /**
      * `Hyperlink (with selected text)`
      */
    ["com.lovenotes.keyboardShortcuts.link"](): string;
    /**
      * `Move down`
      */
    ["com.lovenotes.keyboardShortcuts.moveDown"](): string;
    /**
      * `Move up`
      */
    ["com.lovenotes.keyboardShortcuts.moveUp"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.keyboardShortcuts.newPage"](): string;
    /**
      * `Note`
      */
    ["com.lovenotes.keyboardShortcuts.note"](): string;
    /**
      * `Pen`
      */
    ["com.lovenotes.keyboardShortcuts.pen"](): string;
    /**
      * `Quick search`
      */
    ["com.lovenotes.keyboardShortcuts.quickSearch"](): string;
    /**
      * `Redo`
      */
    ["com.lovenotes.keyboardShortcuts.redo"](): string;
    /**
      * `Reduce indent`
      */
    ["com.lovenotes.keyboardShortcuts.reduceIndent"](): string;
    /**
      * `Select`
      */
    ["com.lovenotes.keyboardShortcuts.select"](): string;
    /**
      * `Select all`
      */
    ["com.lovenotes.keyboardShortcuts.selectAll"](): string;
    /**
      * `Shape`
      */
    ["com.lovenotes.keyboardShortcuts.shape"](): string;
    /**
      * `Strikethrough`
      */
    ["com.lovenotes.keyboardShortcuts.strikethrough"](): string;
    /**
      * `Check keyboard shortcuts quickly`
      */
    ["com.lovenotes.keyboardShortcuts.subtitle"](): string;
    /**
      * `Switch view`
      */
    ["com.lovenotes.keyboardShortcuts.switch"](): string;
    /**
      * `Text`
      */
    ["com.lovenotes.keyboardShortcuts.text"](): string;
    /**
      * `Keyboard shortcuts`
      */
    ["com.lovenotes.keyboardShortcuts.title"](): string;
    /**
      * `Ungroup`
      */
    ["com.lovenotes.keyboardShortcuts.unGroup"](): string;
    /**
      * `Underline`
      */
    ["com.lovenotes.keyboardShortcuts.underline"](): string;
    /**
      * `Undo`
      */
    ["com.lovenotes.keyboardShortcuts.undo"](): string;
    /**
      * `Zoom in`
      */
    ["com.lovenotes.keyboardShortcuts.zoomIn"](): string;
    /**
      * `Zoom out`
      */
    ["com.lovenotes.keyboardShortcuts.zoomOut"](): string;
    /**
      * `Zoom to 100%`
      */
    ["com.lovenotes.keyboardShortcuts.zoomTo100"](): string;
    /**
      * `Zoom to fit`
      */
    ["com.lovenotes.keyboardShortcuts.zoomToFit"](): string;
    /**
      * `Zoom to selection`
      */
    ["com.lovenotes.keyboardShortcuts.zoomToSelection"](): string;
    /**
      * `Last 30 days`
      */
    ["com.lovenotes.last30Days"](): string;
    /**
      * `Last 7 days`
      */
    ["com.lovenotes.last7Days"](): string;
    /**
      * `Last month`
      */
    ["com.lovenotes.lastMonth"](): string;
    /**
      * `Last week`
      */
    ["com.lovenotes.lastWeek"](): string;
    /**
      * `Last year`
      */
    ["com.lovenotes.lastYear"](): string;
    /**
      * `Loading`
      */
    ["com.lovenotes.loading"](): string;
    /**
      * `Loading document content, please wait a moment.`
      */
    ["com.lovenotes.loading.description"](): string;
    /**
      * `Rename`
      */
    ["com.lovenotes.menu.rename"](): string;
    /**
      * `No results found`
      */
    ["com.lovenotes.mobile.search.empty"](): string;
    /**
      * `App version`
      */
    ["com.lovenotes.mobile.setting.about.appVersion"](): string;
    /**
      * `Editor version`
      */
    ["com.lovenotes.mobile.setting.about.editorVersion"](): string;
    /**
      * `About`
      */
    ["com.lovenotes.mobile.setting.about.title"](): string;
    /**
      * `Font style`
      */
    ["com.lovenotes.mobile.setting.appearance.font"](): string;
    /**
      * `Display language`
      */
    ["com.lovenotes.mobile.setting.appearance.language"](): string;
    /**
      * `Color mode`
      */
    ["com.lovenotes.mobile.setting.appearance.theme"](): string;
    /**
      * `Appearance`
      */
    ["com.lovenotes.mobile.setting.appearance.title"](): string;
    /**
      * `Settings`
      */
    ["com.lovenotes.mobile.setting.header-title"](): string;
    /**
      * `Star us on GitHub`
      */
    ["com.lovenotes.mobile.setting.others.github"](): string;
    /**
      * `Discord Group`
      */
    ["com.lovenotes.mobile.setting.others.discord"](): string;
    /**
      * `Privacy`
      */
    ["com.lovenotes.mobile.setting.others.privacy"](): string;
    /**
      * `Terms of use`
      */
    ["com.lovenotes.mobile.setting.others.terms"](): string;
    /**
      * `Privacy & others`
      */
    ["com.lovenotes.mobile.setting.others.title"](): string;
    /**
      * `Official website`
      */
    ["com.lovenotes.mobile.setting.others.website"](): string;
    /**
      * `Delete my account`
      */
    ["com.lovenotes.mobile.setting.others.delete-account"](): string;
    /**
      * `Want to keep data local?`
      */
    ["com.lovenotes.mobile.sign-in.skip.hint"](): string;
    /**
      * `Start LoveNotes without an account`
      */
    ["com.lovenotes.mobile.sign-in.skip.link"](): string;
    /**
      * `Older than a month`
      */
    ["com.lovenotes.moreThan30Days"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.moveToTrash.confirmModal.cancel"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.moveToTrash.confirmModal.confirm"](): string;
    /**
      * `{{title}} will be moved to trash`
      */
    ["com.lovenotes.moveToTrash.confirmModal.description"](options: {
        readonly title: string;
    }): string;
    /**
      * `{{ number }} docs will be moved to Trash`
      */
    ["com.lovenotes.moveToTrash.confirmModal.description.multiple"](options: {
        readonly number: string;
    }): string;
    /**
      * `Delete doc?`
      */
    ["com.lovenotes.moveToTrash.confirmModal.title"](): string;
    /**
      * `Delete {{ number }} docs?`
      */
    ["com.lovenotes.moveToTrash.confirmModal.title.multiple"](options: {
        readonly number: string;
    }): string;
    /**
      * `Move to trash`
      */
    ["com.lovenotes.moveToTrash.title"](): string;
    /**
      * `New tab`
      */
    ["com.lovenotes.multi-tab.new-tab"](): string;
    /**
      * `Enabling LoveNotes Cloud allows you to synchronise and backup data, as well as support multi-user collaboration and content publishing.`
      */
    ["com.lovenotes.nameWorkspace.lovenotes-cloud.description"](): string;
    /**
      * `Sync across devices with LoveNotes Cloud`
      */
    ["com.lovenotes.nameWorkspace.lovenotes-cloud.title"](): string;
    /**
      * `If you want the workspace to be stored locally, you can download the desktop client.`
      */
    ["com.lovenotes.nameWorkspace.lovenotes-cloud.web-tips"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.nameWorkspace.button.cancel"](): string;
    /**
      * `Create`
      */
    ["com.lovenotes.nameWorkspace.button.create"](): string;
    /**
      * `A workspace is your virtual space to capture, create and plan as just one person or together as a team.`
      */
    ["com.lovenotes.nameWorkspace.description"](): string;
    /**
      * `Set a workspace name`
      */
    ["com.lovenotes.nameWorkspace.placeholder"](): string;
    /**
      * `Workspace name`
      */
    ["com.lovenotes.nameWorkspace.subtitle.workspace-name"](): string;
    /**
      * `Workspace type`
      */
    ["com.lovenotes.nameWorkspace.subtitle.workspace-type"](): string;
    /**
      * `Name your workspace`
      */
    ["com.lovenotes.nameWorkspace.title"](): string;
    /**
      * `New page`
      */
    ["com.lovenotes.new.page-mode"](): string;
    /**
      * `New edgeless`
      */
    ["com.lovenotes.new_edgeless"](): string;
    /**
      * `Import`
      */
    ["com.lovenotes.new_import"](): string;
    /**
      * `Next week`
      */
    ["com.lovenotes.nextWeek"](): string;
    /**
      * `Back home`
      */
    ["com.lovenotes.notFoundPage.backButton"](): string;
    /**
      * `Page not found`
      */
    ["com.lovenotes.notFoundPage.title"](): string;
    /**
      * `LoveNotes Community`
      */
    ["com.lovenotes.other-page.nav.lovenotes-community"](): string;
    /**
      * `Blog`
      */
    ["com.lovenotes.other-page.nav.blog"](): string;
    /**
      * `Contact us`
      */
    ["com.lovenotes.other-page.nav.contact-us"](): string;
    /**
      * `Download app`
      */
    ["com.lovenotes.other-page.nav.download-app"](): string;
    /**
      * `Official website`
      */
    ["com.lovenotes.other-page.nav.official-website"](): string;
    /**
      * `Open LoveNotes`
      */
    ["com.lovenotes.other-page.nav.open-lovenotes"](): string;
    /**
      * `Add linked doc`
      */
    ["com.lovenotes.page-operation.add-linked-page"](): string;
    /**
      * `{{ count }} more properties`
      */
    ["com.lovenotes.page-properties.more-property.more"](options: {
        readonly count: string;
    }): string;
    /**
      * `{{ count }} more property`
      */
    ["com.lovenotes.page-properties.more-property.one"](options: {
        readonly count: string;
    }): string;
    /**
      * `hide {{ count }} property`
      */
    ["com.lovenotes.page-properties.hide-property.one"](options: {
        readonly count: string;
    }): string;
    /**
      * `hide {{ count }} properties`
      */
    ["com.lovenotes.page-properties.hide-property.more"](options: {
        readonly count: string;
    }): string;
    /**
      * `Add property`
      */
    ["com.lovenotes.page-properties.add-property"](): string;
    /**
      * `Create property`
      */
    ["com.lovenotes.page-properties.add-property.menu.create"](): string;
    /**
      * `Properties`
      */
    ["com.lovenotes.page-properties.add-property.menu.header"](): string;
    /**
      * `Config properties`
      */
    ["com.lovenotes.page-properties.config-properties"](): string;
    /**
      * `Backlinks`
      */
    ["com.lovenotes.page-properties.backlinks"](): string;
    /**
      * `Type`
      */
    ["com.lovenotes.page-properties.create-property.menu.header"](): string;
    /**
      * `Added`
      */
    ["com.lovenotes.page-properties.create-property.added"](): string;
    /**
      * `Icons`
      */
    ["com.lovenotes.page-properties.icons"](): string;
    /**
      * `Local user`
      */
    ["com.lovenotes.page-properties.local-user"](): string;
    /**
      * `Outgoing links`
      */
    ["com.lovenotes.page-properties.outgoing-links"](): string;
    /**
      * `Info`
      */
    ["com.lovenotes.page-properties.page-info"](): string;
    /**
      * `View Info`
      */
    ["com.lovenotes.page-properties.page-info.view"](): string;
    /**
      * `No Record`
      */
    ["com.lovenotes.page-properties.property-user-avatar-no-record"](): string;
    /**
      * `Local User`
      */
    ["com.lovenotes.page-properties.property-user-local"](): string;
    /**
      * `Empty`
      */
    ["com.lovenotes.page-properties.property-value-placeholder"](): string;
    /**
      * `Always hide`
      */
    ["com.lovenotes.page-properties.property.always-hide"](): string;
    /**
      * `Always show`
      */
    ["com.lovenotes.page-properties.property.always-show"](): string;
    /**
      * `Checkbox`
      */
    ["com.lovenotes.page-properties.property.checkbox"](): string;
    /**
      * `Created by`
      */
    ["com.lovenotes.page-properties.property.createdBy"](): string;
    /**
      * `Date`
      */
    ["com.lovenotes.page-properties.property.date"](): string;
    /**
      * `Hide in view`
      */
    ["com.lovenotes.page-properties.property.hide-in-view"](): string;
    /**
      * `Hide in view when empty`
      */
    ["com.lovenotes.page-properties.property.hide-in-view-when-empty"](): string;
    /**
      * `Hide when empty`
      */
    ["com.lovenotes.page-properties.property.hide-when-empty"](): string;
    /**
      * `Number`
      */
    ["com.lovenotes.page-properties.property.number"](): string;
    /**
      * `Progress`
      */
    ["com.lovenotes.page-properties.property.progress"](): string;
    /**
      * `Remove property`
      */
    ["com.lovenotes.page-properties.property.remove-property"](): string;
    /**
      * `Required`
      */
    ["com.lovenotes.page-properties.property.required"](): string;
    /**
      * `Show in view`
      */
    ["com.lovenotes.page-properties.property.show-in-view"](): string;
    /**
      * `Tags`
      */
    ["com.lovenotes.page-properties.property.tags"](): string;
    /**
      * `Doc mode`
      */
    ["com.lovenotes.page-properties.property.docPrimaryMode"](): string;
    /**
      * `Text`
      */
    ["com.lovenotes.page-properties.property.text"](): string;
    /**
      */
    /**
      * `Duplicated`
      */
    /**
      */
    /**
      * `Last edited by`
      */
    ["com.lovenotes.page-properties.property.updatedBy"](): string;
    /**
      * `Created`
      */
    ["com.lovenotes.page-properties.property.createdAt"](): string;
    /**
      * `Updated`
      */
    ["com.lovenotes.page-properties.property.updatedAt"](): string;
    /**
      * `Edgeless theme`
      */
    ["com.lovenotes.page-properties.property.edgelessTheme"](): string;
    /**
      * `Page width`
      */
    ["com.lovenotes.page-properties.property.pageWidth"](): string;
    /**
      * `Template`
      */
    ["com.lovenotes.page-properties.property.template"](): string;
    /**
      * `Add relevant identifiers or categories to the doc. Useful for organizing content, improving searchability, and grouping related docs together.`
      */
    ["com.lovenotes.page-properties.property.tags.tooltips"](): string;
    /**
      */
    /**
      * `Use a checkbox to indicate whether a condition is true or false. Useful for confirming options, toggling features, or tracking task states.`
      */
    ["com.lovenotes.page-properties.property.checkbox.tooltips"](): string;
    /**
      * `Use a date field to select or display a specific date. Useful for scheduling, setting deadlines, or recording important events.`
      */
    ["com.lovenotes.page-properties.property.date.tooltips"](): string;
    /**
      * `Upload images to display or manage them. Useful for showcasing visual content, adding illustrations, or organizing a gallery.`
      */
    ["com.lovenotes.page-properties.property.image.tooltips"](): string;
    /**
      * `Select one or more options. Useful for categorizing items, filtering data, or managing tags.`
      */
    ["com.lovenotes.page-properties.property.multiSelect.tooltips"](): string;
    /**
      * `Enter a numeric value. Useful for quantities, measurements, or ranking items.`
      */
    ["com.lovenotes.page-properties.property.number.tooltips"](): string;
    /**
      * `Set a progress value between 0 and 100. Useful for tracking completion status, visualizing progress, or managing goals.`
      */
    ["com.lovenotes.page-properties.property.progress.tooltips"](): string;
    /**
      * `Choose one option. Useful for selecting a single preference, categorizing items, or making decisions.`
      */
    ["com.lovenotes.page-properties.property.select.tooltips"](): string;
    /**
      * `Enter a link to websites or LoveNotes docs. Useful for connecting to external resources and referencing internal docs.`
      */
    ["com.lovenotes.page-properties.property.link.tooltips"](): string;
    /**
      * `Enter text. Useful for descriptions, comments, notes, or any other free-form text input.`
      */
    ["com.lovenotes.page-properties.property.text.tooltips"](): string;
    /**
      * `Displays the author of the current doc. Useful for tracking doc ownership, accountability, and collaboration.`
      */
    ["com.lovenotes.page-properties.property.createdBy.tooltips"](): string;
    /**
      * `Displays the last editor of the current doc. Useful for tracking recent changes.`
      */
    ["com.lovenotes.page-properties.property.updatedBy.tooltips"](): string;
    /**
      * `Record the last modification timestamp. Useful for tracking changes, identifying recent updates, or monitoring content freshness.`
      */
    ["com.lovenotes.page-properties.property.updatedAt.tooltips"](): string;
    /**
      * `Track when a doc was first created. Useful for maintaining record history, sorting by creation date, or auditing content chronologically.`
      */
    ["com.lovenotes.page-properties.property.createdAt.tooltips"](): string;
    /**
      * `Select the doc mode from Page Mode, Edgeless Mode, or Auto. Useful for choosing the best display for your content.`
      */
    ["com.lovenotes.page-properties.property.docPrimaryMode.tooltips"](): string;
    /**
      * `Select the doc theme from Light, Dark, or System. Useful for precise control over content viewing style.`
      */
    ["com.lovenotes.page-properties.property.edgelessTheme.tooltips"](): string;
    /**
      * `Control the width of this page to fit content display needs.`
      */
    ["com.lovenotes.page-properties.property.pageWidth.tooltips"](): string;
    /**
      * `Mark this doc as a template, which can be used to create new docs.`
      */
    ["com.lovenotes.page-properties.property.template.tooltips"](): string;
    /**
      * `Created by {{userName}}`
      */
    ["com.lovenotes.page-properties.property.createdBy.tip"](options: {
        readonly userName: string;
    }): string;
    /**
      * `Last edited by {{userName}}`
      */
    ["com.lovenotes.page-properties.property.updatedBy.tip"](options: {
        readonly userName: string;
    }): string;
    /**
      * `Properties`
      */
    ["com.lovenotes.propertySidebar.property-list.section"](): string;
    /**
      * `Add more properties`
      */
    ["com.lovenotes.propertySidebar.add-more.section"](): string;
    /**
      * `customize properties`
      */
    ["com.lovenotes.page-properties.settings.title"](): string;
    /**
      * `Open tag page`
      */
    ["com.lovenotes.page-properties.tags.open-tags-page"](): string;
    /**
      * `Select tag or create one`
      */
    ["com.lovenotes.page-properties.tags.selector-header-title"](): string;
    /**
      * `Display`
      */
    ["com.lovenotes.page.display"](): string;
    /**
      * `Display properties`
      */
    ["com.lovenotes.page.display.display-properties"](): string;
    /**
      * `Body notes`
      */
    ["com.lovenotes.page.display.display-properties.body-notes"](): string;
    /**
      * `Grouping`
      */
    ["com.lovenotes.page.display.grouping"](): string;
    /**
      * `Favourites`
      */
    ["com.lovenotes.page.display.grouping.group-by-favourites"](): string;
    /**
      * `Tag`
      */
    ["com.lovenotes.page.display.grouping.group-by-tag"](): string;
    /**
      * `Untagged`
      */
    ["com.lovenotes.page.display.grouping.group-by-tag.untagged"](): string;
    /**
      * `No grouping`
      */
    ["com.lovenotes.page.display.grouping.no-grouping"](): string;
    /**
      * `List option`
      */
    ["com.lovenotes.page.display.list-option"](): string;
    /**
      * `Clear selection`
      */
    ["com.lovenotes.page.group-header.clear"](): string;
    /**
      * `Favourited`
      */
    ["com.lovenotes.page.group-header.favourited"](): string;
    /**
      * `Not favourited`
      */
    ["com.lovenotes.page.group-header.not-favourited"](): string;
    /**
      * `Select all`
      */
    ["com.lovenotes.page.group-header.select-all"](): string;
    /**
      * `Created by {{name}}`
      */
    ["com.lovenotes.page.toolbar.created_by"](options: {
        readonly name: string;
    }): string;
    /**
      * `Doc mode`
      */
    ["com.lovenotes.pageMode"](): string;
    /**
      * `all`
      */
    ["com.lovenotes.pageMode.all"](): string;
    /**
      * `Edgeless`
      */
    ["com.lovenotes.pageMode.edgeless"](): string;
    /**
      * `Page`
      */
    ["com.lovenotes.pageMode.page"](): string;
    /**
      * `Congratulations on your successful purchase of LoveNotes AI! You're now empowered to refine your content, generate images, and craft comprehensive mindmaps directly within LoveNotes AI, dramatically enhancing your productivity.`
      */
    ["com.lovenotes.payment.ai-upgrade-success-page.text"](): string;
    /**
      * `Purchase successful!`
      */
    ["com.lovenotes.payment.ai-upgrade-success-page.title"](): string;
    /**
      * `Cancel subscription`
      */
    ["com.lovenotes.payment.ai.action.cancel.button-label"](): string;
    /**
      * `Keep LoveNotes AI`
      */
    ["com.lovenotes.payment.ai.action.cancel.confirm.cancel-text"](): string;
    /**
      * `Cancel subscription`
      */
    ["com.lovenotes.payment.ai.action.cancel.confirm.confirm-text"](): string;
    /**
      * `If you end your subscription now, you can still use LoveNotes AI until the end of this billing period.`
      */
    ["com.lovenotes.payment.ai.action.cancel.confirm.description"](): string;
    /**
      * `Cancel subscription`
      */
    ["com.lovenotes.payment.ai.action.cancel.confirm.title"](): string;
    /**
      * `Login`
      */
    ["com.lovenotes.payment.ai.action.login.button-label"](): string;
    /**
      * `Resume`
      */
    ["com.lovenotes.payment.ai.action.resume.button-label"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.payment.ai.action.resume.confirm.cancel-text"](): string;
    /**
      * `Confirm`
      */
    ["com.lovenotes.payment.ai.action.resume.confirm.confirm-text"](): string;
    /**
      * `Are you sure you want to resume the subscription for LoveNotes AI? This means your payment method will be charged automatically at the end of each billing cycle, starting from the next billing cycle.`
      */
    ["com.lovenotes.payment.ai.action.resume.confirm.description"](): string;
    /**
      * `You will be charged in the next billing cycle.`
      */
    ["com.lovenotes.payment.ai.action.resume.confirm.notify.msg"](): string;
    /**
      * `Subscription updated`
      */
    ["com.lovenotes.payment.ai.action.resume.confirm.notify.title"](): string;
    /**
      * `Resume auto-renewal?`
      */
    ["com.lovenotes.payment.ai.action.resume.confirm.title"](): string;
    /**
      * `Write with you`
      */
    ["com.lovenotes.payment.ai.benefit.g1"](): string;
    /**
      * `Create quality content from sentences to articles on topics you need`
      */
    ["com.lovenotes.payment.ai.benefit.g1-1"](): string;
    /**
      * `Rewrite like the professionals`
      */
    ["com.lovenotes.payment.ai.benefit.g1-2"](): string;
    /**
      * `Change the tones / fix spelling & grammar`
      */
    ["com.lovenotes.payment.ai.benefit.g1-3"](): string;
    /**
      * `Draw with you`
      */
    ["com.lovenotes.payment.ai.benefit.g2"](): string;
    /**
      * `Visualize your mind, magically`
      */
    ["com.lovenotes.payment.ai.benefit.g2-1"](): string;
    /**
      * `Turn your outline into beautiful, engaging presentations`
      */
    ["com.lovenotes.payment.ai.benefit.g2-2"](): string;
    /**
      * `Summarize your content into structured mind-map`
      */
    ["com.lovenotes.payment.ai.benefit.g2-3"](): string;
    /**
      * `Plan with you`
      */
    ["com.lovenotes.payment.ai.benefit.g3"](): string;
    /**
      * `Memorize and tidy up your knowledge`
      */
    ["com.lovenotes.payment.ai.benefit.g3-1"](): string;
    /**
      * `Auto-sorting and auto-tagging`
      */
    ["com.lovenotes.payment.ai.benefit.g3-2"](): string;
    /**
      * `Open source & Privacy ensured`
      */
    ["com.lovenotes.payment.ai.benefit.g3-3"](): string;
    /**
      * `You have purchased LoveNotes AI. The expiration date is {{end}}.`
      */
    ["com.lovenotes.payment.ai.billing-tip.end-at"](options: {
        readonly end: string;
    }): string;
    /**
      * `You have purchased LoveNotes AI. The next payment date is {{due}}.`
      */
    ["com.lovenotes.payment.ai.billing-tip.next-bill-at"](options: {
        readonly due: string;
    }): string;
    /**
      * `Your recent payment failed, the next payment date is {{due}}.`
      */
    ["com.lovenotes.payment.billing-tip.past-due"](options: {
        readonly due: string;
    }): string;
    /**
      * `You are currently on the Free plan.`
      */
    ["com.lovenotes.payment.ai.pricing-plan.caption-free"](): string;
    /**
      * `You have purchased LoveNotes AI`
      */
    ["com.lovenotes.payment.ai.pricing-plan.caption-purchased"](): string;
    /**
      * `Learn about LoveNotes AI`
      */
    ["com.lovenotes.payment.ai.pricing-plan.learn"](): string;
    /**
      * `LoveNotes AI`
      */
    ["com.lovenotes.payment.ai.pricing-plan.title"](): string;
    /**
      * `Turn all your ideas into reality`
      */
    ["com.lovenotes.payment.ai.pricing-plan.title-caption-1"](): string;
    /**
      * `A true multimodal AI copilot.`
      */
    ["com.lovenotes.payment.ai.pricing-plan.title-caption-2"](): string;
    /**
      * `Billed annually`
      */
    ["com.lovenotes.payment.ai.subscribe.billed-annually"](): string;
    /**
      * `You have purchased LoveNotes AI.`
      */
    ["com.lovenotes.payment.ai.usage-description-purchased"](): string;
    /**
      * `LoveNotes AI usage`
      */
    ["com.lovenotes.payment.ai.usage-title"](): string;
    /**
      * `Change plan`
      */
    ["com.lovenotes.payment.ai.usage.change-button-label"](): string;
    /**
      * `Purchase`
      */
    ["com.lovenotes.payment.ai.usage.purchase-button-label"](): string;
    /**
      * `Times used`
      */
    ["com.lovenotes.payment.ai.usage.used-caption"](): string;
    /**
      * `{{used}}/{{limit}} times`
      */
    ["com.lovenotes.payment.ai.usage.used-detail"](options: Readonly<{
        used: string;
        limit: string;
    }>): string;
    /**
      * `Active`
      */
    ["com.lovenotes.payment.subscription-status.active"](): string;
    /**
      * `Past-due bill`
      */
    ["com.lovenotes.payment.subscription-status.past-due"](): string;
    /**
      * `Trialing`
      */
    ["com.lovenotes.payment.subscription-status.trialing"](): string;
    /**
      * `Unlimited local workspaces`
      */
    ["com.lovenotes.payment.benefit-1"](): string;
    /**
      * `Unlimited login devices`
      */
    ["com.lovenotes.payment.benefit-2"](): string;
    /**
      * `Unlimited blocks`
      */
    ["com.lovenotes.payment.benefit-3"](): string;
    /**
      * `{{capacity}} of cloud storage`
      */
    ["com.lovenotes.payment.benefit-4"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `{{capacity}} of maximum file size`
      */
    ["com.lovenotes.payment.benefit-5"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `Number of members per workspace ≤ {{capacity}}`
      */
    ["com.lovenotes.payment.benefit-6"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `{{capacity}}-days version history`
      */
    ["com.lovenotes.payment.benefit-7"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `LoveNotes AI`
      */
    ["com.lovenotes.payment.billing-setting.ai-plan"](): string;
    /**
      * `Purchase`
      */
    ["com.lovenotes.payment.billing-setting.ai.purchase"](): string;
    /**
      * `Start free trial`
      */
    ["com.lovenotes.payment.billing-setting.ai.start-free-trial"](): string;
    /**
      * `One-time payment`
      */
    ["com.lovenotes.payment.billing-setting.believer.price-caption"](): string;
    /**
      * `LoveNotes Cloud`
      */
    ["com.lovenotes.payment.billing-setting.believer.title"](): string;
    /**
      * `Cancel subscription`
      */
    ["com.lovenotes.payment.billing-setting.cancel-subscription"](): string;
    /**
      * `Once you canceled subscription you will no longer enjoy the plan benefits.`
      */
    ["com.lovenotes.payment.billing-setting.cancel-subscription.description"](): string;
    /**
      * `Change plan`
      */
    ["com.lovenotes.payment.billing-setting.change-plan"](): string;
    /**
      * `LoveNotes Cloud`
      */
    ["com.lovenotes.payment.billing-setting.current-plan"](): string;
    /**
      * `Expiration date`
      */
    ["com.lovenotes.payment.billing-setting.expiration-date"](): string;
    /**
      * `Your subscription is valid until {{expirationDate}}`
      */
    ["com.lovenotes.payment.billing-setting.expiration-date.description"](options: {
        readonly expirationDate: string;
    }): string;
    /**
      * `Billing history`
      */
    ["com.lovenotes.payment.billing-setting.history"](): string;
    /**
      * `Information`
      */
    ["com.lovenotes.payment.billing-setting.information"](): string;
    /**
      * `month`
      */
    ["com.lovenotes.payment.billing-setting.month"](): string;
    /**
      * `There are no invoices to display.`
      */
    ["com.lovenotes.payment.billing-setting.no-invoice"](): string;
    /**
      * `Paid`
      */
    ["com.lovenotes.payment.billing-setting.paid"](): string;
    /**
      * `Manage payment details`
      */
    ["com.lovenotes.payment.billing-setting.payment-method"](): string;
    /**
      * `View future and past invoices, update billing information, and change payment methods. Provided by Stripe.`
      */
    ["com.lovenotes.payment.billing-setting.payment-method.description"](): string;
    /**
      * `Go`
      */
    ["com.lovenotes.payment.billing-setting.payment-method.go"](): string;
    /**
      * `Renew date`
      */
    ["com.lovenotes.payment.billing-setting.renew-date"](): string;
    /**
      * `Next billing date: {{renewDate}}`
      */
    ["com.lovenotes.payment.billing-setting.renew-date.description"](options: {
        readonly renewDate: string;
    }): string;
    /**
      * `Due date`
      */
    ["com.lovenotes.payment.billing-setting.due-date"](): string;
    /**
      * `Your subscription will end on {{dueDate}}`
      */
    ["com.lovenotes.payment.billing-setting.due-date.description"](options: {
        readonly dueDate: string;
    }): string;
    /**
      * `Resume`
      */
    ["com.lovenotes.payment.billing-setting.resume-subscription"](): string;
    /**
      * `Manage your billing information and invoices`
      */
    ["com.lovenotes.payment.billing-setting.subtitle"](): string;
    /**
      * `Billing`
      */
    ["com.lovenotes.payment.billing-setting.title"](): string;
    /**
      * `Update`
      */
    ["com.lovenotes.payment.billing-setting.update"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.payment.billing-setting.upgrade"](): string;
    /**
      * `View invoice`
      */
    ["com.lovenotes.payment.billing-setting.view-invoice"](): string;
    /**
      * `year`
      */
    ["com.lovenotes.payment.billing-setting.year"](): string;
    /**
      * `Please tell us more about your use case, to make LoveNotes better.`
      */
    ["com.lovenotes.payment.billing-type-form.description"](): string;
    /**
      * `Go`
      */
    ["com.lovenotes.payment.billing-type-form.go"](): string;
    /**
      * `Tell us your use case`
      */
    ["com.lovenotes.payment.billing-type-form.title"](): string;
    /**
      * `You have reached the limit`
      */
    ["com.lovenotes.payment.blob-limit.title"](): string;
    /**
      * `Book a demo`
      */
    ["com.lovenotes.payment.book-a-demo"](): string;
    /**
      * `Buy Pro`
      */
    ["com.lovenotes.payment.buy-pro"](): string;
    /**
      * `Change to {{to}} Billing`
      */
    ["com.lovenotes.payment.change-to"](options: {
        readonly to: string;
    }): string;
    /**
      * `Include in FOSS`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g1"](): string;
    /**
      * `Unlimited local workspaces`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g1-1"](): string;
    /**
      * `Unlimited use and customization`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g1-2"](): string;
    /**
      * `Unlimited doc and edgeless editing`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g1-3"](): string;
    /**
      * `Include in Basic`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g2"](): string;
    /**
      * `10 GB of cloud storage.`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g2-1"](): string;
    /**
      * `10 MB of maximum file size.`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g2-2"](): string;
    /**
      * `Up to 3 members per workspace.`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g2-3"](): string;
    /**
      * `7-days cloud time machine file version history.`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g2-4"](): string;
    /**
      * `Up to 3 login devices.`
      */
    ["com.lovenotes.payment.cloud.free.benefit.g2-5"](): string;
    /**
      * `Local Editor under MIT license.`
      */
    ["com.lovenotes.payment.cloud.free.description"](): string;
    /**
      * `Local FOSS + Cloud Basic`
      */
    ["com.lovenotes.payment.cloud.free.name"](): string;
    /**
      * `Free forever`
      */
    ["com.lovenotes.payment.cloud.free.title"](): string;
    /**
      * `Included in Pro plan`
      */
    ["com.lovenotes.payment.cloud.onetime.included"](): string;
    /**
      * `Included in Believer plan`
      */
    ["com.lovenotes.payment.cloud.lifetime.included"](): string;
    /**
      * `We host, no technical setup required.`
      */
    ["com.lovenotes.payment.cloud.pricing-plan.select.caption"](): string;
    /**
      * `Hosted by LoveNotes.Pro`
      */
    ["com.lovenotes.payment.cloud.pricing-plan.select.title"](): string;
    /**
      * `Billed annually`
      */
    ["com.lovenotes.payment.cloud.pricing-plan.toggle-billed-yearly"](): string;
    /**
      * `Saving {{discount}}%`
      */
    ["com.lovenotes.payment.cloud.pricing-plan.toggle-discount"](options: {
        readonly discount: string;
    }): string;
    /**
      * `Annually`
      */
    ["com.lovenotes.payment.cloud.pricing-plan.toggle-yearly"](): string;
    /**
      * `Include in Pro`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1"](): string;
    /**
      * `Everything in LoveNotes FOSS & Basic.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-1"](): string;
    /**
      * `100 GB of cloud storage.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-2"](): string;
    /**
      * `100 MB of maximum file size.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-3"](): string;
    /**
      * `Up to 10 members per workspace.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-4"](): string;
    /**
      * `30-days cloud time machine file version history.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-5"](): string;
    /**
      * `Add comments on Doc and Edgeless.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-6"](): string;
    /**
      * `Community support.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-7"](): string;
    /**
      * `Real-time syncing & collaboration for more people.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-8"](): string;
    /**
      * `Granular edit access to docs.`
      */
    ["com.lovenotes.payment.cloud.pro.benefit.g1-9"](): string;
    /**
      * `For family and small teams.`
      */
    ["com.lovenotes.payment.cloud.pro.description"](): string;
    /**
      * `Pro`
      */
    ["com.lovenotes.payment.cloud.pro.name"](): string;
    /**
      * `annually`
      */
    ["com.lovenotes.payment.cloud.pro.title.billed-yearly"](): string;
    /**
      * `{{price}} per month`
      */
    ["com.lovenotes.payment.cloud.pro.title.price-monthly"](options: {
        readonly price: string;
    }): string;
    /**
      * `Include in Team Workspace`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1"](): string;
    /**
      * `Everything in LoveNotes Pro.`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1-1"](): string;
    /**
      * `100 GB initial storage + 20 GB per seat.`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1-2"](): string;
    /**
      * `500 MB of maximum file size.`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1-3"](): string;
    /**
      * `Unlimited team members (10+ seats).`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1-4"](): string;
    /**
      * `Multiple admin roles.`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1-5"](): string;
    /**
      * `Priority customer support.`
      */
    ["com.lovenotes.payment.cloud.team-workspace.benefit.g1-6"](): string;
    /**
      * `Best for scalable teams.`
      */
    ["com.lovenotes.payment.cloud.team-workspace.description"](): string;
    /**
      * `Team`
      */
    ["com.lovenotes.payment.cloud.team-workspace.name"](): string;
    /**
      * `annually`
      */
    ["com.lovenotes.payment.cloud.team-workspace.title.billed-yearly"](): string;
    /**
      * `{{price}} per seat/month`
      */
    ["com.lovenotes.payment.cloud.team-workspace.title.price-monthly"](options: {
        readonly price: string;
    }): string;
    /**
      * `Contact sales`
      */
    ["com.lovenotes.payment.contact-sales"](): string;
    /**
      * `Current plan`
      */
    ["com.lovenotes.payment.current-plan"](): string;
    /**
      * `Start 14-day free trial`
      */
    ["com.lovenotes.payment.start-free-trial"](): string;
    /**
      * `{{amount}}% off`
      */
    ["com.lovenotes.payment.discount-amount"](options: {
        readonly amount: string;
    }): string;
    /**
      * `Downgrade`
      */
    ["com.lovenotes.payment.downgrade"](): string;
    /**
      * `We'd like to hear more about where we fall short, so that we can make LoveNotes better.`
      */
    ["com.lovenotes.payment.downgraded-notify.content"](): string;
    /**
      * `Later`
      */
    ["com.lovenotes.payment.downgraded-notify.later"](): string;
    /**
      * `Sure, Open in browser`
      */
    ["com.lovenotes.payment.downgraded-notify.ok-client"](): string;
    /**
      * `Sure, Open in new tab`
      */
    ["com.lovenotes.payment.downgraded-notify.ok-web"](): string;
    /**
      * `Sorry to see you go`
      */
    ["com.lovenotes.payment.downgraded-notify.title"](): string;
    /**
      * `You have successfully downgraded. After the current billing period ends, your account will automatically switch to the Free plan.`
      */
    ["com.lovenotes.payment.downgraded-tooltip"](): string;
    /**
      * `Best team workspace for collaboration and knowledge distilling.`
      */
    ["com.lovenotes.payment.dynamic-benefit-1"](): string;
    /**
      * `Focusing on what really matters with team project management and automation.`
      */
    ["com.lovenotes.payment.dynamic-benefit-2"](): string;
    /**
      * `Pay for seats, fits all team size.`
      */
    ["com.lovenotes.payment.dynamic-benefit-3"](): string;
    /**
      * `Solutions & best practices for dedicated needs.`
      */
    ["com.lovenotes.payment.dynamic-benefit-4"](): string;
    /**
      * `Embedable & interrogations with IT support.`
      */
    ["com.lovenotes.payment.dynamic-benefit-5"](): string;
    /**
      * `Everything in LoveNotes Pro`
      */
    ["com.lovenotes.payment.lifetime.benefit-1"](): string;
    /**
      * `Life-time personal usage`
      */
    ["com.lovenotes.payment.lifetime.benefit-2"](): string;
    /**
      * `{{capacity}} Cloud Storage`
      */
    ["com.lovenotes.payment.lifetime.benefit-3"](options: {
        readonly capacity: string;
    }): string;
    /**
      * `Dedicated Discord support with LoveNotes makers`
      */
    ["com.lovenotes.payment.lifetime.benefit-4"](): string;
    /**
      * `Become a Life-time supporter?`
      */
    ["com.lovenotes.payment.lifetime.caption-1"](): string;
    /**
      * `Purchase`
      */
    ["com.lovenotes.payment.lifetime.purchase"](): string;
    /**
      * `Purchased`
      */
    ["com.lovenotes.payment.lifetime.purchased"](): string;
    /**
      * `Believer Plan`
      */
    ["com.lovenotes.payment.lifetime.title"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.payment.member-limit.free.confirm"](): string;
    /**
      * `Workspaces created by {{planName}} users are limited to {{quota}} members. To add more collaborators, you can:`
      */
    ["com.lovenotes.payment.member-limit.description"](options: Readonly<{
        planName: string;
        quota: string;
    }>): string;
    /**
      * `Upgrade to LoveNotes Pro for expanded member capacity`
      */
    ["com.lovenotes.payment.member-limit.description.tips-for-free-plan"](): string;
    /**
      * `Convert to a Team Workspace for unlimited collaboration`
      */
    ["com.lovenotes.payment.member-limit.description.tips-1"](): string;
    /**
      * `Or create a new workspace`
      */
    ["com.lovenotes.payment.member-limit.description.tips-2"](): string;
    /**
      * `Got it`
      */
    ["com.lovenotes.payment.member-limit.pro.confirm"](): string;
    /**
      * `You have reached the limit`
      */
    ["com.lovenotes.payment.member-limit.title"](): string;
    /**
      * `Manage members here. {{planName}} users can invite up to {{memberLimit}}`
      */
    ["com.lovenotes.payment.member.description"](options: Readonly<{
        planName: string;
        memberLimit: string;
    }>): string;
    /**
      * `Choose your plan`
      */
    ["com.lovenotes.payment.member.description.choose-plan"](): string;
    /**
      * `go upgrade`
      */
    ["com.lovenotes.payment.member.description.go-upgrade"](): string;
    /**
      * `Looking to collaborate with more people?`
      */
    ["com.lovenotes.payment.member.description2"](): string;
    /**
      * `Work together with unlimited team members.`
      */
    ["com.lovenotes.payment.member.team.description"](): string;
    /**
      * `Invite team members`
      */
    ["com.lovenotes.payment.member.team.invite.title"](): string;
    /**
      * `Invite new members to join your workspace via email or share an invite link`
      */
    ["com.lovenotes.payment.member.team.invite.description"](): string;
    /**
      * `Email Invite`
      */
    ["com.lovenotes.payment.member.team.invite.email-invite"](): string;
    /**
      * `Invite Link`
      */
    ["com.lovenotes.payment.member.team.invite.invite-link"](): string;
    /**
      * `Email addresses`
      */
    ["com.lovenotes.payment.member.team.invite.email-addresses"](): string;
    /**
      * `Enter email addresses (separated by commas)`
      */
    ["com.lovenotes.payment.member.team.invite.email-placeholder"](): string;
    /**
      * `Import CSV`
      */
    ["com.lovenotes.payment.member.team.invite.import-csv"](): string;
    /**
      * `Send Invites`
      */
    ["com.lovenotes.payment.member.team.invite.send-invites"](): string;
    /**
      * `Link expiration`
      */
    ["com.lovenotes.payment.member.team.invite.link-expiration"](): string;
    /**
      * `{{number}} days`
      */
    ["com.lovenotes.payment.member.team.invite.expiration-date"](options: {
        readonly number: string;
    }): string;
    /**
      * `To expire at: {{expireTime}}`
      */
    ["com.lovenotes.payment.member.team.invite.expire-at"](options: {
        readonly expireTime: string;
    }): string;
    /**
      * `Invitation link`
      */
    ["com.lovenotes.payment.member.team.invite.invitation-link"](): string;
    /**
      * `Generate a link to invite members to your workspace`
      */
    ["com.lovenotes.payment.member.team.invite.invitation-link.description"](): string;
    /**
      * `Generate`
      */
    ["com.lovenotes.payment.member.team.invite.generate"](): string;
    /**
      * `Copy`
      */
    ["com.lovenotes.payment.member.team.invite.copy"](): string;
    /**
      * `Done`
      */
    ["com.lovenotes.payment.member.team.invite.done"](): string;
    /**
      * `Invitation sent,{{successCount}} successful, {{failedCount}} failed`
      */
    ["com.lovenotes.payment.member.team.invite.notify.title"](options: Readonly<{
        successCount: string;
        failedCount: string;
    }>): string;
    /**
      * `These email addresses have already been invited:`
      */
    ["com.lovenotes.payment.member.team.invite.notify.fail-message"](): string;
    /**
      * `Revoke invitation`
      */
    ["com.lovenotes.payment.member.team.revoke"](): string;
    /**
      * `Approve`
      */
    ["com.lovenotes.payment.member.team.approve"](): string;
    /**
      * `Decline`
      */
    ["com.lovenotes.payment.member.team.decline"](): string;
    /**
      * `Remove member`
      */
    ["com.lovenotes.payment.member.team.remove"](): string;
    /**
      * `Retry payment`
      */
    ["com.lovenotes.payment.member.team.retry-payment"](): string;
    /**
      * `Change role to admin`
      */
    ["com.lovenotes.payment.member.team.change.admin"](): string;
    /**
      * `Change role to collaborator`
      */
    ["com.lovenotes.payment.member.team.change.collaborator"](): string;
    /**
      * `Assign as owner`
      */
    ["com.lovenotes.payment.member.team.assign"](): string;
    /**
      * `Insufficient Team Seats`
      */
    ["com.lovenotes.payment.member.team.retry-payment.title"](): string;
    /**
      * `The payment for adding new team members has failed. To add more seats, please update your payment method and process unpaid invoices.`
      */
    ["com.lovenotes.payment.member.team.retry-payment.owner.description"](): string;
    /**
      * `The payment for adding new team members has failed. Please contact your workspace owner to update the payment method and process unpaid invoices.`
      */
    ["com.lovenotes.payment.member.team.retry-payment.admin.description"](): string;
    /**
      * `Update Payment`
      */
    ["com.lovenotes.payment.member.team.retry-payment.update-payment"](): string;
    /**
      * `Subscription has been disabled for your team workspace. To add more seats, you'll need to resume subscription first.`
      */
    ["com.lovenotes.payment.member.team.disabled-subscription.owner.description"](): string;
    /**
      * `Your team workspace has subscription disabled, which prevents adding more seats. Please contact your workspace owner to enable subscription.`
      */
    ["com.lovenotes.payment.member.team.disabled-subscription.admin.description"](): string;
    /**
      * `Resume Subscription`
      */
    ["com.lovenotes.payment.member.team.disabled-subscription.resume-subscription"](): string;
    /**
      * `Invitation Revoked`
      */
    ["com.lovenotes.payment.member.team.revoke.notify.title"](): string;
    /**
      * `You have canceled the invitation for {{name}}`
      */
    ["com.lovenotes.payment.member.team.revoke.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `Request approved`
      */
    ["com.lovenotes.payment.member.team.approve.notify.title"](): string;
    /**
      * `You have approved the {{name}}’s request to join this workspace`
      */
    ["com.lovenotes.payment.member.team.approve.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `Request declined`
      */
    ["com.lovenotes.payment.member.team.decline.notify.title"](): string;
    /**
      * `You have declined the {{name}}’s request to join this workspace`
      */
    ["com.lovenotes.payment.member.team.decline.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `Member removed`
      */
    ["com.lovenotes.payment.member.team.remove.notify.title"](): string;
    /**
      * `You have removed {{name}} from this workspace`
      */
    ["com.lovenotes.payment.member.team.remove.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `Role Updated`
      */
    ["com.lovenotes.payment.member.team.change.notify.title"](): string;
    /**
      * `You have successfully promoted {{name}} to Admin.`
      */
    ["com.lovenotes.payment.member.team.change.admin.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `You have successfully changed {{name}} s role to collaborator.`
      */
    ["com.lovenotes.payment.member.team.change.collaborator.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `Owner assigned`
      */
    ["com.lovenotes.payment.member.team.assign.notify.title"](): string;
    /**
      * `You have successfully assigned {{name}} as the owner of this workspace.`
      */
    ["com.lovenotes.payment.member.team.assign.notify.message"](options: {
        readonly name: string;
    }): string;
    /**
      * `Confirm new workspace owner`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.title"](): string;
    /**
      * `You are about to transfer workspace ownership to {{name}}. Please review the following changes carefully:`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.description"](options: {
        readonly name: string;
    }): string;
    /**
      * `This action cannot be undone`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.description-1"](): string;
    /**
      * `Your role will be changed to Admin`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.description-2"](): string;
    /**
      * `You will lose ownership rights to the entire workspace`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.description-3"](): string;
    /**
      * `To confirm this transfer, please type the workspace name`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.description-4"](): string;
    /**
      * `Type workspace name to confirm`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.placeholder"](): string;
    /**
      * `Transfer Ownership`
      */
    ["com.lovenotes.payment.member.team.assign.confirm.button"](): string;
    /**
      * `Remove member from workspace?`
      */
    ["com.lovenotes.payment.member.team.remove.confirm.title"](): string;
    /**
      * `This action will revoke their access to all workspace resources immediately.`
      */
    ["com.lovenotes.payment.member.team.remove.confirm.description"](): string;
    /**
      * `Remove Member`
      */
    ["com.lovenotes.payment.member.team.remove.confirm.confirm-button"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.payment.member.team.remove.confirm.cancel"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.payment.modal.change.cancel"](): string;
    /**
      * `Change`
      */
    ["com.lovenotes.payment.modal.change.confirm"](): string;
    /**
      * `Change your subscription`
      */
    ["com.lovenotes.payment.modal.change.title"](): string;
    /**
      * `Cancel subscription`
      */
    ["com.lovenotes.payment.modal.downgrade.cancel"](): string;
    /**
      * `You can still use LoveNotes Cloud Pro until the end of this billing period :)`
      */
    ["com.lovenotes.payment.modal.downgrade.caption"](): string;
    /**
      * `Keep LoveNotes Cloud Pro`
      */
    ["com.lovenotes.payment.modal.downgrade.confirm"](): string;
    /**
      * `Keep Team plan`
      */
    ["com.lovenotes.payment.modal.downgrade.team-confirm"](): string;
    /**
      * `We're sorry to see you go, but we're always working to improve, and your feedback is welcome. We hope to see you return in the future.`
      */
    ["com.lovenotes.payment.modal.downgrade.content"](): string;
    /**
      * `Are you sure?`
      */
    ["com.lovenotes.payment.modal.downgrade.title"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.payment.modal.resume.cancel"](): string;
    /**
      * `Confirm`
      */
    ["com.lovenotes.payment.modal.resume.confirm"](): string;
    /**
      * `Are you sure you want to resume the subscription for your pro account? This means your payment method will be charged automatically at the end of each billing cycle, starting from the next billing cycle.`
      */
    ["com.lovenotes.payment.modal.resume.content"](): string;
    /**
      * `Resume auto-renewal?`
      */
    ["com.lovenotes.payment.modal.resume.title"](): string;
    /**
      * `Refresh`
      */
    ["com.lovenotes.payment.plans-error-retry"](): string;
    /**
      * `Unable to load pricing plans, please check your network. `
      */
    ["com.lovenotes.payment.plans-error-tip"](): string;
    /**
      * `monthly`
      */
    ["com.lovenotes.payment.recurring-monthly"](): string;
    /**
      * `annually`
      */
    ["com.lovenotes.payment.recurring-yearly"](): string;
    /**
      * `Resume`
      */
    ["com.lovenotes.payment.resume"](): string;
    /**
      * `Subscription Resumed`
      */
    ["com.lovenotes.payment.resume.success.title"](): string;
    /**
      * `Your team workspace subscription has been enabled successfully. Changes will take effect immediately.`
      */
    ["com.lovenotes.payment.resume.success.team.message"](): string;
    /**
      * `Resume auto-renewal`
      */
    ["com.lovenotes.payment.resume-renewal"](): string;
    /**
      * `See all plans`
      */
    ["com.lovenotes.payment.see-all-plans"](): string;
    /**
      * `Sign up free`
      */
    ["com.lovenotes.payment.sign-up-free"](): string;
    /**
      * `Cloud storage is insufficient. Please contact the owner of that workspace.`
      */
    ["com.lovenotes.payment.storage-limit.description.member"](): string;
    /**
      * `Cloud storage is insufficient. You can upgrade your account to unlock more cloud storage.`
      */
    ["com.lovenotes.payment.storage-limit.description.owner"](): string;
    /**
      * `Unable to sync due to insufficient storage space. You can remove excess content, upgrade your account, or increase your workspace storage to resolve this issue.`
      */
    ["com.lovenotes.payment.storage-limit.new-description.owner"](): string;
    /**
      * `Sync failed due to storage space limit`
      */
    ["com.lovenotes.payment.storage-limit.new-title"](): string;
    /**
      * `View`
      */
    ["com.lovenotes.payment.storage-limit.view"](): string;
    /**
      * `You are currently on the {{plan}} plan. After the current billing period ends, your account will automatically switch to the Free plan.`
      */
    ["com.lovenotes.payment.subtitle-canceled"](options: {
        readonly plan: string;
    }): string;
    /**
      * `This is the pricing plans of LoveNotes Cloud. You can sign up or sign in to your account first.`
      */
    ["com.lovenotes.payment.subtitle-not-signed-in"](): string;
    /**
      * `See all plans`
      */
    ["com.lovenotes.payment.tag-tooltips"](): string;
    /**
      * `Tell us your use case`
      */
    ["com.lovenotes.payment.tell-us-use-case"](): string;
    /**
      * `Pricing plans`
      */
    ["com.lovenotes.payment.title"](): string;
    /**
      * `You have changed your plan to {{plan}} billing.`
      */
    ["com.lovenotes.payment.updated-notify-msg"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Subscription updated`
      */
    ["com.lovenotes.payment.updated-notify-title"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.payment.upgrade"](): string;
    /**
      * `Redeem code`
      */
    ["com.lovenotes.payment.redeem-code"](): string;
    /**
      * `We'd like to hear more about your use case, so that we can make LoveNotes better.`
      */
    ["com.lovenotes.payment.upgrade-success-notify.content"](): string;
    /**
      * `Later`
      */
    ["com.lovenotes.payment.upgrade-success-notify.later"](): string;
    /**
      * `Sure, open in browser`
      */
    ["com.lovenotes.payment.upgrade-success-notify.ok-client"](): string;
    /**
      * `Sure, open in new tab`
      */
    ["com.lovenotes.payment.upgrade-success-notify.ok-web"](): string;
    /**
      * `Thanks for subscribing!`
      */
    ["com.lovenotes.payment.upgrade-success-notify.title"](): string;
    /**
      * `Congratulations! Your LoveNotes account has been successfully upgraded to a Pro account.`
      */
    ["com.lovenotes.payment.upgrade-success-page.text"](): string;
    /**
      * `Upgrade successful!`
      */
    ["com.lovenotes.payment.upgrade-success-page.title"](): string;
    /**
      * `Congratulations! Your workspace has been successfully upgraded to a Team Workspace. Now you can invite unlimited members to collaborate in this workspace.`
      */
    ["com.lovenotes.payment.upgrade-success-page.team.text-1"](): string;
    /**
      * `Thank you for your purchase!`
      */
    ["com.lovenotes.payment.license-success.title"](): string;
    /**
      * `Thank you for purchasing the LoveNotes self-hosted license.`
      */
    ["com.lovenotes.payment.license-success.text-1"](): string;
    /**
      * `You can use this key to upgrade in Settings > Workspace > License > Use purchased key`
      */
    ["com.lovenotes.payment.license-success.hint"](): string;
    /**
      * `Open LoveNotes`
      */
    ["com.lovenotes.payment.license-success.open-lovenotes"](): string;
    /**
      * `Copied key to clipboard`
      */
    ["com.lovenotes.payment.license-success.copy"](): string;
    /**
      * `Close`
      */
    ["com.lovenotes.peek-view-controls.close"](): string;
    /**
      * `Open this doc`
      */
    ["com.lovenotes.peek-view-controls.open-doc"](): string;
    /**
      * `Open in edgeless`
      */
    ["com.lovenotes.peek-view-controls.open-doc-in-edgeless"](): string;
    /**
      * `Open in new tab`
      */
    ["com.lovenotes.peek-view-controls.open-doc-in-new-tab"](): string;
    /**
      * `Open in split view`
      */
    ["com.lovenotes.peek-view-controls.open-doc-in-split-view"](): string;
    /**
      * `Open doc info`
      */
    ["com.lovenotes.peek-view-controls.open-info"](): string;
    /**
      * `Open this attachment`
      */
    ["com.lovenotes.peek-view-controls.open-attachment"](): string;
    /**
      * `Open in new tab`
      */
    ["com.lovenotes.peek-view-controls.open-attachment-in-new-tab"](): string;
    /**
      * `Open in split view`
      */
    ["com.lovenotes.peek-view-controls.open-attachment-in-split-view"](): string;
    /**
      * `Open in center peek`
      */
    ["com.lovenotes.peek-view-controls.open-doc-in-center-peek"](): string;
    /**
      * `Copy link`
      */
    ["com.lovenotes.peek-view-controls.copy-link"](): string;
    /**
      * `Click or drag`
      */
    ["com.lovenotes.split-view-drag-handle.tooltip"](): string;
    /**
      * `Split view does not support folders.`
      */
    ["com.lovenotes.split-view-folder-warning.description"](): string;
    /**
      * `Do not show this again`
      */
    ["do-not-show-this-again"](): string;
    /**
      * `New`
      */
    ["com.lovenotes.quicksearch.group.creation"](): string;
    /**
      * `Search locally`
      */
    ["com.lovenotes.quicksearch.search-locally"](): string;
    /**
      * `Search for "{{query}}"`
      */
    ["com.lovenotes.quicksearch.group.searchfor"](options: {
        readonly query: string;
    }): string;
    /**
      * `Search for "{{query}}" (locally)`
      */
    ["com.lovenotes.quicksearch.group.searchfor-locally"](options: {
        readonly query: string;
    }): string;
    /**
      * `Reset sync`
      */
    ["com.lovenotes.resetSyncStatus.button"](): string;
    /**
      * `This operation may fix some synchronization issues.`
      */
    ["com.lovenotes.resetSyncStatus.description"](): string;
    /**
      * `Collections`
      */
    ["com.lovenotes.rootAppSidebar.collections"](): string;
    /**
      * `Notifications`
      */
    ["com.lovenotes.rootAppSidebar.notifications"](): string;
    /**
      * `Only doc can be placed on here`
      */
    ["com.lovenotes.rootAppSidebar.doc.link-doc-only"](): string;
    /**
      * `No linked docs`
      */
    ["com.lovenotes.rootAppSidebar.docs.no-subdoc"](): string;
    /**
      * `Loading linked docs...`
      */
    ["com.lovenotes.rootAppSidebar.docs.references-loading"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.rootAppSidebar.explorer.collection-add-tooltip"](): string;
    /**
      * `New collection`
      */
    ["com.lovenotes.rootAppSidebar.explorer.collection-section-add-tooltip"](): string;
    /**
      * `New linked doc`
      */
    ["com.lovenotes.rootAppSidebar.explorer.doc-add-tooltip"](): string;
    /**
      * `Copy`
      */
    ["com.lovenotes.rootAppSidebar.explorer.drop-effect.copy"](): string;
    /**
      * `Link`
      */
    ["com.lovenotes.rootAppSidebar.explorer.drop-effect.link"](): string;
    /**
      * `Move`
      */
    ["com.lovenotes.rootAppSidebar.explorer.drop-effect.move"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.rootAppSidebar.explorer.fav-section-add-tooltip"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.rootAppSidebar.explorer.organize-add-tooltip"](): string;
    /**
      * `New folder`
      */
    ["com.lovenotes.rootAppSidebar.explorer.organize-section-add-tooltip"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.rootAppSidebar.explorer.tag-add-tooltip"](): string;
    /**
      * `New tag`
      */
    ["com.lovenotes.rootAppSidebar.explorer.tag-section-add-tooltip"](): string;
    /**
      * `Favorites`
      */
    ["com.lovenotes.rootAppSidebar.favorites"](): string;
    /**
      * `No favorites`
      */
    ["com.lovenotes.rootAppSidebar.favorites.empty"](): string;
    /**
      * `Migration data`
      */
    ["com.lovenotes.rootAppSidebar.migration-data"](): string;
    /**
      * `Empty the old favorites`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.clean-all"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.clean-all.cancel"](): string;
    /**
      * `OK`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.clean-all.confirm"](): string;
    /**
      * `The old "Favorites" will be replaced`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.help"](): string;
    /**
      * `Empty the old favorites`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.help.clean-all"](): string;
    /**
      * `OK`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.help.confirm"](): string;
    /**
      * `Organize`
      */
    ["com.lovenotes.rootAppSidebar.organize"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.rootAppSidebar.organize.delete"](): string;
    /**
      * `Remove from folder`
      */
    ["com.lovenotes.rootAppSidebar.organize.delete-from-folder"](): string;
    /**
      * `Delete the folder will not delete any docs, tags, or collections.`
      */
    ["com.lovenotes.rootAppSidebar.organize.delete.notify-message"](): string;
    /**
      * `Delete {{name}}`
      */
    ["com.lovenotes.rootAppSidebar.organize.delete.notify-title"](options: {
        readonly name: string;
    }): string;
    /**
      * `No folders`
      */
    ["com.lovenotes.rootAppSidebar.organize.empty"](): string;
    /**
      * `Empty folder`
      */
    ["com.lovenotes.rootAppSidebar.organize.empty-folder"](): string;
    /**
      * `Add pages`
      */
    ["com.lovenotes.rootAppSidebar.organize.empty-folder.add-pages"](): string;
    /**
      * `New folder`
      */
    ["com.lovenotes.rootAppSidebar.organize.empty.new-folders-button"](): string;
    /**
      * `Add to favorites`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder-add-favorite"](): string;
    /**
      * `Remove from favorites`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder-rm-favorite"](): string;
    /**
      * `Add Collections`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder.add-collections"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder.new-doc"](): string;
    /**
      * `Add docs`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder.add-docs"](): string;
    /**
      * `Add others`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder.add-others"](): string;
    /**
      * `Add tags`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder.add-tags"](): string;
    /**
      * `Create a subfolder`
      */
    ["com.lovenotes.rootAppSidebar.organize.folder.create-subfolder"](): string;
    /**
      * `New folder`
      */
    ["com.lovenotes.rootAppSidebar.organize.new-folders"](): string;
    /**
      * `Only folder can be placed on here`
      */
    ["com.lovenotes.rootAppSidebar.organize.root-folder-only"](): string;
    /**
      * `Add More`
      */
    ["com.lovenotes.rootAppSidebar.organize.add-more"](): string;
    /**
      * `Add Folder`
      */
    ["com.lovenotes.rootAppSidebar.organize.add-folder"](): string;
    /**
      * `New Collection`
      */
    ["com.lovenotes.rootAppSidebar.collection.new"](): string;
    /**
      * `Others`
      */
    ["com.lovenotes.rootAppSidebar.others"](): string;
    /**
      * `Only doc can be placed on here`
      */
    ["com.lovenotes.rootAppSidebar.tag.doc-only"](): string;
    /**
      * `Tags`
      */
    ["com.lovenotes.rootAppSidebar.tags"](): string;
    /**
      * `No tags`
      */
    ["com.lovenotes.rootAppSidebar.tags.empty"](): string;
    /**
      * `New tag`
      */
    ["com.lovenotes.rootAppSidebar.tags.empty.new-tag-button"](): string;
    /**
      * `New tag`
      */
    ["com.lovenotes.rootAppSidebar.tags.new-tag"](): string;
    /**
      * `No docs`
      */
    ["com.lovenotes.rootAppSidebar.tags.no-doc"](): string;
    /**
      * `Drag to resize`
      */
    ["com.lovenotes.rootAppSidebar.resize-handle.tooltip.drag"](): string;
    /**
      * `Click to collapse`
      */
    ["com.lovenotes.rootAppSidebar.resize-handle.tooltip.click"](): string;
    /**
      * `Type here ...`
      */
    ["com.lovenotes.search-tags.placeholder"](): string;
    /**
      * `Empty`
      */
    ["com.lovenotes.selectPage.empty"](): string;
    /**
      * `Selected`
      */
    ["com.lovenotes.selectPage.selected"](): string;
    /**
      * `Add include doc`
      */
    ["com.lovenotes.selectPage.title"](): string;
    /**
      * `Search collections...`
      */
    ["com.lovenotes.selector-collection.search.placeholder"](): string;
    /**
      * `Search tags...`
      */
    ["com.lovenotes.selector-tag.search.placeholder"](): string;
    /**
      * `Notifications`
      */
    ["com.lovenotes.setting.notifications"](): string;
    /**
      * `Notifications`
      */
    ["com.lovenotes.setting.notifications.header.title"](): string;
    /**
      * `Choose the types of updates you want to receive and where to get them.`
      */
    ["com.lovenotes.setting.notifications.header.description"](): string;
    /**
      * `Email notifications`
      */
    ["com.lovenotes.setting.notifications.email.title"](): string;
    /**
      * `Mention`
      */
    ["com.lovenotes.setting.notifications.email.mention.title"](): string;
    /**
      * `You will be notified through email when other members of the workspace @ you.`
      */
    ["com.lovenotes.setting.notifications.email.mention.subtitle"](): string;
    /**
      * `Invites`
      */
    ["com.lovenotes.setting.notifications.email.invites.title"](): string;
    /**
      * `Invitation related messages will be sent through emails.`
      */
    ["com.lovenotes.setting.notifications.email.invites.subtitle"](): string;
    /**
      * `Comments`
      */
    ["com.lovenotes.setting.notifications.email.comments.title"](): string;
    /**
      * `You will be notified through email when other members of the workspace comment on your docs.`
      */
    ["com.lovenotes.setting.notifications.email.comments.subtitle"](): string;
    /**
      * `Account settings`
      */
    ["com.lovenotes.setting.account"](): string;
    /**
      * `Delete your account from {{server}}`
      */
    ["com.lovenotes.setting.account.delete-from-server"](options: {
        readonly server: string;
    }): string;
    /**
      * `Once deleted, your account will no longer be accessible, and all data in your personal cloud space will be permanently deleted.`
      */
    ["com.lovenotes.setting.account.delete.message"](): string;
    /**
      * `Cannot delete account`
      */
    ["com.lovenotes.setting.account.delete.team-warning-title"](): string;
    /**
      * `You’re the owner of a team workspace. To delete your account, please delete the workspace or transfer ownership first.`
      */
    ["com.lovenotes.setting.account.delete.team-warning-description"](): string;
    /**
      * `Delete your account?`
      */
    ["com.lovenotes.setting.account.delete.confirm-title"](): string;
    /**
      * `Please type your email to confirm`
      */
    ["com.lovenotes.setting.account.delete.input-placeholder"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.setting.account.delete.confirm-button"](): string;
    /**
      * `Account deleted`
      */
    ["com.lovenotes.setting.account.delete.success-title"](): string;
    /**
      * `Your account and cloud data have been deleted.`
      */
    ["com.lovenotes.setting.account.delete.success-description-1"](): string;
    /**
      * `Local data can be deleted by uninstalling app and clearing browser data.`
      */
    ["com.lovenotes.setting.account.delete.success-description-2"](): string;
    /**
      * `Your personal information`
      */
    ["com.lovenotes.setting.account.message"](): string;
    /**
      * `Sync with LoveNotes Cloud`
      */
    ["com.lovenotes.setting.sign.message"](): string;
    /**
      * `Securely sign out of your account.`
      */
    ["com.lovenotes.setting.sign.out.message"](): string;
    /**
      * `General`
      */
    ["com.lovenotes.settingSidebar.settings.general"](): string;
    /**
      * `Workspace`
      */
    ["com.lovenotes.settingSidebar.settings.workspace"](): string;
    /**
      * `Settings`
      */
    ["com.lovenotes.settingSidebar.title"](): string;
    /**
      * `Appearance`
      */
    ["com.lovenotes.settings.appearance"](): string;
    /**
      * `Customise the appearance of the client.`
      */
    ["com.lovenotes.settings.appearance.border-style-description"](): string;
    /**
      * `Customise your date style.`
      */
    ["com.lovenotes.settings.appearance.date-format-description"](): string;
    /**
      * `Maximum display of content within a doc.`
      */
    ["com.lovenotes.settings.appearance.full-width-description"](): string;
    /**
      * `Select the language for the interface.`
      */
    ["com.lovenotes.settings.appearance.language-description"](): string;
    /**
      * `By default, the week starts on Sunday.`
      */
    ["com.lovenotes.settings.appearance.start-week-description"](): string;
    /**
      * `Customise appearance of Windows Client.`
      */
    ["com.lovenotes.settings.appearance.window-frame-description"](): string;
    /**
      * `Links`
      */
    ["com.lovenotes.setting.appearance.links"](): string;
    /**
      * `Open LoveNotes links`
      */
    ["com.lovenotes.setting.appearance.open-in-app"](): string;
    /**
      * `You can choose to open the link in the desktop app or directly in the browser.`
      */
    ["com.lovenotes.setting.appearance.open-in-app.hint"](): string;
    /**
      * `Ask me each time`
      */
    ["com.lovenotes.setting.appearance.open-in-app.always-ask"](): string;
    /**
      * `Open links in desktop app`
      */
    ["com.lovenotes.setting.appearance.open-in-app.open-in-desktop-app"](): string;
    /**
      * `Open links in browser`
      */
    ["com.lovenotes.setting.appearance.open-in-app.open-in-web"](): string;
    /**
      * `Open LoveNotes links`
      */
    ["com.lovenotes.setting.appearance.open-in-app.title"](): string;
    /**
      * `Open this doc in LoveNotes app`
      */
    ["com.lovenotes.open-in-app.card.title"](): string;
    /**
      * `Open in app`
      */
    ["com.lovenotes.open-in-app.card.button.open"](): string;
    /**
      * `Dismiss`
      */
    ["com.lovenotes.open-in-app.card.button.dismiss"](): string;
    /**
      * `Remember choice`
      */
    ["com.lovenotes.open-in-app.card.remember"](): string;
    /**
      * `Download desktop app`
      */
    ["com.lovenotes.open-in-app.card.download"](): string;
    /**
      * `If enabled, it will automatically check for new versions at regular intervals.`
      */
    ["com.lovenotes.settings.auto-check-description"](): string;
    /**
      * `If enabled, new versions will be automatically downloaded to the current device.`
      */
    ["com.lovenotes.settings.auto-download-description"](): string;
    /**
      * `Editor`
      */
    ["com.lovenotes.settings.editorSettings"](): string;
    /**
      * `Edgeless`
      */
    ["com.lovenotes.settings.editorSettings.edgeless"](): string;
    /**
      * `Connector`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter"](): string;
    /**
      * `Border style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.border-style"](): string;
    /**
      * `Border thickness`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.border-thickness"](): string;
    /**
      * `Color`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.color"](): string;
    /**
      * `Connector shape`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.connector-shape"](): string;
    /**
      * `Curve`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.connector-shape.curve"](): string;
    /**
      * `Elbowed`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.connector-shape.elbowed"](): string;
    /**
      * `Straight`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.connector-shape.straight"](): string;
    /**
      * `End endpoint`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.end-endpoint"](): string;
    /**
      * `Start endpoint`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.connecter.start-endpoint"](): string;
    /**
      * `Custom`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.custom"](): string;
    /**
      * `Mind Map`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.mind-map"](): string;
    /**
      * `Layout`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.mind-map.layout"](): string;
    /**
      * `Left`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.mind-map.layout.left"](): string;
    /**
      * `Radial`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.mind-map.layout.radial"](): string;
    /**
      * `Right`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.mind-map.layout.right"](): string;
    /**
      * `Note`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note"](): string;
    /**
      * `Background`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.background"](): string;
    /**
      * `Border style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.border"](): string;
    /**
      * `Border thickness`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.border-thickness"](): string;
    /**
      * `Dash`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.border.dash"](): string;
    /**
      * `None`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.border.none"](): string;
    /**
      * `Solid`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.border.solid"](): string;
    /**
      * `Corners`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.corners"](): string;
    /**
      * `Shadow style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.note.shadow"](): string;
    /**
      * `Pen`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.pen"](): string;
    /**
      * `Color`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.pen.color"](): string;
    /**
      * `Thickness`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.pen.thickness"](): string;
    /**
      * `Shape`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape"](): string;
    /**
      * `Border color`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.border-color"](): string;
    /**
      * `Border style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.border-style"](): string;
    /**
      * `Border thickness`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.border-thickness"](): string;
    /**
      * `Diamond`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.diamond"](): string;
    /**
      * `Ellipse`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.ellipse"](): string;
    /**
      * `Fill color`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.fill-color"](): string;
    /**
      * `Flow`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.flow"](): string;
    /**
      * `Font`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.font"](): string;
    /**
      * `Font size`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.font-size"](): string;
    /**
      * `Font style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.font-style"](): string;
    /**
      * `List`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.list"](): string;
    /**
      * `Rounded Rectangle`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.rounded-rectangle"](): string;
    /**
      * `Square`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.square"](): string;
    /**
      * `Text alignment`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.text-alignment"](): string;
    /**
      * `Text color`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.text-color"](): string;
    /**
      * `Triangle`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.shape.triangle"](): string;
    /**
      * `Frame`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.frame"](): string;
    /**
      * `Background`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.frame.background"](): string;
    /**
      * `Style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.style"](): string;
    /**
      * `General`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.style.general"](): string;
    /**
      * `Scribbled`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.style.scribbled"](): string;
    /**
      * `Text`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text"](): string;
    /**
      * `Alignment`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.alignment"](): string;
    /**
      * `Center`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.alignment.center"](): string;
    /**
      * `Left`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.alignment.left"](): string;
    /**
      * `Right`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.alignment.right"](): string;
    /**
      * `Text color`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.color"](): string;
    /**
      * `Font`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.font"](): string;
    /**
      * `Font family`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.font-family"](): string;
    /**
      * `Font size`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.font-size"](): string;
    /**
      * `Font style`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.font-style"](): string;
    /**
      * `Font weight`
      */
    ["com.lovenotes.settings.editorSettings.edgeless.text.font-weight"](): string;
    /**
      * `General`
      */
    ["com.lovenotes.settings.editorSettings.general"](): string;
    /**
      * `Enable the powerful AI assistant, LoveNotes AI.`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.description"](): string;
    /**
      * `Disable AI and Reload`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.disable.confirm"](): string;
    /**
      * `Are you sure you want to disable AI? We value your productivity and our AI can enhance it. Please think again!`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.disable.description"](): string;
    /**
      * `Disable AI?`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.disable.title"](): string;
    /**
      * `Enable AI and Reload`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.enable.confirm"](): string;
    /**
      * `Do you want to enable AI? Our AI assistant is ready to enhance your productivity and provide smart assistance. Let's get started! We need reload page to make this change.`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.enable.description"](): string;
    /**
      * `Enable AI?`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.enable.title"](): string;
    /**
      * `LoveNotes AI`
      */
    ["com.lovenotes.settings.editorSettings.general.ai.title"](): string;
    /**
      * `Set a default programming language.`
      */
    ["com.lovenotes.settings.editorSettings.general.default-code-block.language.description"](): string;
    /**
      * `Code blocks default language`
      */
    ["com.lovenotes.settings.editorSettings.general.default-code-block.language.title"](): string;
    /**
      * `Encapsulate code snippets for better readability.`
      */
    ["com.lovenotes.settings.editorSettings.general.default-code-block.wrap.description"](): string;
    /**
      * `Wrap code in code blocks`
      */
    ["com.lovenotes.settings.editorSettings.general.default-code-block.wrap.title"](): string;
    /**
      * `Default mode for new doc.`
      */
    ["com.lovenotes.settings.editorSettings.general.default-new-doc.description"](): string;
    /**
      * `New doc default mode`
      */
    ["com.lovenotes.settings.editorSettings.general.default-new-doc.title"](): string;
    /**
      * `Customize your text experience.`
      */
    ["com.lovenotes.settings.editorSettings.general.font-family.custom.description"](): string;
    /**
      * `Custom font family`
      */
    ["com.lovenotes.settings.editorSettings.general.font-family.custom.title"](): string;
    /**
      * `Choose your editor's font family.`
      */
    ["com.lovenotes.settings.editorSettings.general.font-family.description"](): string;
    /**
      * `Font family`
      */
    ["com.lovenotes.settings.editorSettings.general.font-family.title"](): string;
    /**
      * `Adjust the base font size for better readability.`
      */
    ["com.lovenotes.settings.editorSettings.general.font-size.description"](): string;
    /**
      * `Font size`
      */
    ["com.lovenotes.settings.editorSettings.general.font-size.title"](): string;
    /**
      * `Automatically detect and correct spelling errors.`
      */
    ["com.lovenotes.settings.editorSettings.general.spell-check.description"](): string;
    /**
      * `Spell check`
      */
    ["com.lovenotes.settings.editorSettings.general.spell-check.title"](): string;
    /**
      * `Page`
      */
    ["com.lovenotes.settings.editorSettings.page"](): string;
    /**
      * `Middle click paste`
      */
    ["com.lovenotes.settings.editorSettings.general.middle-click-paste.title"](): string;
    /**
      * `Enable default middle click paste behavior on Linux.`
      */
    ["com.lovenotes.settings.editorSettings.general.middle-click-paste.description"](): string;
    /**
      * `Display bi-directional links on the doc.`
      */
    ["com.lovenotes.settings.editorSettings.page.display-bi-link.description"](): string;
    /**
      * `Display bi-directional links`
      */
    ["com.lovenotes.settings.editorSettings.page.display-bi-link.title"](): string;
    /**
      * `Display document information on the doc.`
      */
    ["com.lovenotes.settings.editorSettings.page.display-doc-info.description"](): string;
    /**
      * `Display doc info`
      */
    ["com.lovenotes.settings.editorSettings.page.display-doc-info.title"](): string;
    /**
      * `Maximise display of content within a page.`
      */
    ["com.lovenotes.settings.editorSettings.page.full-width.description"](): string;
    /**
      * `Full width layout`
      */
    ["com.lovenotes.settings.editorSettings.page.full-width.title"](): string;
    /**
      * `Default page width`
      */
    ["com.lovenotes.settings.editorSettings.page.default-page-width.title"](): string;
    /**
      * `Set default width for new pages, individual pages can override.`
      */
    ["com.lovenotes.settings.editorSettings.page.default-page-width.description"](): string;
    /**
      * `Standard`
      */
    ["com.lovenotes.settings.editorSettings.page.default-page-width.standard"](): string;
    /**
      * `Full width`
      */
    ["com.lovenotes.settings.editorSettings.page.default-page-width.full-width"](): string;
    /**
      * `Set edgeless default color scheme.`
      */
    ["com.lovenotes.settings.editorSettings.page.edgeless-default-theme.description"](): string;
    /**
      * `Edgeless default theme`
      */
    ["com.lovenotes.settings.editorSettings.page.edgeless-default-theme.title"](): string;
    /**
      * `Specified by current color mode`
      */
    ["com.lovenotes.settings.editorSettings.page.edgeless-default-theme.specified"](): string;
    /**
      * `Scroll wheel zoom`
      */
    ["com.lovenotes.settings.editorSettings.page.edgeless-scroll-wheel-zoom.title"](): string;
    /**
      * `Use the scroll wheel to zoom in and out.`
      */
    ["com.lovenotes.settings.editorSettings.page.edgeless-scroll-wheel-zoom.description"](): string;
    /**
      * `Preferences`
      */
    ["com.lovenotes.settings.editorSettings.preferences"](): string;
    /**
      * `You can export the entire preferences data for backup, and the exported data can be re-imported.`
      */
    ["com.lovenotes.settings.editorSettings.preferences.export.description"](): string;
    /**
      * `Export Settings`
      */
    ["com.lovenotes.settings.editorSettings.preferences.export.title"](): string;
    /**
      * `You can import previously exported preferences data for restoration.`
      */
    ["com.lovenotes.settings.editorSettings.preferences.import.description"](): string;
    /**
      * `Import Settings`
      */
    ["com.lovenotes.settings.editorSettings.preferences.import.title"](): string;
    /**
      * `Configure your own editor`
      */
    ["com.lovenotes.settings.editorSettings.subtitle"](): string;
    /**
      * `Editor settings`
      */
    ["com.lovenotes.settings.editorSettings.title"](): string;
    /**
      * `Ask me every time`
      */
    ["com.lovenotes.settings.editorSettings.ask-me-every-time"](): string;
    /**
      * `Email`
      */
    ["com.lovenotes.settings.email"](): string;
    /**
      * `Change email`
      */
    ["com.lovenotes.settings.email.action"](): string;
    /**
      * `Change email`
      */
    ["com.lovenotes.settings.email.action.change"](): string;
    /**
      * `Verify email`
      */
    ["com.lovenotes.settings.email.action.verify"](): string;
    /**
      * `Enable LoveNotes Cloud to collaborate with others`
      */
    ["com.lovenotes.settings.member-tooltip"](): string;
    /**
      * `Loading member list...`
      */
    ["com.lovenotes.settings.member.loading"](): string;
    /**
      * `Noise background on the sidebar`
      */
    ["com.lovenotes.settings.noise-style"](): string;
    /**
      * `Use background noise effect on the sidebar.`
      */
    ["com.lovenotes.settings.noise-style-description"](): string;
    /**
      * `Password`
      */
    ["com.lovenotes.settings.password"](): string;
    /**
      * `Change password`
      */
    ["com.lovenotes.settings.password.action.change"](): string;
    /**
      * `Set password`
      */
    ["com.lovenotes.settings.password.action.set"](): string;
    /**
      * `Set a password to sign in to your account`
      */
    ["com.lovenotes.settings.password.message"](): string;
    /**
      * `My profile`
      */
    ["com.lovenotes.settings.profile"](): string;
    /**
      * `Your account profile will be displayed to everyone.`
      */
    ["com.lovenotes.settings.profile.message"](): string;
    /**
      * `Display name`
      */
    ["com.lovenotes.settings.profile.name"](): string;
    /**
      * `Input account name`
      */
    ["com.lovenotes.settings.profile.placeholder"](): string;
    /**
      * `Remove workspace`
      */
    ["com.lovenotes.settings.remove-workspace"](): string;
    /**
      * `Remove workspace from this device and optionally delete all data.`
      */
    ["com.lovenotes.settings.remove-workspace-description"](): string;
    /**
      * `Sign in / Sign up`
      */
    ["com.lovenotes.settings.sign"](): string;
    /**
      * `Need more customization options? Tell us in the community.`
      */
    ["com.lovenotes.settings.suggestion"](): string;
    /**
      * `Translucent UI on the sidebar`
      */
    ["com.lovenotes.settings.translucent-style"](): string;
    /**
      * `Use transparency effect on the sidebar.`
      */
    ["com.lovenotes.settings.translucent-style-description"](): string;
    /**
      * `Meetings`
      */
    ["com.lovenotes.settings.meetings"](): string;
    /**
      * `Beyond Recording
    Your AI Meeting Assistant is Here`
      */
    ["com.lovenotes.settings.meetings.setting.welcome"](): string;
    /**
      * `Native Audio Capture, No Bots Required - Direct from Your Mac to Meeting Intelligence.`
      */
    ["com.lovenotes.settings.meetings.setting.prompt"](): string;
    /**
      * `Enable meeting notes`
      */
    ["com.lovenotes.settings.meetings.enable.title"](): string;
    /**
      * `Meeting recording`
      */
    ["com.lovenotes.settings.meetings.record.header"](): string;
    /**
      * `When meeting starts`
      */
    ["com.lovenotes.settings.meetings.record.recording-mode"](): string;
    /**
      * `Choose the behavior when the meeting starts.`
      */
    ["com.lovenotes.settings.meetings.record.recording-mode.description"](): string;
    /**
      * `Open saved recordings`
      */
    ["com.lovenotes.settings.meetings.record.open-saved-file"](): string;
    /**
      * `Open the locally stored recording files.`
      */
    ["com.lovenotes.settings.meetings.record.open-saved-file.description"](): string;
    /**
      * `Transcription with AI`
      */
    ["com.lovenotes.settings.meetings.transcription.header"](): string;
    /**
      * `AI auto summary`
      */
    ["com.lovenotes.settings.meetings.transcription.auto-summary"](): string;
    /**
      * `Automatically generate a summary of the meeting notes.`
      */
    ["com.lovenotes.settings.meetings.transcription.auto-summary.description"](): string;
    /**
      * `AI auto todo list`
      */
    ["com.lovenotes.settings.meetings.transcription.auto-todo"](): string;
    /**
      * `Automatically generate a todo list of the meeting notes.`
      */
    ["com.lovenotes.settings.meetings.transcription.auto-todo.description"](): string;
    /**
      * `Privacy & Security`
      */
    ["com.lovenotes.settings.meetings.privacy.header"](): string;
    /**
      * `Screen & System audio recording`
      */
    ["com.lovenotes.settings.meetings.privacy.screen-system-audio-recording"](): string;
    /**
      * `The Meeting feature requires permission to be used.`
      */
    ["com.lovenotes.settings.meetings.privacy.screen-system-audio-recording.description"](): string;
    /**
      * `Click to allow`
      */
    ["com.lovenotes.settings.meetings.privacy.screen-system-audio-recording.permission-setting"](): string;
    /**
      * `Microphone`
      */
    ["com.lovenotes.settings.meetings.privacy.microphone"](): string;
    /**
      * `The Meeting feature requires permission to be used.`
      */
    ["com.lovenotes.settings.meetings.privacy.microphone.description"](): string;
    /**
      * `Click to allow`
      */
    ["com.lovenotes.settings.meetings.privacy.microphone.permission-setting"](): string;
    /**
      * `Permission issues`
      */
    ["com.lovenotes.settings.meetings.privacy.issues"](): string;
    /**
      * `Permissions are granted but the status isn't updated? Restart the app to refresh permissions.`
      */
    ["com.lovenotes.settings.meetings.privacy.issues.description"](): string;
    /**
      * `Restart App`
      */
    ["com.lovenotes.settings.meetings.privacy.issues.restart"](): string;
    /**
      * `Do nothing`
      */
    ["com.lovenotes.settings.meetings.record.recording-mode.none"](): string;
    /**
      * `Auto start recording`
      */
    ["com.lovenotes.settings.meetings.record.recording-mode.auto-start"](): string;
    /**
      * `Show a recording prompt`
      */
    ["com.lovenotes.settings.meetings.record.recording-mode.prompt"](): string;
    /**
      * `Screen & System Audio Recording`
      */
    ["com.lovenotes.settings.meetings.record.permission-modal.title"](): string;
    /**
      * `LoveNotes will generate meeting notes by recording your meetings. Authorization to "Screen & System Audio Recording" is necessary.`
      */
    ["com.lovenotes.settings.meetings.record.permission-modal.description"](): string;
    /**
      * `Save meeting's recording block to`
      */
    ["com.lovenotes.settings.meetings.record.save-mode"](): string;
    /**
      * `Open System Settings`
      */
    ["com.lovenotes.settings.meetings.record.permission-modal.open-setting"](): string;
    /**
      * `Workspace`
      */
    ["com.lovenotes.settings.workspace"](): string;
    /**
      * `You can view current workspace's information here.`
      */
    ["com.lovenotes.settings.workspace.description"](): string;
    /**
      * `Experimental features`
      */
    ["com.lovenotes.settings.workspace.experimental-features"](): string;
    /**
      * `Get started`
      */
    ["com.lovenotes.settings.workspace.experimental-features.get-started"](): string;
    /**
      * `Experimental features`
      */
    ["com.lovenotes.settings.workspace.experimental-features.header.plugins"](): string;
    /**
      * `Some features available for early access`
      */
    ["com.lovenotes.settings.workspace.experimental-features.header.subtitle"](): string;
    /**
      * `I am aware of the risks, and I am willing to continue to use it.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.prompt-disclaimer"](): string;
    /**
      * `Do you want to use the plugin system that is in an experimental stage?`
      */
    ["com.lovenotes.settings.workspace.experimental-features.prompt-header"](): string;
    /**
      * `You are about to enable an experimental feature. This feature is still in development and may contain errors or behave unpredictably. Please proceed with caution and at your own risk.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.prompt-warning"](): string;
    /**
      * `WARNING MESSAGE`
      */
    ["com.lovenotes.settings.workspace.experimental-features.prompt-warning-title"](): string;
    /**
      * `Enable AI`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai.name"](): string;
    /**
      * `Enable or disable ALL AI features.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai.description"](): string;
    /**
      * `Enable AI Network Search`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-network-search.name"](): string;
    /**
      * `Enable or disable AI Network Search feature.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-network-search.description"](): string;
    /**
      * `Enable AI Model Switch`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-model-switch.name"](): string;
    /**
      * `Enable or disable AI model switch feature.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-model-switch.description"](): string;
    /**
      * `Enable AI Playground`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-playground.name"](): string;
    /**
      * `Enable or disable AI playground feature.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-playground.description"](): string;
    /**
      * `Database Full Width`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-database-full-width.name"](): string;
    /**
      * `The database will be displayed in full-width mode.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-database-full-width.description"](): string;
    /**
      * `Database Attachment Note`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-database-attachment-note.name"](): string;
    /**
      * `Allows adding notes to database attachments.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-database-attachment-note.description"](): string;
    /**
      * `Todo Block Query`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-block-query.name"](): string;
    /**
      * `Enables querying of todo blocks.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-block-query.description"](): string;
    /**
      * `Synced Doc Block`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-synced-doc-block.name"](): string;
    /**
      * `Enables syncing of doc blocks.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-synced-doc-block.description"](): string;
    /**
      * `Edgeless Text`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-edgeless-text.name"](): string;
    /**
      * `Enables edgeless text blocks.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-edgeless-text.description"](): string;
    /**
      * `Color Picker`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-color-picker.name"](): string;
    /**
      * `Enables color picker blocks.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-color-picker.description"](): string;
    /**
      * `AI Chat Block`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-chat-block.name"](): string;
    /**
      * `Enables AI chat blocks.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-chat-block.description"](): string;
    /**
      * `AI Onboarding`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-onboarding.name"](): string;
    /**
      * `Enables AI onboarding.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-onboarding.description"](): string;
    /**
      * `Mind Map Import`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mind-map-import.name"](): string;
    /**
      * `Enables mind map import.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mind-map-import.description"](): string;
    /**
      * `Block Meta`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-block-meta.name"](): string;
    /**
      * `Once enabled, all blocks will have created time, updated time, created by and updated by.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-block-meta.description"](): string;
    /**
      * `Callout`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-callout.name"](): string;
    /**
      * `Let your words stand out. This also include the callout in the transcription block.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-callout.description"](): string;
    /**
      * `Embed Iframe Block`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-embed-iframe-block.name"](): string;
    /**
      * `Enables Embed Iframe Block.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-embed-iframe-block.description"](): string;
    /**
      * `Emoji Folder Icon`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-emoji-folder-icon.name"](): string;
    /**
      * `Once enabled, you can use an emoji as the folder icon. When the first character of the folder name is an emoji, it will be extracted and used as its icon.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-emoji-folder-icon.description"](): string;
    /**
      * `Emoji Doc Icon`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-emoji-doc-icon.name"](): string;
    /**
      * `Once enabled, you can use an emoji as the doc icon. When the first character of the doc name is an emoji, it will be extracted and used as its icon.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-emoji-doc-icon.description"](): string;
    /**
      * `Editor Settings`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-editor-settings.name"](): string;
    /**
      * `Enables editor settings.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-editor-settings.description"](): string;
    /**
      * `Theme Editor`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-theme-editor.name"](): string;
    /**
      * `Enables theme editor.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-theme-editor.description"](): string;
    /**
      * `Allow create local workspace`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-local-workspace.name"](): string;
    /**
      * `Allow create local workspace`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-local-workspace.description"](): string;
    /**
      * `Advanced block visibility control`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-advanced-block-visibility.name"](): string;
    /**
      * `To provide detailed control over which edgeless blocks are visible in page mode.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-advanced-block-visibility.description"](): string;
    /**
      * `Mobile Keyboard Toolbar`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mobile-keyboard-toolbar.name"](): string;
    /**
      * `Enables the mobile keyboard toolbar.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mobile-keyboard-toolbar.description"](): string;
    /**
      * `Mobile Linked Doc Widget`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mobile-linked-doc-menu.name"](): string;
    /**
      * `Enables the mobile linked doc menu.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mobile-linked-doc-menu.description"](): string;
    /**
      * `Enable Snapshot Import Export`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-snapshot-import-export.name"](): string;
    /**
      * `Once enabled, users can import and export blocksuite snapshots.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-snapshot-import-export.description"](): string;
    /**
      * `Enable Edgeless Editing`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mobile-edgeless-editing.name"](): string;
    /**
      * `Once enabled, users can edit edgeless canvas.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-mobile-edgeless-editing.description"](): string;
    /**
      * `PDF embed preview`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-pdf-embed-preview.name"](): string;
    /**
      * `Once enabled, you can preview PDF in embed view.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-pdf-embed-preview.description"](): string;
    /**
      * `Audio block`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-audio-block.name"](): string;
    /**
      * `Audio block allows you to play audio files globally and add notes to them.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-audio-block.description"](): string;
    /**
      * `Meetings`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-meetings.name"](): string;
    /**
      * `Meetings allows you to record and transcribe meetings. Don't forget to enable it in LoveNotes settings.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-meetings.description"](): string;
    /**
      * `Editor RTL`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-editor-rtl.name"](): string;
    /**
      * `Once enabled, the editor will be displayed in RTL mode.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-editor-rtl.description"](): string;
    /**
      * `Edgeless scribbled style`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-edgeless-scribbled-style.name"](): string;
    /**
      * `Once enabled, you can use scribbled style in edgeless mode.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-edgeless-scribbled-style.description"](): string;
    /**
      * `Database block table view virtual scroll`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-table-virtual-scroll.name"](): string;
    /**
      * `Once enabled, switch table view to virtual scroll mode in Database Block.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-table-virtual-scroll.description"](): string;
    /**
      * `Code block HTML preview`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-code-block-html-preview.name"](): string;
    /**
      * `Once enabled, you can preview HTML in code block.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-code-block-html-preview.description"](): string;
    /**
      * `Adapter Panel`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-adapter-panel.name"](): string;
    /**
      * `Once enabled, you can preview adapter export content in the right side bar.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-adapter-panel.description"](): string;
    /**
      * `Send detailed object information to AI`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-send-detailed-object.name"](): string;
    /**
      * `When toggled off, every time you choose "Continue with AI", AI only got a screenshot.`
      */
    ["com.lovenotes.settings.workspace.experimental-features.enable-ai-send-detailed-object.description"](): string;
    /**
      * `Only an owner can edit the workspace avatar and name. Changes will be shown for everyone.`
      */
    ["com.lovenotes.settings.workspace.not-owner"](): string;
    /**
      * `Preference`
      */
    ["com.lovenotes.settings.workspace.preferences"](): string;
    /**
      * `Team's Billing`
      */
    ["com.lovenotes.settings.workspace.billing"](): string;
    /**
      * `Team Workspace`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace"](): string;
    /**
      * `Your workspace is in a free trail period.`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace.description.free-trail"](): string;
    /**
      * `Your workspace is billed annually.`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace.description.billed.annually"](): string;
    /**
      * `Your workspace is billed monthly.`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace.description.billed.monthly"](): string;
    /**
      * `Your subscription will end on {{date}}`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace.not-renewed"](options: {
        readonly date: string;
    }): string;
    /**
      * `Next billing date: {{date}}`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace.next-billing-date"](options: {
        readonly date: string;
    }): string;
    /**
      * `Cancel Plan`
      */
    ["com.lovenotes.settings.workspace.billing.team-workspace.cancel-plan"](): string;
    /**
      * `License`
      */
    ["com.lovenotes.settings.workspace.license"](): string;
    /**
      * `Manage license information and invoices for the self host team workspace.`
      */
    ["com.lovenotes.settings.workspace.license.description"](): string;
    /**
      * `Get teams plan for your self hosted workspace.`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.title"](): string;
    /**
      * `Need more seats? Best for scalable teams.`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.subtitle"](): string;
    /**
      * `Everything in Self Hosted FOSS`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.g1"](): string;
    /**
      * `{{initialQuota}} initial storage + {{quotaPerSeat}} per seat`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.g2"](options: Readonly<{
        initialQuota: string;
        quotaPerSeat: string;
    }>): string;
    /**
      * `{{quota}} of maximum file size`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.g3"](options: {
        readonly quota: string;
    }): string;
    /**
      * `Unlimited team members (10+ seats)`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.g4"](): string;
    /**
      * `Multiple admin roles`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.g5"](): string;
    /**
      * `Priority customer support`
      */
    ["com.lovenotes.settings.workspace.license.benefit.team.g6"](): string;
    /**
      * `Lean more`
      */
    ["com.lovenotes.settings.workspace.license.lean-more"](): string;
    /**
      * `Selfhosted workspace`
      */
    ["com.lovenotes.settings.workspace.license.self-host"](): string;
    /**
      * `Self-host Team Workspace`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team"](): string;
    /**
      * `This license will expire on {{expirationDate}}, with {{leftDays}} days remaining.`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.team.description"](options: Readonly<{
        expirationDate: string;
        leftDays: string;
    }>): string;
    /**
      * `Basic version: {{memberCount}} seats. For more, purchase or use activation key.`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.free.description"](options: {
        readonly memberCount: string;
    }): string;
    /**
      * `Seats`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.seats"](): string;
    /**
      * `Use purchased key`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.use-purchased-key"](): string;
    /**
      * `Upload license file`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file"](): string;
    /**
      * `Upload license file locally and verify the license information.`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.description"](): string;
    /**
      * `To purchase a license:`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.tips.title"](): string;
    /**
      * `Workspace id`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.tips.workspace-id"](): string;
    /**
      * `Click to upload`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.click-to-upload"](): string;
    /**
      * `Activation failed`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.failed"](): string;
    /**
      * `Activation Success`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.success.title"](): string;
    /**
      * `License has been successfully applied`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.success.description"](): string;
    /**
      * `If you encounter any issues, contact support@toeverything.info.`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.help"](): string;
    /**
      * `Deactivate`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.deactivate-license"](): string;
    /**
      * `Replace your license file`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.replace-license.title"](): string;
    /**
      * `Replace the existing license file with a new, updated version.`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.replace-license.description"](): string;
    /**
      * `Upload license file`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.replace-license.upload"](): string;
    /**
      * `Buy more seat`
      */
    ["com.lovenotes.settings.workspace.license.buy-more-seat"](): string;
    /**
      * `Activate License`
      */
    ["com.lovenotes.settings.workspace.license.activate-modal.title"](): string;
    /**
      * `Enter license key to activate this self host workspace.`
      */
    ["com.lovenotes.settings.workspace.license.activate-modal.description"](): string;
    /**
      * `License activated successfully.`
      */
    ["com.lovenotes.settings.workspace.license.activate-success"](): string;
    /**
      * `Confirm deactivation?`
      */
    ["com.lovenotes.settings.workspace.license.deactivate-modal.title"](): string;
    /**
      * `After deactivation, you will need to upload a new license to continue using team feature`
      */
    ["com.lovenotes.settings.workspace.license.deactivate-modal.description-license"](): string;
    /**
      * `Manage Payment`
      */
    ["com.lovenotes.settings.workspace.license.deactivate-modal.manage-payment"](): string;
    /**
      * `License deactivated successfully.`
      */
    ["com.lovenotes.settings.workspace.license.deactivate-success"](): string;
    /**
      * `Local`
      */
    ["com.lovenotes.settings.workspace.state.local"](): string;
    /**
      * `Sync with LoveNotes Cloud`
      */
    ["com.lovenotes.settings.workspace.state.sync-lovenotes-cloud"](): string;
    /**
      * `Self-Hosted Server`
      */
    ["com.lovenotes.settings.workspace.state.self-hosted"](): string;
    /**
      * `Joined Workspace`
      */
    ["com.lovenotes.settings.workspace.state.joined"](): string;
    /**
      * `Available Offline`
      */
    ["com.lovenotes.settings.workspace.state.available-offline"](): string;
    /**
      * `Published to Web`
      */
    ["com.lovenotes.settings.workspace.state.published"](): string;
    /**
      * `Team Workspace`
      */
    ["com.lovenotes.settings.workspace.state.team"](): string;
    /**
      * `Properties`
      */
    ["com.lovenotes.settings.workspace.properties"](): string;
    /**
      * `Add property`
      */
    ["com.lovenotes.settings.workspace.properties.add_property"](): string;
    /**
      * `All`
      */
    ["com.lovenotes.settings.workspace.properties.all"](): string;
    /**
      * `Delete property`
      */
    ["com.lovenotes.settings.workspace.properties.delete-property"](): string;
    /**
      * `Edit property`
      */
    ["com.lovenotes.settings.workspace.properties.edit-property"](): string;
    /**
      * `General properties`
      */
    ["com.lovenotes.settings.workspace.properties.general-properties"](): string;
    /**
      * `Properties`
      */
    ["com.lovenotes.settings.workspace.properties.header.title"](): string;
    /**
      * `In use`
      */
    ["com.lovenotes.settings.workspace.properties.in-use"](): string;
    /**
      * `Readonly properties`
      */
    ["com.lovenotes.settings.workspace.properties.readonly-properties"](): string;
    /**
      * `Required properties`
      */
    ["com.lovenotes.settings.workspace.properties.required-properties"](): string;
    /**
      * `Set as required property`
      */
    ["com.lovenotes.settings.workspace.properties.set-as-required"](): string;
    /**
      * `Unused`
      */
    ["com.lovenotes.settings.workspace.properties.unused"](): string;
    /**
      * `You can view current workspace's storage and files here.`
      */
    ["com.lovenotes.settings.workspace.storage.subtitle"](): string;
    /**
      * `Enable LoveNotes Cloud to publish this workspace`
      */
    ["com.lovenotes.settings.workspace.publish-tooltip"](): string;
    /**
      * `Sharing`
      */
    ["com.lovenotes.settings.workspace.sharing.title"](): string;
    /**
      * `Allow URL unfurling by Slack & other social apps, even if a doc is only accessible by workspace members.`
      */
    ["com.lovenotes.settings.workspace.sharing.url-preview.description"](): string;
    /**
      * `Always enable url preview`
      */
    ["com.lovenotes.settings.workspace.sharing.url-preview.title"](): string;
    /**
      * `Control whether pages in this workspace can be shared publicly. Turn off to block new shares and external access for existing shares.`
      */
    ["com.lovenotes.settings.workspace.sharing.workspace-sharing.description"](): string;
    /**
      * `Allow workspace page sharing`
      */
    ["com.lovenotes.settings.workspace.sharing.workspace-sharing.title"](): string;
    /**
      * `LoveNotes AI`
      */
    ["com.lovenotes.settings.workspace.lovenotes-ai.title"](): string;
    /**
      * `Allow LoveNotes AI Assistant`
      */
    ["com.lovenotes.settings.workspace.lovenotes-ai.label"](): string;
    /**
      * `Allow workspace members to use LoveNotes AI features. This setting doesn't affect billing. Workspace members use LoveNotes AI through their personal accounts.`
      */
    ["com.lovenotes.settings.workspace.lovenotes-ai.description"](): string;
    /**
      * `Archived workspaces`
      */
    ["com.lovenotes.settings.workspace.backup"](): string;
    /**
      * `Manage archived local workspace files`
      */
    ["com.lovenotes.settings.workspace.backup.subtitle"](): string;
    /**
      * `No archived workspace files found`
      */
    ["com.lovenotes.settings.workspace.backup.empty"](): string;
    /**
      * `Delete archived workspace`
      */
    ["com.lovenotes.settings.workspace.backup.delete"](): string;
    /**
      * `Are you sure you want to delete this workspace. This action cannot be undone. Make sure you no longer need them before proceeding.`
      */
    ["com.lovenotes.settings.workspace.backup.delete.warning"](): string;
    /**
      * `Workspace backup deleted successfully`
      */
    ["com.lovenotes.settings.workspace.backup.delete.success"](): string;
    /**
      * `Workspace enabled successfully`
      */
    ["com.lovenotes.settings.workspace.backup.import.success"](): string;
    /**
      * `Enable local workspace`
      */
    ["com.lovenotes.settings.workspace.backup.import"](): string;
    /**
      * `Open`
      */
    ["com.lovenotes.settings.workspace.backup.import.success.action"](): string;
    /**
      * `Deleted on {{date}} at {{time}}`
      */
    ["com.lovenotes.settings.workspace.backup.delete-at"](options: Readonly<{
        date: string;
        time: string;
    }>): string;
    /**
      * `Indexer & Embedding`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.title"](): string;
    /**
      * `Manage LoveNotes indexing and LoveNotes AI Embedding for local content processing`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.description"](): string;
    /**
      * `Embedding`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.title"](): string;
    /**
      * `Embedding allows AI to retrieve your content. If the indexer uses local settings, it may affect some of the results of the Embedding.`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.description"](): string;
    /**
      * `Only the workspace owner can enable Workspace Embedding.`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.disabled-tooltip"](): string;
    /**
      * `Select doc`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.select-doc"](): string;
    /**
      * `Upload file`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.upload-file"](): string;
    /**
      * `Workspace Embedding`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.switch.title"](): string;
    /**
      * `AI can call files embedded in the workspace.`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.switch.description"](): string;
    /**
      * `Failed to update workspace doc embedding enabled`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.switch.error"](): string;
    /**
      * `Failed to remove attachment from embedding`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.remove-attachment.error"](): string;
    /**
      * `Failed to update ignored docs`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.update-ignored-docs.error"](): string;
    /**
      * `Embedding progress`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.progress.title"](): string;
    /**
      * `Syncing`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.progress.syncing"](): string;
    /**
      * `Synced`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.progress.synced"](): string;
    /**
      * `Loading sync status...`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.progress.loading-sync-status"](): string;
    /**
      * `Ignore Docs`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.ignore-docs.title"](): string;
    /**
      * `The Ignored docs will not be embedded into the current workspace.`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.ignore-docs.description"](): string;
    /**
      * `Additional attachments`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.additional-attachments.title"](): string;
    /**
      * `The uploaded file will be embedded in the current workspace.`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.additional-attachments.description"](): string;
    /**
      * `Remove the attachment from embedding?`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.additional-attachments.remove-attachment.title"](): string;
    /**
      * `Attachment will be removed. AI will not continue to extract content from this attachment.`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.additional-attachments.remove-attachment.description"](): string;
    /**
      * `Delete File`
      */
    ["com.lovenotes.settings.workspace.indexer-embedding.embedding.additional-attachments.remove-attachment.tooltip"](): string;
    /**
      * `Sharing doc requires LoveNotes Cloud.`
      */
    ["com.lovenotes.share-menu.EnableCloudDescription"](): string;
    /**
      * `Share mode`
      */
    ["com.lovenotes.share-menu.ShareMode"](): string;
    /**
      * `Share doc`
      */
    ["com.lovenotes.share-menu.SharePage"](): string;
    /**
      * `General access`
      */
    ["com.lovenotes.share-menu.generalAccess"](): string;
    /**
      * `Share via export`
      */
    ["com.lovenotes.share-menu.ShareViaExport"](): string;
    /**
      * `Download a static copy of your doc to share with others`
      */
    ["com.lovenotes.share-menu.ShareViaExportDescription"](): string;
    /**
      * `Print a paper copy`
      */
    ["com.lovenotes.share-menu.ShareViaPrintDescription"](): string;
    /**
      * `Share with link`
      */
    ["com.lovenotes.share-menu.ShareWithLink"](): string;
    /**
      * `Create a link you can easily share with anyone. The visitors will open your doc in the form od a document`
      */
    ["com.lovenotes.share-menu.ShareWithLinkDescription"](): string;
    /**
      * `Shared doc`
      */
    ["com.lovenotes.share-menu.SharedPage"](): string;
    /**
      * `Copy Link`
      */
    ["com.lovenotes.share-menu.copy"](): string;
    /**
      * `Copy private link`
      */
    ["com.lovenotes.share-menu.copy-private-link"](): string;
    /**
      * `Copy Link to Selected Block`
      */
    ["com.lovenotes.share-menu.copy.block"](): string;
    /**
      * `Copy Link to Edgeless Mode`
      */
    ["com.lovenotes.share-menu.copy.edgeless"](): string;
    /**
      * `Copy Link to Selected Frame`
      */
    ["com.lovenotes.share-menu.copy.frame"](): string;
    /**
      * `Copy Link to Page Mode`
      */
    ["com.lovenotes.share-menu.copy.page"](): string;
    /**
      * `You can share this document with link.`
      */
    ["com.lovenotes.share-menu.create-public-link.notification.success.message"](): string;
    /**
      * `Public link created`
      */
    ["com.lovenotes.share-menu.create-public-link.notification.success.title"](): string;
    /**
      * `Please try again later.`
      */
    ["com.lovenotes.share-menu.disable-publish-link.notification.fail.message"](): string;
    /**
      * `Failed to disable public link`
      */
    ["com.lovenotes.share-menu.disable-publish-link.notification.fail.title"](): string;
    /**
      * `This doc is no longer shared publicly.`
      */
    ["com.lovenotes.share-menu.disable-publish-link.notification.success.message"](): string;
    /**
      * `Public link disabled`
      */
    ["com.lovenotes.share-menu.disable-publish-link.notification.success.title"](): string;
    /**
      * `Manage workspace members`
      */
    ["com.lovenotes.share-menu.navigate.workspace"](): string;
    /**
      * `Anyone with the link`
      */
    ["com.lovenotes.share-menu.option.link.label"](): string;
    /**
      * `No access`
      */
    ["com.lovenotes.share-menu.option.link.no-access"](): string;
    /**
      * `Only workspace members can access this link`
      */
    ["com.lovenotes.share-menu.option.link.no-access.description"](): string;
    /**
      * `Read only`
      */
    ["com.lovenotes.share-menu.option.link.readonly"](): string;
    /**
      * `Anyone can access this link`
      */
    ["com.lovenotes.share-menu.option.link.readonly.description"](): string;
    /**
      * `Sharing for this workspace is turned off. Please contact an admin to enable it.`
      */
    ["com.lovenotes.share-menu.workspace-sharing.disabled.tooltip"](): string;
    /**
      * `Can manage`
      */
    ["com.lovenotes.share-menu.option.permission.can-manage"](): string;
    /**
      * `Can edit`
      */
    ["com.lovenotes.share-menu.option.permission.can-edit"](): string;
    /**
      * `Can read`
      */
    ["com.lovenotes.share-menu.option.permission.can-read"](): string;
    /**
      * `No access`
      */
    ["com.lovenotes.share-menu.option.permission.no-access"](): string;
    /**
      * `Members in workspace`
      */
    ["com.lovenotes.share-menu.option.permission.label"](): string;
    /**
      * `Workspace admins and owner automatically have Can manage permissions.`
      */
    ["com.lovenotes.share-menu.option.permission.tips"](): string;
    /**
      * `Publish to web`
      */
    ["com.lovenotes.share-menu.publish-to-web"](): string;
    /**
      * `Share privately`
      */
    ["com.lovenotes.share-menu.share-privately"](): string;
    /**
      * `Share`
      */
    ["com.lovenotes.share-menu.shareButton"](): string;
    /**
      * `Shared`
      */
    ["com.lovenotes.share-menu.sharedButton"](): string;
    /**
      * `{{member1}} and {{member2}} are in this doc`
      */
    ["com.lovenotes.share-menu.member-management.member-count-2"](options: Readonly<{
        member1: string;
        member2: string;
    }>): string;
    /**
      * `{{member1}}, {{member2}} and {{member3}} are in this doc`
      */
    ["com.lovenotes.share-menu.member-management.member-count-3"](options: Readonly<{
        member1: string;
        member2: string;
        member3: string;
    }>): string;
    /**
      * `{{member1}}, {{member2}} and {{memberCount}} others`
      */
    ["com.lovenotes.share-menu.member-management.member-count-more"](options: Readonly<{
        member1: string;
        member2: string;
        memberCount: string;
    }>): string;
    /**
      * `Remove`
      */
    ["com.lovenotes.share-menu.member-management.remove"](): string;
    /**
      * `Set as owner`
      */
    ["com.lovenotes.share-menu.member-management.set-as-owner"](): string;
    /**
      * `Make this person the owner?`
      */
    ["com.lovenotes.share-menu.member-management.set-as-owner.confirm.title"](): string;
    /**
      * `The new owner will be effective immediately, and you might lose access to this doc if other users remove you, please confirm.`
      */
    ["com.lovenotes.share-menu.member-management.set-as-owner.confirm.description"](): string;
    /**
      * `Permission updated`
      */
    ["com.lovenotes.share-menu.member-management.update-success"](): string;
    /**
      * `Failed to update permission`
      */
    ["com.lovenotes.share-menu.member-management.update-fail"](): string;
    /**
      * `{{memberCount}} collaborators in the doc`
      */
    ["com.lovenotes.share-menu.member-management.header"](options: {
        readonly memberCount: string;
    }): string;
    /**
      * `Add collaborators`
      */
    ["com.lovenotes.share-menu.member-management.add-collaborators"](): string;
    /**
      * `Send invite`
      */
    ["com.lovenotes.share-menu.invite-editor.header"](): string;
    /**
      * `Manage members`
      */
    ["com.lovenotes.share-menu.invite-editor.manage-members"](): string;
    /**
      * `Invite`
      */
    ["com.lovenotes.share-menu.invite-editor.invite"](): string;
    /**
      * `No results found`
      */
    ["com.lovenotes.share-menu.invite-editor.no-found"](): string;
    /**
      * `Invite other members`
      */
    ["com.lovenotes.share-menu.invite-editor.placeholder"](): string;
    /**
      * `Notify via Email`
      */
    ["com.lovenotes.share-menu.invite-editor.sent-email"](): string;
    /**
      * `Permission not available in Free plan`
      */
    ["com.lovenotes.share-menu.paywall.owner.title"](): string;
    /**
      * `Upgrade to Pro or higher to unlock permission settings for this doc.`
      */
    ["com.lovenotes.share-menu.paywall.owner.description"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.share-menu.paywall.owner.confirm"](): string;
    /**
      * `Permission requires a workspace upgrade`
      */
    ["com.lovenotes.share-menu.paywall.member.title"](): string;
    /**
      * `Ask your workspace owner to upgrade to Pro or higher to enable permissions.`
      */
    ["com.lovenotes.share-menu.paywall.member.description"](): string;
    /**
      * `Got it`
      */
    ["com.lovenotes.share-menu.paywall.member.confirm"](): string;
    /**
      * `Built with`
      */
    ["com.lovenotes.share-page.footer.built-with"](): string;
    /**
      * `Create with`
      */
    ["com.lovenotes.share-page.footer.create-with"](): string;
    /**
      * `Empower your sharing with LoveNotes Cloud: One-click doc sharing`
      */
    ["com.lovenotes.share-page.footer.description"](): string;
    /**
      * `Get started for free`
      */
    ["com.lovenotes.share-page.footer.get-started"](): string;
    /**
      * `Use This Template`
      */
    ["com.lovenotes.share-page.header.import-template"](): string;
    /**
      * `Login or Sign Up`
      */
    ["com.lovenotes.share-page.header.login"](): string;
    /**
      * `Present`
      */
    ["com.lovenotes.share-page.header.present"](): string;
    /**
      * `Edgeless`
      */
    ["com.lovenotes.shortcutsTitle.edgeless"](): string;
    /**
      * `General`
      */
    ["com.lovenotes.shortcutsTitle.general"](): string;
    /**
      * `Markdown syntax`
      */
    ["com.lovenotes.shortcutsTitle.markdownSyntax"](): string;
    /**
      * `Page`
      */
    ["com.lovenotes.shortcutsTitle.page"](): string;
    /**
      * `Collapse sidebar`
      */
    ["com.lovenotes.sidebarSwitch.collapse"](): string;
    /**
      * `Expand sidebar`
      */
    ["com.lovenotes.sidebarSwitch.expand"](): string;
    /**
      * `Snapshot Imp. & Exp.`
      */
    ["com.lovenotes.snapshot.import-export.enable"](): string;
    /**
      * `Once enabled you can find the Snapshot Export Import option in the document's More menu.`
      */
    ["com.lovenotes.snapshot.import-export.enable.desc"](): string;
    /**
      * `Maybe later`
      */
    ["com.lovenotes.star-lovenotes.cancel"](): string;
    /**
      * `Star on GitHub`
      */
    ["com.lovenotes.star-lovenotes.confirm"](): string;
    /**
      * `Are you finding our app useful and enjoyable? We'd love your support to keep improving! A great way to help us out is by giving us a star on GitHub. This simple action can make a big difference and helps us continue to deliver the best experience for you.`
      */
    ["com.lovenotes.star-lovenotes.description"](): string;
    /**
      * `Star us on GitHub`
      */
    ["com.lovenotes.star-lovenotes.title"](): string;
    /**
      * `Change plan`
      */
    ["com.lovenotes.storage.change-plan"](): string;
    /**
      * `You have reached the maximum capacity limit for your current account`
      */
    ["com.lovenotes.storage.maximum-tips"](): string;
    /**
      * `Pro users will have unlimited storage capacity during the alpha test period of the team version`
      */
    ["com.lovenotes.storage.maximum-tips.pro"](): string;
    /**
      * `Plan`
      */
    ["com.lovenotes.storage.plan"](): string;
    /**
      * `LoveNotes Cloud storage`
      */
    ["com.lovenotes.storage.title"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.storage.upgrade"](): string;
    /**
      * `Space used`
      */
    ["com.lovenotes.storage.used.hint"](): string;
    /**
      * `Syncing`
      */
    ["com.lovenotes.syncing"](): string;
    /**
      * `{{count}} doc`
    
      * - com.lovenotes.tags.count_one: `{{count}} doc`
    
      * - com.lovenotes.tags.count_other: `{{count}} docs`
    
      * - com.lovenotes.tags.count_zero: `{{count}} doc`
      */
    ["com.lovenotes.tags.count"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} doc`
      */
    ["com.lovenotes.tags.count_one"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} docs`
      */
    ["com.lovenotes.tags.count_other"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `{{count}} doc`
      */
    ["com.lovenotes.tags.count_zero"](options: {
        readonly count: string | number | bigint;
    }): string;
    /**
      * `Type tag name here...`
      */
    ["com.lovenotes.tags.create-tag.placeholder"](): string;
    /**
      * `Tag already exists`
      */
    ["com.lovenotes.tags.create-tag.toast.exist"](): string;
    /**
      * `Tag created`
      */
    ["com.lovenotes.tags.create-tag.toast.success"](): string;
    /**
      * `Tag deleted`
      */
    ["com.lovenotes.tags.delete-tags.toast"](): string;
    /**
      * `Tag updated`
      */
    ["com.lovenotes.tags.edit-tag.toast.success"](): string;
    /**
      * `New tag`
      */
    ["com.lovenotes.tags.empty.new-tag-button"](): string;
    /**
      * `Enable telemetry`
      */
    ["com.lovenotes.telemetry.enable"](): string;
    /**
      * `Telemetry is a feature that allows us to collect data on how you use the app. This data helps us improve the app and provide better features.`
      */
    ["com.lovenotes.telemetry.enable.desc"](): string;
    /**
      * `Dark`
      */
    ["com.lovenotes.themeSettings.dark"](): string;
    /**
      * `Light`
      */
    ["com.lovenotes.themeSettings.light"](): string;
    /**
      * `System`
      */
    ["com.lovenotes.themeSettings.system"](): string;
    /**
      * `Auto`
      */
    ["com.lovenotes.themeSettings.auto"](): string;
    /**
      * `now`
      */
    ["com.lovenotes.time.now"](): string;
    /**
      * `this month`
      */
    ["com.lovenotes.time.this-mouth"](): string;
    /**
      * `this week`
      */
    ["com.lovenotes.time.this-week"](): string;
    /**
      * `this year`
      */
    ["com.lovenotes.time.this-year"](): string;
    /**
      * `today`
      */
    ["com.lovenotes.time.today"](): string;
    /**
      * `Successfully added linked doc`
      */
    ["com.lovenotes.toastMessage.addLinkedPage"](): string;
    /**
      * `Added to favorites`
      */
    ["com.lovenotes.toastMessage.addedFavorites"](): string;
    /**
      * `Edgeless mode`
      */
    ["com.lovenotes.toastMessage.edgelessMode"](): string;
    /**
      * `Moved to trash`
      */
    ["com.lovenotes.toastMessage.movedTrash"](): string;
    /**
      * `Page Mode`
      */
    ["com.lovenotes.toastMessage.pageMode"](): string;
    /**
      * `Default mode has changed`
      */
    ["com.lovenotes.toastMessage.defaultMode.page.title"](): string;
    /**
      * `The default mode for this document has been changed to Page mode`
      */
    ["com.lovenotes.toastMessage.defaultMode.page.message"](): string;
    /**
      * `Default mode has changed`
      */
    ["com.lovenotes.toastMessage.defaultMode.edgeless.title"](): string;
    /**
      * `The default mode for this document has been changed to Edgeless mode`
      */
    ["com.lovenotes.toastMessage.defaultMode.edgeless.message"](): string;
    /**
      * `Permanently deleted`
      */
    ["com.lovenotes.toastMessage.permanentlyDeleted"](): string;
    /**
      * `Removed from favourites`
      */
    ["com.lovenotes.toastMessage.removedFavorites"](): string;
    /**
      * `Successfully renamed`
      */
    ["com.lovenotes.toastMessage.rename"](): string;
    /**
      * `{{title}} restored`
      */
    ["com.lovenotes.toastMessage.restored"](options: {
        readonly title: string;
    }): string;
    /**
      * `Successfully deleted`
      */
    ["com.lovenotes.toastMessage.successfullyDeleted"](): string;
    /**
      * `Today`
      */
    ["com.lovenotes.today"](): string;
    /**
      * `Tomorrow`
      */
    ["com.lovenotes.tomorrow"](): string;
    /**
      * `Last {{weekday}}`
      */
    ["com.lovenotes.last-week"](options: {
        readonly weekday: string;
    }): string;
    /**
      * `Next {{weekday}}`
      */
    ["com.lovenotes.next-week"](options: {
        readonly weekday: string;
    }): string;
    /**
      * `Limited to view-only on mobile.`
      */
    ["com.lovenotes.top-tip.mobile"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.trashOperation.delete"](): string;
    /**
      * `Once deleted, you can't undo this action. Do you confirm?`
      */
    ["com.lovenotes.trashOperation.delete.description"](): string;
    /**
      * `Permanently delete`
      */
    ["com.lovenotes.trashOperation.delete.title"](): string;
    /**
      * `Once deleted, you can't undo this action. Do you confirm?`
      */
    ["com.lovenotes.trashOperation.deleteDescription"](): string;
    /**
      * `Delete permanently`
      */
    ["com.lovenotes.trashOperation.deletePermanently"](): string;
    /**
      * `Restore it`
      */
    ["com.lovenotes.trashOperation.restoreIt"](): string;
    /**
      * `Refresh current page`
      */
    ["com.lovenotes.upgrade.button-text.done"](): string;
    /**
      * `Data upgrade error`
      */
    ["com.lovenotes.upgrade.button-text.error"](): string;
    /**
      * `Upgrade workspace data`
      */
    ["com.lovenotes.upgrade.button-text.pending"](): string;
    /**
      * `Upgrading`
      */
    ["com.lovenotes.upgrade.button-text.upgrading"](): string;
    /**
      * `After upgrading the workspace data, please refresh the page to see the changes.`
      */
    ["com.lovenotes.upgrade.tips.done"](): string;
    /**
      * `We encountered some errors while upgrading the workspace data.`
      */
    ["com.lovenotes.upgrade.tips.error"](): string;
    /**
      * `To ensure compatibility with the updated LoveNotes client, please upgrade your data by clicking the "Upgrade workspace data" button below.`
      */
    ["com.lovenotes.upgrade.tips.normal"](): string;
    /**
      * `AI usage`
      */
    ["com.lovenotes.user-info.usage.ai"](): string;
    /**
      * `Cloud storage`
      */
    ["com.lovenotes.user-info.usage.cloud"](): string;
    /**
      * `Close`
      */
    ["com.lovenotes.workbench.split-view-menu.close"](): string;
    /**
      * `Full screen`
      */
    ["com.lovenotes.workbench.split-view-menu.full-screen"](): string;
    /**
      * `Solo view`
      */
    ["com.lovenotes.workbench.split-view-menu.keep-this-one"](): string;
    /**
      * `Move left`
      */
    ["com.lovenotes.workbench.split-view-menu.move-left"](): string;
    /**
      * `Move right`
      */
    ["com.lovenotes.workbench.split-view-menu.move-right"](): string;
    /**
      * `Open in split view`
      */
    ["com.lovenotes.workbench.split-view.page-menu-open"](): string;
    /**
      * `Open in new tab`
      */
    ["com.lovenotes.workbench.tab.page-menu-open"](): string;
    /**
      * `You cannot delete the last workspace`
      */
    ["com.lovenotes.workspace.cannot-delete"](): string;
    /**
      * `Cloud workspaces`
      */
    ["com.lovenotes.workspace.cloud"](): string;
    /**
      * `Sign out`
      */
    ["com.lovenotes.workspace.cloud.account.logout"](): string;
    /**
      * `Account settings`
      */
    ["com.lovenotes.workspace.cloud.account.settings"](): string;
    /**
      * `Admin panel`
      */
    ["com.lovenotes.workspace.cloud.account.admin"](): string;
    /**
      * `Team owner`
      */
    ["com.lovenotes.workspace.cloud.account.team.owner"](): string;
    /**
      * `Team member`
      */
    ["com.lovenotes.workspace.cloud.account.team.member"](): string;
    /**
      * `Multiple teams`
      */
    ["com.lovenotes.workspace.cloud.account.team.multi"](): string;
    /**
      * `Click to open workspace`
      */
    ["com.lovenotes.workspace.cloud.account.team.tips-1"](): string;
    /**
      * `Click to open workspace list`
      */
    ["com.lovenotes.workspace.cloud.account.team.tips-2"](): string;
    /**
      * `Sign up/ Sign in`
      */
    ["com.lovenotes.workspace.cloud.auth"](): string;
    /**
      * `Sync with LoveNotes Cloud`
      */
    ["com.lovenotes.workspace.cloud.description"](): string;
    /**
      * `Join workspace`
      */
    ["com.lovenotes.workspace.cloud.join"](): string;
    /**
      * `Cloud sync`
      */
    ["com.lovenotes.workspace.cloud.sync"](): string;
    /**
      * `Local workspaces`
      */
    ["com.lovenotes.workspace.local"](): string;
    /**
      * `Import workspace`
      */
    ["com.lovenotes.workspace.local.import"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.workspaceDelete.button.cancel"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.workspaceDelete.button.delete"](): string;
    /**
      * `Please type workspace name to confirm`
      */
    ["com.lovenotes.workspaceDelete.placeholder"](): string;
    /**
      * `Delete workspace`
      */
    ["com.lovenotes.workspaceDelete.title"](): string;
    /**
      * `Create workspace`
      */
    ["com.lovenotes.workspaceList.addWorkspace.create"](): string;
    /**
      * `Create cloud workspace`
      */
    ["com.lovenotes.workspaceList.addWorkspace.create-cloud"](): string;
    /**
      * `Cloud sync`
      */
    ["com.lovenotes.workspaceList.workspaceListType.cloud"](): string;
    /**
      * `Local storage`
      */
    ["com.lovenotes.workspaceList.workspaceListType.local"](): string;
    /**
      * `Add Server`
      */
    ["com.lovenotes.workspaceList.addServer"](): string;
    /**
      * `All docs`
      */
    ["com.lovenotes.workspaceSubPath.all"](): string;
    /**
      * `Intelligence`
      */
    ["com.lovenotes.workspaceSubPath.chat"](): string;
    /**
      * `Trash`
      */
    ["com.lovenotes.workspaceSubPath.trash"](): string;
    /**
      * `Deleted docs will appear here.`
      */
    ["com.lovenotes.workspaceSubPath.trash.empty-description"](): string;
    /**
      * `Write with a blank page`
      */
    ["com.lovenotes.write_with_a_blank_page"](): string;
    /**
      * `Yesterday`
      */
    ["com.lovenotes.yesterday"](): string;
    /**
      * `Inactive`
      */
    ["com.lovenotes.inactive"](): string;
    /**
      * `Inactive member`
      */
    ["com.lovenotes.inactive-member"](): string;
    /**
      * `Inactive workspace`
      */
    ["com.lovenotes.inactive-workspace"](): string;
    /**
      * `Display Properties`
      */
    ["com.lovenotes.all-docs.display.properties"](): string;
    /**
      * `List view options`
      */
    ["com.lovenotes.all-docs.display.list-view"](): string;
    /**
      * `Icon`
      */
    ["com.lovenotes.all-docs.display.list-view.icon"](): string;
    /**
      * `Body`
      */
    ["com.lovenotes.all-docs.display.list-view.body"](): string;
    /**
      * `Quick actions`
      */
    ["com.lovenotes.all-docs.quick-actions"](): string;
    /**
      * `Favorite`
      */
    ["com.lovenotes.all-docs.quick-action.favorite"](): string;
    /**
      * `Move to trash`
      */
    ["com.lovenotes.all-docs.quick-action.trash"](): string;
    /**
      * `Open in split view`
      */
    ["com.lovenotes.all-docs.quick-action.split"](): string;
    /**
      * `Open in new tab`
      */
    ["com.lovenotes.all-docs.quick-action.tab"](): string;
    /**
      * `Select checkbox`
      */
    ["com.lovenotes.all-docs.quick-action.select"](): string;
    /**
      * `Delete permanently`
      */
    ["com.lovenotes.all-docs.quick-action.delete-permanently"](): string;
    /**
      * `Restore`
      */
    ["com.lovenotes.all-docs.quick-action.restore"](): string;
    /**
      * `All`
      */
    ["com.lovenotes.all-docs.pinned-collection.all"](): string;
    /**
      * `Edit collection rules`
      */
    ["com.lovenotes.all-docs.pinned-collection.edit"](): string;
    /**
      * `Template`
      */
    ["com.lovenotes.all-docs.group.is-template"](): string;
    /**
      * `Not Template`
      */
    ["com.lovenotes.all-docs.group.is-not-template"](): string;
    /**
      */
    /**
      */
    /**
      * `Checked`
      */
    ["com.lovenotes.all-docs.group.is-checked"](): string;
    /**
      * `Unchecked`
      */
    ["com.lovenotes.all-docs.group.is-not-checked"](): string;
    /**
      * `Never updated`
      */
    ["com.lovenotes.all-docs.group.updated-at.never-updated"](): string;
    /**
      * `core`
      */
    core(): string;
    /**
      * `Dark`
      */
    dark(): string;
    /**
      * `invited you to join`
      */
    ["invited you to join"](): string;
    /**
      * `Light`
      */
    light(): string;
    /**
      * `Others`
      */
    others(): string;
    /**
      * `System`
      */
    system(): string;
    /**
      * `unnamed`
      */
    unnamed(): string;
    /**
      * `Please upgrade to the latest version of Chrome for the best experience.`
      */
    upgradeBrowser(): string;
    /**
      * `Workspace properties`
      */
    ["com.lovenotes.workspace.properties"](): string;
    /**
      * `Rename to "{{name}}"`
      */
    ["com.lovenotes.m.rename-to"](options: {
        readonly name: string;
    }): string;
    /**
      * `Rename`
      */
    ["com.lovenotes.m.explorer.folder.rename"](): string;
    /**
      * `Create Folder`
      */
    ["com.lovenotes.m.explorer.folder.new-dialog-title"](): string;
    /**
      * `Organize`
      */
    ["com.lovenotes.m.explorer.folder.root"](): string;
    /**
      * `Create a folder in the {{parent}}.`
      */
    ["com.lovenotes.m.explorer.folder.new-tip-empty"](options: {
        readonly parent: string;
    }): string;
    /**
      * `Create "{{value}}" in the {{parent}}.`
      */
    ["com.lovenotes.m.explorer.folder.new-tip-not-empty"](options: Readonly<{
        value: string;
        parent: string;
    }>): string;
    /**
      * `Done`
      */
    ["com.lovenotes.m.explorer.folder.rename-confirm"](): string;
    /**
      * `Rename`
      */
    ["com.lovenotes.m.explorer.tag.rename"](): string;
    /**
      * `Rename Tag`
      */
    ["com.lovenotes.m.explorer.tag.rename-menu-title"](): string;
    /**
      * `Create Tag`
      */
    ["com.lovenotes.m.explorer.tag.new-dialog-title"](): string;
    /**
      * `Done`
      */
    ["com.lovenotes.m.explorer.tag.rename-confirm"](): string;
    /**
      * `Create a tag in this workspace.`
      */
    ["com.lovenotes.m.explorer.tag.new-tip-empty"](): string;
    /**
      * `Create "{{value}}" tag in this workspace.`
      */
    ["com.lovenotes.m.explorer.tag.new-tip-not-empty"](options: {
        readonly value: string;
    }): string;
    /**
      * `Manage Doc(s)`
      */
    ["com.lovenotes.m.explorer.tag.manage-docs"](): string;
    /**
      * `Rename`
      */
    ["com.lovenotes.m.explorer.collection.rename"](): string;
    /**
      * `Rename Collection`
      */
    ["com.lovenotes.m.explorer.collection.rename-menu-title"](): string;
    /**
      * `Create Collection`
      */
    ["com.lovenotes.m.explorer.collection.new-dialog-title"](): string;
    /**
      * `Rename`
      */
    ["com.lovenotes.m.explorer.doc.rename"](): string;
    /**
      * `Doc`
      */
    ["com.lovenotes.m.selector.type-doc"](): string;
    /**
      * `Tag`
      */
    ["com.lovenotes.m.selector.type-tag"](): string;
    /**
      * `Collection`
      */
    ["com.lovenotes.m.selector.type-collection"](): string;
    /**
      * `Folder`
      */
    ["com.lovenotes.m.selector.where-folder"](): string;
    /**
      * `Tag`
      */
    ["com.lovenotes.m.selector.where-tag"](): string;
    /**
      * `Collection`
      */
    ["com.lovenotes.m.selector.where-collection"](): string;
    /**
      * `Apply`
      */
    ["com.lovenotes.m.selector.confirm-default"](): string;
    /**
      * `Manage {{type}}(s)`
      */
    ["com.lovenotes.m.selector.title"](options: {
        readonly type: string;
    }): string;
    /**
      * `{{total}} item(s)`
      */
    ["com.lovenotes.m.selector.info-total"](options: {
        readonly total: string;
    }): string;
    /**
      * `Add {{count}} {{type}}(s)`
      */
    ["com.lovenotes.m.selector.info-added"](options: Readonly<{
        count: string;
        type: string;
    }>): string;
    /**
      * `Remove {{count}} {{type}}(s)`
      */
    ["com.lovenotes.m.selector.info-removed"](options: Readonly<{
        count: string;
        type: string;
    }>): string;
    /**
      * `Remove items`
      */
    ["com.lovenotes.m.selector.remove-warning.title"](): string;
    /**
      * `You unchecked {{type}} that already exist in the current {{where}}, which means you will remove them from this {{where}}. The item will not be deleted.`
      */
    ["com.lovenotes.m.selector.remove-warning.message"](options: Readonly<{
        type: string;
        where: string;
    }>): string;
    /**
      * `Do not ask again`
      */
    ["com.lovenotes.m.selector.remove-warning.confirm"](): string;
    /**
      * `Cancel`
      */
    ["com.lovenotes.m.selector.remove-warning.cancel"](): string;
    /**
      * `tag`
      */
    ["com.lovenotes.m.selector.remove-warning.where-tag"](): string;
    /**
      * `folder`
      */
    ["com.lovenotes.m.selector.remove-warning.where-folder"](): string;
    /**
      * `Today's activity`
      */
    /**
      */
    /**
      * `Unable to preview this file`
      */
    ["com.lovenotes.attachment.preview.error.title"](): string;
    /**
      * `file type not supported.`
      */
    ["com.lovenotes.attachment.preview.error.subtitle"](): string;
    /**
      * `Failed to render page.`
      */
    ["com.lovenotes.pdf.page.render.error"](): string;
    /**
      */
    /**
      * `Search for "{{query}}"`
      */
    ["com.lovenotes.editor.at-menu.link-to-doc"](options: {
        readonly query: string;
    }): string;
    /**
      * `Recent`
      */
    ["com.lovenotes.editor.at-menu.recent-docs"](): string;
    /**
      * `Tags`
      */
    ["com.lovenotes.editor.at-menu.tags"](): string;
    /**
      * `Collections`
      */
    ["com.lovenotes.editor.at-menu.collections"](): string;
    /**
      * `Loading...`
      */
    ["com.lovenotes.editor.at-menu.loading"](): string;
    /**
      * `New`
      */
    ["com.lovenotes.editor.at-menu.new-doc"](): string;
    /**
      * `New "{{name}}" page`
      */
    ["com.lovenotes.editor.at-menu.create-page"](options: {
        readonly name: string;
    }): string;
    /**
      * `New "{{name}}" edgeless`
      */
    ["com.lovenotes.editor.at-menu.create-edgeless"](options: {
        readonly name: string;
    }): string;
    /**
      * `Import`
      */
    ["com.lovenotes.editor.at-menu.import"](): string;
    /**
      * `{{count}} more docs`
      */
    ["com.lovenotes.editor.at-menu.more-docs-hint"](options: {
        readonly count: string;
    }): string;
    /**
      * `{{count}} more members`
      */
    ["com.lovenotes.editor.at-menu.more-members-hint"](options: {
        readonly count: string;
    }): string;
    /**
      */
    /**
      * `Select a specific date`
      */
    ["com.lovenotes.editor.at-menu.date-picker"](): string;
    /**
      * `Mention Members`
      */
    ["com.lovenotes.editor.at-menu.mention-members"](): string;
    /**
      * `Member not notified`
      */
    ["com.lovenotes.editor.at-menu.member-not-notified"](): string;
    /**
      * `This member does not have access to this doc, they are not notified.`
      */
    ["com.lovenotes.editor.at-menu.member-not-notified-message"](): string;
    /**
      * `Invited and notified`
      */
    ["com.lovenotes.editor.at-menu.invited-and-notified"](): string;
    /**
      * `Access needed`
      */
    ["com.lovenotes.editor.at-menu.access-needed"](): string;
    /**
      * `{{username}} does not have access to this doc, do you want to invite and notify them?`
      */
    ["com.lovenotes.editor.at-menu.access-needed-message"](options: {
        readonly username: string;
    }): string;
    /**
      * `Show`
      */
    ["com.lovenotes.editor.bi-directional-link-panel.show"](): string;
    /**
      * `Hide`
      */
    ["com.lovenotes.editor.bi-directional-link-panel.hide"](): string;
    /**
      * `Fold page block`
      */
    ["com.lovenotes.editor.edgeless-note-header.fold-page-block"](): string;
    /**
      * `Open in Page`
      */
    ["com.lovenotes.editor.edgeless-note-header.open-in-page"](): string;
    /**
      * `Fold`
      */
    ["com.lovenotes.editor.edgeless-embed-synced-doc-header.fold"](): string;
    /**
      * `Unfold`
      */
    ["com.lovenotes.editor.edgeless-embed-synced-doc-header.unfold"](): string;
    /**
      * `Open`
      */
    ["com.lovenotes.editor.edgeless-embed-synced-doc-header.open"](): string;
    /**
      * `Empower Your Team with Seamless Collaboration`
      */
    ["com.lovenotes.upgrade-to-team-page.title"](): string;
    /**
      * `Select an existing workspace or create a new one`
      */
    ["com.lovenotes.upgrade-to-team-page.workspace-selector.placeholder"](): string;
    /**
      * `Create Workspace`
      */
    ["com.lovenotes.upgrade-to-team-page.workspace-selector.create-workspace"](): string;
    /**
      * `Upgrade to Team Workspace`
      */
    ["com.lovenotes.upgrade-to-team-page.upgrade-button"](): string;
    /**
      * `Team Workspace gives you everything you need for seamless team collaboration:`
      */
    ["com.lovenotes.upgrade-to-team-page.benefit.title"](): string;
    /**
      * `Invite unlimited members to your workspace`
      */
    ["com.lovenotes.upgrade-to-team-page.benefit.g1"](): string;
    /**
      * `Set custom roles and permissions for better control`
      */
    ["com.lovenotes.upgrade-to-team-page.benefit.g2"](): string;
    /**
      * `Access advanced team management features`
      */
    ["com.lovenotes.upgrade-to-team-page.benefit.g3"](): string;
    /**
      * `Get priority customer support`
      */
    ["com.lovenotes.upgrade-to-team-page.benefit.g4"](): string;
    /**
      * `Perfect for growing teams and organizations that need professional collaboration tools.`
      */
    ["com.lovenotes.upgrade-to-team-page.benefit.description"](): string;
    /**
      * `Upgrade to Team Workspace`
      */
    ["com.lovenotes.upgrade-to-team-page.upgrade-confirm.title"](): string;
    /**
      * `Name Your Workspace`
      */
    ["com.lovenotes.upgrade-to-team-page.create-and-upgrade-confirm.title"](): string;
    /**
      * `A workspace is your virtual space to capture, create and plan as just one person or together as a team.`
      */
    ["com.lovenotes.upgrade-to-team-page.create-and-upgrade-confirm.description"](): string;
    /**
      * `Set a workspace name`
      */
    ["com.lovenotes.upgrade-to-team-page.create-and-upgrade-confirm.placeholder"](): string;
    /**
      * `Continue to Pricing`
      */
    ["com.lovenotes.upgrade-to-team-page.create-and-upgrade-confirm.confirm"](): string;
    /**
      * `No workspace available`
      */
    ["com.lovenotes.upgrade-to-team-page.no-workspace-available"](): string;
    /**
      * `Workspace storage`
      */
    ["com.lovenotes.workspace.storage"](): string;
    /**
      */
    /**
      * `Select a specific date`
      */
    ["com.lovenotes.cmdk.lovenotes.category.lovenotes.date-picker"](): string;
    /**
      * `Workspace sync paused`
      */
    ["com.lovenotes.payment.sync-paused.title"](): string;
    /**
      * `Your workspace has exceeded both storage and member limits, causing synchronization to pause. To resume syncing, please either:`
      */
    ["com.lovenotes.payment.sync-paused.owner.both.description"](): string;
    /**
      * `Reduce storage usage and remove some team members`
      */
    ["com.lovenotes.payment.sync-paused.owner.both.tips-1"](): string;
    /**
      * `Upgrade your plan for increased capacity`
      */
    ["com.lovenotes.payment.sync-paused.owner.both.tips-2"](): string;
    /**
      * `Your workspace has exceeded its storage limit and synchronization has been paused. To resume syncing, please either:`
      */
    ["com.lovenotes.payment.sync-paused.owner.storage.description"](): string;
    /**
      * `Remove unnecessary files or content to reduce storage usage`
      */
    ["com.lovenotes.payment.sync-paused.owner.storage.tips-1"](): string;
    /**
      * `Upgrade your plan for increased storage capacity`
      */
    ["com.lovenotes.payment.sync-paused.owner.storage.tips-2"](): string;
    /**
      * `Your workspace has reached its maximum member capacity and synchronization has been paused. To resume syncing, you can either`
      */
    ["com.lovenotes.payment.sync-paused.owner.member.description"](): string;
    /**
      * `Remove some team members from the workspace`
      */
    ["com.lovenotes.payment.sync-paused.owner.member.tips-1"](): string;
    /**
      * `Upgrade your plan to accommodate more members`
      */
    ["com.lovenotes.payment.sync-paused.owner.member.tips-2"](): string;
    /**
      * `This workspace has exceeded both storage and member limits, causing synchronization to pause. Please contact your workspace owner to address these limits and resume syncing.`
      */
    ["com.lovenotes.payment.sync-paused.member.both.description"](): string;
    /**
      * `This workspace has exceeded its storage limit and synchronization has been paused. Please contact your workspace owner to either reduce storage usage or upgrade the plan to resume syncing.`
      */
    ["com.lovenotes.payment.sync-paused.member.storage.description"](): string;
    /**
      * `This workspace has reached its maximum member capacity and synchronization has been paused. Please contact your workspace owner to either adjust team membership or upgrade the plan to resume syncing.`
      */
    ["com.lovenotes.payment.sync-paused.member.member.description"](): string;
    /**
      * `Got It`
      */
    ["com.lovenotes.payment.sync-paused.member.member.confirm"](): string;
    /**
      * `Delete Server`
      */
    ["com.lovenotes.server.delete"](): string;
    /**
      * `Start`
      */
    ["com.lovenotes.page-starter-bar.start"](): string;
    /**
      * `Template`
      */
    ["com.lovenotes.page-starter-bar.template"](): string;
    /**
      * `With AI`
      */
    ["com.lovenotes.page-starter-bar.ai"](): string;
    /**
      * `Edgeless`
      */
    ["com.lovenotes.page-starter-bar.edgeless"](): string;
    /**
      * `Unsupported message`
      */
    ["com.lovenotes.notification.unsupported"](): string;
    /**
      * `What are your thoughts?`
      */
    ["com.lovenotes.notification.comment-prompt"](): string;
    /**
      * `No new notifications`
      */
    ["com.lovenotes.notification.empty"](): string;
    /**
      * `Loading more...`
      */
    ["com.lovenotes.notification.loading-more"](): string;
    /**
      * `You'll be notified here for @mentions and workspace invites.`
      */
    ["com.lovenotes.notification.empty.description"](): string;
    /**
      * `Open workspace`
      */
    ["com.lovenotes.notification.invitation-review-approved.open-workspace"](): string;
    /**
      * `Accept & Join`
      */
    ["com.lovenotes.notification.invitation.accept"](): string;
    /**
      * `Delete all notifications`
      */
    ["com.lovenotes.notification.delete-all"](): string;
    /**
      * `Tips`
      */
    tips(): string;
    /**
      * `Template`
      */
    Template(): string;
    /**
      * `Delete Template`
      */
    ["com.lovenotes.template-list.delete"](): string;
    /**
      * `No template`
      */
    ["com.lovenotes.template-list.empty"](): string;
    /**
      * `Create new template`
      */
    ["com.lovenotes.template-list.create-new"](): string;
    /**
      */
    /**
      * `Select`
      */
    /**
      * `My Templates`
      */
    ["com.lovenotes.settings.workspace.template.title"](): string;
    /**
      */
    /**
      */
    /**
      * `Keep empty`
      */
    ["com.lovenotes.settings.workspace.template.keep-empty"](): string;
    /**
      * `New doc with template`
      */
    ["com.lovenotes.settings.workspace.template.page"](): string;
    /**
      * `New docs will use the specified template, ignoring default settings.`
      */
    ["com.lovenotes.settings.workspace.template.page-desc"](): string;
    /**
      * `Template for new doc`
      */
    ["com.lovenotes.settings.workspace.template.page-select"](): string;
    /**
      * `Remove template`
      */
    ["com.lovenotes.settings.workspace.template.remove"](): string;
    /**
      * `You don't have permission to do this`
      */
    ["com.lovenotes.no-permission"](): string;
    /**
      * `Unused blobs`
      */
    ["com.lovenotes.settings.workspace.storage.unused-blobs"](): string;
    /**
      * `No unused blobs`
      */
    ["com.lovenotes.settings.workspace.storage.unused-blobs.empty"](): string;
    /**
      * `Selected`
      */
    ["com.lovenotes.settings.workspace.storage.unused-blobs.selected"](): string;
    /**
      * `Delete blob files`
      */
    ["com.lovenotes.settings.workspace.storage.unused-blobs.delete.title"](): string;
    /**
      * `Are you sure you want to delete these blob files? This action cannot be undone. Make sure you no longer need them before proceeding.`
      */
    ["com.lovenotes.settings.workspace.storage.unused-blobs.delete.warning"](): string;
    /**
      * `Join Failed`
      */
    ["com.lovenotes.fail-to-join-workspace.title"](): string;
    /**
      * `Please contact your workspace owner to add more seats.`
      */
    ["com.lovenotes.fail-to-join-workspace.description-2"](): string;
    /**
      * `Request to join`
      */
    ["com.lovenotes.request-to-join-workspace.button"](): string;
    /**
      * `Request Sent successfully`
      */
    ["com.lovenotes.sent-request-to-join-workspace.title"](): string;
    /**
      * `Request failed to send`
      */
    ["com.lovenotes.failed-to-send-request.title"](): string;
    /**
      * `Readwise`
      */
    ["com.lovenotes.integration.name.readwise"](): string;
    /**
      * `Integrations`
      */
    ["com.lovenotes.integration.integrations"](): string;
    /**
      * `Elevate your LoveNotes experience with diverse add-ons and seamless integrations.`
      */
    ["com.lovenotes.integration.setting.description"](): string;
    /**
      * `Learn how to develop a integration for LoveNotes`
      */
    ["com.lovenotes.integration.setting.learn"](): string;
    /**
      * `Readwise`
      */
    ["com.lovenotes.integration.readwise.name"](): string;
    /**
      * `Manually import your content to LoveNotes from Readwise`
      */
    ["com.lovenotes.integration.readwise.desc"](): string;
    /**
      * `Connect`
      */
    ["com.lovenotes.integration.readwise.connect"](): string;
    /**
      * `Connect to Readwise`
      */
    ["com.lovenotes.integration.readwise.connect.title"](): string;
    /**
      * `Paste your access token here`
      */
    ["com.lovenotes.integration.readwise.connect.placeholder"](): string;
    /**
      * `Please enter a valid access token.`
      */
    ["com.lovenotes.integration.readwise.connect.input-error"](): string;
    /**
      * `Access Token failed validation`
      */
    ["com.lovenotes.integration.readwise.connect.error-notify-title"](): string;
    /**
      * `The token could not access Readwise. Please verify access and try again.`
      */
    ["com.lovenotes.integration.readwise.connect.error-notify-desc"](): string;
    /**
      * `Import`
      */
    ["com.lovenotes.integration.readwise.import"](): string;
    /**
      * `Disconnect`
      */
    ["com.lovenotes.integration.readwise.disconnect"](): string;
    /**
      * `Disconnect Readwise?`
      */
    ["com.lovenotes.integration.readwise.disconnect.title"](): string;
    /**
      * `Once disconnected, content will no longer be imported. Do you want to keep your existing highlights in LoveNotes?`
      */
    ["com.lovenotes.integration.readwise.disconnect.desc"](): string;
    /**
      * `Keep`
      */
    ["com.lovenotes.integration.readwise.disconnect.keep"](): string;
    /**
      * `Delete`
      */
    ["com.lovenotes.integration.readwise.disconnect.delete"](): string;
    /**
      * `Highlights to be imported this time`
      */
    ["com.lovenotes.integration.readwise.import.title"](): string;
    /**
      * `Importing everything from the start`
      */
    ["com.lovenotes.integration.readwise.import.desc-from-start"](): string;
    /**
      * `Content`
      */
    ["com.lovenotes.integration.readwise.import.cell-h-content"](): string;
    /**
      * `Todo`
      */
    ["com.lovenotes.integration.readwise.import.cell-h-todo"](): string;
    /**
      * `Last update on Readwise`
      */
    ["com.lovenotes.integration.readwise.import.cell-h-time"](): string;
    /**
      * `New`
      */
    ["com.lovenotes.integration.readwise.import.todo-new"](): string;
    /**
      * `Skip`
      */
    ["com.lovenotes.integration.readwise.import.todo-skip"](): string;
    /**
      * `Updated`
      */
    ["com.lovenotes.integration.readwise.import.todo-update"](): string;
    /**
      * `No highlights needs to be imported`
      */
    ["com.lovenotes.integration.readwise.import.empty"](): string;
    /**
      * `Importing...`
      */
    ["com.lovenotes.integration.readwise.import.importing"](): string;
    /**
      * `Please keep this app active until it's finished`
      */
    ["com.lovenotes.integration.readwise.import.importing-desc"](): string;
    /**
      * `Stop Importing`
      */
    ["com.lovenotes.integration.readwise.import.importing-stop"](): string;
    /**
      * `Importing aborted`
      */
    ["com.lovenotes.integration.readwise.import.abort-notify-title"](): string;
    /**
      * `Import aborted, with {{finished}} highlights processed`
      */
    ["com.lovenotes.integration.readwise.import.abort-notify-desc"](options: {
        readonly finished: string;
    }): string;
    /**
      * `Configuration`
      */
    ["com.lovenotes.integration.readwise.setting.caption"](): string;
    /**
      * `New Readwise highlights will be imported to LoveNotes `
      */
    ["com.lovenotes.integration.readwise.setting.sync-new-name"](): string;
    /**
      * `New highlights in Readwise will be synced to LoveNotes `
      */
    ["com.lovenotes.integration.readwise.setting.sync-new-desc"](): string;
    /**
      * `Updates to Readwise highlights will be imported`
      */
    ["com.lovenotes.integration.readwise.setting.update-name"](): string;
    /**
      * `Enable this, so that we will process updates of existing highlights from Readwise `
      */
    ["com.lovenotes.integration.readwise.setting.update-desc"](): string;
    /**
      * `How do we handle updates`
      */
    ["com.lovenotes.integration.readwise.setting.update-strategy"](): string;
    /**
      * `Append new version to the end`
      */
    ["com.lovenotes.integration.readwise.setting.update-append-name"](): string;
    /**
      * `Cited or modified highlights will have future versions added to the end of them`
      */
    ["com.lovenotes.integration.readwise.setting.update-append-desc"](): string;
    /**
      * `Overwrite with new version`
      */
    ["com.lovenotes.integration.readwise.setting.update-override-name"](): string;
    /**
      * `Cited or modified highlights will be overwritten if there are future updates`
      */
    ["com.lovenotes.integration.readwise.setting.update-override-desc"](): string;
    /**
      * `Start Importing`
      */
    ["com.lovenotes.integration.readwise.setting.start-import-name"](): string;
    /**
      * `Using the settings above`
      */
    ["com.lovenotes.integration.readwise.setting.start-import-desc"](): string;
    /**
      * `Import`
      */
    ["com.lovenotes.integration.readwise.setting.start-import-button"](): string;
    /**
      * `Apply tags to highlight imports`
      */
    ["com.lovenotes.integration.readwise.setting.tags-label"](): string;
    /**
      * `Click to add tags`
      */
    ["com.lovenotes.integration.readwise.setting.tags-placeholder"](): string;
    /**
      * `Author`
      */
    ["com.lovenotes.integration.readwise-prop.author"](): string;
    /**
      * `Source`
      */
    ["com.lovenotes.integration.readwise-prop.source"](): string;
    /**
      * `Created`
      */
    ["com.lovenotes.integration.readwise-prop.created"](): string;
    /**
      * `Updated`
      */
    ["com.lovenotes.integration.readwise-prop.updated"](): string;
    /**
      * `Integration properties`
      */
    ["com.lovenotes.integration.properties"](): string;
    /**
      * `Calendar`
      */
    ["com.lovenotes.integration.calendar.name"](): string;
    /**
      */
    ["com.lovenotes.integration.calendar.desc"](): string;
    /**
      * `Subscribe`
      */
    ["com.lovenotes.integration.calendar.new-subscription"](): string;
    /**
      * `Unsubscribe`
      */
    ["com.lovenotes.integration.calendar.unsubscribe"](): string;
    /**
      * `Add a calendar by URL`
      */
    ["com.lovenotes.integration.calendar.new-title"](): string;
    /**
      * `Calendar URL`
      */
    ["com.lovenotes.integration.calendar.new-url-label"](): string;
    /**
      * `An error occurred while saving the calendar settings`
      */
    ["com.lovenotes.integration.calendar.save-error"](): string;
    /**
      * `All day`
      */
    ["com.lovenotes.integration.calendar.all-day"](): string;
    /**
      * `New doc`
      */
    ["com.lovenotes.integration.calendar.new-doc"](): string;
    /**
      * `Show calendar events`
      */
    ["com.lovenotes.integration.calendar.show-events"](): string;
    /**
      */
    ["com.lovenotes.integration.calendar.show-events-desc"](): string;
    /**
      * `Show all day event`
      */
    ["com.lovenotes.integration.calendar.show-all-day-events"](): string;
    /**
      */
    ["com.lovenotes.integration.calendar.unsubscribe-content"](options: {
        readonly name: string;
    }): string;
    /**
      */
        readonly date: string;
    }): string;
    /**
      * `No subscribed calendars yet.`
      */
    ["com.lovenotes.integration.calendar.no-calendar"](): string;
    /**
      * `MCP Server`
      */
    ["com.lovenotes.integration.mcp-server.name"](): string;
    /**
      * `Enable other MCP Client to search and read the doc of LoveNotes.`
      */
    ["com.lovenotes.integration.mcp-server.desc"](): string;
    /**
      * `Notes`
      */
    ["com.lovenotes.audio.notes"](): string;
    /**
      * `Transcribing`
      */
    ["com.lovenotes.audio.transcribing"](): string;
    /**
      * `Unable to retrieve AI results for others`
      */
    ["com.lovenotes.audio.transcribe.non-owner.confirm.title"](): string;
    /**
      * `Audio activity`
      */
    ["com.lovenotes.recording.new"](): string;
    /**
      * `Finished`
      */
    ["com.lovenotes.recording.success.prompt"](): string;
    /**
      * `Open app`
      */
    ["com.lovenotes.recording.success.button"](): string;
    /**
      * `Failed to save`
      */
    ["com.lovenotes.recording.failed.prompt"](): string;
    /**
      * `Open file`
      */
    ["com.lovenotes.recording.failed.button"](): string;
    /**
      * `{{appName}}'s audio`
      */
    ["com.lovenotes.recording.recording"](options: {
        readonly appName: string;
    }): string;
    /**
      * `Audio recording`
      */
    ["com.lovenotes.recording.recording.unnamed"](): string;
    /**
      * `Start`
      */
    ["com.lovenotes.recording.start"](): string;
    /**
      * `Dismiss`
      */
    ["com.lovenotes.recording.dismiss"](): string;
    /**
      * `Stop`
      */
    ["com.lovenotes.recording.stop"](): string;
    /**
      * `Migrate Data to Enhance User Experience`
      */
    ["com.lovenotes.migration-all-docs-notification.header"](): string;
    /**
      * `We are updating the local data to facilitate the recording and filtering of created by and Last edited by information. Please click the “Migrate Data” button and ensure a stable network connection during the process.`
      */
    ["com.lovenotes.migration-all-docs-notification.desc"](): string;
    /**
      * `Migration failed: {{errorMessage}}`
      */
    ["com.lovenotes.migration-all-docs-notification.error"](options: {
        readonly errorMessage: string;
    }): string;
    /**
      * `Migrate data`
      */
    ["com.lovenotes.migration-all-docs-notification.button"](): string;
    /**
      * `Comments`
      */
    ["com.lovenotes.comment.comments"](): string;
    /**
      * `No comments yet, select content to add comment to`
      */
    ["com.lovenotes.comment.no-comments"](): string;
    /**
      * `Delete the thread?`
      */
    ["com.lovenotes.comment.delete.confirm.title"](): string;
    /**
      * `All comments will also be deleted, and this action cannot be undone.`
      */
    ["com.lovenotes.comment.delete.confirm.description"](): string;
    /**
      * `Delete this reply?`
      */
    ["com.lovenotes.comment.reply.delete.confirm.title"](): string;
    /**
      * `Delete this reply? This action cannot be undone.`
      */
    ["com.lovenotes.comment.reply.delete.confirm.description"](): string;
    /**
      * `Show {{count}} more replies`
      */
    ["com.lovenotes.comment.reply.show-more"](options: {
        readonly count: string;
    }): string;
    /**
      * `Show resolved comments`
      */
    ["com.lovenotes.comment.filter.show-resolved"](): string;
    /**
      * `Only my replies and mentions`
      */
    ["com.lovenotes.comment.filter.only-my-replies"](): string;
    /**
      * `Only current mode`
      */
    ["com.lovenotes.comment.filter.only-current-mode"](): string;
    /**
      * `Unlock more features`
      */
    ["com.lovenotes.payment.subscription.title"](): string;
    /**
      * `The universal editor that lets you work, play, present or create just about anything.`
      */
    ["com.lovenotes.payment.subscription.description"](): string;
    /**
      * `Upgrade`
      */
    ["com.lovenotes.payment.subscription.button"](): string;
    /**
      * `Reply`
      */
    ["com.lovenotes.comment.reply"](): string;
    /**
      * `Copy link`
      */
    ["com.lovenotes.comment.copy-link"](): string;
    /**
      * `Copy`
      */
    ["com.lovenotes.context-menu.copy"](): string;
    /**
      * `Paste`
      */
    ["com.lovenotes.context-menu.paste"](): string;
    /**
      * `Cut`
      */
    ["com.lovenotes.context-menu.cut"](): string;
    /**
      * `Add icon`
      */
    ["com.lovenotes.docIconPicker.placeholder"](): string;
    /**
      * `An internal error occurred.`
      */
    ["error.INTERNAL_SERVER_ERROR"](): string;
    /**
      * `Network error.`
      */
    ["error.NETWORK_ERROR"](): string;
    /**
      * `Too many requests.`
      */
    ["error.TOO_MANY_REQUEST"](): string;
    /**
      * `Resource not found.`
      */
    ["error.NOT_FOUND"](): string;
    /**
      * `Bad request.`
      */
    ["error.BAD_REQUEST"](): string;
    /**
      * `GraphQL bad request, code: {{code}}, {{message}}`
      */
    ["error.GRAPHQL_BAD_REQUEST"](options: Readonly<{
        code: string;
        message: string;
    }>): string;
    /**
      * `HTTP request error, message: {{message}}`
      */
    ["error.HTTP_REQUEST_ERROR"](options: {
        readonly message: string;
    }): string;
    /**
      * `Email service is not configured.`
      */
    ["error.EMAIL_SERVICE_NOT_CONFIGURED"](): string;
    /**
      * `Query is too long, max length is {{max}}.`
      */
    ["error.QUERY_TOO_LONG"](options: {
        readonly max: string;
    }): string;
    /**
      * `Validation error, errors: {{errors}}`
      */
    ["error.VALIDATION_ERROR"](options: {
        readonly errors: string;
    }): string;
    /**
      * `User not found.`
      */
    ["error.USER_NOT_FOUND"](): string;
    /**
      * `User avatar not found.`
      */
    ["error.USER_AVATAR_NOT_FOUND"](): string;
    /**
      * `This email has already been registered.`
      */
    ["error.EMAIL_ALREADY_USED"](): string;
    /**
      * `You are trying to update your account email to the same as the old one.`
      */
    ["error.SAME_EMAIL_PROVIDED"](): string;
    /**
      * `Wrong user email or password: {{email}}`
      */
    ["error.WRONG_SIGN_IN_CREDENTIALS"](options: {
        readonly email: string;
    }): string;
    /**
      * `Unknown authentication provider {{name}}.`
      */
    ["error.UNKNOWN_OAUTH_PROVIDER"](options: {
        readonly name: string;
    }): string;
    /**
      * `OAuth state expired, please try again.`
      */
    ["error.OAUTH_STATE_EXPIRED"](): string;
    /**
      * `Invalid callback state parameter.`
      */
    ["error.INVALID_OAUTH_CALLBACK_STATE"](): string;
    /**
      * `Invalid callback code parameter, provider response status: {{status}} and body: {{body}}.`
      */
    ["error.INVALID_OAUTH_CALLBACK_CODE"](options: Readonly<{
        status: string;
        body: string;
    }>): string;
    /**
      * `Invalid auth state. You might start the auth progress from another device.`
      */
    ["error.INVALID_AUTH_STATE"](): string;
    /**
      * `Missing query parameter `{{name}}`.`
      */
    ["error.MISSING_OAUTH_QUERY_PARAMETER"](options: {
        readonly name: string;
    }): string;
    /**
      * `The third-party account has already been connected to another user.`
      */
    ["error.OAUTH_ACCOUNT_ALREADY_CONNECTED"](): string;
    /**
      * `Invalid OAuth response: {{reason}}.`
      */
    ["error.INVALID_OAUTH_RESPONSE"](options: {
        readonly reason: string;
    }): string;
    /**
      * `An invalid email provided: {{email}}`
      */
    ["error.INVALID_EMAIL"](options: {
        readonly email: string;
    }): string;
    /**
      * `Password must be between {{min}} and {{max}} characters`
      */
    ["error.INVALID_PASSWORD_LENGTH"](options: Readonly<{
        min: string;
        max: string;
    }>): string;
    /**
      * `Password is required.`
      */
    ["error.PASSWORD_REQUIRED"](): string;
    /**
      * `You are trying to sign in by a different method than you signed up with.`
      */
    ["error.WRONG_SIGN_IN_METHOD"](): string;
    /**
      * `You are not allowed to sign up.`
      */
    ["error.SIGN_UP_FORBIDDEN"](): string;
    /**
      * `The email token provided is not found.`
      */
    ["error.EMAIL_TOKEN_NOT_FOUND"](): string;
    /**
      * `An invalid email token provided.`
      */
    ["error.INVALID_EMAIL_TOKEN"](): string;
    /**
      * `The link has expired.`
      */
    ["error.LINK_EXPIRED"](): string;
    /**
      * `You must sign in first to access this resource.`
      */
    ["error.AUTHENTICATION_REQUIRED"](): string;
    /**
      * `You are not allowed to perform this action.`
      */
    ["error.ACTION_FORBIDDEN"](): string;
    /**
      * `You do not have permission to access this resource.`
      */
    ["error.ACCESS_DENIED"](): string;
    /**
      * `You must verify your email before accessing this resource.`
      */
    ["error.EMAIL_VERIFICATION_REQUIRED"](): string;
    /**
      * `Space {{spaceId}} permission not found.`
      */
    ["error.WORKSPACE_PERMISSION_NOT_FOUND"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Space {{spaceId}} not found.`
      */
    ["error.SPACE_NOT_FOUND"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Member not found in Space {{spaceId}}.`
      */
    ["error.MEMBER_NOT_FOUND_IN_SPACE"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `You should join in Space {{spaceId}} before broadcasting messages.`
      */
    ["error.NOT_IN_SPACE"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `You have already joined in Space {{spaceId}}.`
      */
    ["error.ALREADY_IN_SPACE"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `You do not have permission to access Space {{spaceId}}.`
      */
    ["error.SPACE_ACCESS_DENIED"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Owner of Space {{spaceId}} not found.`
      */
    ["error.SPACE_OWNER_NOT_FOUND"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Space should have only one owner.`
      */
    ["error.SPACE_SHOULD_HAVE_ONLY_ONE_OWNER"](): string;
    /**
      * `Owner can not leave the workspace.`
      */
    ["error.OWNER_CAN_NOT_LEAVE_WORKSPACE"](): string;
    /**
      * `You can not revoke your own permission.`
      */
    ["error.CAN_NOT_REVOKE_YOURSELF"](): string;
    /**
      * `Doc {{docId}} under Space {{spaceId}} not found.`
      */
    ["error.DOC_NOT_FOUND"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `You do not have permission to perform {{action}} action on doc {{docId}}.`
      */
    ["error.DOC_ACTION_DENIED"](options: Readonly<{
        action: string;
        docId: string;
    }>): string;
    /**
      * `Doc {{docId}} under Space {{spaceId}} is blocked from updating.`
      */
    ["error.DOC_UPDATE_BLOCKED"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Your client with version {{version}} is rejected by remote sync server. Please upgrade to {{serverVersion}}.`
      */
    ["error.VERSION_REJECTED"](options: Readonly<{
        version: string;
        serverVersion: string;
    }>): string;
    /**
      * `Invalid doc history timestamp provided.`
      */
    ["error.INVALID_HISTORY_TIMESTAMP"](): string;
    /**
      * `History of {{docId}} at {{timestamp}} under Space {{spaceId}}.`
      */
    ["error.DOC_HISTORY_NOT_FOUND"](options: Readonly<{
        docId: string;
        timestamp: string;
        spaceId: string;
    }>): string;
    /**
      * `Blob {{blobId}} not found in Space {{spaceId}}.`
      */
    ["error.BLOB_NOT_FOUND"](options: Readonly<{
        blobId: string;
        spaceId: string;
    }>): string;
    /**
      * `Blob is invalid.`
      */
    ["error.BLOB_INVALID"](): string;
    /**
      * `Expected to publish a doc, not a Space.`
      */
    ["error.EXPECT_TO_PUBLISH_DOC"](): string;
    /**
      * `Expected to revoke a public doc, not a Space.`
      */
    ["error.EXPECT_TO_REVOKE_PUBLIC_DOC"](): string;
    /**
      * `Expect grant roles on doc {{docId}} under Space {{spaceId}}, not a Space.`
      */
    ["error.EXPECT_TO_GRANT_DOC_USER_ROLES"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Expect revoke roles on doc {{docId}} under Space {{spaceId}}, not a Space.`
      */
    ["error.EXPECT_TO_REVOKE_DOC_USER_ROLES"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Expect update roles on doc {{docId}} under Space {{spaceId}}, not a Space.`
      */
    ["error.EXPECT_TO_UPDATE_DOC_USER_ROLE"](options: Readonly<{
        docId: string;
        spaceId: string;
    }>): string;
    /**
      * `Doc is not public.`
      */
    ["error.DOC_IS_NOT_PUBLIC"](): string;
    /**
      * `Failed to store doc updates.`
      */
    ["error.FAILED_TO_SAVE_UPDATES"](): string;
    /**
      * `Failed to store doc snapshot.`
      */
    ["error.FAILED_TO_UPSERT_SNAPSHOT"](): string;
    /**
      * `A Team workspace is required to perform this action.`
      */
    ["error.ACTION_FORBIDDEN_ON_NON_TEAM_WORKSPACE"](): string;
    /**
      * `Doc default role can not be owner.`
      */
    ["error.DOC_DEFAULT_ROLE_CAN_NOT_BE_OWNER"](): string;
    /**
      * `Can not batch grant doc owner permissions.`
      */
    ["error.CAN_NOT_BATCH_GRANT_DOC_OWNER_PERMISSIONS"](): string;
    /**
      * `Can not set a non-active member as owner.`
      */
    ["error.NEW_OWNER_IS_NOT_ACTIVE_MEMBER"](): string;
    /**
      * `Invalid invitation provided.`
      */
    ["error.INVALID_INVITATION"](): string;
    /**
      * `No more seat available in the Space {{spaceId}}.`
      */
    ["error.NO_MORE_SEAT"](options: {
        readonly spaceId: string;
    }): string;
    /**
      * `Unsupported subscription plan: {{plan}}.`
      */
    ["error.UNSUPPORTED_SUBSCRIPTION_PLAN"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Failed to create checkout session.`
      */
    ["error.FAILED_TO_CHECKOUT"](): string;
    /**
      * `Invalid checkout parameters provided.`
      */
    ["error.INVALID_CHECKOUT_PARAMETERS"](): string;
    /**
      * `You have already subscribed to the {{plan}} plan.`
      */
    ["error.SUBSCRIPTION_ALREADY_EXISTS"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Invalid subscription parameters provided.`
      */
    ["error.INVALID_SUBSCRIPTION_PARAMETERS"](): string;
    /**
      * `You didn't subscribe to the {{plan}} plan.`
      */
    ["error.SUBSCRIPTION_NOT_EXISTS"](options: {
        readonly plan: string;
    }): string;
    /**
      * `Your subscription has already been canceled.`
      */
    ["error.SUBSCRIPTION_HAS_BEEN_CANCELED"](): string;
    /**
      * `Your subscription has not been canceled.`
      */
    ["error.SUBSCRIPTION_HAS_NOT_BEEN_CANCELED"](): string;
    /**
      * `Your subscription has expired.`
      */
    ["error.SUBSCRIPTION_EXPIRED"](): string;
    /**
      * `Your subscription has already been in {{recurring}} recurring state.`
      */
    ["error.SAME_SUBSCRIPTION_RECURRING"](options: {
        readonly recurring: string;
    }): string;
    /**
      * `Failed to create customer portal session.`
      */
    ["error.CUSTOMER_PORTAL_CREATE_FAILED"](): string;
    /**
      * `You are trying to access a unknown subscription plan.`
      */
    ["error.SUBSCRIPTION_PLAN_NOT_FOUND"](): string;
    /**
      * `You cannot update an onetime payment subscription.`
      */
    ["error.CANT_UPDATE_ONETIME_PAYMENT_SUBSCRIPTION"](): string;
    /**
      * `A workspace is required to checkout for team subscription.`
      */
    ["error.WORKSPACE_ID_REQUIRED_FOR_TEAM_SUBSCRIPTION"](): string;
    /**
      * `Workspace id is required to update team subscription.`
      */
    ["error.WORKSPACE_ID_REQUIRED_TO_UPDATE_TEAM_SUBSCRIPTION"](): string;
    /**
      * `This subscription is managed by App Store or Google Play. Please manage it in the corresponding store.`
      */
    ["error.MANAGED_BY_APP_STORE_OR_PLAY"](): string;
    /**
      * `Calendar provider request error, status: {{status}}, message: {{message}}`
      */
    ["error.CALENDAR_PROVIDER_REQUEST_ERROR"](options: Readonly<{
        status: string;
        message: string;
    }>): string;
    /**
      * `Copilot session not found.`
      */
    ["error.COPILOT_SESSION_NOT_FOUND"](): string;
    /**
      * `Copilot session input is invalid.`
      */
    ["error.COPILOT_SESSION_INVALID_INPUT"](): string;
    /**
      * `Copilot session has been deleted.`
      */
    ["error.COPILOT_SESSION_DELETED"](): string;
    /**
      * `No copilot provider available: {{modelId}}`
      */
    ["error.NO_COPILOT_PROVIDER_AVAILABLE"](options: {
        readonly modelId: string;
    }): string;
    /**
      * `Failed to generate text.`
      */
    ["error.COPILOT_FAILED_TO_GENERATE_TEXT"](): string;
    /**
      * `Failed to generate embedding with {{provider}}: {{message}}`
      */
    ["error.COPILOT_FAILED_TO_GENERATE_EMBEDDING"](options: Readonly<{
        provider: string;
        message: string;
    }>): string;
    /**
      * `Failed to create chat message.`
      */
    ["error.COPILOT_FAILED_TO_CREATE_MESSAGE"](): string;
    /**
      * `Unsplash is not configured.`
      */
    ["error.UNSPLASH_IS_NOT_CONFIGURED"](): string;
    /**
      * `Action has been taken, no more messages allowed.`
      */
    ["error.COPILOT_ACTION_TAKEN"](): string;
    /**
      * `Doc {{docId}} not found.`
      */
    ["error.COPILOT_DOC_NOT_FOUND"](options: {
        readonly docId: string;
    }): string;
    /**
      * `Some docs not found.`
      */
    ["error.COPILOT_DOCS_NOT_FOUND"](): string;
    /**
      * `Copilot message {{messageId}} not found.`
      */
    ["error.COPILOT_MESSAGE_NOT_FOUND"](options: {
        readonly messageId: string;
    }): string;
    /**
      * `Copilot prompt {{name}} not found.`
      */
    ["error.COPILOT_PROMPT_NOT_FOUND"](options: {
        readonly name: string;
    }): string;
    /**
      * `Copilot prompt is invalid.`
      */
    ["error.COPILOT_PROMPT_INVALID"](): string;
    /**
      * `Copilot provider {{provider}} does not support output type {{kind}}`
      */
    ["error.COPILOT_PROVIDER_NOT_SUPPORTED"](options: Readonly<{
        provider: string;
        kind: string;
    }>): string;
    /**
      * `Provider {{provider}} failed with {{kind}} error: {{message}}`
      */
    ["error.COPILOT_PROVIDER_SIDE_ERROR"](options: Readonly<{
        provider: string;
        kind: string;
        message: string;
    }>): string;
    /**
      * `Invalid copilot context {{contextId}}.`
      */
    ["error.COPILOT_INVALID_CONTEXT"](options: {
        readonly contextId: string;
    }): string;
    /**
      * `File {{fileName}} is not supported to use as context: {{message}}`
      */
    ["error.COPILOT_CONTEXT_FILE_NOT_SUPPORTED"](options: Readonly<{
        fileName: string;
        message: string;
    }>): string;
    /**
      * `Failed to modify context {{contextId}}: {{message}}`
      */
    ["error.COPILOT_FAILED_TO_MODIFY_CONTEXT"](options: Readonly<{
        contextId: string;
        message: string;
    }>): string;
    /**
      * `Failed to match context {{contextId}} with "%7B%7Bcontent%7D%7D": {{message}}`
      */
    ["error.COPILOT_FAILED_TO_MATCH_CONTEXT"](options: Readonly<{
        contextId: string;
        message: string;
    }>): string;
    /**
      * `Failed to match context in workspace {{workspaceId}} with "%7B%7Bcontent%7D%7D": {{message}}`
      */
    ["error.COPILOT_FAILED_TO_MATCH_GLOBAL_CONTEXT"](options: Readonly<{
        workspaceId: string;
        message: string;
    }>): string;
    /**
      * `Embedding feature is disabled, please contact the administrator to enable it in the workspace settings.`
      */
    ["error.COPILOT_EMBEDDING_DISABLED"](): string;
    /**
      * `Embedding feature not available, you may need to install pgvector extension to your database`
      */
    ["error.COPILOT_EMBEDDING_UNAVAILABLE"](): string;
    /**
      * `Transcription job already exists`
      */
    ["error.COPILOT_TRANSCRIPTION_JOB_EXISTS"](): string;
    /**
      * `Transcription job not found.`
      */
    ["error.COPILOT_TRANSCRIPTION_JOB_NOT_FOUND"](): string;
    /**
      * `Audio not provided.`
      */
    ["error.COPILOT_TRANSCRIPTION_AUDIO_NOT_PROVIDED"](): string;
    /**
      * `Failed to add workspace file embedding: {{message}}`
      */
    ["error.COPILOT_FAILED_TO_ADD_WORKSPACE_FILE_EMBEDDING"](options: {
        readonly message: string;
    }): string;
    /**
      * `You have exceeded your blob size quota.`
      */
    ["error.BLOB_QUOTA_EXCEEDED"](): string;
    /**
      * `You have exceeded your storage quota.`
      */
    ["error.STORAGE_QUOTA_EXCEEDED"](): string;
    /**
      * `You have exceeded your workspace member quota.`
      */
    ["error.MEMBER_QUOTA_EXCEEDED"](): string;
    /**
      * `You have reached the limit of actions in this workspace, please upgrade your plan.`
      */
    ["error.COPILOT_QUOTA_EXCEEDED"](): string;
    /**
      * `Runtime config {{key}} not found.`
      */
    ["error.RUNTIME_CONFIG_NOT_FOUND"](options: {
        readonly key: string;
    }): string;
    /**
      * `Invalid runtime config type  for '{{key}}', want '{{want}}', but get {{get}}.`
      */
    ["error.INVALID_RUNTIME_CONFIG_TYPE"](options: Readonly<{
        key: string;
        want: string;
        get: string;
    }>): string;
    /**
      * `Mailer service is not configured.`
      */
    ["error.MAILER_SERVICE_IS_NOT_CONFIGURED"](): string;
    /**
      * `Cannot delete all admin accounts.`
      */
    ["error.CANNOT_DELETE_ALL_ADMIN_ACCOUNT"](): string;
    /**
      * `Cannot delete own account.`
      */
    ["error.CANNOT_DELETE_OWN_ACCOUNT"](): string;
    /**
      * `Cannot delete account. You are the owner of one or more team workspaces. Please transfer ownership or delete them first.`
      */
    ["error.CANNOT_DELETE_ACCOUNT_WITH_OWNED_TEAM_WORKSPACE"](): string;
    /**
      * `Captcha verification failed.`
      */
    ["error.CAPTCHA_VERIFICATION_FAILED"](): string;
    /**
      * `Invalid session id to generate license key.`
      */
    ["error.INVALID_LICENSE_SESSION_ID"](): string;
    /**
      * `License key has been revealed. Please check your mail box of the one provided during checkout.`
      */
    ["error.LICENSE_REVEALED"](): string;
    /**
      * `Workspace already has a license applied.`
      */
    ["error.WORKSPACE_LICENSE_ALREADY_EXISTS"](): string;
    /**
      * `License not found.`
      */
    ["error.LICENSE_NOT_FOUND"](): string;
    /**
      * `Invalid license to activate. {{reason}}`
      */
    ["error.INVALID_LICENSE_TO_ACTIVATE"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Invalid license update params. {{reason}}`
      */
    ["error.INVALID_LICENSE_UPDATE_PARAMS"](options: {
        readonly reason: string;
    }): string;
    /**
      * `License has expired.`
      */
    ["error.LICENSE_EXPIRED"](): string;
    /**
      * `Unsupported client with version [{{clientVersion}}], required version is [{{requiredVersion}}].`
      */
    ["error.UNSUPPORTED_CLIENT_VERSION"](options: Readonly<{
        clientVersion: string;
        requiredVersion: string;
    }>): string;
    /**
      * `Notification not found.`
      */
    ["error.NOTIFICATION_NOT_FOUND"](): string;
    /**
      * `Mentioned user can not access doc {{docId}}.`
      */
    ["error.MENTION_USER_DOC_ACCESS_DENIED"](options: {
        readonly docId: string;
    }): string;
    /**
      * `You can not mention yourself.`
      */
    ["error.MENTION_USER_ONESELF_DENIED"](): string;
    /**
      * `Invalid app config for module `{{module}}` with key `{{key}}`. {{hint}}.`
      */
    ["error.INVALID_APP_CONFIG"](options: Readonly<{
        module: string;
        key: string;
        hint: string;
    }>): string;
    /**
      * `Invalid app config input: {{message}}`
      */
    ["error.INVALID_APP_CONFIG_INPUT"](options: {
        readonly message: string;
    }): string;
    /**
      * `Search provider not found.`
      */
    ["error.SEARCH_PROVIDER_NOT_FOUND"](): string;
    /**
      * `Invalid request argument to search provider: {{reason}}`
      */
    ["error.INVALID_SEARCH_PROVIDER_REQUEST"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Invalid indexer input: {{reason}}`
      */
    ["error.INVALID_INDEXER_INPUT"](options: {
        readonly reason: string;
    }): string;
    /**
      * `Comment not found.`
      */
    ["error.COMMENT_NOT_FOUND"](): string;
    /**
      * `Reply not found.`
      */
    ["error.REPLY_NOT_FOUND"](): string;
    /**
      * `Comment attachment not found.`
      */
    ["error.COMMENT_ATTACHMENT_NOT_FOUND"](): string;
    /**
      * `You have exceeded the comment attachment size quota.`
      */
    ["error.COMMENT_ATTACHMENT_QUOTA_EXCEEDED"](): string;
} { const { t } = useTranslation(); return useMemo(() => createProxy((key) => t.bind(null, key)), [t]); }
function createComponent(i18nKey: string) {
    return (props) => createElement(Trans, { i18nKey, shouldUnescape: true, ...props });
}
export const TypedTrans: {
    /**
      * `Go to <a>{{link}}</a> for learn more details about LoveNotes AI.`
      */
    ["com.lovenotes.ai-onboarding.general.5.description"]: ComponentType<TypedTransProps<{
        readonly link: string;
    }, {
        a: JSX.Element;
    }>>;
    /**
      * `By continuing, you are agreeing to our <a>AI Terms</a>.`
      */
    ["com.lovenotes.ai-onboarding.general.privacy"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `Opening <1>LoveNotes</1> app now`
      */
    ["com.lovenotes.auth.open.lovenotes.prompt"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `This doc is now opened in <1>LoveNotes</1> app`
      */
    ["com.lovenotes.auth.open.lovenotes.open-doc-prompt"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `To continue signing in, please enter the code that was sent to <a>{{email}}</a>.`
      */
    ["com.lovenotes.auth.sign.auth.code.hint"]: ComponentType<TypedTransProps<{
        readonly email: string;
    }, {
        a: JSX.Element;
    }>>;
    /**
      * `Or <1>sign in with password</1> instead.`
      */
    ["com.lovenotes.auth.sign.auth.code.message.password"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `The Self-Hosted instance is not hosted or deployed by LoveNotes. Your data will be stored on these instances.  <1>Learn more about Self-Host details.</1>`
      */
    ["com.lovenotes.auth.sign.add-selfhosted.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `By clicking “Continue with Google/Email” above, you acknowledge that you agree to LoveNotes's <1>Terms of Conditions</1> and <3>Privacy Policy</3>.`
      */
    ["com.lovenotes.auth.sign.message"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `This demo is limited. <1>Download the LoveNotes Client</1> for the latest features and Performance.`
      */
    ["com.lovenotes.banner.content"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> selected`
    
      * - com.lovenotes.collection.toolbar.selected_one: `<0>{{count}}</0> collection selected`
    
      * - com.lovenotes.collection.toolbar.selected_other: `<0>{{count}}</0> collection(s) selected`
      */
    ["com.lovenotes.collection.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> collection selected`
      */
    ["com.lovenotes.collection.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> collection(s) selected`
      */
    ["com.lovenotes.collection.toolbar.selected_other"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> collection(s) selected`
      */
    ["com.lovenotes.collection.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{tag}}</1> cannot be undone, please proceed with caution.`
      */
    ["com.lovenotes.delete-tags.confirm.description"]: ComponentType<TypedTransProps<{
        readonly tag: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Selected <1>{{selectedCount}}</1>, filtered <3>{{filteredCount}}</3>`
      */
    ["com.lovenotes.editCollection.rules.countTips"]: ComponentType<TypedTransProps<Readonly<{
        selectedCount: string;
        filteredCount: string;
    }>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `Showing <1>{{count}}</1> docs.`
      */
    ["com.lovenotes.editCollection.rules.countTips.more"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Showing <1>{{count}}</1> doc.`
      */
    ["com.lovenotes.editCollection.rules.countTips.one"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Showing <1>{{count}}</1> docs.`
      */
    ["com.lovenotes.editCollection.rules.countTips.zero"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Please <1>add rules</1> to save this collection or switch to <3>Docs</3>, use manual selection mode`
      */
    ["com.lovenotes.editCollection.rules.empty.noRules.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `Docs that meet the rules will be added to the current collection <2>{{highlight}}</2>`
      */
    ["com.lovenotes.editCollection.rules.tips"]: ComponentType<TypedTransProps<{
        readonly highlight: string;
    }, {
        ["2"]: JSX.Element;
    }>>;
    /**
      * `If you are still experiencing this issue, please <1>contact us through the community</1>.`
      */
    ["com.lovenotes.error.contact-us"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `With the workspace creator's free account, every member can access up to <1>7 days<1> of version history.`
      */
    ["com.lovenotes.history.confirm-restore-modal.free-plan-prompt.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `With the workspace creator's Pro account, every member enjoys the privilege of accessing up to <1>30 days<1> of version history.`
      */
    ["com.lovenotes.history.confirm-restore-modal.pro-plan-prompt.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> selected`
    
      * - com.lovenotes.page.toolbar.selected_one: `<0>{{count}}</0> doc selected`
    
      * - com.lovenotes.page.toolbar.selected_other: `<0>{{count}}</0> doc(s) selected`
      */
    ["com.lovenotes.page.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> doc selected`
      */
    ["com.lovenotes.page.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> doc(s) selected`
      */
    ["com.lovenotes.page.toolbar.selected_other"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> doc(s) selected`
      */
    ["com.lovenotes.page.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the <a>free plan</a>.`
      */
    ["com.lovenotes.payment.billing-setting.ai.free-desc"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `You have purchased <a>Believer plan</a>. Enjoy with your benefits!`
      */
    ["com.lovenotes.payment.billing-setting.believer.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `You are currently on the <1>{{planName}} plan</1>.`
      */
    ["com.lovenotes.payment.billing-setting.current-plan.description"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the believer <1>{{planName}} plan</1>.`
      */
    ["com.lovenotes.payment.billing-setting.current-plan.description.lifetime"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the monthly <1>{{planName}} plan</1>.`
      */
    ["com.lovenotes.payment.billing-setting.current-plan.description.monthly"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `You are currently on the annually <1>{{planName}} plan</1>.`
      */
    ["com.lovenotes.payment.billing-setting.current-plan.description.yearly"]: ComponentType<TypedTransProps<{
        readonly planName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `One-time Purchase. Personal use rights for up to 150 years. <a>Fair Usage Policies</a> may apply.`
      */
    ["com.lovenotes.payment.lifetime.caption-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        a: JSX.Element;
    }>>;
    /**
      * `You are currently on the {{currentPlan}} plan. If you have any questions, please contact our <3>customer support</3>.`
      */
    ["com.lovenotes.payment.subtitle-active"]: ComponentType<TypedTransProps<{
        readonly currentPlan: string;
    }, {
        ["3"]: JSX.Element;
    }>>;
    /**
      * `If you have any questions, please contact our <1> customer support</1>.`
      */
    ["com.lovenotes.payment.upgrade-success-page.support"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `If you have any questions, please contact our <1>customer support</1>.`
      */
    ["com.lovenotes.payment.upgrade-success-page.team.text-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `If you have any questions, please contact our <1>customer support</1>.`
      */
    ["com.lovenotes.payment.license-success.text-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `This action deletes the old Favorites section. <b>Your documents are safe</b>, ensure you've moved your frequently accessed documents to the new personal Favorites section.`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.clean-all.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        b: JSX.Element;
    }>>;
    /**
      * `<b>Your documents are safe</b>, but you'll need to re-pin your most-used ones. "Favorites" are now personal. Move items from the old shared section to your new personal section or remove the old one by clicking "Empty the old favorites" now.`
      */
    ["com.lovenotes.rootAppSidebar.migration-data.help.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        b: JSX.Element;
    }>>;
    /**
      * `No doc titles contain <1>{{search}}</1>`
      */
    ["com.lovenotes.selectPage.empty.tips"]: ComponentType<TypedTransProps<{
        readonly search: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Are you sure you want to delete your account from <1>{{server}}</1>?`
      */
    ["com.lovenotes.setting.account.delete.confirm-delete-description-1"]: ComponentType<TypedTransProps<{
        readonly server: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Your account will be inaccessible, and your personal cloud space will be permanently deleted. You can remove local data by uninstalling the app or clearing your browser storage. <1>This action is irreversible.</1>`
      */
    ["com.lovenotes.setting.account.delete.confirm-delete-description-2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Don't have the app? <1>Click to download</1>.`
      */
    ["com.lovenotes.open-in-app.card.subtitle"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Settings changed; please restart the app. <1>Restart</1>`
      */
    ["com.lovenotes.settings.editorSettings.general.spell-check.restart-hint"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;

    /**
      * `Meeting Features Available <strong>Free</strong> in Beta Phase`
      */
    ["com.lovenotes.settings.meetings.setting.prompt.2"]: ComponentType<TypedTransProps<Readonly<{}>, {
        strong: JSX.Element;
    }>>;
    /**
      * `<strong>Where AI meets your meetings - lovenotes your collaboration.</strong>
    <ul><li>Extract Action Items & Key Insights Instantly</li><li>Smart Auto-Capture Starts With Your Meeting</li><li>Seamless Integration Across All Meeting Platforms</li><li>One Unified Space for All Your Meeting's Context</li><li>Your AI Assistant with Every Meeting Context Preserved</li></ul>`
      */
    ["com.lovenotes.settings.meetings.setting.welcome.hints"]: ComponentType<TypedTransProps<Readonly<{}>, {
        strong: JSX.Element;
        ul: JSX.Element;
        li: JSX.Element;
    }>>;
    /**
      * `Utilize the meeting notes and AI summarization features provided by LoveNotes. <1>Discuss more in the community</1>.`
      */
    ["com.lovenotes.settings.meetings.enable.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Activate using the local key from <1>Toeverything.Inc</1>`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.team.license"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Copy your workspace id and <1>reach out to us</1>.`
      */
    ["com.lovenotes.settings.workspace.license.self-host-team.upload-license-file.tips.content"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `If you encounter any issues, contact support@toeverything.info. No license yet? <1>Click to purchase</1>.`
      */
    ["com.lovenotes.settings.workspace.license.activate-modal.tips"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `This will make the workspace read-only. Your key remains usable elsewhere. Deactivation doesn't cancel your Team plan. To cancel, go to <1>Manage Payment</1>.`
      */
    ["com.lovenotes.settings.workspace.license.deactivate-modal.description"]: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `The "<1>{{ name }}</1>" property will be removed. This action cannot be undone.`
      */
    ["com.lovenotes.settings.workspace.properties.delete-property-desc"]: ComponentType<TypedTransProps<{
        readonly name: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> doc`
      */
    ["com.lovenotes.settings.workspace.properties.doc"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> docs`
      */
    ["com.lovenotes.settings.workspace.properties.doc_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `Manage workspace <1>{{name}}</1> properties`
      */
    ["com.lovenotes.settings.workspace.properties.header.subtitle"]: ComponentType<TypedTransProps<{
        readonly name: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> selected`
    
      * - com.lovenotes.tag.toolbar.selected_one: `<0>{{count}}</0> tag selected`
    
      * - com.lovenotes.tag.toolbar.selected_other: `<0>{{count}}</0> tag(s) selected`
      */
    ["com.lovenotes.tag.toolbar.selected"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> tag selected`
      */
    ["com.lovenotes.tag.toolbar.selected_one"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> tag(s) selected`
      */
    ["com.lovenotes.tag.toolbar.selected_other"]: ComponentType<TypedTransProps<{
        readonly count: string | number | bigint;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `<0>{{count}}</0> tag(s) selected`
      */
    ["com.lovenotes.tag.toolbar.selected_others"]: ComponentType<TypedTransProps<{
        readonly count: string;
    }, {
        ["0"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{workspace}}</1> cannot be undone, please proceed with caution. All contents will be lost.`
      */
    ["com.lovenotes.workspaceDelete.description"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Deleting <1>{{workspace}}</1> will delete both local and cloud data, this operation cannot be undone, please proceed with caution.`
      */
    ["com.lovenotes.workspaceDelete.description2"]: ComponentType<TypedTransProps<{
        readonly workspace: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * ` We recommend the <1>Chrome</1> browser for optimal experience.`
      */
    recommendBrowser: ComponentType<TypedTransProps<Readonly<{}>, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `Are you sure you want to upgrade <1>{{workspaceName}}</1> to a Team Workspace? This will allow unlimited members to collaborate in this workspace.`
      */
    ["com.lovenotes.upgrade-to-team-page.upgrade-confirm.description"]: ComponentType<TypedTransProps<{
        readonly workspaceName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> mentioned you in <2>{{docTitle}}</2>`
      */
    ["com.lovenotes.notification.mention"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        docTitle: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> commented in <2>{{docTitle}}</2>`
      */
    ["com.lovenotes.notification.comment"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        docTitle: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> mentioned you in a comment in <2>{{docTitle}}</2>`
      */
    ["com.lovenotes.notification.comment-mention"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        docTitle: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> has accept your invitation`
      */
    ["com.lovenotes.notification.invitation-accepted"]: ComponentType<TypedTransProps<{
        readonly username: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> has requested to join <2>{{workspaceName}}</2>`
      */
    ["com.lovenotes.notification.invitation-review-request"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> has declined your request to join <2>{{workspaceName}}</2>`
      */
    ["com.lovenotes.notification.invitation-review-declined"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> has approved your request to join <2>{{workspaceName}}</2>`
      */
    ["com.lovenotes.notification.invitation-review-approved"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `There is an issue regarding your invitation to <1>{{workspaceName}}</1> `
      */
    ["com.lovenotes.notification.invitation-blocked"]: ComponentType<TypedTransProps<{
        readonly workspaceName: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
    /**
      * `<1>{{username}}</1> invited you to join <2>{{workspaceName}}</2>`
      */
    ["com.lovenotes.notification.invitation"]: ComponentType<TypedTransProps<Readonly<{
        username: string;
        workspaceName: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `Unable to join <1/> <2>{{workspaceName}}</2> due to insufficient seats available.`
      */
    ["com.lovenotes.fail-to-join-workspace.description-1"]: ComponentType<TypedTransProps<{
        readonly workspaceName: string;
    }, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
    }>>;
    /**
      * `You requested to join <1/> <2>{{workspaceName}}</2> with <3>{{userEmail}}</3>, the workspace owner and team admins will review your request.`
      */
    ["com.lovenotes.sent-request-to-join-workspace.description"]: ComponentType<TypedTransProps<Readonly<{
        workspaceName: string;
        userEmail: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `Unable to process your request to join <1/> <2>{{workspaceName}}</2> with <3>{{userEmail}}</3>, the workspace has reached its member limit. Please contact the workspace owner for available seats.`
      */
    ["com.lovenotes.failed-to-send-request.description"]: ComponentType<TypedTransProps<Readonly<{
        workspaceName: string;
        userEmail: string;
    }>, {
        ["1"]: JSX.Element;
        ["2"]: JSX.Element;
        ["3"]: JSX.Element;
    }>>;
    /**
      * `Import your Readwise highlights to LoveNotes. Please visit Readwise, <br />click <a>"Get Access Token"</a>, and paste the token below.`
      */
    ["com.lovenotes.integration.readwise.connect.desc"]: ComponentType<TypedTransProps<Readonly<{}>, {
        br: JSX.Element;
        a: JSX.Element;
    }>>;
    /**
      * `Updates to be imported since last successful import on {{lastImportedAt}} <a>Import everything instead</a>`
      */
    ["com.lovenotes.integration.readwise.import.desc-from-last"]: ComponentType<TypedTransProps<{
        readonly lastImportedAt: string;
    }, {
        a: JSX.Element;
    }>>;
    /**
      * `Please contact <1>{{user}}</1> to upgrade AI rights or resend the attachment.`
      */
    ["com.lovenotes.audio.transcribe.non-owner.confirm.message"]: ComponentType<TypedTransProps<{
        readonly user: string;
    }, {
        ["1"]: JSX.Element;
    }>>;
} = /*#__PURE__*/ createProxy(createComponent);
