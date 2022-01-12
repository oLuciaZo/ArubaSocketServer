// source: aruba-iot-nb-action-results.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var aruba$iot$types_pb = require('./aruba-iot-types_pb.js');
goog.object.extend(proto, aruba$iot$types_pb);
goog.exportSymbol('proto.aruba_telemetry.ActionResult', null, global);
goog.exportSymbol('proto.aruba_telemetry.ActionStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.aruba_telemetry.ActionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.aruba_telemetry.ActionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.aruba_telemetry.ActionResult.displayName = 'proto.aruba_telemetry.ActionResult';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.aruba_telemetry.ActionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.aruba_telemetry.ActionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.aruba_telemetry.ActionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruba_telemetry.ActionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionid: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    devicemac: msg.getDevicemac_asB64(),
    status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    statusstring: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.aruba_telemetry.ActionResult}
 */
proto.aruba_telemetry.ActionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.aruba_telemetry.ActionResult;
  return proto.aruba_telemetry.ActionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.aruba_telemetry.ActionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.aruba_telemetry.ActionResult}
 */
proto.aruba_telemetry.ActionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionid(value);
      break;
    case 2:
      var value = /** @type {!proto.aruba_telemetry.ActionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevicemac(value);
      break;
    case 4:
      var value = /** @type {!proto.aruba_telemetry.ActionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusstring(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.aruba_telemetry.ActionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.aruba_telemetry.ActionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.aruba_telemetry.ActionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.aruba_telemetry.ActionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.aruba_telemetry.ActionType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = /** @type {!proto.aruba_telemetry.ActionStatus} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string actionId = 1;
 * @return {string}
 */
proto.aruba_telemetry.ActionResult.prototype.getActionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.setActionid = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.clearActionid = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aruba_telemetry.ActionResult.prototype.hasActionid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActionType type = 2;
 * @return {!proto.aruba_telemetry.ActionType}
 */
proto.aruba_telemetry.ActionResult.prototype.getType = function() {
  return /** @type {!proto.aruba_telemetry.ActionType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.aruba_telemetry.ActionType} value
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.setType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.clearType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aruba_telemetry.ActionResult.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes deviceMac = 3;
 * @return {!(string|Uint8Array)}
 */
proto.aruba_telemetry.ActionResult.prototype.getDevicemac = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes deviceMac = 3;
 * This is a type-conversion wrapper around `getDevicemac()`
 * @return {string}
 */
proto.aruba_telemetry.ActionResult.prototype.getDevicemac_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevicemac()));
};


/**
 * optional bytes deviceMac = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevicemac()`
 * @return {!Uint8Array}
 */
proto.aruba_telemetry.ActionResult.prototype.getDevicemac_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevicemac()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.setDevicemac = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.clearDevicemac = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aruba_telemetry.ActionResult.prototype.hasDevicemac = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ActionStatus status = 4;
 * @return {!proto.aruba_telemetry.ActionStatus}
 */
proto.aruba_telemetry.ActionResult.prototype.getStatus = function() {
  return /** @type {!proto.aruba_telemetry.ActionStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.aruba_telemetry.ActionStatus} value
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aruba_telemetry.ActionResult.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string statusString = 5;
 * @return {string}
 */
proto.aruba_telemetry.ActionResult.prototype.getStatusstring = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.setStatusstring = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.aruba_telemetry.ActionResult} returns this
 */
proto.aruba_telemetry.ActionResult.prototype.clearStatusstring = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.aruba_telemetry.ActionResult.prototype.hasStatusstring = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.aruba_telemetry.ActionStatus = {
  FAILUREGENERIC: 0,
  SUCCESS: 1,
  DEVICENOTFOUND: 2,
  APNOTFOUND: 3,
  ACTIONTIMEOUT: 4,
  CONNECTIONABORTED: 5,
  AUTHENTICATIONFAILED: 6,
  NOTCONNECTED: 7,
  PREVIOUSACTIONFAILED: 8,
  ALREADYCONNECTED: 9,
  NOMORECONNECTIONSLOTS: 10,
  DECODINGFAILED: 11,
  CHARACTERISTICNOTFOUND: 12,
  INVALIDREQUEST: 13,
  GATTERROR: 14
};

goog.object.extend(exports, proto.aruba_telemetry);