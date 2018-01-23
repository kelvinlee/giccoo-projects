'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Loader, MK, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _citys, _loader, _type, backHome, cdn, changeMain, changePoint, css3Prefix, debug, global, i, isMM, j, layzr, len, link, mLeft, mRight, mTestElement, mainSlider, moveLeft, moveRight, qrcode, secondSlider, tabId, tabId2, tm;

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

for (j = 0, len = VENDORS.length; j < len; j++) {
  i = VENDORS[j];
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

window.mobilecheck = function () {
  var check;
  check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

if (mobilecheck()) {
  $("body").addClass("mobi");
  MK = $("body").width() / $("body").height();
  if ($("body").height() <= 460 || MK > 0.65) {
    $("html").addClass("iphone4");
  }
} else {
  $("body").addClass("pc");
}

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
// @codekit-prepend "coffee/check"
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

link = "http://api.giccoo.com";

mainSlider = {};

secondSlider = {};

tabId = 0;

tabId2 = 0;

_citys = {};

_citys["北京"] = {};

_citys["贵州"] = {};

_citys["河北"] = {};

_citys["山东"] = {};

_citys["四川"] = {};

_citys["河南"] = {};

_citys["浙江"] = {};

_citys["湖南"] = {};

_citys["广东"] = {};

_citys["重庆"] = {};

_citys["江苏"] = {};

_citys["云南"] = {};

_citys["山西"] = {};

_citys["吉林"] = {};

_citys["福建"] = {};

_citys["广西"] = {};

_citys["陕西"] = {};

_citys["辽宁"] = {};

_citys["江西"] = {};

_citys["湖北"] = {};

_citys["黑龙江"] = {};

_citys["安徽"] = {};

_citys["内蒙古"] = {};

_citys["新疆"] = {};

_citys["甘肃"] = {};

_citys["宁夏"] = {};

_citys["天津"] = {};

_citys["上海"] = {};

_citys["海南"] = {};

_citys["青海"] = {};

_citys["西藏"] = {};

_citys["贵州"]["遵义市"] = [];

_citys["河北"]["唐山市"] = [];

_citys["山东"]["滨州市"] = [];

_citys["四川"]["自贡市"] = [];

_citys["山东"]["淄博市"] = [];

_citys["四川"]["资阳"] = [];

_citys["河南"]["驻马店"] = [];

_citys["浙江"]["绍兴市"] = [];

_citys["山东"]["潍坊市"] = [];

_citys["湖南"]["株洲市"] = [];

_citys["广东"]["珠海市"] = [];

_citys["河南"]["周口"] = [];

_citys["浙江"]["舟山市"] = [];

_citys["重庆"]["重庆市"] = [];

_citys["广东"]["中山市"] = [];

_citys["河南"]["郑州市"] = [];

_citys["江苏"]["镇江市"] = [];

_citys["浙江"]["杭州市"] = [];

_citys["广东"]["肇庆市"] = [];

_citys["云南"]["昭通市"] = [];

_citys["山东"]["烟台市"] = [];

_citys["山西"]["长治市"] = [];

_citys["河南"]["新乡市"] = [];

_citys["浙江"]["湖州市"] = [];

_citys["湖南"]["长沙市"] = [];

_citys["河南"]["许昌市"] = [];

_citys["吉林"]["长春市"] = [];

_citys["福建"]["漳州市"] = [];

_citys["山东"]["济南市"] = [];

_citys["河北"]["张家口市"] = [];

_citys["湖南"]["张家界市"] = [];

_citys["江苏"]["苏州市"] = [];

_citys["广东"]["湛江市"] = [];

_citys["山东"]["枣庄市"] = [];

_citys["山东"]["菏泽市"] = [];

_citys["山西"]["运城市"] = [];

_citys["云南"]["昆明市"] = [];

_citys["云南"]["曲靖市"] = [];

_citys["湖南"]["岳阳市"] = [];

_citys["云南"]["玉溪"] = [];

_citys["广西"]["玉林市"] = [];

_citys["浙江"]["台州市"] = [];

_citys["河南"]["商丘市"] = [];

_citys["陕西"]["榆林市"] = [];

_citys["山西"]["阳泉"] = [];

_citys["浙江"]["宁波市"] = [];

_citys["河北"]["邯郸市"] = [];

_citys["浙江"]["金华市"] = [];

_citys["辽宁"]["营口市"] = [];

_citys["江西"]["鹰潭"] = [];

_citys["湖南"]["益阳市"] = [];

_citys["江苏"]["无锡市"] = [];

_citys["湖北"]["宜昌市"] = [];

_citys["四川"]["宜宾"] = [];

_citys["山东"]["临沂市"] = [];

_citys["黑龙江"]["伊春市"] = [];

_citys["广东"]["阳江市"] = [];

_citys["江苏"]["扬州市"] = [];

_citys["江苏"]["盐城市"] = [];

_citys["吉林"]["延边朝鲜族自治州"] = [];

_citys["陕西"]["延安市"] = [];

_citys["安徽"]["宣城市"] = [];

_citys["江苏"]["徐州市"] = [];

_citys["安徽"]["宿州市"] = [];

_citys["江苏"]["宿迁市"] = [];

_citys["贵州"]["兴义市"] = [];

_citys["内蒙古"]["兴安盟"] = [];

_citys["河北"]["邢台市"] = [];

_citys["河南"]["信阳市"] = [];

_citys["山东"]["泰安市"] = [];

_citys["新疆"]["乌鲁木齐市"] = [];

_citys["新疆"]["伊犁"] = [];

_citys["山西"]["忻州市"] = [];

_citys["河北"]["石家庄市"] = [];

_citys["山西"]["孝义市"] = [];

_citys["湖北"]["孝感"] = [];

_citys["湖北"]["襄阳市"] = [];

_citys["湖南"]["湘潭市"] = [];

_citys["湖南"]["吉首市"] = [];

_citys["陕西"]["咸阳市"] = [];

_citys["湖北"]["咸宁市"] = [];

_citys["山东"]["德州市"] = [];

_citys["内蒙古"]["锡林郭勒盟"] = [];

_citys["云南"]["西双版纳"] = [];

_citys["陕西"]["西安市"] = [];

_citys["甘肃"]["武威"] = [];

_citys["湖北"]["武汉市"] = [];

_citys["宁夏"]["吴忠市"] = [];

_citys["安徽"]["芜湖市"] = [];

_citys["内蒙古"]["鄂尔多斯市"] = [];

_citys["内蒙古"]["乌兰察布市"] = [];

_citys["内蒙古"]["乌海"] = [];

_citys["云南"]["文山市"] = [];

_citys["浙江"]["温州市"] = [];

_citys["陕西"]["渭南市"] = [];

_citys["山东"]["威海市"] = [];

_citys["辽宁"]["大连市"] = [];

_citys["贵州"]["铜仁市"] = [];

_citys["安徽"]["铜陵市"] = [];

_citys["陕西"]["铜川市"] = [];

_citys["浙江"]["嘉兴市"] = [];

_citys["内蒙古"]["通辽市"] = [];

_citys["吉林"]["通化市"] = [];

_citys["辽宁"]["铁岭市"] = [];

_citys["天津"]["天津市"] = [];

_citys["江苏"]["泰州市"] = [];

_citys["四川"]["遂宁市"] = [];

_citys["湖北"]["随州"] = [];

_citys["吉林"]["松原市"] = [];

_citys["吉林"]["四平"] = [];

_citys["四川"]["成都市"] = [];

_citys["四川"]["眉山市"] = [];

_citys["四川"]["德阳市"] = [];

_citys["山西"]["朔州市"] = [];

_citys["黑龙江"]["双鸭山市"] = [];

_citys["吉林"]["双辽"] = [];

_citys["宁夏"]["石嘴山市"] = [];

_citys["新疆"]["石河子"] = [];

_citys["辽宁"]["沈阳市"] = [];

_citys["广东"]["深圳市"] = [];

_citys["湖南"]["邵阳市"] = [];

_citys["广东"]["韶关市"] = [];

_citys["上海"]["上海市"] = [];

_citys["广东"]["汕尾"] = [];

_citys["广东"]["汕头市"] = [];

_citys["山西"]["太原市"] = [];

_citys["山西"]["吕梁市"] = [];

_citys["山东"]["东营市"] = [];

_citys["福建"]["厦门市"] = [];

_citys["海南"]["三亚"] = [];

_citys["福建"]["三明市"] = [];

_citys["河南"]["三门峡市"] = [];

_citys["河北"]["廊坊市"] = [];

_citys["江苏"]["南通"] = [];

_citys["山东"]["日照市"] = [];

_citys["河北"]["沧州市"] = [];

_citys["福建"]["泉州"] = [];

_citys["浙江"]["衢州"] = [];

_citys["甘肃"]["庆阳"] = [];

_citys["广东"]["清远"] = [];

_citys["河北"]["秦皇岛市"] = [];

_citys["青海"]["海东"] = [];

_citys["青海"]["西宁市"] = [];

_citys["山东"]["青岛市"] = [];

_citys["广西"]["钦州"] = [];

_citys["湖北"]["潜江"] = [];

_citys["黑龙江"]["齐齐哈尔市"] = [];

_citys["黑龙江"]["七台河"] = [];

_citys["云南"]["普洱"] = [];

_citys["河南"]["濮阳市"] = [];

_citys["福建"]["莆田市"] = [];

_citys["江西"]["萍乡市"] = [];

_citys["甘肃"]["平凉"] = [];

_citys["河南"]["平顶山"] = [];

_citys["山西"]["大同市"] = [];

_citys["辽宁"]["盘锦"] = [];

_citys["四川"]["攀枝花市"] = [];

_citys["宁夏"]["银川市"] = [];

_citys["福建"]["宁德"] = [];

_citys["内蒙古"]["呼和浩特市"] = [];

_citys["四川"]["内江市"] = [];

_citys["河南"]["南阳市"] = [];

_citys["福建"]["南平市"] = [];

_citys["江苏"]["南京市"] = [];

_citys["四川"]["南充市"] = [];

_citys["江西"]["南昌市"] = [];

_citys["黑龙江"]["牡丹江市"] = [];

_citys["广东"]["梅州市"] = [];

_citys["广东"]["茂名市"] = [];

_citys["安徽"]["马鞍山市"] = [];

_citys["河南"]["漯河市"] = [];

_citys["河南"]["洛阳市"] = [];

_citys["四川"]["泸州市"] = [];

_citys["湖南"]["娄底市"] = [];

_citys["福建"]["龙岩市"] = [];

_citys["贵州"]["六盘水市"] = [];

_citys["安徽"]["六安市"] = [];

_citys["广西"]["柳州市"] = [];

_citys["甘肃"]["临夏"] = [];

_citys["山西"]["临汾市"] = [];

_citys["云南"]["临沧"] = [];

_citys["河南"]["安阳市"] = [];

_citys["山东"]["聊城市"] = [];

_citys["吉林"]["辽源"] = [];

_citys["辽宁"]["辽阳市"] = [];

_citys["辽宁"]["朝阳市"] = [];

_citys["辽宁"]["本溪市"] = [];

_citys["江苏"]["连云港市"] = [];

_citys["江苏"]["常州市"] = [];

_citys["浙江"]["丽水市"] = [];

_citys["云南"]["丽江市"] = [];

_citys["四川"]["乐山市"] = [];

_citys["山东"]["乐陵市"] = [];

_citys["甘肃"]["兰州市"] = [];

_citys["山东"]["莱芜市"] = [];

_citys["西藏"]["拉萨市"] = [];

_citys["新疆"]["巴音郭楞蒙古自治州"] = [];

_citys["新疆"]["克拉玛依市"] = [];

_citys["贵州"]["黔东南苗族侗族自治州"] = [];

_citys["河南"]["开封市"] = [];

_citys["新疆"]["喀什市"] = [];

_citys["甘肃"]["酒泉市"] = [];

_citys["江西"]["九江市"] = [];

_citys["湖北"]["荆州市"] = [];

_citys["湖北"]["荆门市"] = [];

_citys["山西"]["晋中市"] = [];

_citys["山西"]["晋城市"] = [];

_citys["辽宁"]["锦州市"] = [];

_citys["甘肃"]["金昌市"] = [];

_citys["广东"]["揭阳市"] = [];

_citys["河南"]["焦作市"] = [];

_citys["江西"]["宜春市"] = [];

_citys["江西"]["赣州市"] = [];

_citys["广东"]["江门市"] = [];

_citys["黑龙江"]["佳木斯"] = [];

_citys["山东"]["济宁市"] = [];

_citys["吉林"]["吉林市"] = [];

_citys["吉林"]["榆树市"] = [];

_citys["黑龙江"]["鸡西市"] = [];

_citys["广东"]["惠州市"] = [];

_citys["湖北"]["黄石市"] = [];

_citys["安徽"]["黄山"] = [];

_citys["湖北"]["黄冈市"] = [];

_citys["安徽"]["淮南市"] = [];

_citys["安徽"]["淮北市"] = [];

_citys["江苏"]["淮安"] = [];

_citys["湖南"]["怀化市"] = [];

_citys["湖北"]["十堰"] = [];

_citys["辽宁"]["葫芦岛市"] = [];

_citys["内蒙古"]["呼伦贝尔市"] = [];

_citys["云南"]["红河"] = [];

_citys["湖南"]["衡阳市"] = [];

_citys["河北"]["衡水市"] = [];

_citys["黑龙江"]["哈尔滨市"] = [];

_citys["黑龙江"]["绥化市"] = [];

_citys["黑龙江"]["鹤岗市"] = [];

_citys["河南"]["鹤壁市"] = [];

_citys["广东"]["河源市"] = [];

_citys["广西"]["河池市"] = [];

_citys["安徽"]["合肥市"] = [];

_citys["陕西"]["汉中市"] = [];

_citys["陕西"]["韩城市"] = [];

_citys["海南"]["海口市"] = [];

_citys["新疆"]["哈密市"] = [];

_citys["广西"]["桂林市"] = [];

_citys["贵州"]["贵阳市"] = [];

_citys["广西"]["贵港市"] = [];

_citys["广东"]["广州市"] = [];

_citys["广西"]["南宁市"] = [];

_citys["四川"]["广安"] = [];

_citys["青海"]["格尔木市"] = [];

_citys["河北"]["保定市"] = [];

_citys["甘肃"]["嘉峪关市"] = [];

_citys["安徽"]["阜阳市"] = [];

_citys["辽宁"]["阜新市"] = [];

_citys["辽宁"]["抚顺市"] = [];

_citys["福建"]["福州市"] = [];

_citys["广东"]["佛山市"] = [];

_citys["湖北"]["恩施市"] = [];

_citys["湖北"]["鄂州"] = [];

_citys["贵州"]["都匀市"] = [];

_citys["广东"]["东莞市"] = [];

_citys["云南"]["德宏市"] = [];

_citys["辽宁"]["丹东市"] = [];

_citys["黑龙江"]["大兴安岭地区"] = [];

_citys["黑龙江"]["大庆市"] = [];

_citys["云南"]["大理州白族自治州"] = [];

_citys["四川"]["达州市"] = [];

_citys["云南"]["楚雄市"] = [];

_citys["内蒙古"]["赤峰市"] = [];

_citys["安徽"]["池州"] = [];

_citys["河北"]["承德市"] = [];

_citys["湖南"]["郴州市"] = [];

_citys["广东"]["潮州市"] = [];

_citys["湖南"]["常德市"] = [];

_citys["新疆"]["昌吉回族自治州"] = [];

_citys["安徽"]["亳州市"] = [];

_citys["北京"]["北京市"] = [];

_citys["广西"]["北海"] = [];

_citys["黑龙江"]["黑河市"] = [];

_citys["云南"]["保山市"] = [];

_citys["陕西"]["宝鸡市"] = [];

_citys["内蒙古"]["包头市"] = [];

_citys["安徽"]["蚌埠市"] = [];

_citys["广西"]["百色"] = [];

_citys["甘肃"]["白银"] = [];

_citys["吉林"]["白山市"] = [];

_citys["吉林"]["白城市"] = [];

_citys["四川"]["巴中"] = [];

_citys["内蒙古"]["巴彦淖尔市"] = [];

_citys["辽宁"]["鞍山市"] = [];

_citys["贵州"]["安顺市"] = [];

_citys["安徽"]["安庆市"] = [];

_citys["陕西"]["安康"] = [];

_citys["新疆"]["阿克苏地区"] = [];

_citys["贵州"]["遵义市"].push({
  code: "S752011",
  name: "遵义鑫华众汽车销售服务有限公司"
});

_citys["贵州"]["遵义市"].push({
  code: "S752002",
  name: "遵义市千汇汽车销售服务有限公司"
});

_citys["贵州"]["遵义市"].push({
  code: "S752001",
  name: "遵义华来金汽车贸易有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713037",
  name: "遵化市庞大一众汽车销售有限公司"
});

_citys["山东"]["滨州市"].push({
  code: "S737100",
  name: "邹平县金鼎汽车销售服务有限公司"
});

_citys["四川"]["自贡市"].push({
  code: "S751027",
  name: "自贡市和众汽车销售服务有限公司"
});

_citys["山东"]["淄博市"].push({
  code: "S737040",
  name: "淄博众信汽车销售服务有限公司"
});

_citys["山东"]["淄博市"].push({
  code: "S737069",
  name: "淄博唯达长齐汽车销售有限公司"
});

_citys["山东"]["淄博市"].push({
  code: "S737015",
  name: "淄博市久期汽车销售有限公司"
});

_citys["山东"]["淄博市"].push({
  code: "S737079",
  name: "淄博骏泰汽车销售服务有限公司"
});

_citys["山东"]["淄博市"].push({
  code: "S237021",
  name: "淄博捷通汽车销售服务有限公司"
});

_citys["四川"]["资阳"].push({
  code: "S751046",
  name: "资阳清巍茂源汽车销售服务有限公司"
});

_citys["河南"]["驻马店"].push({
  code: "S741024",
  name: "驻马店市和美汽车销售服务有限公司"
});

_citys["浙江"]["绍兴市"].push({
  code: "S733075",
  name: "诸暨元通汽车有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737066",
  name: "诸城市永邦汽车服务有限公司"
});

_citys["湖南"]["株洲市"].push({
  code: "S743024",
  name: "株洲市健车行汽车服务有限公司"
});

_citys["湖南"]["株洲市"].push({
  code: "S743008",
  name: "株洲蓝马汽车销售服务有限公司"
});

_citys["广东"]["珠海市"].push({
  code: "S944017",
  name: "珠海市珠光汽车有限公司"
});

_citys["广东"]["珠海市"].push({
  code: "S944011",
  name: "珠海市香洲一汽汽车销售有限公司"
});

_citys["河南"]["周口"].push({
  code: "S741026",
  name: "周口市和荣汽车销售服务有限公司"
});

_citys["浙江"]["舟山市"].push({
  code: "S733050",
  name: "舟山市霁锐汽车销售服务有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755016",
  name: "重庆万家凯迪汽车销售服务有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755013",
  name: "重庆盛驰汽车有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S255002",
  name: "重庆商社众志渝涵汽车销售有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755002",
  name: "重庆商社汽车贸易有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755012",
  name: "重庆龙华实业集团众友汽车销售服务有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755011",
  name: "重庆龙华实业集团众华汽车销售服务有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755010",
  name: "重庆龙华实业集团协众汽车销售服务有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S255001",
  name: "重庆百事达华驰汽车销售服务有限公司"
});

_citys["重庆"]["重庆市"].push({
  code: "S755009",
  name: "重庆百事达华博汽车销售服务有限公司"
});

_citys["广东"]["中山市"].push({
  code: "S744053",
  name: "中山市众腾汽车有限公司"
});

_citys["广东"]["中山市"].push({
  code: "S744006",
  name: "中山市创世纪汽车有限公司"
});

_citys["广东"]["中山市"].push({
  code: "S744076",
  name: "中山庞大一众汽车销售服务有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S241003",
  name: "郑州庞大一众汽车销售有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741033",
  name: "郑州东佳汽车销售服务有限责任公司"
});

_citys["江苏"]["镇江市"].push({
  code: "S732071",
  name: "镇江德豪汽车有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733077",
  name: "浙江元通宝通汽车有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733003",
  name: "浙江一汽汽车销售服务有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733034",
  name: "浙江省直汽车销售服务有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733071",
  name: "浙江百腾汽车有限公司"
});

_citys["广东"]["肇庆市"].push({
  code: "S744061",
  name: "肇庆市安迅汽车有限公司"
});

_citys["云南"]["昭通市"].push({
  code: "S753025",
  name: "昭通市恒升汽车服务有限公司"
});

_citys["山东"]["烟台市"].push({
  code: "S737042",
  name: "招远市天城汽车维修有限公司"
});

_citys["山西"]["长治市"].push({
  code: "S714023",
  name: "长治市中天汽车销售服务有限公司"
});

_citys["河南"]["新乡市"].push({
  code: "S241002",
  name: "长垣世通汽车贸易有限公司"
});

_citys["浙江"]["湖州市"].push({
  code: "S733068",
  name: "长兴元通汽车有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743030",
  name: "长沙大汉汽车贸易有限公司"
});

_citys["河南"]["许昌市"].push({
  code: "S241005",
  name: "长葛市恒业汽车销售有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722039",
  name: "长春一汽实业众捷汽车销售有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722030",
  name: "长春通立汽车商贸有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722044",
  name: "长春通立德众汽车服务有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722017",
  name: "长春市华阳汽车贸易有限责任公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722035",
  name: "长春瑞骐汽车销售服务有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722032",
  name: "长春汇腾汽车销售服务有限公司"
});

_citys["福建"]["漳州市"].push({
  code: "S735030",
  name: "漳州致远汽车有限公司"
});

_citys["福建"]["漳州市"].push({
  code: "S735020",
  name: "漳州盈众汽车销售服务有限公司"
});

_citys["山东"]["济南市"].push({
  code: "S737096",
  name: "章丘百盛汽车销售服务有限公司"
});

_citys["河北"]["张家口市"].push({
  code: "S713050",
  name: "张家口市庞大众腾汽车销售有限公司"
});

_citys["河北"]["张家口市"].push({
  code: "S713031",
  name: "张家口市庞大一众汽车销售有限公司"
});

_citys["湖南"]["张家界市"].push({
  code: "S243001",
  name: "张家界永通汽车销售服务有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732041",
  name: "张家港市汇众汽车销售有限公司"
});

_citys["广东"]["湛江市"].push({
  code: "S744042",
  name: "湛江市正日汽车贸易有限公司"
});

_citys["山东"]["枣庄市"].push({
  code: "S737097",
  name: "枣庄永明汽车销售服务有限公司"
});

_citys["山东"]["菏泽市"].push({
  code: "S237019",
  name: "郓城德众汽车销售服务有限公司"
});

_citys["山西"]["运城市"].push({
  code: "S714021",
  name: "运城市通达汽车销售服务有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S753022",
  name: "云南云汽汽车销售服务有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S753019",
  name: "云南一汽工贸汽车销售服务有限公司"
});

_citys["云南"]["曲靖市"].push({
  code: "S753015",
  name: "云南曲靖云鑫工贸有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S753021",
  name: "云南金鼎汽车贸易有限公司"
});

_citys["湖南"]["岳阳市"].push({
  code: "S743031",
  name: "岳阳大汉汽贸有限公司"
});

_citys["云南"]["玉溪"].push({
  code: "S753023",
  name: "玉溪驰瑞汽车销售服务有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713051",
  name: "玉田县庞大一众汽车销售有限公司"
});

_citys["广西"]["玉林市"].push({
  code: "S745016",
  name: "玉林市弘标汽车销售服务有限公司"
});

_citys["浙江"]["台州市"].push({
  code: "S733073",
  name: "玉环协众汽车有限公司"
});

_citys["河南"]["许昌市"].push({
  code: "S241010",
  name: "禹州恒业汽车销售有限公司"
});

_citys["河南"]["商丘市"].push({
  code: "S241006",
  name: "虞城县众捷汽车贸易物流有限公司"
});

_citys["陕西"]["榆林市"].push({
  code: "S761015",
  name: "榆林市恒源汽贸有限公司"
});

_citys["陕西"]["榆林市"].push({
  code: "S761005",
  name: "榆林市恒丰汽贸有限公司"
});

_citys["山西"]["阳泉"].push({
  code: "S214001",
  name: "盂县鑫众汽车销售有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733038",
  name: "余姚宇顺汽车销售服务有限公司"
});

_citys["湖南"]["株洲市"].push({
  code: "S243004",
  name: "攸县健车行汽车服务有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S213013",
  name: "永年县瑞龙汽车销售服务有限公司"
});

_citys["浙江"]["金华市"].push({
  code: "S733054",
  name: "永康市华奥汽车销售服务有限公司"
});

_citys["河南"]["商丘市"].push({
  code: "S241004",
  name: "永城市华瑞汽车销售有限公司"
});

_citys["辽宁"]["营口市"].push({
  code: "S221006",
  name: "营口红运顺众汽车销售服务有限公司"
});

_citys["辽宁"]["营口市"].push({
  code: "S721027",
  name: "营口红运汇众汽车销售服务有限公司"
});

_citys["江西"]["鹰潭"].push({
  code: "S736021",
  name: "鹰潭华宏汽车有限公司"
});

_citys["湖南"]["益阳市"].push({
  code: "S743020",
  name: "益阳永通汽车销售服务有限公司"
});

_citys["浙江"]["金华市"].push({
  code: "S733019",
  name: "义乌市恒通汽车销售服务有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732084",
  name: "宜兴新东方汽车销售服务有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732043",
  name: "宜兴市广海元汽车销售服务有限公司"
});

_citys["湖北"]["宜昌市"].push({
  code: "S942039",
  name: "宜昌恒信众联汽车销售服务有限公司"
});

_citys["湖北"]["宜昌市"].push({
  code: "S242001",
  name: "宜昌都顺汽车贸易有限公司"
});

_citys["湖北"]["宜昌市"].push({
  code: "S942023",
  name: "宜昌德顺汽车销售服务有限公司"
});

_citys["四川"]["宜宾"].push({
  code: "S751048",
  name: "宜宾申蓉致鑫汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237011",
  name: "沂水大华汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237008",
  name: "沂南大华汽车销售服务有限公司"
});

_citys["黑龙江"]["伊春市"].push({
  code: "S223002",
  name: "伊春龙海德众汽车销售有限公司"
});

_citys["山西"]["阳泉"].push({
  code: "S714022",
  name: "阳泉市庞大一众汽车销售有限公司"
});

_citys["广东"]["阳江市"].push({
  code: "S744065",
  name: "阳江安捷源众汽车销售服务有限公司"
});

_citys["江苏"]["扬州市"].push({
  code: "S732065",
  name: "扬州金通汽车销售服务有限公司"
});

_citys["江苏"]["扬州市"].push({
  code: "S232007",
  name: "扬州金迈汽车销售服务有限公司"
});

_citys["江苏"]["扬州市"].push({
  code: "S232006",
  name: "扬州金沪汽车销售服务有限公司"
});

_citys["江苏"]["盐城市"].push({
  code: "S732061",
  name: "盐城鑫湖贸易有限公司"
});

_citys["吉林"]["延边朝鲜族自治州"].push({
  code: "S722021",
  name: "延吉中诚汽车贸易有限公司"
});

_citys["陕西"]["延安市"].push({
  code: "S761010",
  name: "延安市宝塔区黄泰有限责任公司"
});

_citys["山东"]["烟台市"].push({
  code: "S737018",
  name: "烟台市大成汽车销售有限公司"
});

_citys["山东"]["烟台市"].push({
  code: "S737043",
  name: "烟台瑞源汽车销售有限公司"
});

_citys["山东"]["烟台市"].push({
  code: "S737016",
  name: "烟台东联汽车销售有限公司"
});

_citys["云南"]["曲靖市"].push({
  code: "S212005",
  name: "宣威市添福源汽车贸易有限公司"
});

_citys["安徽"]["宣城市"].push({
  code: "S734019",
  name: "宣城亚宝汽车销售服务有限公司"
});

_citys["河南"]["许昌市"].push({
  code: "S741014",
  name: "许昌恒业汽车销售有限公司"
});

_citys["江苏"]["徐州市"].push({
  code: "S732058",
  name: "徐州金源汽车服务有限公司"
});

_citys["江苏"]["徐州市"].push({
  code: "S232002",
  name: "徐州金宇汽车贸易有限公司"
});

_citys["江苏"]["徐州市"].push({
  code: "S232001",
  name: "徐州金泉汽车贸易有限公司"
});

_citys["江苏"]["徐州市"].push({
  code: "S732033",
  name: "徐州金茂汽车贸易有限公司"
});

_citys["安徽"]["宿州市"].push({
  code: "S734018",
  name: "宿州市丽豪汽车销售服务有限公司"
});

_citys["江苏"]["宿迁市"].push({
  code: "S232014",
  name: "宿迁中瑞汽车服务有限公司"
});

_citys["江苏"]["宿迁市"].push({
  code: "S732046",
  name: "宿迁大中汽车服务有限公司"
});

_citys["贵州"]["兴义市"].push({
  code: "S752003",
  name: "兴义市恒信众联汽车销售服务有限公司"
});

_citys["内蒙古"]["兴安盟"].push({
  code: "S715030",
  name: "兴安盟利丰泰宇汽车销售有限公司"
});

_citys["河北"]["邢台市"].push({
  code: "S713022",
  name: "邢台亿龙汽车销售服务有限公司"
});

_citys["河北"]["邢台市"].push({
  code: "S713035",
  name: "邢台瑞龙汽车服务有限公司"
});

_citys["河北"]["邢台市"].push({
  code: "S713043",
  name: "邢台阔龙汽车销售服务有限公司"
});

_citys["河南"]["信阳市"].push({
  code: "S741028",
  name: "信阳合众汇金汽车销售服务有限公司"
});

_citys["江苏"]["徐州市"].push({
  code: "S232013",
  name: "新沂大中汽车贸易有限公司"
});

_citys["河南"]["新乡市"].push({
  code: "S741009",
  name: "新乡市世通汽车贸易有限责任公司"
});

_citys["河南"]["新乡市"].push({
  code: "S741032",
  name: "新乡市坤丰汽车销售有限公司"
});

_citys["山东"]["泰安市"].push({
  code: "S737057",
  name: "新泰市创新汽车服务有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741041",
  name: "新密恒信众联汽车销售服务有限公司"
});

_citys["新疆"]["乌鲁木齐市"].push({
  code: "S765008",
  name: "新疆天汇华宇汽车销售服务有限责任公司"
});

_citys["新疆"]["伊犁"].push({
  code: "S765018",
  name: "新疆天汇华博汽车销售服务有限公司"
});

_citys["新疆"]["乌鲁木齐市"].push({
  code: "S765009",
  name: "新疆庞大一众汽车销售服务有限公司"
});

_citys["新疆"]["乌鲁木齐市"].push({
  code: "S765007",
  name: "新疆汇捷汽车销售服务有限责任公司"
});

_citys["浙江"]["绍兴市"].push({
  code: "S233002",
  name: "新昌县越达汽车有限公司"
});

_citys["山西"]["忻州市"].push({
  code: "S714031",
  name: "忻州大昌汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713057",
  name: "辛集市车是客汽车贸易有限公司"
});

_citys["山西"]["孝义市"].push({
  code: "S214004",
  name: "孝义市德众汽贸有限公司"
});

_citys["湖北"]["孝感"].push({
  code: "S942026",
  name: "孝感国富汽车销售服务有限公司"
});

_citys["湖北"]["襄阳市"].push({
  code: "S942031",
  name: "襄阳华骏汽车销售服务有限公司"
});

_citys["湖北"]["襄阳市"].push({
  code: "S942035",
  name: "襄阳恒信众联汽车销售服务有限公司"
});

_citys["湖南"]["湘潭市"].push({
  code: "S243003",
  name: "湘乡湘健汽车服务有限公司"
});

_citys["湖南"]["吉首市"].push({
  code: "S743025",
  name: "湘西永通汽车销售服务有限公司"
});

_citys["湖南"]["湘潭市"].push({
  code: "S843001",
  name: "湘潭市健车行汽车服务有限公司"
});

_citys["湖南"]["湘潭市"].push({
  code: "S942033",
  name: "湘潭东富汽车销售服务有限公司"
});

_citys["陕西"]["咸阳市"].push({
  code: "S761025",
  name: "咸阳恒源汽贸有限公司"
});

_citys["陕西"]["咸阳市"].push({
  code: "S761021",
  name: "咸阳恒丰汽贸有限公司"
});

_citys["湖北"]["咸宁市"].push({
  code: "S942028",
  name: "咸宁恒信众联汽车销售服务有限公司"
});

_citys["山东"]["德州市"].push({
  code: "S237012",
  name: "夏津汇达汽车销售有限公司"
});

_citys["内蒙古"]["锡林郭勒盟"].push({
  code: "S715028",
  name: "锡林浩特庞大一众汽车销售服务有限公司"
});

_citys["云南"]["西双版纳"].push({
  code: "S753026",
  name: "西双版纳捷成通达汽车销售有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761020",
  name: "西安新白云汽车销售服务有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761007",
  name: "西安秦川唐都机电汽车配件销售有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761023",
  name: "西安恒丰四站汽车销售有限公司"
});

_citys["甘肃"]["武威"].push({
  code: "S762018",
  name: "武威赛亚汇众汽车销售服务有限公司"
});

_citys["湖北"]["武汉市"].push({
  code: "S942016",
  name: "武汉康顺集团汽车贸易有限公司"
});

_citys["湖北"]["武汉市"].push({
  code: "S942034",
  name: "武汉恒信众联汽车销售服务有限公司"
});

_citys["湖北"]["武汉市"].push({
  code: "S942040",
  name: "武汉恒信一通汽车销售服务有限公司"
});

_citys["湖北"]["武汉市"].push({
  code: "S942032",
  name: "武汉富尔汽车销售服务有限公司"
});

_citys["湖北"]["武汉市"].push({
  code: "S942036",
  name: "武汉东富优诚汽车销售服务有限公司"
});

_citys["宁夏"]["吴忠市"].push({
  code: "S264001",
  name: "吴忠市润众汽车销售服务有限公司"
});

_citys["安徽"]["芜湖市"].push({
  code: "S734012",
  name: "芜湖亚夏汽车股份有限公司"
});

_citys["安徽"]["芜湖市"].push({
  code: "S734031",
  name: "芜湖协众汽车销售服务有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732040",
  name: "无锡市新纪元众友汽车销售服务有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S932018",
  name: "无锡申荣汽车有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732007",
  name: "无锡东方荣昌汽车销售服务有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732068",
  name: "无锡宝达汽车销售服务有限公司"
});

_citys["内蒙古"]["鄂尔多斯市"].push({
  code: "S215001",
  name: "乌审旗鑫安亿恒汽车销售有限责任公司"
});

_citys["新疆"]["乌鲁木齐市"].push({
  code: "S765016",
  name: "乌鲁木齐庞大腾众汽车销售有限公司"
});

_citys["内蒙古"]["乌兰察布市"].push({
  code: "S715026",
  name: "乌兰察布市捷通众达汽车销售服务有限公司"
});

_citys["内蒙古"]["乌海"].push({
  code: "S715022",
  name: "乌海市鑫安众诚汽贸有限公司"
});

_citys["云南"]["文山市"].push({
  code: "S753030",
  name: "文山捷惠汽车销售服务有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733010",
  name: "温州市瓯海荣新汽车修配有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733024",
  name: "温州市宝捷汽车销售有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733069",
  name: "温州欧龙汽车有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733018",
  name: "温州华科欧龙汽车销售服务有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733060",
  name: "温州国瑞汽车销售服务有限公司"
});

_citys["浙江"]["台州市"].push({
  code: "S733036",
  name: "温岭市金桥汽车销售服务有限公司"
});

_citys["陕西"]["渭南市"].push({
  code: "S761018",
  name: "渭南佳燕汽车贸易有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737036",
  name: "潍坊市鑫达汽车贸易有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737039",
  name: "潍坊广潍发达商贸有限公司"
});

_citys["山东"]["威海市"].push({
  code: "S737098",
  name: "威海中升汇众汽车销售服务有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S721018",
  name: "瓦房店市顺发物资商贸有限公司"
});

_citys["贵州"]["铜仁市"].push({
  code: "S752008",
  name: "铜仁恒信众联汽车销售服务有限公司"
});

_citys["安徽"]["铜陵市"].push({
  code: "S734024",
  name: "铜陵市海达汽车销售服务有限公司"
});

_citys["陕西"]["铜川市"].push({
  code: "S261002",
  name: "铜川新区黄泰汽车销售服务有限责任公司"
});

_citys["浙江"]["嘉兴市"].push({
  code: "s733046",
  name: "桐乡博众汽车销售有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S233001",
  name: "桐庐元通汽车有限公司"
});

_citys["内蒙古"]["通辽市"].push({
  code: "S715034",
  name: "通辽市利丰泰宇汽车销售服务有限公司"
});

_citys["内蒙古"]["通辽市"].push({
  code: "S715029",
  name: "通辽庞大一众汽车销售服务有限公司"
});

_citys["吉林"]["通化市"].push({
  code: "S722023",
  name: "通化鑫宇汽车销售有限公司"
});

_citys["辽宁"]["铁岭市"].push({
  code: "S721028",
  name: "铁岭市顺峰（集团）汽车销售服务有限公司"
});

_citys["辽宁"]["铁岭市"].push({
  code: "S721034",
  name: "铁岭和成汽车销售服务有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712013",
  name: "天津市澎众汽车贸易服务有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712005",
  name: "天津市捷兴汽车商贸有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712003",
  name: "天津市捷世通汽车贸易有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712012",
  name: "天津市捷茂通汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712008",
  name: "天津庞大一众汽车销售服务有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712006",
  name: "天津捷众汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712015",
  name: "天津捷拓汽车销售服务有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S912003",
  name: "天津捷通汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712010",
  name: "天津捷锐汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712011",
  name: "天津华泰通汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S253001",
  name: "天津华世通汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712004",
  name: "天津浩众汽车贸易服务有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712009",
  name: "天津海联力通汽车销售服务有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712007",
  name: "天津诚信通汽车销售有限公司"
});

_citys["天津"]["天津市"].push({
  code: "S712014",
  name: "天津博兴亚泰汽车销售服务有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713045",
  name: "唐山市庞大众跃汽车销售服务有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713034",
  name: "唐山市庞大一众汽车销售有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713005",
  name: "唐山市冀东汽车销售有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713056",
  name: "唐山市富瑞汽车贸易有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713016",
  name: "唐山朗基伦汽车销售有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237004",
  name: "郯城大华汽车销售服务有限公司"
});

_citys["江苏"]["泰州市"].push({
  code: "s732057",
  name: "泰州金太阳汽车贸易有限公司"
});

_citys["江苏"]["泰州市"].push({
  code: "S232004",
  name: "泰州金浦汽车销售服务有限公司"
});

_citys["江苏"]["泰州市"].push({
  code: "S732076",
  name: "泰州金坤汽车销售服务有限公司"
});

_citys["江苏"]["泰州市"].push({
  code: "S232005",
  name: "泰州金邦汽车销售服务有限公司"
});

_citys["江苏"]["泰州市"].push({
  code: "S732075",
  name: "泰州金翱汽车销售服务有限公司"
});

_citys["山东"]["泰安市"].push({
  code: "S737035",
  name: "泰安中租汽车贸易有限公司"
});

_citys["山东"]["泰安市"].push({
  code: "S737080",
  name: "泰安仁博汽车销售有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732060",
  name: "太仓市森联汽车销售服务有限公司"
});

_citys["浙江"]["台州市"].push({
  code: "S733052",
  name: "台州市汇腾汽车销售服务有限公司"
});

_citys["浙江"]["台州市"].push({
  code: "S233004",
  name: "台州康桥众致汽车有限公司"
});

_citys["浙江"]["台州市"].push({
  code: "S733040",
  name: "台州金桥汽车销售服务有限公司"
});

_citys["浙江"]["台州市"].push({
  code: "S733055",
  name: "台州轿辰康发汽车销售服务有限公司"
});

_citys["四川"]["遂宁市"].push({
  code: "S751035",
  name: "遂宁市瑞胜汽车销售有限公司"
});

_citys["湖北"]["随州"].push({
  code: "S942037",
  name: "随州东富汽车销售服务有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732085",
  name: "苏州元通汽车销售服务有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S932014",
  name: "苏州市国懋汽车销售服务有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "s732054",
  name: "苏州市德宝车业有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732023",
  name: "苏州欧亚伟业实业有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732036",
  name: "苏州汇凯汽车贸易有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732080",
  name: "苏州德诚汽车销售服务有限公司"
});

_citys["吉林"]["松原市"].push({
  code: "S722040",
  name: "松原汇众汽车销售服务有限公司"
});

_citys["吉林"]["四平"].push({
  code: "S722036",
  name: "四平汇众汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751006",
  name: "四川长征汽车贸易有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S951001",
  name: "四川一汽贸易有限责任公司"
});

_citys["四川"]["眉山市"].push({
  code: "S751024",
  name: "四川省眉山市建国汽车有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751042",
  name: "四川申蓉雅泰汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "s751026",
  name: "四川申蓉和浩汽车销售服务有限公司"
});

_citys["四川"]["眉山市"].push({
  code: "S251001",
  name: "四川仁寿恒信汽车销售有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751022",
  name: "四川精典吉众汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751047",
  name: "四川金信华远汽车销售有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751016",
  name: "四川华星大众汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S251007",
  name: "四川虹润汽车贸易有限公司"
});

_citys["四川"]["德阳市"].push({
  code: "S251002",
  name: "四川广汉恒达汽车销售有限公司"
});

_citys["四川"]["德阳市"].push({
  code: "S751017",
  name: "四川德阳川西汽车销售服务有限公司"
});

_citys["山西"]["朔州市"].push({
  code: "S714017",
  name: "朔州市双良汽车有限公司"
});

_citys["黑龙江"]["双鸭山市"].push({
  code: "S723028",
  name: "双鸭山安诚汽车销售服务有限公司"
});

_citys["吉林"]["双辽"].push({
  code: "S222002",
  name: "双辽汇众汽车销售服务有限公司"
});

_citys["江苏"]["宿迁市"].push({
  code: "S232003",
  name: "沭阳大中汽车服务有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737068",
  name: "寿光富泓汽车销售服务有限公司"
});

_citys["宁夏"]["石嘴山市"].push({
  code: "S764004",
  name: "石嘴山市朗宁汽车销售服务有限责任公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713039",
  name: "石家庄市庞大一众汽车销售有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713027",
  name: "石家庄市冀中汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713058",
  name: "石家庄晨阳详云汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713018",
  name: "石家庄晨阳汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S213017",
  name: "石家庄晨阳汇众汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713042",
  name: "石家庄晨阳和众汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S213016",
  name: "石家庄晨阳博众汽车贸易有限公司"
});

_citys["新疆"]["石河子"].push({
  code: "S265001",
  name: "石河子市大得汽车销售服务有限公司"
});

_citys["浙江"]["绍兴市"].push({
  code: "S733062",
  name: "嵊州市龙骏汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S721037",
  name: "沈阳市庞大一众汽车销售有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S221001",
  name: "沈阳惠华新业汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S721031",
  name: "沈阳和昊汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S721025",
  name: "沈阳合众汽车服务有限公司"
});

_citys["陕西"]["榆林市"].push({
  code: "S761022",
  name: "神木县恒捷汽贸有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S744064",
  name: "深圳市清水河奇建贸易有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S944012",
  name: "深圳市奇建贸易有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S744051",
  name: "深圳市南方腾龙汽车销售服务有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S744023",
  name: "深圳市昊天林实业有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S744075",
  name: "深圳市昊天林安琪汽车有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S744063",
  name: "深圳市北奇建贸易有限公司"
});

_citys["广东"]["深圳市"].push({
  code: "S744021",
  name: "深圳市安进汽车贸易有限公司"
});

_citys["江苏"]["盐城市"].push({
  code: "S232016",
  name: "射阳宝达汽车销售服务有限公司"
});

_citys["浙江"]["绍兴市"].push({
  code: "S733041",
  name: "绍兴市汇丰汽车销售服务有限公司"
});

_citys["浙江"]["绍兴市"].push({
  code: "S733028",
  name: "绍兴清风汽车销售服务有限公司"
});

_citys["湖南"]["邵阳市"].push({
  code: "S743013",
  name: "邵阳市宝庆汽车超市有限公司"
});

_citys["广东"]["韶关市"].push({
  code: "S744045",
  name: "韶关市亿华汽车贸易有限公司"
});

_citys["浙江"]["绍兴市"].push({
  code: "S733045",
  name: "上虞清风汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931018",
  name: "上海永达众鑫汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931019",
  name: "上海永达鑫悦汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931007",
  name: "上海永达汽车浦东贸易有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S732056",
  name: "上海永达豪捷汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931002",
  name: "上海一汽汽车服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931014",
  name: "上海慕森汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931008",
  name: "上海开隆汽车服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931015",
  name: "上海锦腾汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S732053",
  name: "上海金旋汽车服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931016",
  name: "上海交运起申汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931005",
  name: "上海嘉安汽车销售有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931012",
  name: "上海华星众捷汽车销售有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931020",
  name: "上海华星鸿捷汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931013",
  name: "上海虹湾贸易有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931017",
  name: "上海东联北松汽车销售服务有限公司"
});

_citys["上海"]["上海市"].push({
  code: "S931011",
  name: "上海宝乐汽车销售服务有限公司"
});

_citys["河南"]["商丘市"].push({
  code: "S841002",
  name: "商丘市众捷汽车销售有限公司"
});

_citys["广东"]["汕尾"].push({
  code: "S244001",
  name: "汕尾市君乐汽车销售服务有限公司"
});

_citys["广东"]["汕头市"].push({
  code: "S744024",
  name: "汕头市裕丰交通经济发展有限公司"
});

_citys["广东"]["汕头市"].push({
  code: "S744072",
  name: "汕头市庞大一众汽车销售服务有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761024",
  name: "陕西尊荣致诚汽车贸易有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761009",
  name: "陕西鹰之杰汽车贸易有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761014",
  name: "陕西天一汽车销售服务有限责任公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761013",
  name: "陕西东明汽车商行有限公司"
});

_citys["陕西"]["西安市"].push({
  code: "S761003",
  name: "陕西百佳汽车贸易有限公司"
});

_citys["山西"]["太原市"].push({
  code: "S714016",
  name: "山西中汽贸联汽车销售有限公司"
});

_citys["山西"]["太原市"].push({
  code: "S714009",
  name: "山西志国星赛车发展有限公司"
});

_citys["山西"]["长治市"].push({
  code: "S714013",
  name: "山西省长治市飞路汽车贸易有限公司"
});

_citys["山西"]["运城市"].push({
  code: "S714028",
  name: "山西诺维兰集团运城瑞众汽车销售服务有限公司"
});

_citys["山西"]["运城市"].push({
  code: "S214002",
  name: "山西诺维兰集团临猗瑞捷汽车销售服务有限公司"
});

_citys["山西"]["运城市"].push({
  code: "S214003",
  name: "山西诺维兰集团河津市瑞腾汽车销售服务有限公司"
});

_citys["山西"]["吕梁市"].push({
  code: "S714024",
  name: "山西吕梁大昌众达汽车服务有限公司"
});

_citys["山西"]["太原市"].push({
  code: "S714026",
  name: "山西大昌通源汽车销售服务有限公司"
});

_citys["山西"]["太原市"].push({
  code: "S714019",
  name: "山西大昌轿车销售服务有限公司"
});

_citys["山东"]["枣庄市"].push({
  code: "S737070",
  name: "山东永正集团东联汽车城有限公司"
});

_citys["山东"]["济南市"].push({
  code: "S637009",
  name: "山东银座汽车贸易有限公司"
});

_citys["山东"]["滨州市"].push({
  code: "S237002",
  name: "山东无棣腾翔汽车销售服务有限公司"
});

_citys["山东"]["济南市"].push({
  code: "S737061",
  name: "山东首佳汽车销售服务有限公司"
});

_citys["山东"]["济南市"].push({
  code: "S737050",
  name: "山东润捷汽车销售服务有限公司"
});

_citys["山东"]["烟台市"].push({
  code: "S737017",
  name: "山东龙口富龙汽车有限公司"
});

_citys["山东"]["济南市"].push({
  code: "s737071",
  name: "山东金宝利汽车销售服务有限公司"
});

_citys["山东"]["东营市"].push({
  code: "S737093",
  name: "山东广饶腾翔汽车销售服务有限公司"
});

_citys["山东"]["滨州市"].push({
  code: "S737051",
  name: "山东滨州宝捷汽车销售服务有限公司"
});

_citys["福建"]["厦门市"].push({
  code: "S735022",
  name: "厦门致远汽车有限公司"
});

_citys["福建"]["厦门市"].push({
  code: "S735007",
  name: "厦门市盈众汽车销售有限公司"
});

_citys["福建"]["厦门市"].push({
  code: "S735032",
  name: "厦门明至汽车有限公司"
});

_citys["福建"]["厦门市"].push({
  code: "S735026",
  name: "厦门君达汽车有限公司"
});

_citys["海南"]["三亚"].push({
  code: "S746006",
  name: "三亚长久博众汽车服务有限公司"
});

_citys["福建"]["三明市"].push({
  code: "S735021",
  name: "三明盈众汽车有限公司"
});

_citys["河南"]["三门峡市"].push({
  code: "S741025",
  name: "三门峡九都汽车有限公司"
});

_citys["河北"]["廊坊市"].push({
  code: "S213003",
  name: "三河巨丰弘迪汽车维修服务有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733014",
  name: "瑞安市国荣汽车维修服务有限公司"
});

_citys["山东"]["威海市"].push({
  code: "S237015",
  name: "乳山中升汇众汽车销售服务有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732064",
  name: "如皋神州汽车销售服务有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732081",
  name: "如东德众汽车销售服务有限公司"
});

_citys["山东"]["威海市"].push({
  code: "S737077",
  name: "荣成市众奥达汽车销售服务有限公司"
});

_citys["山东"]["日照市"].push({
  code: "S737073",
  name: "日照市众达汽车销售服务有限公司"
});

_citys["山东"]["日照市"].push({
  code: "S737082",
  name: "日照市腾达众晟汽车销售服务有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S913006",
  name: "任丘市瑞丰建筑有限公司"
});

_citys["福建"]["泉州"].push({
  code: "S735019",
  name: "泉州盈众汽车销售服务有限公司"
});

_citys["福建"]["泉州"].push({
  code: "S935010",
  name: "泉州大众汽车销售服务有限公司"
});

_citys["云南"]["曲靖市"].push({
  code: "S753027",
  name: "曲靖宝捷汽车销售有限公司"
});

_citys["浙江"]["衢州"].push({
  code: "S733043",
  name: "衢州祥龙汽车有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751052",
  name: "邛崃恒信汽车销售有限公司"
});

_citys["甘肃"]["庆阳"].push({
  code: "S762019",
  name: "庆阳恒众汽车销售服务有限公司"
});

_citys["广东"]["清远"].push({
  code: "S744052",
  name: "清远南方合众汽车销售服务有限公司"
});

_citys["河北"]["邢台市"].push({
  code: "S213018",
  name: "清河县惠龙汽车销售服务有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737065",
  name: "青州宝悦汽车销售服务有限公司"
});

_citys["河北"]["秦皇岛市"].push({
  code: "S213005",
  name: "青龙满族自治县庞大一众汽车销售有限公司"
});

_citys["青海"]["海东"].push({
  code: "S263002",
  name: "青海祥瑞通汽车贸易有限公司"
});

_citys["青海"]["西宁市"].push({
  code: "S763002",
  name: "青海通瑞汽车贸易有限公司"
});

_citys["青海"]["西宁市"].push({
  code: "S763001",
  name: "青海海通汽车贸易有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737091",
  name: "青岛同鑫汽车销售服务有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737094",
  name: "青岛瑞辰汽车销售服务有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737083",
  name: "青岛庞大一众汽车销售有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S237007",
  name: "青岛莱西市瑞富春汽车销售服务有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737059",
  name: "青岛华世通实业发展有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737053",
  name: "青岛亨通汽车销售服务有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737090",
  name: "青岛亨联汽车销售有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737054",
  name: "青岛迪生源汽车销售服务有限公司"
});

_citys["山东"]["青岛市"].push({
  code: "S737032",
  name: "青岛大栏汽车销售有限公司"
});

_citys["河北"]["秦皇岛市"].push({
  code: "S713004",
  name: "秦皇岛新源汽车销售维修有限公司"
});

_citys["河北"]["秦皇岛市"].push({
  code: "S713029",
  name: "秦皇岛市庞大一众汽车销售有限公司"
});

_citys["广西"]["钦州"].push({
  code: "S245001",
  name: "钦州弘捷汽车销售服务有限公司"
});

_citys["湖北"]["潜江"].push({
  code: "S242002",
  name: "潜江恒信众联汽车销售服务有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713036",
  name: "迁安市庞大一众汽车销售有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732077",
  name: "启东常众文峰汽车销售服务有限公司"
});

_citys["黑龙江"]["齐齐哈尔市"].push({
  code: "S723021",
  name: "齐齐哈尔粤华轿车销售有限公司"
});

_citys["黑龙江"]["齐齐哈尔市"].push({
  code: "S723027",
  name: "齐齐哈尔华明晟通汽车销售有限公司"
});

_citys["山东"]["德州市"].push({
  code: "S237001",
  name: "齐河华腾汽车销售有限公司"
});

_citys["黑龙江"]["七台河"].push({
  code: "S723032",
  name: "七台河市龙海汇众汽车销售服务有限公司"
});

_citys["云南"]["普洱"].push({
  code: "S753028",
  name: "普洱捷顺通达汽车销售服务有限公司"
});

_citys["河南"]["濮阳市"].push({
  code: "S741015",
  name: "濮阳市宝捷汽车销售服务有限公司"
});

_citys["福建"]["莆田市"].push({
  code: "S735012",
  name: "莆田市奇奇贸易发展有限公司"
});

_citys["江西"]["萍乡市"].push({
  code: "S736022",
  name: "萍乡市永安昌荣实业有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237010",
  name: "平邑大华汽车销售服务有限公司"
});

_citys["甘肃"]["平凉"].push({
  code: "S762016",
  name: "平凉润之杰汽车销售服务有限公司"
});

_citys["湖南"]["岳阳市"].push({
  code: "S243002",
  name: "平江县邦田汽车服务有限公司"
});

_citys["河南"]["平顶山"].push({
  code: "S741020",
  name: "平顶山市华天汽车销售服务有限公司"
});

_citys["河南"]["平顶山"].push({
  code: "S741035",
  name: "平顶山吉祥地汽车销售有限公司"
});

_citys["江苏"]["徐州市"].push({
  code: "S732088",
  name: "邳州大中汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S251006",
  name: "彭州瑞龙汽车销售服务有限公司"
});

_citys["山西"]["大同市"].push({
  code: "S714025",
  name: "庞大大同南郊一众汽车销售有限公司"
});

_citys["辽宁"]["盘锦"].push({
  code: "S721030",
  name: "盘锦隆达汽车产品销售服务有限公司"
});

_citys["辽宁"]["盘锦"].push({
  code: "S721049",
  name: "盘锦伯骏汽车销售服务有限公司"
});

_citys["四川"]["攀枝花市"].push({
  code: "S951012",
  name: "攀枝花市力行工贸有限责任公司"
});

_citys["宁夏"]["银川市"].push({
  code: "S764001",
  name: "宁夏润众汽车销售服务有限公司"
});

_citys["宁夏"]["银川市"].push({
  code: "S764003",
  name: "宁夏润之星汽车销售服务有限公司"
});

_citys["宁夏"]["银川市"].push({
  code: "S764002",
  name: "宁夏润之杰汽车销售服务有限责任公司"
});

_citys["安徽"]["宣城市"].push({
  code: "S234001",
  name: "宁国亚宝汽车销售服务有限公司"
});

_citys["福建"]["宁德"].push({
  code: "S735025",
  name: "宁德盈众汽车有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733047",
  name: "宁波中基甬耀汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733079",
  name: "宁波元通宝通汽车有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733042",
  name: "宁波市康发汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733059",
  name: "宁波明众汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733011",
  name: "宁波联合汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733065",
  name: "宁波轿辰康嘉汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733082",
  name: "宁波恒众汽车销售服务有限公司"
});

_citys["内蒙古"]["呼和浩特市"].push({
  code: "S715023",
  name: "内蒙古众和汽车销售服务有限公司"
});

_citys["内蒙古"]["呼和浩特市"].push({
  code: "S715014",
  name: "内蒙古亿阳汇众汽车销售有限公司"
});

_citys["内蒙古"]["呼和浩特市"].push({
  code: "S715021",
  name: "内蒙古利丰泰宇汽车服务有限公司"
});

_citys["四川"]["内江市"].push({
  code: "S751038",
  name: "内江瑞龙汽车销售服务有限公司"
});

_citys["河南"]["南阳市"].push({
  code: "S741027",
  name: "南阳众业汽车有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732050",
  name: "南通鑫湖汽车贸易服务有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732048",
  name: "南通新城集团有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732062",
  name: "南通文峰伟嘉汽车销售服务有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732063",
  name: "南通大生众和汽车销售服务有限公司"
});

_citys["福建"]["南平市"].push({
  code: "S735024",
  name: "南平盈众汽车有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732069",
  name: "南京协众瑞东汽车有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732051",
  name: "南京协众东麒汽车有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S232015",
  name: "南京溧水协众汽车销售服务有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732021",
  name: "南京朗驰集团苏润汽车销售服务有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732087",
  name: "南京江北协众汽车销售服务有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732090",
  name: "南京东联香江汽车销售服务有限公司"
});

_citys["四川"]["南充市"].push({
  code: "S751045",
  name: "南充明云运行车业有限公司"
});

_citys["四川"]["南充市"].push({
  code: "S751039",
  name: "南充明云惠民车业有限公司"
});

_citys["江西"]["南昌市"].push({
  code: "S736005",
  name: "南昌欧亚汽车销售有限公司"
});

_citys["江西"]["南昌市"].push({
  code: "S736024",
  name: "南昌恒信一路汽车销售服务有限公司"
});

_citys["福建"]["泉州"].push({
  code: "S735033",
  name: "南安盈众汽车销售服务有限公司"
});

_citys["黑龙江"]["牡丹江市"].push({
  code: "S723014",
  name: "牡丹江中信汽车销售服务有限责任公司"
});

_citys["广东"]["梅州市"].push({
  code: "S744055",
  name: "梅州市新宇汽车销售服务有限公司"
});

_citys["广东"]["茂名市"].push({
  code: "S744043",
  name: "茂名市茂南茂汉汽车贸易有限公司"
});

_citys["安徽"]["马鞍山市"].push({
  code: "s734023",
  name: "马鞍山协众汽车销售有限公司"
});

_citys["河南"]["漯河市"].push({
  code: "S741011",
  name: "漯河市宝捷汽车销售服务有限公司"
});

_citys["河南"]["洛阳市"].push({
  code: "S241001",
  name: "洛阳盛业汽车有限公司"
});

_citys["河南"]["洛阳市"].push({
  code: "S741023",
  name: "洛阳开元汽车销售服务有限公司"
});

_citys["河南"]["洛阳市"].push({
  code: "S741034",
  name: "洛阳吉众汽车有限公司"
});

_citys["河南"]["洛阳市"].push({
  code: "S741005",
  name: "洛阳伯乐汽车有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S713049",
  name: "滦县庞大一众汽车销售有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S213006",
  name: "滦南荣川朗基伦汽车销售有限公司"
});

_citys["四川"]["泸州市"].push({
  code: "S751019",
  name: "泸州松明汽贸有限公司"
});

_citys["湖南"]["娄底市"].push({
  code: "S743018",
  name: "娄底大汉汽车贸易有限公司"
});

_citys["福建"]["龙岩市"].push({
  code: "S735031",
  name: "龙岩盈众汽车有限公司"
});

_citys["福建"]["龙岩市"].push({
  code: "S735015",
  name: "龙岩市众邦汽车贸易有限公司"
});

_citys["贵州"]["六盘水市"].push({
  code: "S752006",
  name: "六盘水和通汽车销售服务有限公司"
});

_citys["安徽"]["六安市"].push({
  code: "S734022",
  name: "六安和众汽车销售服务有限公司"
});

_citys["广西"]["柳州市"].push({
  code: "S745020",
  name: "柳州鑫广达博腾汽车销售服务有限公司"
});

_citys["广西"]["柳州市"].push({
  code: "S745002",
  name: "柳州市盛铭汽车贸易有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743026",
  name: "浏阳永通汽车销售服务有限公司"
});

_citys["河南"]["三门峡市"].push({
  code: "S741042",
  name: "灵宝众诚汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S737081",
  name: "临沂久华汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S737029",
  name: "临沂佳轮汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S737067",
  name: "临沂东华汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S737064",
  name: "临沂大华汽车销售服务有限公司"
});

_citys["甘肃"]["临夏"].push({
  code: "S262002",
  name: "临夏州源通汽车销售有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237005",
  name: "临沭东华汽车销售服务有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737078",
  name: "临朐广潍顺达汽车销售服务有限公司"
});

_citys["山西"]["临汾市"].push({
  code: "S714032",
  name: "临汾天健思源汽车销售服务有限公司"
});

_citys["山西"]["临汾市"].push({
  code: "S714030",
  name: "临汾天健国风汽车销售服务有限公司"
});

_citys["云南"]["临沧"].push({
  code: "S753033",
  name: "临沧市添福源汽车贸易有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733061",
  name: "临安元通宝通汽车有限公司"
});

_citys["河南"]["安阳市"].push({
  code: "S241007",
  name: "林州德众汽车销售服务有限公司"
});

_citys["山东"]["聊城市"].push({
  code: "S737038",
  name: "聊城交运集团汽车销售服务有限责任公司"
});

_citys["山东"]["聊城市"].push({
  code: "S737075",
  name: "聊城北斗泰众汽车销售有限公司"
});

_citys["吉林"]["辽源"].push({
  code: "S722059",
  name: "辽源市聚鑫汽车销售服务有限公司"
});

_citys["辽宁"]["辽阳市"].push({
  code: "S721033",
  name: "辽阳凯众汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S221002",
  name: "辽宁惠华新业集团新民汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S221003",
  name: "辽宁惠华新业集团辽中汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S721024",
  name: "辽宁惠华汽车集团有限公司"
});

_citys["辽宁"]["朝阳市"].push({
  code: "S721038",
  name: "辽宁惠华集团朝阳汽车销售服务有限公司"
});

_citys["辽宁"]["本溪市"].push({
  code: "S721039",
  name: "辽宁惠华集团本溪汽车销售服务有限公司"
});

_citys["辽宁"]["沈阳市"].push({
  code: "S921003",
  name: "辽宁和兴大众汽车销售服务有限公司"
});

_citys["湖南"]["娄底市"].push({
  code: "S243006",
  name: "涟源市大汉汽车贸易有限公司"
});

_citys["江苏"]["连云港市"].push({
  code: "S232011",
  name: "连云港康泽汽车销售有限公司"
});

_citys["江苏"]["连云港市"].push({
  code: "S232008",
  name: "连云港康瀛汽车销售有限公司"
});

_citys["江苏"]["连云港市"].push({
  code: "S732073",
  name: "连云港康瑞汽车销售服务有限公司"
});

_citys["江苏"]["连云港市"].push({
  code: "S232010",
  name: "连云港康锦汽车销售有限公司"
});

_citys["江苏"]["连云港市"].push({
  code: "S732032",
  name: "连云港康华汽车销售服务有限公司"
});

_citys["江苏"]["常州市"].push({
  code: "S732067",
  name: "溧阳宝达汽车销售服务有限公司"
});

_citys["浙江"]["丽水市"].push({
  code: "S733027",
  name: "丽水市恒昌汽车有限公司"
});

_citys["云南"]["丽江市"].push({
  code: "S212001",
  name: "丽江恒盛通达汽车销售有限公司"
});

_citys["河北"]["唐山市"].push({
  code: "S213014",
  name: "乐亭县荣川朗基伦汽车销售有限公司"
});

_citys["四川"]["乐山市"].push({
  code: "S751051",
  name: "乐山天牛华茂车业有限公司"
});

_citys["山东"]["乐陵市"].push({
  code: "S237013",
  name: "乐陵市鑫众汽车销售服务有限公司"
});

_citys["河北"]["廊坊市"].push({
  code: "S713044",
  name: "廊坊市庞大一众汽车销售服务有限公司"
});

_citys["河北"]["廊坊市"].push({
  code: "S713009",
  name: "廊坊市冀东汽车销售有限公司"
});

_citys["甘肃"]["兰州市"].push({
  code: "S762012",
  name: "兰州新纪元汽车销售服务有限公司"
});

_citys["甘肃"]["兰州市"].push({
  code: "S762008",
  name: "兰州庞大一众汽车销售服务有限公司"
});

_citys["甘肃"]["兰州市"].push({
  code: "S762013",
  name: "兰州金盛强汽车销售有限公司"
});

_citys["甘肃"]["兰州市"].push({
  code: "S762002",
  name: "兰州金岛汽车销售有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237022",
  name: "兰陵大华汽车销售服务有限公司"
});

_citys["山东"]["烟台市"].push({
  code: "S737006",
  name: "莱州市鸿富汽车经销有限公司"
});

_citys["山东"]["莱芜市"].push({
  code: "S737037",
  name: "莱芜泰通汽车销售服务有限公司"
});

_citys["西藏"]["拉萨市"].push({
  code: "S954001",
  name: "拉萨康达汽贸有限责任公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732019",
  name: "昆山锦隆汽车贸易有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S753032",
  name: "昆明涌鑫之众贸易有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S753016",
  name: "昆明谊众汽车销售有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S212003",
  name: "昆明捷通达汽车销售有限公司"
});

_citys["新疆"]["巴音郭楞蒙古自治州"].push({
  code: "S765010",
  name: "库尔勒庞大一众汽车销售服务有限公司"
});

_citys["新疆"]["克拉玛依市"].push({
  code: "S765015",
  name: "克拉玛依庞大一众汽车销售服务有限公司"
});

_citys["贵州"]["黔东南苗族侗族自治州"].push({
  code: "S752004",
  name: "凯里恒信众联汽车销售服务有限公司"
});

_citys["河南"]["开封市"].push({
  code: "S741037",
  name: "开封万宝汽车销售服务有限公司"
});

_citys["河南"]["开封市"].push({
  code: "S741016",
  name: "开封市万宝汽车贸易有限公司"
});

_citys["新疆"]["喀什市"].push({
  code: "S765011",
  name: "喀什庞大一众汽车销售服务有限公司"
});

_citys["山东"]["日照市"].push({
  code: "S237014",
  name: "莒县众合汽车销售服务有限公司"
});

_citys["甘肃"]["酒泉市"].push({
  code: "S762015",
  name: "酒泉金岛汽车销售服务有限公司"
});

_citys["江西"]["九江市"].push({
  code: "S736020",
  name: "九江九源汽车销售服务有限公司"
});

_citys["江西"]["九江市"].push({
  code: "S736007",
  name: "九江宏达汽车贸易有限公司"
});

_citys["陕西"]["榆林市"].push({
  code: "S261003",
  name: "靖边县恒博汽贸有限公司"
});

_citys["湖北"]["荆州市"].push({
  code: "S942024",
  name: "荆州市恒信一路汽车销售服务有限公司"
});

_citys["湖北"]["荆门市"].push({
  code: "S942029",
  name: "荆门恒信众联汽车销售服务有限公司"
});

_citys["山西"]["晋中市"].push({
  code: "S714027",
  name: "晋中航成轿车销售服务有限公司"
});

_citys["福建"]["泉州"].push({
  code: "S735017",
  name: "晋江市金阳汽车销售有限公司"
});

_citys["山西"]["晋城市"].push({
  code: "S714033",
  name: "晋城市英纳威汽贸有限公司"
});

_citys["辽宁"]["锦州市"].push({
  code: "S721019",
  name: "锦州通用汽车销售服务有限公司"
});

_citys["江苏"]["常州市"].push({
  code: "S732079",
  name: "金坛宝达汽车销售服务有限公司"
});

_citys["浙江"]["金华市"].push({
  code: "S933007",
  name: "金华金奥汽车销售服务有限公司"
});

_citys["浙江"]["金华市"].push({
  code: "S733057",
  name: "金华宝通汽车有限公司"
});

_citys["甘肃"]["金昌市"].push({
  code: "S262001",
  name: "金昌赛亚汇通汽车销售服务有限公司"
});

_citys["广东"]["揭阳市"].push({
  code: "S744059",
  name: "揭阳合和汽车销售服务有限公司"
});

_citys["河南"]["焦作市"].push({
  code: "S741010",
  name: "焦作市云洲汽车贸易有限公司"
});

_citys["河南"]["焦作市"].push({
  code: "S741039",
  name: "焦作国安汽车有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732045",
  name: "江阴市全顺海宏汽车销售服务有限公司"
});

_citys["江苏"]["无锡市"].push({
  code: "S732083",
  name: "江阴市海隆汽车销售服务有限公司"
});

_citys["江西"]["南昌市"].push({
  code: "S936005",
  name: "江西协众汽车发展有限公司"
});

_citys["江西"]["宜春市"].push({
  code: "S736008",
  name: "江西佳辉汽车贸易服务有限公司"
});

_citys["江西"]["南昌市"].push({
  code: "S736017",
  name: "江西华宏名众汽车有限公司"
});

_citys["江西"]["赣州市"].push({
  code: "S236001",
  name: "江西晨元汽车销售服务有限公司"
});

_citys["江苏"]["盐城市"].push({
  code: "S732025",
  name: "江苏中联汽车销售服务有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732091",
  name: "江苏协众汽车集团有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732028",
  name: "江苏苏舜华德汽车销售服务有限公司"
});

_citys["江苏"]["扬州市"].push({
  code: "S732078",
  name: "江苏金太阳瑞众汽车贸易有限公司"
});

_citys["江苏"]["扬州市"].push({
  code: "S732037",
  name: "江苏金太阳汽车销售服务有限公司"
});

_citys["江苏"]["镇江市"].push({
  code: "S732031",
  name: "江苏华跃汽车有限公司"
});

_citys["江苏"]["南京市"].push({
  code: "S732066",
  name: "江苏华海南众汽车销售有限公司"
});

_citys["江苏"]["镇江市"].push({
  code: "S732059",
  name: "江苏德大汽车有限公司"
});

_citys["浙江"]["衢州"].push({
  code: "S233003",
  name: "江山祥宇汽车有限公司"
});

_citys["广东"]["江门市"].push({
  code: "S744040",
  name: "江门市新众汽车销售服务有限公司"
});

_citys["广东"]["江门市"].push({
  code: "S744070",
  name: "江门市钜荣汽车销售服务有限公司"
});

_citys["浙江"]["嘉兴市"].push({
  code: "S733008",
  name: "嘉兴市北方汽车贸易有限公司"
});

_citys["浙江"]["嘉兴市"].push({
  code: "S733074",
  name: "嘉善源通汽车销售服务有限公司"
});

_citys["黑龙江"]["佳木斯"].push({
  code: "S723015",
  name: "佳木斯安诚轿车销售服务有限公司"
});

_citys["河南"]["焦作市"].push({
  code: "S741040",
  name: "济源市永嘉汽车销售有限公司"
});

_citys["山东"]["济宁市"].push({
  code: "S737058",
  name: "济宁众诚汽车销售服务有限公司"
});

_citys["山东"]["济宁市"].push({
  code: "S737031",
  name: "济宁市长济汽车贸易有限公司"
});

_citys["山东"]["济宁市"].push({
  code: "S737076",
  name: "济宁世盛汽车销售服务有限公司"
});

_citys["山东"]["济宁市"].push({
  code: "S737087",
  name: "济宁交运怡丰汽车销售服务有限公司"
});

_citys["山东"]["济南市"].push({
  code: "S737084",
  name: "济南庞大一众汽车销售服务有限公司"
});

_citys["吉林"]["吉林市"].push({
  code: "S722033",
  name: "吉林市神洲大众汽车销售服务有限公司"
});

_citys["吉林"]["吉林市"].push({
  code: "S722002",
  name: "吉林市神华大众汽车服务有限责任公司"
});

_citys["吉林"]["松原市"].push({
  code: "S722027",
  name: "吉林石油装备汽车销售维修服务有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722057",
  name: "吉林省久恒汽车销售服务有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722005",
  name: "吉林省吉刚汽车贸易有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722041",
  name: "吉林省华之诚世达汽车销售服务有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722028",
  name: "吉林省华之诚汽车销售服务有限公司"
});

_citys["吉林"]["榆树市"].push({
  code: "S222003",
  name: "吉林省驰久汽车销售服务有限公司"
});

_citys["吉林"]["长春市"].push({
  code: "S722037",
  name: "吉林省驰恒汽车销售服务有限公司"
});

_citys["黑龙江"]["鸡西市"].push({
  code: "S723020",
  name: "鸡西市英华进口汽车服务有限公司"
});

_citys["广东"]["惠州市"].push({
  code: "S744062",
  name: "惠州市志通恒泰汽车销售服务有限公司"
});

_citys["广东"]["惠州市"].push({
  code: "S744078",
  name: "惠州市金瑞欣汽车销售有限公司"
});

_citys["福建"]["泉州"].push({
  code: "S235002",
  name: "惠安盈众汽车销售服务有限公司"
});

_citys["河南"]["新乡市"].push({
  code: "S241009",
  name: "辉县市世通汽车销售有限公司"
});

_citys["湖北"]["黄石市"].push({
  code: "S942022",
  name: "黄石市大桥汽车服务有限公司"
});

_citys["安徽"]["黄山"].push({
  code: "S734026",
  name: "黄山亚众汽车销售服务有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S713055",
  name: "黄骅市前进汽车服务有限公司"
});

_citys["湖北"]["黄冈市"].push({
  code: "S942030",
  name: "黄冈恒信众联汽车销售服务有限公司"
});

_citys["安徽"]["淮南市"].push({
  code: "S734027",
  name: "淮南盛之杰汽车销售服务有限公司"
});

_citys["安徽"]["淮北市"].push({
  code: "S734025",
  name: "淮北市运昌汽车销售服务有限责任公司"
});

_citys["江苏"]["淮安"].push({
  code: "S732055",
  name: "淮安康润汽车销售服务有限公司"
});

_citys["江苏"]["淮安"].push({
  code: "S232009",
  name: "淮安驰祥汽车销售服务有限公司"
});

_citys["湖南"]["怀化市"].push({
  code: "S743032",
  name: "怀化永通汽车销售服务有限公司"
});

_citys["湖南"]["怀化市"].push({
  code: "S743019",
  name: "怀化春茂汽车销售服务有限公司"
});

_citys["河南"]["安阳市"].push({
  code: "S241008",
  name: "滑县锦程汽车销售服务有限公司"
});

_citys["浙江"]["湖州市"].push({
  code: "s733044",
  name: "湖州众腾汽车销售服务有限公司"
});

_citys["浙江"]["湖州市"].push({
  code: "S733031",
  name: "湖州长运汽车销售服务有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743016",
  name: "湖南中拓瑞众汽车销售服务有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743027",
  name: "湖南中拓瑞鑫汽车销售服务有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743028",
  name: "湖南长久博腾汽车销售服务有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743021",
  name: "湖南永通汽车销售服务有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S943001",
  name: "湖南汽车城永通有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "s743022",
  name: "湖南华洋众广汽车销售服务有限公司"
});

_citys["湖南"]["长沙市"].push({
  code: "S743009",
  name: "湖南华洋汽车贸易有限公司"
});

_citys["湖南"]["岳阳市"].push({
  code: "S743014",
  name: "湖南邦田汽车服务有限公司"
});

_citys["湖北"]["十堰"].push({
  code: "s942027",
  name: "湖北十堰东富汽车销售服务有限公司"
});

_citys["湖北"]["武汉市"].push({
  code: "S942017",
  name: "湖北东富汽车工贸有限公司"
});

_citys["辽宁"]["葫芦岛市"].push({
  code: "S721013",
  name: "葫芦岛市维立达汽车服务有限公司"
});

_citys["内蒙古"]["呼伦贝尔市"].push({
  code: "S715016",
  name: "呼伦贝尔市华通汽车销售有限公司"
});

_citys["内蒙古"]["呼和浩特市"].push({
  code: "S715027",
  name: "呼和浩特市庞大一众汽车销售服务有限公司"
});

_citys["云南"]["红河"].push({
  code: "S753031",
  name: "红河州捷鸿汽车经贸有限公司"
});

_citys["云南"]["红河"].push({
  code: "S753024",
  name: "红河州鸿云汽车经贸有限公司"
});

_citys["湖南"]["衡阳市"].push({
  code: "S743029",
  name: "衡阳长久博华汽车销售服务有限公司"
});

_citys["湖南"]["衡阳市"].push({
  code: "S743011",
  name: "衡阳市西城汽车经贸有限公司"
});

_citys["河北"]["衡水市"].push({
  code: "S713019",
  name: "衡水烨通汽贸有限公司"
});

_citys["河北"]["衡水市"].push({
  code: "S713047",
  name: "衡水瑞龙汽车销售服务有限公司"
});

_citys["河北"]["衡水市"].push({
  code: "S213008",
  name: "衡水阔龙汽车销售服务有限公司"
});

_citys["河北"]["衡水市"].push({
  code: "S213002",
  name: "衡水恒德安发汽车销售有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S723009",
  name: "黑龙江运通俊业汽车销售服务有限公司"
});

_citys["黑龙江"]["绥化市"].push({
  code: "S723025",
  name: "黑龙江龙众汽车销售服务有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S723023",
  name: "黑龙江龙海汽车销售集团有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S223003",
  name: "黑龙江龙海博众汽车销售服务有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S723012",
  name: "黑龙江博远汽车维修有限公司"
});

_citys["黑龙江"]["鹤岗市"].push({
  code: "S723026",
  name: "鹤岗骏达汽车销售有限公司"
});

_citys["河南"]["鹤壁市"].push({
  code: "S741029",
  name: "鹤壁维尔娜汽车销售有限公司"
});

_citys["山东"]["菏泽市"].push({
  code: "S737086",
  name: "菏泽金江车业有限公司"
});

_citys["山东"]["菏泽市"].push({
  code: "S737085",
  name: "菏泽交通集团有限公司"
});

_citys["广东"]["河源市"].push({
  code: "S744054",
  name: "河源市德宝汽车贸易有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741012",
  name: "河南豫港华翔汽车销售服务有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741008",
  name: "河南裕华奥捷汽车销售服务有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741004",
  name: "河南万通一汽贸易有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "s741022",
  name: "河南润众实业有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741031",
  name: "河南合众明德汽车销售服务有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741018",
  name: "河南合众汇金实业有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S213007",
  name: "河间市润众达汽车销售服务有限公司"
});

_citys["广西"]["河池市"].push({
  code: "S745018",
  name: "河池市弘捷汽车销售服务有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713025",
  name: "河北众捷汽车贸易有限公司"
});

_citys["河北"]["石家庄市"].push({
  code: "S713011",
  name: "河北世纪汽车贸易有限公司"
});

_citys["安徽"]["合肥市"].push({
  code: "s734016",
  name: "合肥欧亚汽车服务有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733076",
  name: "杭州元通宝通汽车有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S233006",
  name: "杭州康桥新之众汽车有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733048",
  name: "杭州百瑞汽车有限公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733039",
  name: "杭州百年汽车销售服务有限公司"
});

_citys["陕西"]["汉中市"].push({
  code: "S761019",
  name: "汉中博通汽车销售服务有限公司"
});

_citys["陕西"]["韩城市"].push({
  code: "S261001",
  name: "韩城市众瑞汽车销售有限责任公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S713020",
  name: "邯郸市顺达汽车贸易有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S213001",
  name: "邯郸市帅祺汽车贸易有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S713026",
  name: "邯郸市华信泰达汽车贸易有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S713041",
  name: "邯郸市华信进贤汽车贸易有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S713033",
  name: "邯郸市华迈汽车销售服务有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S713048",
  name: "邯郸市华锦汽车销售服务有限公司"
});

_citys["山东"]["烟台市"].push({
  code: "S237009",
  name: "海阳市瑞富春汽车销售服务有限公司"
});

_citys["浙江"]["嘉兴市"].push({
  code: "S733049",
  name: "海宁市群英汽车销售服务有限公司"
});

_citys["海南"]["海口市"].push({
  code: "S746005",
  name: "海南博众汽车销售有限公司"
});

_citys["海南"]["海口市"].push({
  code: "S746004",
  name: "海南博世汽车服务有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732049",
  name: "海门常和大众汽车销售服务有限公司"
});

_citys["江苏"]["南通"].push({
  code: "S732086",
  name: "海安德品汽车有限公司"
});

_citys["新疆"]["哈密市"].push({
  code: "S765012",
  name: "哈密庞大一众汽车销售服务有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S723019",
  name: "哈尔滨中汽汽贸汽车销售服务有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S723034",
  name: "哈尔滨运通俊恩汽车销售服务有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S923002",
  name: "哈尔滨一汽森华汽车贸易有限公司"
});

_citys["黑龙江"]["哈尔滨市"].push({
  code: "S723024",
  name: "哈尔滨诚杰汽车销售有限公司"
});

_citys["广西"]["桂林市"].push({
  code: "S745014",
  name: "桂林鑫广达汽车销售服务有限责任公司"
});

_citys["贵州"]["贵阳市"].push({
  code: "S952007",
  name: "贵州四扬汽车销售服务有限公司"
});

_citys["贵州"]["贵阳市"].push({
  code: "S952003",
  name: "贵州汽车修理公司"
});

_citys["贵州"]["贵阳市"].push({
  code: "S952002",
  name: "贵州利和汽车贸易有限公司"
});

_citys["广西"]["贵港市"].push({
  code: "S745019",
  name: "贵港市弘捷汽车销售服务有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744056",
  name: "广州市南菱万众汽车维修服务有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744015",
  name: "广州市梅花园汽车销售服务有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744019",
  name: "广州市锦众汽车贸易有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744048",
  name: "广州市健稳汽车贸易有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744049",
  name: "广州市大吉汽车销售服务有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744077",
  name: "广州市安捷鑫众汽车有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744068",
  name: "广州庞大一众汽车销售服务有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S244002",
  name: "广州庞大兴众汽车销售有限公司"
});

_citys["广西"]["南宁市"].push({
  code: "S745015",
  name: "广西鑫广达长久汽车商贸有限公司"
});

_citys["广西"]["南宁市"].push({
  code: "S745021",
  name: "广西鑫广达博冠汽车销售服务有限公司"
});

_citys["广西"]["南宁市"].push({
  code: "S945001",
  name: "广西弘捷汽车销售服务有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S744046",
  name: "广东物通凯骏汽车有限公司"
});

_citys["广东"]["广州市"].push({
  code: "S944002",
  name: "广东君乐汽车贸易有限公司"
});

_citys["四川"]["广安"].push({
  code: "S751049",
  name: "广安联众恒信汽车销售服务有限公司"
});

_citys["河南"]["郑州市"].push({
  code: "S741036",
  name: "巩义合众汇金汽车销售服务有限公司"
});

_citys["吉林"]["四平"].push({
  code: "S222001",
  name: "公主岭汇众汽车销售服务有限公司"
});

_citys["青海"]["格尔木市"].push({
  code: "S263001",
  name: "格尔木宝瑞通汽车贸易有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737028",
  name: "高密市经贸汽车销售有限公司"
});

_citys["河北"]["保定市"].push({
  code: "S213011",
  name: "高碑店市新海轿车销售有限公司"
});

_citys["江西"]["宜春市"].push({
  code: "S236002",
  name: "高安华宏汽车有限公司"
});

_citys["江西"]["赣州市"].push({
  code: "S736013",
  name: "赣州金涛汽车销售服务有限公司"
});

_citys["甘肃"]["嘉峪关市"].push({
  code: "S762006",
  name: "甘肃友好汽车服务有限责任公司"
});

_citys["浙江"]["杭州市"].push({
  code: "S733078",
  name: "富阳市腾远汽车有限公司"
});

_citys["黑龙江"]["佳木斯"].push({
  code: "S223001",
  name: "富锦安诚汽车销售服务有限公司"
});

_citys["安徽"]["阜阳市"].push({
  code: "S734029",
  name: "阜阳永迪汽车销售服务有限公司"
});

_citys["安徽"]["阜阳市"].push({
  code: "S734013",
  name: "阜阳市永鑫汽车销售服务有限公司"
});

_citys["辽宁"]["阜新市"].push({
  code: "S721007",
  name: "阜新永生工贸发展有限公司"
});

_citys["辽宁"]["阜新市"].push({
  code: "S721036",
  name: "阜新和利汽车销售服务有限公司"
});

_citys["陕西"]["榆林市"].push({
  code: "S261004",
  name: "府谷县恒捷汽贸有限公司"
});

_citys["辽宁"]["抚顺市"].push({
  code: "S721035",
  name: "抚顺和昆汽车销售服务有限公司"
});

_citys["福建"]["福州市"].push({
  code: "S735027",
  name: "福州致远汽车销售服务有限公司"
});

_citys["福建"]["福州市"].push({
  code: "S735011",
  name: "福州永力通汽车贸易有限公司"
});

_citys["福建"]["福州市"].push({
  code: "S735023",
  name: "福州盈众汽车有限公司"
});

_citys["福建"]["福州市"].push({
  code: "S735029",
  name: "福建永通达汽车贸易有限公司"
});

_citys["福建"]["福州市"].push({
  code: "S935001",
  name: "福建省福京汽车贸易有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744058",
  name: "佛山市英丰汽车销售服务有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744050",
  name: "佛山市顺德区世锦汽车贸易有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744039",
  name: "佛山市南海区拓华汽车贸易有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744031",
  name: "佛山市合诚汽车销售服务有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744067",
  name: "佛山市瀚众汽车贸易服务有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744074",
  name: "佛山市广物君乐汽车销售服务有限公司"
});

_citys["广东"]["佛山市"].push({
  code: "S744073",
  name: "佛山时利和众联汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733067",
  name: "奉化轿辰康发汽车销售服务有限公司"
});

_citys["山东"]["临沂市"].push({
  code: "S237003",
  name: "费县大华汽车销售服务有限公司"
});

_citys["山东"]["泰安市"].push({
  code: "S237016",
  name: "肥城市创伟汽车服务有限公司"
});

_citys["湖北"]["恩施市"].push({
  code: "S942025",
  name: "恩施恒信众联汽车销售服务有限公司"
});

_citys["湖北"]["鄂州"].push({
  code: "S942038",
  name: "鄂州锦坤汽车销售服务有限公司"
});

_citys["内蒙古"]["鄂尔多斯市"].push({
  code: "S715017",
  name: "鄂尔多斯市鑫安汽车贸易服务有限责任公司"
});

_citys["内蒙古"]["鄂尔多斯市"].push({
  code: "S715015",
  name: "鄂尔多斯市鑫安基业汽车销售有限责任公司"
});

_citys["贵州"]["都匀市"].push({
  code: "S752007",
  name: "都匀恒信众联汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751043",
  name: "都江堰阔龙汽车销售服务有限公司"
});

_citys["山东"]["东营市"].push({
  code: "S737062",
  name: "东营华锐汽车销售有限公司"
});

_citys["山东"]["东营市"].push({
  code: "S737099",
  name: "东营合众汽车销售服务有限公司"
});

_citys["浙江"]["金华市"].push({
  code: "S733053",
  name: "东阳市众富汽车销售服务有限公司"
});

_citys["江苏"]["盐城市"].push({
  code: "S232012",
  name: "东台宝达汽车销售服务有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744012",
  name: "东莞市新大地汽车贸易有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744060",
  name: "东莞市锦众汽车贸易有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744011",
  name: "东莞市捷达通贸易有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744057",
  name: "东莞市鸿众汽车销售服务有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744066",
  name: "东莞市东深奇建汽车销售服务有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744035",
  name: "东莞市昌发汽车贸易有限公司"
});

_citys["广东"]["东莞市"].push({
  code: "S744069",
  name: "东莞庞大一众汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751025",
  name: "东创建国汽车集团成都天弘车业有限公司"
});

_citys["河北"]["保定市"].push({
  code: "S713054",
  name: "定州轩宇俊鹏汽车销售服务有限公司"
});

_citys["辽宁"]["辽阳市"].push({
  code: "S221004",
  name: "灯塔凯祥汽车销售服务有限公司"
});

_citys["山东"]["德州市"].push({
  code: "S737030",
  name: "德州汇众汽车销售技术服务有限公司"
});

_citys["山东"]["德州市"].push({
  code: "S737048",
  name: "德州华运汽贸销售服务有限公司"
});

_citys["四川"]["德阳市"].push({
  code: "S751028",
  name: "德阳万路众悦汽车销售服务有限公司"
});

_citys["云南"]["德宏市"].push({
  code: "S212002",
  name: "德宏龙泰通达汽车销售有限公司"
});

_citys["辽宁"]["丹东市"].push({
  code: "S721044",
  name: "丹东曙光新天地汽车销售服务有限公司"
});

_citys["黑龙江"]["大兴安岭地区"].push({
  code: "S723029",
  name: "大兴安岭龙海兴众汽车销售服务有限公司"
});

_citys["山西"]["大同市"].push({
  code: "S714014",
  name: "大同市谷氏车城汽车连锁销售有限公司"
});

_citys["黑龙江"]["大庆市"].push({
  code: "S723016",
  name: "大庆世腾汽车销售有限公司"
});

_citys["黑龙江"]["大庆市"].push({
  code: "S723022",
  name: "大庆世腾骏兴汽车销售服务有限公司"
});

_citys["黑龙江"]["大庆市"].push({
  code: "S723030",
  name: "大庆名派汽车销售服务有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S721048",
  name: "大连中升汇众汽车销售服务有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S721043",
  name: "大连中联伟业汽车销售有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S721029",
  name: "大连通孚祥汽车贸易有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S921002",
  name: "大连汽贸集团汽车销售服务有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S721041",
  name: "大连弘鼎汽车销售服务有限公司"
});

_citys["辽宁"]["大连市"].push({
  code: "S721040",
  name: "大连禾众汽车销售服务有限公司"
});

_citys["云南"]["大理州白族自治州"].push({
  code: "S753011",
  name: "大理阿鹏有限责任公司"
});

_citys["河北"]["廊坊市"].push({
  code: "S213012",
  name: "大城县亿龙汽车销售有限公司"
});

_citys["四川"]["达州市"].push({
  code: "S751029",
  name: "达州市新世纪汽车销售服务有限公司"
});

_citys["四川"]["达州市"].push({
  code: "S751054",
  name: "达州市天汇汽车销售服务有限公司"
});

_citys["河北"]["邯郸市"].push({
  code: "S213015",
  name: "磁县万合汽车贸易有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733064",
  name: "慈溪市锦星汽车销售服务有限公司"
});

_citys["浙江"]["宁波市"].push({
  code: "S733084",
  name: "慈溪市华泰汽车销售有限公司"
});

_citys["云南"]["楚雄市"].push({
  code: "S753029",
  name: "楚雄易通汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751037",
  name: "崇州瑞龙汽车销售服务有限公司"
});

_citys["内蒙古"]["赤峰市"].push({
  code: "S215003",
  name: "赤峰隆瑞商贸有限公司"
});

_citys["内蒙古"]["赤峰市"].push({
  code: "S715032",
  name: "赤峰坤驰汽车销售服务有限公司"
});

_citys["内蒙古"]["赤峰市"].push({
  code: "S715011",
  name: "赤峰凯富达汽车服务有限公司"
});

_citys["山东"]["聊城市"].push({
  code: "S737088",
  name: "茌平德众汽车销售服务有限公司"
});

_citys["安徽"]["池州"].push({
  code: "S734028",
  name: "池州协众汽车销售服务有限公司"
});

_citys["河北"]["承德市"].push({
  code: "S713030",
  name: "承德市庞大一众汽车销售有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751033",
  name: "成都运通博恩汽车销售有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S951005",
  name: "成都曙光汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751044",
  name: "成都市泰鸿宇汽车贸易有限责任公司"
});

_citys["四川"]["成都市"].push({
  code: "S751010",
  name: "成都市强生实业有限责任公司"
});

_citys["四川"]["成都市"].push({
  code: "S751034",
  name: "成都启阳远航汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751021",
  name: "成都启新汽车服务有限责任公司"
});

_citys["四川"]["成都市"].push({
  code: "S251003",
  name: "成都汇腾汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751040",
  name: "成都汇和汽车销售有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751036",
  name: "成都宏羽众信汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S751041",
  name: "成都浩龙汽车销售服务有限公司"
});

_citys["四川"]["成都市"].push({
  code: "S251004",
  name: "成都广汇申蓉汇通汽车销售服务有限公司"
});

_citys["湖南"]["郴州市"].push({
  code: "S743023",
  name: "郴州永通汽车销售服务有限公司"
});

_citys["湖南"]["郴州市"].push({
  code: "S743033",
  name: "郴州华运通汽车销售服务有限公司"
});

_citys["广东"]["潮州市"].push({
  code: "S744018",
  name: "潮州市通达汽车贸易有限公司"
});

_citys["辽宁"]["朝阳市"].push({
  code: "S721047",
  name: "朝阳川达捷胜汽车销售服务有限公司"
});

_citys["安徽"]["合肥市"].push({
  code: "S734020",
  name: "巢湖亚宝汽车销售服务有限公司"
});

_citys["江苏"]["常州市"].push({
  code: "S732072",
  name: "常州外汽东进汽车销售服务有限公司"
});

_citys["江苏"]["常州市"].push({
  code: "S732052",
  name: "常州市上瑞汽车销售服务有限公司"
});

_citys["江苏"]["常州市"].push({
  code: "S732029",
  name: "常州国际汽车城有限公司"
});

_citys["江苏"]["常州市"].push({
  code: "S732038",
  name: "常州宝达汽车销售服务有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732015",
  name: "常熟市众成汽车销售有限公司"
});

_citys["江苏"]["苏州市"].push({
  code: "S732070",
  name: "常熟德润汽车销售服务有限公司"
});

_citys["湖南"]["常德市"].push({
  code: "S743010",
  name: "常德裕安贸易有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737089",
  name: "昌邑广潍金达汽车销售服务有限公司"
});

_citys["新疆"]["昌吉回族自治州"].push({
  code: "S765014",
  name: "昌吉市庞大一众汽车销售服务有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S713021",
  name: "沧州运通汽车销售服务有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S713052",
  name: "沧州市瑞华汽车贸易有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S713046",
  name: "沧州庞大一众汽车销售有限公司"
});

_citys["浙江"]["温州市"].push({
  code: "S733085",
  name: "苍南国荣汽车销售服务有限公司"
});

_citys["安徽"]["亳州市"].push({
  code: "S734021",
  name: "亳州中源汽车销售服务有限公司"
});

_citys["河北"]["沧州市"].push({
  code: "S213019",
  name: "泊头市运东汽车销售服务有限公司"
});

_citys["山东"]["滨州市"].push({
  code: "S737072",
  name: "滨州腾翔汽车销售服务有限公司"
});

_citys["山东"]["滨州市"].push({
  code: "S237017",
  name: "滨州泰通汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711060",
  name: "北京长久博众汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711051",
  name: "北京运通兴恩汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711059",
  name: "北京运通嘉恩汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711021",
  name: "北京运通博恩汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711028",
  name: "北京友联威科汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711048",
  name: "北京亚之杰伯乐汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711029",
  name: "北京鑫万维汽车经贸有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711046",
  name: "北京鑫万维富达汽车销售有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711062",
  name: "北京鑫港汇众汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711024",
  name: "北京硕川汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711030",
  name: "北京首汽腾鹏汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711033",
  name: "北京市天达汽车修理有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711017",
  name: "北京市良乡万达工贸有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711052",
  name: "北京上地四方汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711012",
  name: "北京庆洋汽车服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711061",
  name: "北京庆洋惠众汽车服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711042",
  name: "北京汽车贸易中心有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711023",
  name: "北京骏宝威汽车贸易有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711049",
  name: "北京捷亚泰中兴汽车销售有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711047",
  name: "北京捷亚泰中盛汽车销售有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711057",
  name: "北京捷亚泰万兴汽车销售有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S911029",
  name: "北京捷亚泰汽贸有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711032",
  name: "北京冀东丰汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711039",
  name: "北京华信宏业商贸有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S911028",
  name: "北京华昌汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711002",
  name: "北京海联力通经贸有限公司"
});

_citys["北京"]["北京市"].push({
  code: "s711058",
  name: "北京海联力捷汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711036",
  name: "北京东仁金舆汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711010",
  name: "北京东方华正汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711043",
  name: "北京德奥达一众汽车销售有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711053",
  name: "北京博瑞祥泰汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711055",
  name: "北京博瑞祥弘汽车销售服务有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711054",
  name: "北京博瑞祥恒汽车销售有限公司"
});

_citys["北京"]["北京市"].push({
  code: "S711034",
  name: "北京北方华驿车辆销售服务有限公司"
});

_citys["广西"]["北海"].push({
  code: "S745022",
  name: "北海鑫广达博鑫汽车销售服务有限公司"
});

_citys["黑龙江"]["黑河市"].push({
  code: "S723031",
  name: "北安市粤华汽车销售有限公司"
});

_citys["黑龙江"]["黑河市"].push({
  code: "S723031",
  name: "北安市粤华汽车销售有限公司"
});

_citys["云南"]["保山市"].push({
  code: "S753013",
  name: "保山联通汽车销售维修有限责任公司"
});

_citys["河北"]["保定市"].push({
  code: "S713062",
  name: "保定轩宇昆泰汽车销售服务有限公司"
});

_citys["河北"]["保定市"].push({
  code: "S713017",
  name: "保定市中冀汽车贸易集团有限公司"
});

_citys["河北"]["保定市"].push({
  code: "S713053",
  name: "保定市耀达正博汽车销售服务有限公司"
});

_citys["河北"]["保定市"].push({
  code: "S713038",
  name: "保定市朗尊汽车销售服务有限公司"
});

_citys["陕西"]["宝鸡市"].push({
  code: "S761016",
  name: "宝鸡市宝众汽车销售服务有限公司"
});

_citys["内蒙古"]["包头市"].push({
  code: "S715033",
  name: "包头市惠众汽车服务有限公司"
});

_citys["内蒙古"]["包头市"].push({
  code: "S715025",
  name: "包头庞大一众汽车销售服务有限公司"
});

_citys["内蒙古"]["包头市"].push({
  code: "S715009",
  name: "包头德众汽车服务有限公司"
});

_citys["安徽"]["蚌埠市"].push({
  code: "S734017",
  name: "蚌埠市华诚轿车销售服务有限公司"
});

_citys["广西"]["百色"].push({
  code: "S745023",
  name: "百色鑫广达长久汽车销售服务有限公司"
});

_citys["甘肃"]["白银"].push({
  code: "S762009",
  name: "白银庞大一众汽车销售服务有限公司"
});

_citys["吉林"]["白山市"].push({
  code: "S722026",
  name: "白山市众合汽车销售维修有限公司"
});

_citys["吉林"]["白城市"].push({
  code: "S722058",
  name: "白城汇众汽车销售服务有限公司"
});

_citys["河北"]["廊坊市"].push({
  code: "S713059",
  name: "霸州市云海汽车销售服务有限公司"
});

_citys["四川"]["巴中"].push({
  code: "S751053",
  name: "巴中瑞龙汽车销售服务有限公司"
});

_citys["内蒙古"]["巴彦淖尔市"].push({
  code: "S715020",
  name: "巴彦淖尔市航海汽车销售服务有限公司"
});

_citys["辽宁"]["鞍山市"].push({
  code: "S921017",
  name: "鞍山市中田汽车贸易有限公司"
});

_citys["辽宁"]["鞍山市"].push({
  code: "S721032",
  name: "鞍山谛赢汽车销售服务有限公司"
});

_citys["河南"]["安阳市"].push({
  code: "S741030",
  name: "安阳市世达汽车销售服务有限公司"
});

_citys["河南"]["安阳市"].push({
  code: "S741013",
  name: "安阳市宝捷汽车贸易有限责任公司"
});

_citys["福建"]["泉州"].push({
  code: "S235001",
  name: "安溪华迪汽车销售服务有限公司"
});

_citys["贵州"]["安顺市"].push({
  code: "S752005",
  name: "安顺恒信众联汽车销售服务有限公司"
});

_citys["山东"]["潍坊市"].push({
  code: "S737095",
  name: "安丘广利汽车贸易有限公司"
});

_citys["安徽"]["安庆市"].push({
  code: "S734030",
  name: "安庆环众汽车销售服务有限公司"
});

_citys["云南"]["昆明市"].push({
  code: "S212004",
  name: "安宁谊众汽车销售有限公司"
});

_citys["陕西"]["安康"].push({
  code: "S761017",
  name: "安康市庞大一众汽车销售有限公司"
});

_citys["安徽"]["合肥市"].push({
  code: "S734014",
  name: "安徽众力汽车销售服务有限公司"
});

_citys["安徽"]["合肥市"].push({
  code: "S734009",
  name: "安徽孚迪汽车销售有限公司"
});

_citys["安徽"]["合肥市"].push({
  code: "S734011",
  name: "安徽宝捷汽车销售服务有限公司"
});

_citys["新疆"]["阿克苏地区"].push({
  code: "S765005",
  name: "阿克苏振宇汽车销售有限责任公司"
});

_type = ["新速腾", "新速腾 GLI", "新速腾 R-line"];

window.onload = function () {
  riot.mount("*");
  $(".zc-box .left").on("click", moveLeft);
  $(".zc-box .right").on("click", moveRight);
  $(".cars .left").on("click", mLeft);
  $(".cars .right").on("click", mRight);
  $(".next-point,.next-text").on("click", function () {
    return Store.parallax.changepage("model-2");
  });
  $(".backTop").on("click", function () {
    return Store.parallax.changepage("model-2");
  });
  return $(".main").removeClass("hide");
};

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

changePoint = function changePoint(i) {
  console.log(Math.abs(i));
  tabId2 = Math.abs(i);
  // e = $(".contents .item").eq(tabId-1)
  $(".cars .points span").removeClass("on");
  return $(".cars .points span").eq(tabId2).addClass("on");
};

changeMain = function changeMain(i) {
  console.log(i);
  tabId = Math.abs(i);
  $(".zc-box .points span").removeClass("on");
  return $(".zc-box .points span").eq(tabId).addClass("on");
};

backHome = function backHome() {};

mLeft = function mLeft() {
  tabId2--;
  if (tabId2 < 0) {
    tabId2 = 0;
  }
  $(".cars .points span").removeClass("on");
  $(".cars .points span").eq(tabId2).addClass("on");
  return secondSlider.setNumber(tabId2);
};

mRight = function mRight() {
  tabId2++;
  if (tabId2 > 3) {
    tabId2 = 3;
  }
  $(".cars .points span").removeClass("on");
  $(".cars .points span").eq(tabId2).addClass("on");
  return secondSlider.setNumber(tabId2);
};

moveLeft = function moveLeft() {
  tabId--;
  if (tabId < 0) {
    tabId = 0;
  }
  $(".zc-box .points span").removeClass("on");
  $(".zc-box .points span").eq(tabId).addClass("on");
  return mainSlider.setNumber(tabId);
};

moveRight = function moveRight() {
  tabId++;
  if (tabId > 2) {
    tabId = 2;
  }
  $(".zc-box .points span").removeClass("on");
  $(".zc-box .points span").eq(tabId).addClass("on");
  return mainSlider.setNumber(tabId);
};
