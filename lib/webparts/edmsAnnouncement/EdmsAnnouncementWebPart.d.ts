import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IEdmsAnnouncementWebPartProps {
    description: string;
}
export default class EdmsAnnouncementWebPart extends BaseClientSideWebPart<IEdmsAnnouncementWebPartProps> {
    userflag: boolean;
    render(): void;
    getAnnouncements(userflag: any): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
