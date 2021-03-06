'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var $_GET, ANIMATION_END_NAME, ANIMATION_END_NAMES, INDEX, Loader, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, UpdateShare, UpdateShareContent, VENDORS, _loader, cdn, closeWaiting, css3Prefix, debug, defaultWords, global, hideShareWechat, i, isMM, k, layzr, len, link, loadStart, loadWechatConfig, mTestElement, opendWaiting, qrcode, selectFiles, sending, tm, uploadImage;

VENDORS = ["Moz", 'webkit', 'ms', 'O'];

TRANSITION_END_NAMES = {
    "Moz": "transitionend",
    "webkit": "webkitTransitionEnd",
    "ms": "MSTransitionEnd",
    "O": "oTransitionEnd"
};

ANIMATION_END_NAMES = {
    "Moz": "animationend",
    "webkit": "webkitAnimationEnd",
    "ms": "MSAnimationEnd",
    "O": "oAnimationEnd"
};

mTestElement = document.createElement("div");

for (k = 0, len = VENDORS.length; k < len; k++) {
    i = VENDORS[k];
    css3Prefix = i;
    if (css3Prefix + "Transition" in mTestElement.style) {
        break;
    }
    css3Prefix = false;
}

if (css3Prefix) {
    TRANSITION_END_NAME = TRANSITION_END_NAMES[css3Prefix];
    ANIMATION_END_NAME = ANIMATION_END_NAMES[css3Prefix];
}

Array.prototype.clean = function (deleteValue) {
    i = 0;
    while (i < this.length) {
        if (this[i] === deleteValue) {
            this.splice(i, 1);
            i--;
        }
        i++;
    }
    return this;
};

HTMLElement.prototype.getStyle = function (className) {
    if (this.currentStyle) {
        return this.currentStyle(className);
    } else {
        return document.defaultView.getComputedStyle(this, false)[className];
    }
};

(function () {

    var debug = false;

    var root = this;

    var EXIF = function EXIF(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {
        root.EXIF = EXIF;
    }

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000: "ExifVersion", // EXIF version
        0xA000: "FlashpixVersion", // Flashpix format version

        // colorspace tags
        0xA001: "ColorSpace", // Color space information tag

        // image configuration
        0xA002: "PixelXDimension", // Valid width of meaningful image
        0xA003: "PixelYDimension", // Valid height of meaningful image
        0x9101: "ComponentsConfiguration", // Information about channels
        0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

        // user information
        0x927C: "MakerNote", // Any desired information written by the manufacturer
        0x9286: "UserComment", // Comments by user

        // related file
        0xA004: "RelatedSoundFile", // Name of related sound file

        // date and time
        0x9003: "DateTimeOriginal", // Date and time when the original image was generated
        0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
        0x9290: "SubsecTime", // Fractions of seconds for DateTime
        0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
        0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A: "ExposureTime", // Exposure time (in seconds)
        0x829D: "FNumber", // F number
        0x8822: "ExposureProgram", // Exposure program
        0x8824: "SpectralSensitivity", // Spectral sensitivity
        0x8827: "ISOSpeedRatings", // ISO speed rating
        0x8828: "OECF", // Optoelectric conversion factor
        0x9201: "ShutterSpeedValue", // Shutter speed
        0x9202: "ApertureValue", // Lens aperture
        0x9203: "BrightnessValue", // Value of brightness
        0x9204: "ExposureBias", // Exposure bias
        0x9205: "MaxApertureValue", // Smallest F number of lens
        0x9206: "SubjectDistance", // Distance to subject in meters
        0x9207: "MeteringMode", // Metering mode
        0x9208: "LightSource", // Kind of light source
        0x9209: "Flash", // Flash status
        0x9214: "SubjectArea", // Location and area of main subject
        0x920A: "FocalLength", // Focal length of the lens in mm
        0xA20B: "FlashEnergy", // Strobe energy in BCPS
        0xA20C: "SpatialFrequencyResponse", //
        0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214: "SubjectLocation", // Location of subject in image
        0xA215: "ExposureIndex", // Exposure index selected on camera
        0xA217: "SensingMethod", // Image sensor type
        0xA300: "FileSource", // Image source (3 == DSC)
        0xA301: "SceneType", // Scene type (1 == directly photographed)
        0xA302: "CFAPattern", // Color filter array geometric pattern
        0xA401: "CustomRendered", // Special processing
        0xA402: "ExposureMode", // Exposure mode
        0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
        0xA404: "DigitalZoomRation", // Digital zoom ratio
        0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406: "SceneCaptureType", // Type of scene
        0xA407: "GainControl", // Degree of overall image gain adjustment
        0xA408: "Contrast", // Direction of contrast processing applied by camera
        0xA409: "Saturation", // Direction of saturation processing applied by camera
        0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
        0xA40B: "DeviceSettingDescription", //
        0xA40C: "SubjectDistanceRange", // Distance to subject

        // other tags
        0xA005: "InteroperabilityIFDPointer",
        0xA420: "ImageUniqueID" // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x8769: "ExifIFDPointer",
        0x8825: "GPSInfoIFDPointer",
        0xA005: "InteroperabilityIFDPointer",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x011C: "PlanarConfiguration",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x0128: "ResolutionUnit",
        0x0111: "StripOffsets",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x0201: "JPEGInterchangeFormat",
        0x0202: "JPEGInterchangeFormatLength",
        0x012D: "TransferFunction",
        0x013E: "WhitePoint",
        0x013F: "PrimaryChromaticities",
        0x0211: "YCbCrCoefficients",
        0x0214: "ReferenceBlackWhite",
        0x0132: "DateTime",
        0x010E: "ImageDescription",
        0x010F: "Make",
        0x0110: "Model",
        0x0131: "Software",
        0x013B: "Artist",
        0x8298: "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000: "GPSVersionID",
        0x0001: "GPSLatitudeRef",
        0x0002: "GPSLatitude",
        0x0003: "GPSLongitudeRef",
        0x0004: "GPSLongitude",
        0x0005: "GPSAltitudeRef",
        0x0006: "GPSAltitude",
        0x0007: "GPSTimeStamp",
        0x0008: "GPSSatellites",
        0x0009: "GPSStatus",
        0x000A: "GPSMeasureMode",
        0x000B: "GPSDOP",
        0x000C: "GPSSpeedRef",
        0x000D: "GPSSpeed",
        0x000E: "GPSTrackRef",
        0x000F: "GPSTrack",
        0x0010: "GPSImgDirectionRef",
        0x0011: "GPSImgDirection",
        0x0012: "GPSMapDatum",
        0x0013: "GPSDestLatitudeRef",
        0x0014: "GPSDestLatitude",
        0x0015: "GPSDestLongitudeRef",
        0x0016: "GPSDestLongitude",
        0x0017: "GPSDestBearingRef",
        0x0018: "GPSDestBearing",
        0x0019: "GPSDestDistanceRef",
        0x001A: "GPSDestDistance",
        0x001B: "GPSProcessingMethod",
        0x001C: "GPSAreaInformation",
        0x001D: "GPSDateStamp",
        0x001E: "GPSDifferential"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0x0000: "Flash did not fire",
            0x0001: "Flash fired",
            0x0005: "Strobe return light not detected",
            0x0007: "Strobe return light detected",
            0x0009: "Flash fired, compulsory flash mode",
            0x000D: "Flash fired, compulsory flash mode, return light not detected",
            0x000F: "Flash fired, compulsory flash mode, return light detected",
            0x0010: "Flash did not fire, compulsory flash mode",
            0x0018: "Flash did not fire, auto mode",
            0x0019: "Flash fired, auto mode",
            0x001D: "Flash fired, auto mode, return light not detected",
            0x001F: "Flash fired, auto mode, return light detected",
            0x0020: "No flash function",
            0x0041: "Flash fired, red-eye reduction mode",
            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
            0x0047: "Flash fired, red-eye reduction mode, return light detected",
            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059: "Flash fired, auto mode, red-eye reduction mode",
            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },

        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!img.exifdata;
    }

    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function (e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            var iptcdata = findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) {
                // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            } else if (/^blob\:/i.test(img.src)) {
                // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function () {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (window.FileReader && (img instanceof window.Blob || img instanceof window.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);
            } else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if (dataView.getUint8(0) != 0xFF || dataView.getUint8(1) != 0xD8) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;

        var isFieldSegmentStart = function isFieldSegmentStart(dataView, offset) {
            return dataView.getUint8(offset) === 0x38 && dataView.getUint8(offset + 1) === 0x42 && dataView.getUint8(offset + 2) === 0x49 && dataView.getUint8(offset + 3) === 0x4D && dataView.getUint8(offset + 4) === 0x04 && dataView.getUint8(offset + 5) === 0x04;
        };

        while (offset < length) {

            if (isFieldSegmentStart(dataView, offset)) {

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;
            }

            // Not the marker, continue searching
            offset++;
        }
    }
    var IptcFieldMap = {
        0x78: 'caption',
        0x6E: 'credit',
        0x19: 'keywords',
        0x37: 'dateCreated',
        0x50: 'byline',
        0x55: 'bylineTitle',
        0x7A: 'captionWriter',
        0x69: 'headline',
        0x74: 'copyright',
        0x0F: 'category'
    };
    function readIPTCData(file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        } else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    } else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    }

    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset,
            tag,
            i;

        for (i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }

    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd),
            numValues = file.getUint32(entryOffset + 4, !bigEnd),
            valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
            offset,
            vals,
            val,
            n,
            numerator,
            denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:
                // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : entryOffset + 8;
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2:
                // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : entryOffset + 8;
                return getStringFromDB(file, offset, numValues - 1);

            case 3:
                // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : entryOffset + 8;
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }

            case 4:
                // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }

            case 5:
                // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9:
                // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }

            case 10:
                // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags,
            tag,
            exifData,
            gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource":
                    case "Flash":
                    case "MeteringMode":
                    case "ExposureProgram":
                    case "SensingMethod":
                    case "SceneCaptureType":
                    case "SceneType":
                    case "CustomRendered":
                    case "WhiteBalance":
                    case "GainControl":
                    case "Contrast":
                    case "Saturation":
                    case "Sharpness":
                    case "SubjectDistanceRange":
                    case "FileSource":
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion":
                    case "FlashpixVersion":
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration":
                        exifData[tag] = StringValues.Components[exifData[tag][0]] + StringValues.Components[exifData[tag][1]] + StringValues.Components[exifData[tag][2]] + StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID":
                        gpsData[tag] = gpsData[tag][0] + "." + gpsData[tag][1] + "." + gpsData[tag][2] + "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        return tags;
    }

    EXIF.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };

    EXIF.getTag = function (img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    };

    EXIF.getAllTags = function (img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };

    EXIF.pretty = function (img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (_typeof(data[a]) == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };

    EXIF.readFromBinaryFile = function (file) {
        return findEXIFinJPEG(file);
    };

    if (typeof define === 'function' && define.amd) {
        define('exif-js', [], function () {
            return EXIF;
        });
    }
}).call(undefined);

(function () {
    var lastTime, vendors, x;
    lastTime = 0;
    vendors = ["webkit", "moz"];
    x = 0;
    while (x > vendors.length && !window.requestAnimationFrame) {
        window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
        // Webkit中此取消方法的名字变了
        window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
        ++x;
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime, id, timeToCall;
            currTime = new Date().getTime();
            timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
})();

qrcode = function qrcode() {
    return function () {
        var hm, s;
        hm = document.createElement('script');
        hm.onload = function () {
            return new QRCode(document.getElementById("qrcode"), {
                width: 400,
                height: 400,
                text: window.location.href
            });
        };
        hm.src = '/libs/js/min/qrcode.min.js';
        s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    }();
};

// @codekit-prepend "coffee/css3Prefix"
// @codekit-prepend "coffee/plus"
// @codekit-prepend "js/vendor/exif.js"
// @codekit-prepend "../../libs/coffee/requestanimation"
// @codekit-prepend "../../libs/coffee/qrcode"
Store = {};

layzr = null;

tm = null;

debug = false;

cdn = "";

isMM = false;

// cdn = "http://disk.giccoo.com/projects/Yili-Eat-World/" unless debug
global = {};

// link = "http://api.giccoo.com"
link = "http://localhost:8881";

defaultWords = ["谁说旅行就是凑热闹？", "谁说旅行就是装文艺?", "谁说旅行就是去度假?", "谁说旅行就是拍别人?"];

INDEX = parseInt(Math.random() * defaultWords.length);

global.INDEX = INDEX;

window.onload = function () {
    riot.mount("*");
    shareDefault.title = defaultWords[INDEX];
    loadWechatConfig();
    wx.ready(function () {
        var AppMShareContent, TimelineShareContent;
        AppMShareContent = {
            title: shareDefault.title,
            desc: shareDefault.text,
            link: shareDefault.url,
            imgUrl: shareDefault.pic,
            success: function success() {},
            // alert "success"
            cancel: function cancel() {}
        };
        // alert "cancel"
        TimelineShareContent = {
            title: shareDefault.title,
            desc: shareDefault.text,
            link: shareDefault.url,
            imgUrl: shareDefault.pic,
            success: function success() {},
            // alert "success"
            cancel: function cancel() {}
        };
        // alert "cancel"
        wx.onMenuShareTimeline(TimelineShareContent);
        wx.onMenuShareAppMessage(AppMShareContent);
        wx.onMenuShareQQ(AppMShareContent);
        return wx.onMenuShareWeibo(TimelineShareContent);
    });
    if ($_GET["id"]) {
        return $.get(link + "/sayno/mfw/share/", {
            id: $_GET["id"]
        }, function (msg) {
            var text;
            if (msg.recode === 200) {
                $("#imghere").append('<img src=\'http://image.giccoo.com/sayno/mfw/' + msg.info.image + '@!large\'  />');
                text = defaultWords[defaultWords.indexOf(msg.info.message)];
                return UpdateShareContent(text, null, "http://m.giccoo.com/sayno_mfw/share.html?id=" + msg.info.id, "http://image.giccoo.com/sayno/mfw/small-" + msg.info.image);
            } else {
                // window.location.href = "http://m.giccoo.com/sayno_mfw/"
                return console.log("href");
            }
        });
    }
};

UpdateShare = function UpdateShare() {
    var TimelineShareContent;
    TimelineShareContent = {
        title: shareDefault.title,
        desc: shareDefault.text,
        link: shareDefault.url,
        imgUrl: shareDefault.pic,
        success: function success() {},
        // alert "success"
        cancel: function cancel() {}
    };
    // alert "cancel"
    return wx.onMenuShareTimeline(TimelineShareContent);
};

loadWechatConfig = function loadWechatConfig() {
    var hm, s, url;
    url = encodeURIComponent(window.location.href.split("#")[0]);
    hm = document.createElement('script');
    hm.src = "http://api.giccoo.com/config?url=" + url;
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
};

selectFiles = function selectFiles() {
    var self;
    console.log(this);
    self = this;
    // data =  ""
    // self.passImage 'data:image/jpeg;base64,' + data
    // self.passImage "http://localhost:5757/sayno/img/add-image.jpg"
    // return false
    return mm.invoke('readImage', {
        'id': 'image',
        'method': 0,
        'type': 'base64'
    }, function (id, data, size, type) {
        // document.getElementById(id).src = 'data:image/jpeg;base64,' + data
        self.passImage('data:image/jpeg;base64,' + data);
    });
};

hideShareWechat = function hideShareWechat() {
    // console.log "close"
    return $(".share-wechat").hide();
};

loadStart = function loadStart() {
    var count, ep, now;
    count = $("[data-layzr]").length;
    now = 0;
    ep = $(".load-progress .n");
    // return false
    console.log(count);
    return layzr = new Layzr({
        callback: function callback(e) {
            console.log(e);
            now++;
            // console.log parseInt (now/count)*100
            if (now >= count) {
                clearInterval(tm);
                ep.html(parseInt(now / count * 100) + "%");
                $(".load-item-note1").css({
                    height: parseInt(40 * now / count) + "%"
                });
                setTimeout(function () {
                    $("#loading").addClass("animated fadeOut");
                    $(".begin").removeClass("hide");
                    return $(".build").removeClass("hide");
                    // Store.game.build()
                }, 1500);
                return setTimeout(function () {
                    return $("#loading").hide();
                }, 1000);
            }
        }
    });
};

sending = false;

uploadImage = function uploadImage(next) {
    var createFullImage, data;
    if (sending) {
        return SendNote("正在提交请稍后");
    }
    data = {};
    data.image = global.canvas.getContent();
    if (!data.image) {
        return SendNote("请先选择照片");
    }
    data.message = $("#title").val();
    data.nickname = userInfo.name;
    data.avatar = userInfo.avatar;
    createFullImage = function createFullImage(callback) {
        var canvas, ctx, image, input, loadAll, logo, slogen, times, title;
        canvas = document.createElement("canvas");
        canvas.width = 480;
        canvas.height = 680;
        canvas.className = "testCanvas";
        ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 480, 680);
        times = 0;
        loadAll = function loadAll() {
            console.log(times);
            // return false
            if (times >= 4) {
                data.image = canvas.toDataURL("image/png");
                return callback();
            } else {
                // console.log "callback"
                return times++;
            }
        };
        image = new Image();
        image.onload = function () {
            ctx.drawImage(image, 25, 25, 430, 430);
            ctx.font = "16px bold Tahoma, Arial, Roboto, Droid Sans, Helvetica Neue, Droid Sans Fallback, Microsoft YaHei, SimHei, Heiti SC, Hiragino Sans GB, Simsun, sans-self";
            ctx.lineWidth = 2;
            ctx.textAlign = "right";
            // ctx.strokeStyle = "#ffffff"
            // ctx.strokeText("@"+data.nickname, 435, 485, 430)
            ctx.fillStyle = "#000000";
            ctx.fillText("@" + data.nickname, 435, 485, 430);
            return loadAll();
        };
        image.src = data.image;
        logo = new Image();
        logo.onload = function () {
            ctx.drawImage(logo, 35, 35, 120 * 1.2, 30 * 1.2);
            return loadAll();
        };
        logo.src = "./img/logo-mark.png";
        title = new Image();
        title.onload = function () {
            var height;
            height = 40;
            ctx.drawImage(title, 25, 430 + height, title.width, title.height);
            // ctx.beginPath()
            // ctx.lineWidth = 2
            // ctx.moveTo(25,430+height+10+title.height)
            // ctx.lineTo(270,430+height+10+title.height)
            // ctx.stroke()
            return loadAll();
        };
        title.src = "./img/build-title.png";
        slogen = new Image();
        slogen.onload = function () {
            ctx.drawImage(slogen, 480 - slogen.width - 25, 680 - slogen.height - 25, slogen.width, slogen.height);
            return loadAll();
        };
        slogen.src = "./img/image-slogen.png";
        input = new Image();
        input.onload = function () {
            var height;
            height = 40 + 35;
            console.log(data.message, data.message === "");
            if (data.message === "" || data.message == null) {
                ctx.drawImage(input, 25, 430 + height, input.width, 35);
            } else {
                ctx.textAlign = "left";
                ctx.font = "22px bold Tahoma, Arial, Roboto, Droid Sans, Helvetica Neue, Droid Sans Fallback, Microsoft YaHei, SimHei, Heiti SC, Hiragino Sans GB, Simsun, sans-self";
                ctx.fillStyle = "#000000";
                ctx.fillText(data.message, 25, 430 + height - 10 + input.height);
            }
            // ctx.beginPath()
            // ctx.lineWidth = 2
            // ctx.moveTo(25,430+height+5+35)
            // ctx.lineTo(270,430+height+5+35)
            // ctx.stroke()
            return loadAll();
        };
        input.src = "./img/select-" + (global.INDEX + 1) + ".png";
        $("body").append(canvas);
    };
    sending = true;
    opendWaiting();
    return createFullImage(function () {
        data.message = defaultWords[INDEX];
        return $.post(link + "/sayno/mfw/create", data, function (msg) {
            sending = false;
            if (msg.recode === 200) {
                // alert "Success"
                // showShare()
                next(msg);
            } else {
                SendNote(msg.reason);
            }
            return closeWaiting();
        });
    });
};

// 显示上传等待界面.
opendWaiting = function opendWaiting() {
    return Loader("upload", "正在上传中请稍后", "ball");
};

// 关闭上传等待.
closeWaiting = function closeWaiting() {
    return Loader("upload");
};

// loadOther = ->
// 	layzr = new Layzr
// 		selector: '[data-src]'
// 		attr:'data-src'
SendNote = function SendNote(msg) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

    $("body").append("<note title='" + msg + ('\' time=\'' + time + '\'></note>'));
    return riot.mount("note");
};

_loader = {};

Loader = function Loader(id) {
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ball";
    var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var more = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

    if ($("#" + id).length > 0) {
        return _loader[id].loadend();
    }
    $("body").append("<loader id='" + id + "' title='" + title + "' type='" + type + ('\' time=\'' + time + '\'>' + more + '</loader>'));
    return riot.mount("loader");
};

UpdateShareContent = function UpdateShareContent() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var pic = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (title != null) {
        shareDefault.title = title;
    }
    if (text != null) {
        shareDefault.text = text;
    }
    if (url != null) {
        shareDefault.url = url;
    }
    if (pic != null) {
        shareDefault.pic = pic;
    }
    return UpdateShare();
};

$_GET = function () {
    var get, j, l, len1, u, url;
    url = window.document.location.href.toString();
    u = url.split('?');
    if (typeof u[1] === 'string') {
        u = u[1].split('&');
        get = {};
        console.log(u);
        for (l = 0, len1 = u.length; l < len1; l++) {
            i = u[l];
            j = i.split('=');
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
}();
