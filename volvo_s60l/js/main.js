'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ANIMATION_END_NAME, ANIMATION_END_NAMES, Loader, SendNote, Store, TRANSITION_END_NAME, TRANSITION_END_NAMES, VENDORS, _citys, _loader, cdn, changeMain, changePoint, css3Prefix, debug, global, i, isMM, j, layzr, len, link, mLeft, mRight, mTestElement, mainSlider, moveLeft, moveRight, qrcode, secondSlider, tabId, tabId2, tm;

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

link = "http://api.giccoo.com";

mainSlider = {};

secondSlider = {};

tabId = 0;

tabId2 = 0;

_citys = {};

_citys["北京"] = {};

_citys["甘肃"] = {};

_citys["河北"] = {};

_citys["黑龙江"] = {};

_citys["吉林"] = {};

_citys["辽宁"] = {};

_citys["内蒙古"] = {};

_citys["山东"] = {};

_citys["山西"] = {};

_citys["陕西"] = {};

_citys["天津"] = {};

_citys["新疆"] = {};

_citys["安徽"] = {};

_citys["河南"] = {};

_citys["湖北"] = {};

_citys["江苏"] = {};

_citys["江西"] = {};

_citys["上海"] = {};

_citys["浙江"] = {};

_citys["福建"] = {};

_citys["广东"] = {};

_citys["广西"] = {};

_citys["贵州"] = {};

_citys["海南"] = {};

_citys["湖南"] = {};

_citys["四川"] = {};

_citys["云南"] = {};

_citys["重庆"] = {};

_citys["宁夏"] = {};

_citys["青海"] = {};

_citys["北京"]["北京"] = [];

_citys["甘肃"]["兰州"] = [];

_citys["河北"]["石家庄"] = [];

_citys["河北"]["唐山"] = [];

_citys["黑龙江"]["哈尔滨"] = [];

_citys["吉林"]["长春"] = [];

_citys["辽宁"]["大连"] = [];

_citys["辽宁"]["沈阳"] = [];

_citys["内蒙古"]["包头"] = [];

_citys["内蒙古"]["呼和浩特"] = [];

_citys["山东"]["济南"] = [];

_citys["山东"]["青岛"] = [];

_citys["山东"]["烟台"] = [];

_citys["山西"]["太原"] = [];

_citys["陕西"]["西安"] = [];

_citys["天津"]["天津"] = [];

_citys["新疆"]["乌鲁木齐"] = [];

_citys["安徽"]["合肥"] = [];

_citys["河南"]["郑州"] = [];

_citys["湖北"]["武汉"] = [];

_citys["江苏"]["常州"] = [];

_citys["江苏"]["南通"] = [];

_citys["江苏"]["苏州"] = [];

_citys["江苏"]["无锡"] = [];

_citys["江苏"]["扬州"] = [];

_citys["江西"]["南昌"] = [];

_citys["上海"]["上海"] = [];

_citys["浙江"]["杭州"] = [];

_citys["浙江"]["嘉兴"] = [];

_citys["浙江"]["宁波"] = [];

_citys["浙江"]["绍兴"] = [];

_citys["浙江"]["台州"] = [];

_citys["浙江"]["温州"] = [];

_citys["福建"]["泉州"] = [];

_citys["广东"]["东莞"] = [];

_citys["广东"]["佛山"] = [];

_citys["广东"]["广州"] = [];

_citys["广东"]["揭阳"] = [];

_citys["广东"]["汕头"] = [];

_citys["广东"]["深圳"] = [];

_citys["广东"]["中山"] = [];

_citys["广东"]["珠海"] = [];

_citys["广西"]["南宁"] = [];

_citys["贵州"]["贵阳"] = [];

_citys["海南"]["海口"] = [];

_citys["湖南"]["长沙"] = [];

_citys["四川"]["成都"] = [];

_citys["云南"]["昆明"] = [];

_citys["重庆"]["重庆"] = [];

_citys["山东"]["潍坊"] = [];

_citys["河北"]["保定"] = [];

_citys["江苏"]["南京"] = [];

_citys["辽宁"]["鞍山"] = [];

_citys["陕西"]["榆林"] = [];

_citys["山东"]["济宁"] = [];

_citys["山东"]["临沂"] = [];

_citys["山东"]["淄博"] = [];

_citys["山东"]["泰安"] = [];

_citys["山东"]["东营"] = [];

_citys["河北"]["邯郸"] = [];

_citys["四川"]["乐山"] = [];

_citys["黑龙江"]["大庆"] = [];

_citys["宁夏"]["银川"] = [];

_citys["内蒙古"]["赤峰"] = [];

_citys["青海"]["西宁"] = [];

_citys["河南"]["洛阳"] = [];

_citys["山西"]["大同"] = [];

_citys["广西"]["桂林"] = [];

_citys["浙江"]["湖州"] = [];

_citys["江苏"]["徐州"] = [];

_citys["福建"]["厦门"] = [];

_citys["江苏"]["泰州"] = [];

_citys["广西"]["柳州"] = [];

_citys["江西"]["赣州"] = [];

_citys["江苏"]["镇江"] = [];

_citys["河南"]["平顶山"] = [];

_citys["福建"]["福州"] = [];

_citys["辽宁"]["锦州"] = [];

_citys["福建"]["龙岩"] = [];

_citys["河南"]["安阳"] = [];

_citys["山东"]["威海"] = [];

_citys["江苏"]["盐城"] = [];

_citys["安徽"]["阜阳"] = [];

_citys["四川"]["绵阳"] = [];

_citys["福建"]["三明"] = [];

_citys["河南"]["商丘"] = [];

_citys["江西"]["九江"] = [];

_citys["安徽"]["芜湖"] = [];

_citys["山东"]["滨州"] = [];

_citys["江苏"]["常熟"] = [];

_citys["江西"]["上饶"] = [];

_citys["山东"]["德州"] = [];

_citys["河北"]["邢台"] = [];

_citys["云南"]["红河"] = [];

_citys["福建"]["漳州"] = [];

_citys["湖南"]["株洲"] = [];

_citys["四川"]["南充"] = [];

_citys["湖北"]["襄阳"] = [];

_citys["河南"]["南阳"] = [];

_citys["陕西"]["咸阳"] = [];

_citys["福建"]["莆田"] = [];

_citys["吉林"]["吉林"] = [];

_citys["陕西"]["宝鸡"] = [];

_citys["陕西"]["延安"] = [];

_citys["浙江"]["义乌"] = [];

_citys["河南"]["新乡"] = [];

_citys["河北"]["沧州"] = [];

_citys["山西"]["临汾"] = [];

_citys["浙江"]["舟山"] = [];

_citys["山西"]["运城"] = [];

_citys["广东"]["江门"] = [];

_citys["湖北"]["宜昌"] = [];

_citys["广西"]["钦州"] = [];

_citys["广东"]["湛江"] = [];

_citys["浙江"]["衢州"] = [];

_citys["浙江"]["金华"] = [];

_citys["江苏"]["连云港"] = [];

_citys["四川"]["泸州"] = [];

_citys["安徽"]["蚌埠"] = [];

_citys["湖南"]["怀化"] = [];

_citys["广东"]["清远"] = [];

_citys["北京"]["北京"].push({
  code: "BJG",
  name: "沃尔沃汽车北京中汽南方百旺4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJC",
  name: "沃尔沃汽车北京中汽南方亦庄4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJC",
  name: "沃尔沃汽车北京中汽南方东四环展厅 "
});

_citys["北京"]["北京"].push({
  code: "BJE",
  name: "沃尔沃汽车北京中诚海华4S中心 "
});

_citys["甘肃"]["兰州"].push({
  code: "LZA",
  name: "沃尔沃汽车兰州福康4S中心"
});

_citys["河北"]["石家庄"].push({
  code: "HBC",
  name: "沃尔沃汽车石家庄冀东东沃4S中心"
});

_citys["河北"]["唐山"].push({
  code: "HBD",
  name: "沃尔沃汽车唐山庞大兴沃4S中心"
});

_citys["黑龙江"]["哈尔滨"].push({
  code: "HRA",
  name: "沃尔沃汽车黑龙江尊荣4S中心"
});

_citys["吉林"]["长春"].push({
  code: "CCA",
  name: "沃尔沃汽车长春盛荣4S中心"
});

_citys["辽宁"]["大连"].push({
  code: "DLA",
  name: "沃尔沃汽车大连尊荣亿方4S中心"
});

_citys["辽宁"]["大连"].push({
  code: "DLA",
  name: "沃尔沃汽车大连尊荣亿方城市展厅"
});

_citys["辽宁"]["沈阳"].push({
  code: "SYA",
  name: "沃尔沃汽车沈阳尊荣4S中心"
});

_citys["内蒙古"]["包头"].push({
  code: "MGC",
  name: "沃尔沃汽车包头庞大兴沃4S中心"
});

_citys["内蒙古"]["呼和浩特"].push({
  code: "MGB",
  name: "沃尔沃汽车呼和浩特庞大兴沃4S中心"
});

_citys["山东"]["济南"].push({
  code: "JND",
  name: "沃尔沃汽车济南富豪4S中心"
});

_citys["山东"]["青岛"].push({
  code: "QDA",
  name: "沃尔沃汽车青岛富豪4S中心"
});

_citys["山东"]["烟台"].push({
  code: "YTA",
  name: "沃尔沃汽车烟台富豪4S中心"
});

_citys["山西"]["太原"].push({
  code: "TYA",
  name: "沃尔沃汽车太原富豪新华夏4S中心"
});

_citys["陕西"]["西安"].push({
  code: "XAA",
  name: "沃尔沃汽车西安佳豪4S中心"
});

_citys["天津"]["天津"].push({
  code: "TJA",
  name: "沃尔沃汽车天津中汽南方4S中心"
});

_citys["新疆"]["乌鲁木齐"].push({
  code: "XJB",
  name: "沃尔沃汽车乌鲁木齐金涛4S中心"
});

_citys["安徽"]["合肥"].push({
  code: "HFA",
  name: "沃尔沃汽车合肥捷沃4S中心"
});

_citys["河南"]["郑州"].push({
  code: "HNB",
  name: "沃尔沃汽车郑州锦堂盛4S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHA",
  name: "沃尔沃汽车武汉富豪4S中心"
});

_citys["江苏"]["常州"].push({
  code: "CZA",
  name: "沃尔沃汽车常州富豪4S中心"
});

_citys["江苏"]["南通"].push({
  code: "NTA",
  name: "沃尔沃汽车南通东沃4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUA",
  name: "沃尔沃汽车苏州世之贸4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUB",
  name: "沃尔沃汽车苏州通孚祥4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "WXB",
  name: "沃尔沃汽车无锡东方吉羊4S中心"
});

_citys["江苏"]["扬州"].push({
  code: "YZA",
  name: "沃尔沃汽车扬州富豪4S中心"
});

_citys["江西"]["南昌"].push({
  code: "NCA",
  name: "沃尔沃汽车南昌绿地名沃4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHC",
  name: "沃尔沃汽车上海通孚祥4S中心 "
});

_citys["上海"]["上海"].push({
  code: "SHD",
  name: "沃尔沃汽车上海永达4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZA",
  name: "沃尔沃汽车杭州世之贸4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZC",
  name: "沃尔沃汽车浙江元通元瑞4S中心"
});

_citys["浙江"]["嘉兴"].push({
  code: "JXA",
  name: "沃尔沃汽车嘉兴元通元瑞4S中心"
});

_citys["浙江"]["宁波"].push({
  code: "NBB",
  name: "沃尔沃汽车宁波元通元瑞4S中心"
});

_citys["浙江"]["绍兴"].push({
  code: "SXA",
  name: "沃尔沃汽车绍兴海昌4S中心"
});

_citys["浙江"]["台州"].push({
  code: "TZA",
  name: "沃尔沃汽车台州凯和4S中心"
});

_citys["浙江"]["温州"].push({
  code: "WZA",
  name: "沃尔沃汽车温州东昌4S中心"
});

_citys["福建"]["泉州"].push({
  code: "QZA",
  name: "沃尔沃汽车泉州鸿海4S中心"
});

_citys["广东"]["东莞"].push({
  code: "DGA",
  name: "沃尔沃汽车东莞中汽南方4S中心"
});

_citys["广东"]["佛山"].push({
  code: "NHA",
  name: "沃尔沃汽车佛山富豪城市展厅"
});

_citys["广东"]["佛山"].push({
  code: "NHA",
  name: "沃尔沃汽车佛山富豪4S中心"
});

_citys["广东"]["广州"].push({
  code: "GZB",
  name: "沃尔沃汽车广州永安富豪4S中心"
});

_citys["广东"]["揭阳"].push({
  code: "JYA",
  name: "沃尔沃汽车揭阳恒丰4S中心"
});

_citys["广东"]["汕头"].push({
  code: "STA",
  name: "沃尔沃汽车汕头恒康4S中心 "
});

_citys["广东"]["深圳"].push({
  code: "SZA",
  name: "沃尔沃汽车深圳中汽南方4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZB",
  name: "沃尔沃汽车深圳天汽南方4S中心"
});

_citys["广东"]["中山"].push({
  code: "ZSA",
  name: "沃尔沃汽车中山中汽南方4S中心"
});

_citys["广东"]["珠海"].push({
  code: "ZHA",
  name: "沃尔沃汽车珠海中汽南方4S中心"
});

_citys["广西"]["南宁"].push({
  code: "NNA",
  name: "沃尔沃汽车南宁弘瑞4S中心"
});

_citys["贵州"]["贵阳"].push({
  code: "GYA",
  name: "沃尔沃汽车贵州天鼎4S中心"
});

_citys["海南"]["海口"].push({
  code: "HKA",
  name: "沃尔沃汽车海南天昌达4S中心"
});

_citys["湖南"]["长沙"].push({
  code: "CSA",
  name: "沃尔沃汽车长沙中汽南方4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDA",
  name: "沃尔沃汽车成都三和4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDC",
  name: "沃尔沃汽车成都通孚祥4S中心"
});

_citys["云南"]["昆明"].push({
  code: "KMA",
  name: "沃尔沃汽车昆明富豪4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQA",
  name: "沃尔沃汽车重庆西南富豪4S中心"
});

_citys["山东"]["潍坊"].push({
  code: "JNC",
  name: "沃尔沃汽车潍坊诺德4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQC",
  name: "沃尔沃汽车重庆龙华沃华4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJK",
  name: "沃尔沃汽车北京海之沃4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHF",
  name: "沃尔沃汽车上海通孚祥宝山4S中心"
});

_citys["山西"]["太原"].push({
  code: "TYA",
  name: "沃尔沃汽车太原富豪新华夏平阳展厅"
});

_citys["河北"]["保定"].push({
  code: "HBE",
  name: "沃尔沃汽车保定庞大兴沃4S中心"
});

_citys["江苏"]["南京"].push({
  code: "NJB",
  name: "沃尔沃汽车江苏世贸泰信东盛4S中心"
});

_citys["辽宁"]["鞍山"].push({
  code: "ASA",
  name: "沃尔沃汽车鞍山尊荣4S中心"
});

_citys["山东"]["济南"].push({
  code: "JNF",
  name: "沃尔沃汽车山东新富豪4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJL",
  name: "沃尔沃汽车北京中汽南方中关村4S中心"
});

_citys["陕西"]["榆林"].push({
  code: "YLA",
  name: "沃尔沃汽车榆林佳豪金鼎4S中心"
});

_citys["云南"]["昆明"].push({
  code: "KMB",
  name: "沃尔沃汽车云南华沃4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJH",
  name: "沃尔沃汽车北京燕豪金港4S中心"
});

_citys["广东"]["东莞"].push({
  code: "DGB",
  name: "沃尔沃汽车东莞世沃4S中心"
});

_citys["山东"]["济宁"].push({
  code: "JNE",
  name: "沃尔沃汽车济宁恒昌4S中心"
});

_citys["山东"]["临沂"].push({
  code: "LYA",
  name: "沃尔沃汽车临沂富豪4S中心"
});

_citys["广东"]["佛山"].push({
  code: "SDB",
  name: "沃尔沃汽车顺德世维4S中心 "
});

_citys["广东"]["广州"].push({
  code: "GZC",
  name: "沃尔沃汽车广州世祥4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "WXC",
  name: "沃尔沃汽车无锡富绅城市展厅"
});

_citys["陕西"]["西安"].push({
  code: "XAC",
  name: "沃尔沃汽车陕西佳骏4S中心"
});

_citys["山东"]["淄博"].push({
  code: "JNB",
  name: "沃尔沃汽车淄博奥德达4S中心"
});

_citys["山东"]["青岛"].push({
  code: "QDB",
  name: "沃尔沃汽车青岛富融4S中心"
});

_citys["山东"]["泰安"].push({
  code: "TAA",
  name: "沃尔沃汽车泰安富豪4S中心"
});

_citys["山东"]["东营"].push({
  code: "DYA",
  name: "沃尔沃汽车东营富豪4S中心"
});

_citys["河北"]["邯郸"].push({
  code: "HBF",
  name: "沃尔沃汽车邯郸庞大兴沃4S中心"
});

_citys["四川"]["乐山"].push({
  code: "CDC",
  name: "沃尔沃汽车乐山通孚祥城市展厅"
});

_citys["黑龙江"]["大庆"].push({
  code: "DQA",
  name: "沃尔沃汽车大庆尊荣4S中心"
});

_citys["宁夏"]["银川"].push({
  code: "YCB",
  name: "沃尔沃汽车银川宁夏佳丰4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHG",
  name: "沃尔沃汽车上海永达嘉沃4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZD",
  name: "沃尔沃汽车浙江万友维修站"
});

_citys["内蒙古"]["赤峰"].push({
  code: "MGE",
  name: "沃尔沃汽车赤峰庞大兴沃4S中心"
});

_citys["浙江"]["杭州"].push({
  code: "HZF",
  name: "沃尔沃汽车杭州中沃4S中心"
});

_citys["辽宁"]["沈阳"].push({
  code: "SYC",
  name: "沃尔沃汽车沈阳尊荣富沃4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJM",
  name: "沃尔沃汽车北京元之沃4S中心"
});

_citys["天津"]["天津"].push({
  code: "TJC",
  name: "沃尔沃汽车天津通孚祥4S中心"
});

_citys["青海"]["西宁"].push({
  code: "QHA",
  name: "沃尔沃汽车西宁赛亚金孚4S中心"
});

_citys["河南"]["洛阳"].push({
  code: "HND",
  name: "沃尔沃汽车洛阳恒信瑞沃4S中心"
});

_citys["北京"]["北京"].push({
  code: "BJK",
  name: "沃尔沃汽车北京海之沃城市展厅"
});

_citys["山西"]["大同"].push({
  code: "BJK",
  name: "沃尔沃汽车大同雁之沃城市展厅"
});

_citys["广西"]["桂林"].push({
  code: "NNA",
  name: "沃尔沃汽车桂林弘瑞城市展厅"
});

_citys["甘肃"]["兰州"].push({
  code: "LZC",
  name: "沃尔沃汽车兰州庞大兴沃4S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHC",
  name: "沃尔沃汽车武汉富融4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDD",
  name: "沃尔沃汽车成都长征沃尔沃4S中心"
});

_citys["河南"]["郑州"].push({
  code: "HNC",
  name: "沃尔沃汽车郑州市郑州鼎沃4S中心"
});

_citys["浙江"]["湖州"].push({
  code: "HZE",
  name: "沃尔沃汽车湖州瑞杰4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "JYB",
  name: "沃尔沃汽车江阴东方沃邦4S中心"
});

_citys["江苏"]["徐州"].push({
  code: "XZA",
  name: "沃尔沃汽车徐州世贸泰信汽车4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHH",
  name: "沃尔沃汽车上海永达申杰4S"
});

_citys["广东"]["广州"].push({
  code: "GZA",
  name: "沃尔沃汽车广东中汽南方天河城市展厅"
});

_citys["福建"]["厦门"].push({
  code: "XMA",
  name: "沃尔沃汽车厦门新成功4S中心"
});

_citys["吉林"]["长春"].push({
  code: "CCB",
  name: "沃尔沃汽车长春维信4S中心"
});

_citys["安徽"]["合肥"].push({
  code: "HFC",
  name: "沃尔沃汽车合肥瑞杰4S中心"
});

_citys["江苏"]["泰州"].push({
  code: "TZD",
  name: "沃尔沃汽车泰州富豪4S中心"
});

_citys["福建"]["厦门"].push({
  code: "XMB",
  name: "沃尔沃汽车厦门中升沃茂4S中心"
});

_citys["江苏"]["无锡"].push({
  code: "YXA",
  name: "沃尔沃汽车宜兴东方沃邦4S中心"
});

_citys["广西"]["柳州"].push({
  code: "NNC",
  name: "沃尔沃汽车柳州弘耀 4S中心"
});

_citys["云南"]["昆明"].push({
  code: "KMC",
  name: "沃尔沃汽车昆明庞润荣沃4S中心"
});

_citys["福建"]["泉州"].push({
  code: "QZB",
  name: "沃尔沃汽车泉州中升沃茂 4S中心"
});

_citys["黑龙江"]["哈尔滨"].push({
  code: "HRB",
  name: "沃尔沃汽车哈尔滨尊荣亿方4S中心"
});

_citys["江西"]["赣州"].push({
  code: "GAA",
  name: "沃尔沃汽车赣州绿地祥沃4S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHE",
  name: "沃尔沃汽车武汉恒信瑞沃4S中心 "
});

_citys["江苏"]["镇江"].push({
  code: "ZJA",
  name: "沃尔沃汽车镇江世贸泰信4S中心"
});

_citys["陕西"]["西安"].push({
  code: "XAD",
  name: "沃尔沃汽车西安天润4S中心"
});

_citys["河南"]["平顶山"].push({
  code: "HNE",
  name: "沃尔沃汽车平顶山市丰海4S中心"
});

_citys["辽宁"]["大连"].push({
  code: "DLB",
  name: "沃尔沃大连尊荣汽车4S中心"
});

_citys["福建"]["福州"].push({
  code: "FZB",
  name: "沃尔沃汽车福州吉诺富豪4S中心"
});

_citys["辽宁"]["锦州"].push({
  code: "JZA",
  name: "沃尔沃汽车锦州尊荣4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZC",
  name: "沃尔沃汽车深圳德顺行龙岗展厅"
});

_citys["福建"]["龙岩"].push({
  code: "LYB",
  name: "沃尔沃汽车龙岩英瑞福4S中心"
});

_citys["湖南"]["长沙"].push({
  code: "CSC",
  name: "沃尔沃汽车长沙建沃4S中心"
});

_citys["贵州"]["贵阳"].push({
  code: "GYB",
  name: "沃尔沃汽车贵阳中沃4S中心"
});

_citys["河南"]["安阳"].push({
  code: "AYA",
  name: "沃尔沃汽车安阳东安4S中心"
});

_citys["山东"]["威海"].push({
  code: "WHD",
  name: "沃尔沃汽车 威海 威海富豪 4S中心 "
});

_citys["江苏"]["盐城"].push({
  code: "YCC",
  name: "沃尔沃汽车盐城东昌4S中心"
});

_citys["安徽"]["阜阳"].push({
  code: "FYA",
  name: "沃尔沃汽车阜阳瑞杰豪骏4S中心"
});

_citys["四川"]["绵阳"].push({
  code: "MYA",
  name: "沃尔沃汽车绵阳通孚祥4S中心"
});

_citys["福建"]["三明"].push({
  code: "SMA",
  name: "沃尔沃汽车三明吉诺富豪4S中心"
});

_citys["河南"]["商丘"].push({
  code: "SQA",
  name: "沃尔沃汽车商丘商沃4S中心"
});

_citys["河北"]["保定"].push({
  code: "BDB",
  name: "沃尔沃汽车保定轩宇骐骥4S中心"
});

_citys["江西"]["九江"].push({
  code: "JJA",
  name: "沃尔沃汽车九江福沃4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHI",
  name: "沃尔沃汽车上海东昌4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUD",
  name: "沃尔沃汽车苏州东昌4S中心"
});

_citys["浙江"]["宁波"].push({
  code: "NBA",
  name: "沃尔沃汽车宁波丰颐4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHA",
  name: "沃尔沃汽车上海世之沃浦西4S中心"
});

_citys["安徽"]["芜湖"].push({
  code: "HFB",
  name: "沃尔沃汽车芜湖豪骏4S中心"
});

_citys["河北"]["唐山"].push({
  code: "TSC",
  name: "沃尔沃汽车唐山凯骐4S中心"
});

_citys["山东"]["滨州"].push({
  code: "BZA",
  name: "沃尔沃汽车滨州东泰4S中心"
});

_citys["江苏"]["常熟"].push({
  code: "SUC",
  name: "沃尔沃汽车常熟通孚祥3S中心"
});

_citys["江西"]["南昌"].push({
  code: "NCB",
  name: "沃尔沃汽车南昌东沃4S中心"
});

_citys["江西"]["上饶"].push({
  code: "SRA",
  name: "沃尔沃汽车上饶名一4S中心"
});

_citys["山东"]["德州"].push({
  code: "DZA",
  name: "沃尔沃汽车德州瑞沃4S中心"
});

_citys["河北"]["邢台"].push({
  code: "XTA",
  name: "沃尔沃汽车邢台蓝池4S中心"
});

_citys["云南"]["红河"].push({
  code: "HHA",
  name: "沃尔沃汽车红河沃捷4S中心"
});

_citys["福建"]["漳州"].push({
  code: "ZZC",
  name: "沃尔沃汽车漳州新成功4S店中心"
});

_citys["湖南"]["株洲"].push({
  code: "ZZA",
  name: "沃尔沃汽车株洲德顺4S中心"
});

_citys["四川"]["南充"].push({
  code: "NAA",
  name: "沃尔沃汽车南充品信4S中心"
});

_citys["湖北"]["襄阳"].push({
  code: "XYC",
  name: "沃尔沃汽车襄阳建银4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZD",
  name: "沃尔沃汽车深圳鼎沃3S中心"
});

_citys["湖北"]["武汉"].push({
  code: "WHF",
  name: "沃尔沃汽车武汉建银4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQD",
  name: "沃尔沃汽车重庆万友都成4S中心"
});

_citys["安徽"]["合肥"].push({
  code: "HFD",
  name: "沃尔沃汽车合肥恒信4S中心"
});

_citys["广西"]["桂林"].push({
  code: "GLA",
  name: "沃尔沃汽车桂林广汇3S中心"
});

_citys["浙江"]["宁波"].push({
  code: "NBD",
  name: "沃尔沃汽车宁波沃龙4S中心"
});

_citys["河南"]["南阳"].push({
  code: "NYA",
  name: "沃尔沃汽车南阳和谐4S中心"
});

_citys["陕西"]["咸阳"].push({
  code: "XYA",
  name: "沃尔沃汽车咸阳新丰泰4S中心"
});

_citys["福建"]["莆田"].push({
  code: "PTA",
  name: "沃尔沃汽车莆田吉诺4S中心"
});

_citys["福建"]["福州"].push({
  code: "FZA",
  name: "沃尔沃汽车福州中汽南方4S中心"
});

_citys["广东"]["广州"].push({
  code: "GZD",
  name: "沃尔沃汽车广州广物君沃4S中心"
});

_citys["吉林"]["吉林"].push({
  code: "JLA",
  name: "沃尔沃汽车吉林市吉林维信4S中心"
});

_citys["陕西"]["宝鸡"].push({
  code: "BJZ",
  name: "沃尔沃汽车宝鸡宝沃4S中心"
});

_citys["陕西"]["延安"].push({
  code: "YAA",
  name: "沃尔沃汽车延安广汇4S中心"
});

_citys["山东"]["济南"].push({
  code: "JNG",
  name: "沃尔沃汽车济南京泰4S中心"
});

_citys["浙江"]["义乌"].push({
  code: "YWA",
  name: "沃尔沃汽车义乌金沃维修站"
});

_citys["四川"]["成都"].push({
  code: "CDE",
  name: "沃尔沃汽车成都广汇4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZC",
  name: "沃尔沃汽车深圳德顺4S中心"
});

_citys["河南"]["新乡"].push({
  code: "XXA",
  name: "沃尔沃汽车新乡东安4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQE",
  name: "沃尔沃汽车重庆万友3S中心"
});

_citys["北京"]["北京"].push({
  code: "BJO",
  name: "沃尔沃汽车北京正通鼎沃3S中心"
});

_citys["浙江"]["温州"].push({
  code: "WZD",
  name: "沃尔沃汽车温州荣沃4S中心"
});

_citys["江苏"]["苏州"].push({
  code: "SUB",
  name: "沃尔沃汽车昆山通孚祥展厅"
});

_citys["河南"]["郑州"].push({
  code: "HNF",
  name: "沃尔沃汽车郑州中沃4S中心"
});

_citys["河北"]["沧州"].push({
  code: "HBH",
  name: "沃尔沃汽车沧州广汇4S中心"
});

_citys["河北"]["石家庄"].push({
  code: "HBG",
  name: "沃尔沃汽车石家庄瑞沃4S中心"
});

_citys["四川"]["成都"].push({
  code: "CDF",
  name: "沃尔沃汽车成都建国4S中心"
});

_citys["江苏"]["南京"].push({
  code: "NJA",
  name: "沃尔沃汽车南京世贸泰信4S中心"
});

_citys["山西"]["临汾"].push({
  code: "LFA",
  name: "沃尔沃汽车临汾海之沃4S中心"
});

_citys["浙江"]["舟山"].push({
  code: "ZSB",
  name: "沃尔沃汽车舟山永杰4S中心"
});

_citys["山西"]["运城"].push({
  code: "YUA",
  name: "沃尔沃汽车运城海之沃4S中心"
});

_citys["河南"]["郑州"].push({
  code: "HNH",
  name: "沃尔沃汽车郑州东沃4S中心"
});

_citys["重庆"]["重庆"].push({
  code: "CQF",
  name: "沃尔沃重庆高新璟沃4S中心"
});

_citys["陕西"]["西安"].push({
  code: "XAE",
  name: "沃尔沃西安天一汇通4S中心"
});

_citys["江苏"]["南京"].push({
  code: "NJC",
  name: "沃尔沃汽车南京天泓凯润4S中心"
});

_citys["广东"]["江门"].push({
  code: "JMA",
  name: "沃尔沃汽车江门元柏通4S中心"
});

_citys["浙江"]["嘉兴"].push({
  code: "HAA",
  name: "沃尔沃汽车海宁弘丰4S中心"
});

_citys["上海"]["上海"].push({
  code: "SHJ",
  name: "沃尔沃汽车上海永达沃尔沃4S中心"
});

_citys["广东"]["佛山"].push({
  code: "FSA",
  name: "沃尔沃汽车佛山南方骏沃4S中心"
});

_citys["湖北"]["宜昌"].push({
  code: "YCD",
  name: "沃尔沃汽车宜昌恒信瑞沃4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZF",
  name: "沃尔沃汽车深圳市德智行4S中心"
});

_citys["广西"]["钦州"].push({
  code: "QAA",
  name: "沃尔沃汽车钦州恒沃4S中心"
});

_citys["广东"]["湛江"].push({
  code: "ZAA",
  name: "沃尔沃汽车湛江合沃4s中心"
});

_citys["浙江"]["衢州"].push({
  code: "QUA",
  name: "沃尔沃汽车衢州君悦瑞沃4S中心"
});

_citys["浙江"]["金华"].push({
  code: "JHC",
  name: "沃尔沃汽车金华中沃4S中心"
});

_citys["广东"]["深圳"].push({
  code: "SZE",
  name: "沃尔沃汽车深圳德利行4S中心"
});

_citys["湖南"]["长沙"].push({
  code: "CSD",
  name: "沃尔沃汽车长沙德熙行4S中心"
});

_citys["江苏"]["连云港"].push({
  code: "LYC",
  name: "沃尔沃汽车连云港伟途4S中心"
});

_citys["天津"]["天津"].push({
  code: "TJD",
  name: "沃尔沃汽车天津荣沃4S中心"
});

_citys["四川"]["泸州"].push({
  code: "LZD",
  name: "沃尔沃汽车泸州市泸州中沃4S中心"
});

_citys["江苏"]["南通"].push({
  code: "NTB",
  name: "沃尔沃汽车南通市南通文峰恒信行4S中心"
});

_citys["安徽"]["蚌埠"].push({
  code: "BBA",
  name: "沃尔沃汽车蚌埠市蚌埠永达沃尔沃4S中心"
});

_citys["湖南"]["怀化"].push({
  code: "HUA",
  name: "沃尔沃汽车怀化仁达4S中心"
});

_citys["广东"]["广州"].push({
  code: "GZE",
  name: "沃尔沃汽车广州南方骏沃4S中心"
});

_citys["广东"]["清远"].push({
  code: "QYA",
  name: "沃尔沃汽车清远南方骏沃4S中心"
});

window.onload = function () {
  riot.mount("*");
  $(".left").on("click", moveLeft);
  $(".right").on("click", moveRight);
  $(".left2").on("click", mLeft);
  $(".right2").on("click", mRight);
  $(".next-point,.next-text").on("click", function () {
    return Store.parallax.changepage("model-2");
  });
  $(".backTop").on("click", function () {
    return Store.parallax.changepage("model-2");
  });
  return $(window).on("scroll", function (evt) {
    // console.log $(window).scrollTop()>$(window).width(),$(window).scrollTop(),$(window).width()
    if ($(window).scrollTop() > $(window).width()) {
      return $(".backTop").removeClass("hide");
    } else {
      return $(".backTop").addClass("hide");
    }
  });
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
  $(".points span").removeClass("on");
  return $(".points span").eq(Math.abs(i)).addClass("on");
};

changeMain = function changeMain(i) {
  console.log(i);
  return tabId = Math.abs(i);
};

mLeft = function mLeft() {
  tabId2--;
  $(".points span").removeClass("on");
  if (tabId2 < 0) {
    tabId2 = 4;
  }
  secondSlider.setNumber(tabId2);
  return $(".points span").eq(tabId2).addClass("on");
};

mRight = function mRight() {
  tabId2++;
  $(".points span").removeClass("on");
  if (tabId2 > 4) {
    tabId2 = 0;
  }
  secondSlider.setNumber(tabId2);
  return $(".points span").eq(tabId2).addClass("on");
};

moveLeft = function moveLeft() {
  tabId--;
  if (tabId < 0) {
    tabId = 2;
  }
  return mainSlider.setNumber(tabId);
};

moveRight = function moveRight() {
  tabId++;
  if (tabId > 2) {
    tabId = 0;
  }
  return mainSlider.setNumber(tabId);
};
