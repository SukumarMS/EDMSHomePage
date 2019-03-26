import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import 'jquery';
export interface IEdmsMediaGalleryWebPartProps {
    description: string;
}
export default class EdmsMediaGalleryWebPart extends BaseClientSideWebPart<IEdmsMediaGalleryWebPartProps> {
    userflag: boolean;
    render(): void;
    MediaGallery(): void;
    GetmediaGalleryItems(userflag: any): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
