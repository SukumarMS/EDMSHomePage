var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import * as strings from 'EdmsMediaGalleryWebPartStrings';
import { readItems, checkUserinGroup } from '../../commonJS';
import 'jquery';
var EdmsMediaGalleryWebPart = /** @class */ (function (_super) {
    __extends(EdmsMediaGalleryWebPart, _super);
    function EdmsMediaGalleryWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userflag = false;
        return _this;
    }
    EdmsMediaGalleryWebPart.prototype.render = function () {
        var _this = this;
        //Checking user details in group
        checkUserinGroup("Media Gallery", this.context.pageContext.user.email, function (result) {
            //console.log(result);
            if (result == 1) {
                _this.userflag = true;
            }
            _this.MediaGallery();
        });
    };
    EdmsMediaGalleryWebPart.prototype.MediaGallery = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        this.domElement.innerHTML = "\n    <section class=\"banner-section ban-sec1\">\n      <div class=\"ban-section\">\n        <h3 class=\"tt-head\">Media Gallery <a id=\"addEvents\" class=\"pull-right\" href=\"../Pages/ListView.aspx?CName=Media Gallery\"> More </a></h3>\n        <div id=\"carousel-banner\" class=\"carousel carousel-fade\" data-ride=\"carousel\">\n          <!-- Wrapper for slides -->\n          <div id=\"carouselDataBind\" class=\"carousel-inner\" role=\"listbox\">\n          </div>\n        </div>\n      </div>\n    </section>\n    ";
        this.GetmediaGalleryItems(this.userflag);
    };
    EdmsMediaGalleryWebPart.prototype.GetmediaGalleryItems = function (userflag) {
        return __awaiter(this, void 0, void 0, function () {
            var sliderHtml, renderHtml, renderliitems, objResults, objResultsLen, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sliderHtml = "";
                        renderHtml = "";
                        renderliitems = "";
                        return [4 /*yield*/, readItems("Media Gallery", ["LinkURL", "Display", "MediaFileType", "Image", "Title"], 3, "Modified", "Display", 1)];
                    case 1:
                        objResults = _a.sent();
                        objResultsLen = objResults.length;
                        // VALIDATE IF GALLERY EMPTY
                        if (objResultsLen == 0) {
                            sliderHtml =
                                // <!-- Indicators -->
                                "<ol class='carousel-indicators'>" +
                                    "<li data-target='#carousel-banner' data-slide-to='0' class='active'></li>" +
                                    "</ol>";
                            renderHtml +=
                                "<div class='item active'>" +
                                    "<img src='" + this.context.pageContext.site.absoluteUrl + "/Site Assets/ImageGallery/no_image_available.jpeg' alt='Slide' title='No Item to Display'/>" +
                                    "</div>";
                        }
                        else if (objResultsLen == 1) {
                            sliderHtml =
                                // <!-- Indicators -->
                                "<ol class='carousel-indicators'>" +
                                    "<li data-target='#carousel-banner' data-slide-to='0' class='active'></li>" +
                                    "</ol>";
                            if (objResults[0].MediaFileType == "Image") {
                                renderHtml += "<div class='item active'> <img src='" + objResults[0].Image.Url + "' alt='Slide' title='" + objResults[0].Title + "' /> </div>";
                            }
                            else if (objResults[0].MediaFileType == "Video") {
                                renderHtml += "<div class='item active'>" +
                                    "<video width='100%' height='100%' controls poster='" + objResults[0].Image.Url + "_jpg.jpg'>" +
                                    "<source src='" + objResults[0].Image.Url + "' type='video/mp4'>Your browser does not support HTML5 video." +
                                    "</video>" +
                                    "</div>";
                            }
                            else if (objResults[0].MediaFileType == "Streams") {
                                renderHtml += "<div class='item active'>" +
                                    "<a href='" + objResults[0].LinkURL.Url + "' target='_blank'><img href='" + objResults[0].LinkURL.Url + "' src='" + objResults[0].Image.Url + "' alt='Slide' title='" + objResults[0].Title + "' /></a>" +
                                    "</div>";
                            }
                        }
                        else if (objResultsLen == 2) {
                            sliderHtml =
                                // <!-- Indicators -->
                                "<ol class='carousel-indicators'>" +
                                    "<li data-target='#carousel-banner' data-slide-to='0' class='active'></li>" +
                                    "<li data-target='#carousel-banner' data-slide-to='1' ></li>" +
                                    "</ol>";
                            // FIRST ITEM TO BE BINDED
                            if (objResults[0].MediaFileType == "Image") {
                                renderHtml += "<div class='item active'> <img src='" + objResults[0].Image.Url + "' alt='Slide' title='" + objResults[0].Title + "' /> </div>";
                            }
                            else if (objResults[0].MediaFileType == "Video") {
                                renderHtml += "<div class='item active'>" +
                                    "<video width='100%' height='100%' controls poster='" + objResults[0].Image.Url + "_jpg.jpg'>" +
                                    "<source src='" + objResults[0].Image.Url + "' type='video/mp4'>Your browser does not support HTML5 video." +
                                    "</video>" +
                                    "</div>";
                            }
                            else if (objResults[0].MediaFileType == "Streams") {
                                renderHtml += "<div class='item active'>" +
                                    "<a href='" + objResults[0].LinkURL.Url + "' target='_blank'><img href='" + objResults[0].LinkURL.Url + "' src='" + objResults[0].Image.Url + "' alt='Slide' title='" + objResults[0].Title + "' /></a>" +
                                    "</div>";
                            }
                            // SECOND ITEM TO BE BINDED
                            if (objResults[1].MediaFileType == "Image") {
                                renderHtml += "<div class='item'> <img src='" + objResults[1].Image.Url + "' alt='Slide' title='" + objResults[1].Title + "' /> </div>";
                            }
                            else if (objResults[1].MediaFileType == "Video") {
                                renderHtml += "<div class='item'>" +
                                    "<video width='100%' height='100%' controls poster='" + objResults[1].Image.Url + "_jpg.jpg'>" +
                                    "<source src='" + objResults[1].Image.Url + "' type='video/mp4'>Your browser does not support HTML5 video." +
                                    "</video>" +
                                    "</div>";
                            }
                            else if (objResults[1].MediaFileType == "Streams") {
                                renderHtml += "<div class='item'>" +
                                    "<a href='" + objResults[1].LinkURL.Url + "' target='_blank'><img href='" + objResults[1].LinkURL.Url + "' src='" + objResults[1].Image.Url + "' alt='Slide' title='" + objResults[1].Title + "' /></a>" +
                                    "</div>";
                            }
                        }
                        else if (objResultsLen >= 3) {
                            sliderHtml =
                                // <!-- Indicators -->
                                "<ol class='carousel-indicators'>" +
                                    "<li data-target='#carousel-banner' data-slide-to='0' class='active'></li>" +
                                    "<li data-target='#carousel-banner' data-slide-to='1' ></li>" +
                                    "<li data-target='#carousel-banner' data-slide-to='2' ></li>" +
                                    "</ol>";
                            // FIRST ITEM TO BE BINDED
                            if (objResults[0].MediaFileType == "Image") {
                                renderHtml += "<div class='item active'> <img src='" + objResults[0].Image.Url + "' alt='Slide' title='" + objResults[0].Title + "' /> </div>";
                            }
                            else if (objResults[0].MediaFileType == "Video") {
                                renderHtml += "<div class='item active'>" +
                                    "<video width='100%' height='100%' controls poster='" + objResults[0].Image.Url + "_jpg.jpg'>" +
                                    "<source src='" + objResults[0].Image.Url + "' type='video/mp4'>Your browser does not support HTML5 video." +
                                    "</video>" +
                                    "</div>";
                            }
                            else if (objResults[0].MediaFileType == "Streams") {
                                renderHtml += "<div class='item active'>" +
                                    "<a href='" + objResults[0].LinkURL.Url + "' target='_blank'><img href='" + objResults[0].LinkURL.Url + "' src='" + objResults[0].Image.Url + "' alt='Slide' title='" + objResults[0].Title + "' /></a>" +
                                    "</div>";
                            }
                            // OTHER ITEMS
                            for (i = 1; i < objResultsLen; i++) {
                                if (objResults[i].MediaFileType == "Image") {
                                    renderHtml += "<div class='item'> <img src='" + objResults[i].Image.Url + "' alt='Slide' title='" + objResults[i].Title + "' /> </div>";
                                }
                                else if (objResults[i].MediaFileType == "Video") {
                                    renderHtml += "<div class='item'>" +
                                        "<video width='100%' height='100%' controls poster='" + objResults[i].Image.Url + "_jpg.jpg'>" +
                                        "<source src='" + objResults[i].Image.Url + "' type='video/mp4'>Your browser does not support HTML5 video." +
                                        "</video>" +
                                        "</div>";
                                }
                                else if (objResults[i].MediaFileType == "Streams") {
                                    renderHtml += "<div class='item'>" +
                                        "<a href='" + objResults[i].LinkURL.Url + "' target='_blank'><img href='" + objResults[i].LinkURL.Url + "' src='" + objResults[i].Image.Url + "' alt='Slide' title='" + objResults[i].Title + "' /></a>" +
                                        "</div>";
                                }
                            }
                        }
                        $('#carouselDataBind').before(sliderHtml);
                        $('#carouselDataBind').append(renderHtml);
                        // VALIDATE USER 
                        if (userflag == false) {
                            $('#addEvents').hide();
                        }
                        else {
                            $('#addEvents').show();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(EdmsMediaGalleryWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    EdmsMediaGalleryWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return EdmsMediaGalleryWebPart;
}(BaseClientSideWebPart));
export default EdmsMediaGalleryWebPart;
//# sourceMappingURL=EdmsMediaGalleryWebPart.js.map