/**
 * @fileoverview gRPC-Web generated client stub for services.tasks_svc.v1
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: services/tasks_svc/v1/ward_svc.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var libs_common_v1_conflict_pb = require('../../../libs/common/v1/conflict_pb.js')
const proto = {};
proto.services = {};
proto.services.tasks_svc = {};
proto.services.tasks_svc.v1 = require('./ward_svc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.tasks_svc.v1.WardServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.services.tasks_svc.v1.WardServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.CreateWardRequest,
 *   !proto.services.tasks_svc.v1.CreateWardResponse>}
 */
const methodDescriptor_WardService_CreateWard = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/CreateWard',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.CreateWardRequest,
  proto.services.tasks_svc.v1.CreateWardResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.CreateWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.CreateWardResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.CreateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.CreateWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.CreateWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.createWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/CreateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_CreateWard,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.CreateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.CreateWardResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.createWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/CreateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_CreateWard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.GetWardRequest,
 *   !proto.services.tasks_svc.v1.GetWardResponse>}
 */
const methodDescriptor_WardService_GetWard = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/GetWard',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.GetWardRequest,
  proto.services.tasks_svc.v1.GetWardResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.GetWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.GetWardResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.GetWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.GetWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.GetWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.getWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWard',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWard,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.GetWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.GetWardResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.getWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWard',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.GetWardsRequest,
 *   !proto.services.tasks_svc.v1.GetWardsResponse>}
 */
const methodDescriptor_WardService_GetWards = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/GetWards',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.GetWardsRequest,
  proto.services.tasks_svc.v1.GetWardsResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.GetWardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.GetWardsResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.GetWardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.GetWardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.GetWardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.getWards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWards',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWards,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.GetWardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.GetWardsResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.getWards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWards',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.GetRecentWardsRequest,
 *   !proto.services.tasks_svc.v1.GetRecentWardsResponse>}
 */
const methodDescriptor_WardService_GetRecentWards = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/GetRecentWards',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.GetRecentWardsRequest,
  proto.services.tasks_svc.v1.GetRecentWardsResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.GetRecentWardsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.GetRecentWardsResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.GetRecentWardsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.GetRecentWardsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.GetRecentWardsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.getRecentWards =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetRecentWards',
      request,
      metadata || {},
      methodDescriptor_WardService_GetRecentWards,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.GetRecentWardsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.GetRecentWardsResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.getRecentWards =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetRecentWards',
      request,
      metadata || {},
      methodDescriptor_WardService_GetRecentWards);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.UpdateWardRequest,
 *   !proto.services.tasks_svc.v1.UpdateWardResponse>}
 */
const methodDescriptor_WardService_UpdateWard = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/UpdateWard',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.UpdateWardRequest,
  proto.services.tasks_svc.v1.UpdateWardResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.UpdateWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.UpdateWardResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.UpdateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.UpdateWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.UpdateWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.updateWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/UpdateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_UpdateWard,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.UpdateWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.UpdateWardResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.updateWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/UpdateWard',
      request,
      metadata || {},
      methodDescriptor_WardService_UpdateWard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.DeleteWardRequest,
 *   !proto.services.tasks_svc.v1.DeleteWardResponse>}
 */
const methodDescriptor_WardService_DeleteWard = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/DeleteWard',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.DeleteWardRequest,
  proto.services.tasks_svc.v1.DeleteWardResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.DeleteWardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.DeleteWardResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.DeleteWardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.DeleteWardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.DeleteWardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.deleteWard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/DeleteWard',
      request,
      metadata || {},
      methodDescriptor_WardService_DeleteWard,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.DeleteWardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.DeleteWardResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.deleteWard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/DeleteWard',
      request,
      metadata || {},
      methodDescriptor_WardService_DeleteWard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.GetWardDetailsRequest,
 *   !proto.services.tasks_svc.v1.GetWardDetailsResponse>}
 */
const methodDescriptor_WardService_GetWardDetails = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/GetWardDetails',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.GetWardDetailsRequest,
  proto.services.tasks_svc.v1.GetWardDetailsResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.GetWardDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.GetWardDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.GetWardDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.GetWardDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.GetWardDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.getWardDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWardDetails',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWardDetails,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.GetWardDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.GetWardDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.getWardDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWardDetails',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWardDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.tasks_svc.v1.GetWardOverviewsRequest,
 *   !proto.services.tasks_svc.v1.GetWardOverviewsResponse>}
 */
const methodDescriptor_WardService_GetWardOverviews = new grpc.web.MethodDescriptor(
  '/services.tasks_svc.v1.WardService/GetWardOverviews',
  grpc.web.MethodType.UNARY,
  proto.services.tasks_svc.v1.GetWardOverviewsRequest,
  proto.services.tasks_svc.v1.GetWardOverviewsResponse,
  /**
   * @param {!proto.services.tasks_svc.v1.GetWardOverviewsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.tasks_svc.v1.GetWardOverviewsResponse.deserializeBinary
);


/**
 * @param {!proto.services.tasks_svc.v1.GetWardOverviewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.services.tasks_svc.v1.GetWardOverviewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.tasks_svc.v1.GetWardOverviewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.tasks_svc.v1.WardServiceClient.prototype.getWardOverviews =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWardOverviews',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWardOverviews,
      callback);
};


/**
 * @param {!proto.services.tasks_svc.v1.GetWardOverviewsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.tasks_svc.v1.GetWardOverviewsResponse>}
 *     Promise that resolves to the response
 */
proto.services.tasks_svc.v1.WardServicePromiseClient.prototype.getWardOverviews =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.tasks_svc.v1.WardService/GetWardOverviews',
      request,
      metadata || {},
      methodDescriptor_WardService_GetWardOverviews);
};


module.exports = proto.services.tasks_svc.v1;
