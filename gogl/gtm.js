// Copyright 2012 Google Inc. All rights reserved.
(function() {

  var data = {
   "resource": {
    "version": "1",

    "macros": [{
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": true,
     "vtp_defaultValue": "en",
     "vtp_name": "language"
    }, {
     "function": "__e"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_id"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_name"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": true,
     "vtp_name": "sdk_version"
    }, {
     "function": "__c",
     "vtp_value": "gtm.js"
    }, {
     "function": "__c",
     "vtp_value": "gtm.js"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "eventValue"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "eventCategory"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "eventAction"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "eventLabel"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "odid"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_publisher_id"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_eula_mode"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_data_optin"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_bundle"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "application_publisher_name"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "aaid"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "aaid-optout"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "richadvertid"
    }, {
     "function": "__v",
     "vtp_dataLayerVersion": 2,
     "vtp_setDefaultValue": false,
     "vtp_name": "event"
    }, {
     "function": "__u",
     "vtp_component": "URL"
    }, {
     "function": "__u",
     "vtp_component": "HOST"
    }, {
     "function": "__u",
     "vtp_component": "PATH"
    }, {
     "function": "__f",
     "vtp_component": "URL"
    }, {
     "function": "__e"
    }],
    "tags": [{
     "function": "__ua",
     "once_per_event": true,
     "vtp_doubleClick": true,
     "vtp_setTrackerName": false,
     "vtp_useDebugVersion": false,
     "vtp_useHashAutoLink": false,
     "vtp_trackType": "TRACK_PAGEVIEW",
     "vtp_decorateFormsAutoLink": false,
     "vtp_enableLinkId": false,
     "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 2]],
      ["map", "index", "2", "dimension", ["template", ["macro", 3], " (", ["macro", 2], ")"]],
      ["map", "index", "3", "dimension", ["macro", 4]]
     ],
     "vtp_enableEcommerce": false,
     "vtp_trackingId": ["macro", 5],
     "vtp_enableUaRlsa": false,
     "vtp_enableUseInternalVersion": false,
     "vtp_enableFirebaseCampaignData": true,
     "tag_id": 4
    }, {
     "function": "__opt",
     "once_per_event": true,
     "vtp_setTrackerName": false,
     "vtp_useDebugVersion": false,
     "vtp_optimizeContainerId": ["macro", 6],
     "vtp_trackingId": ["macro", 5],
     "tag_id": 5
    }, {
     "function": "__ua",
     "once_per_event": true,
     "vtp_nonInteraction": false,
     "vtp_doubleClick": true,
     "vtp_setTrackerName": false,
     "vtp_useDebugVersion": false,
     "vtp_eventValue": ["macro", 7],
     "vtp_eventCategory": ["macro", 8],
     "vtp_trackType": "TRACK_EVENT",
     "vtp_enableLinkId": false,
     "vtp_eventAction": ["macro", 9],
     "vtp_eventLabel": ["macro", 10],
     "vtp_enableEcommerce": false,
     "vtp_trackingId": ["macro", 5],
     "vtp_enableUaRlsa": false,
     "vtp_enableUseInternalVersion": false,
     "vtp_enableFirebaseCampaignData": true,
     "vtp_trackTypeIsEvent": true,
     "tag_id": 6
    }, {
     "function": "__ua",
     "once_per_event": true,
     "vtp_doubleClick": true,
     "vtp_setTrackerName": false,
     "vtp_useDebugVersion": false,
     "vtp_useHashAutoLink": false,
     "vtp_trackType": "TRACK_PAGEVIEW",
     "vtp_decorateFormsAutoLink": false,
     "vtp_enableLinkId": false,
     "vtp_enableEcommerce": false,
     "vtp_trackingId": "gtm.js",
     "vtp_enableUaRlsa": false,
     "vtp_enableUseInternalVersion": false,
     "vtp_enableFirebaseCampaignData": true,
     "tag_id": 7
    }, {
     "function": "__ua",
     "once_per_event": true,
     "vtp_nonInteraction": false,
     "vtp_doubleClick": false,
     "vtp_setTrackerName": false,
     "vtp_useDebugVersion": false,
     "vtp_eventValue": ["macro", 7],
     "vtp_eventCategory": ["macro", 8],
     "vtp_trackType": "TRACK_EVENT",
     "vtp_enableLinkId": false,
     "vtp_eventAction": ["macro", 9],
     "vtp_eventLabel": ["macro", 10],
     "vtp_enableEcommerce": false,
     "vtp_trackingId": "gtm.js",
     "vtp_enableUaRlsa": false,
     "vtp_enableUseInternalVersion": false,
     "vtp_enableFirebaseCampaignData": true,
     "vtp_trackTypeIsEvent": true,
     "tag_id": 8
    }],
    "predicates": [{
     "function": "_eq",
     "arg0": ["macro", 0],
     "arg1": "fr"
    }, {
     "function": "_eq",
     "arg0": ["macro", 1],
     "arg1": "gtm.js"
    }, {
     "function": "_cn",
     "arg0": ["macro", 0],
     "arg1": "fr"
    }, {
     "function": "_eq",
     "arg0": ["macro", 1],
     "arg1": "gaEvent"
    }],
    "rules": [
     [
      ["if", 0, 1],
      ["add", 0, 1]
     ],
     [
      ["if", 2, 3],
      ["add", 2]
     ],
     [
      ["if", 1],
      ["add", 3]
     ],
     [
      ["if", 3],
      ["add", 4]
     ]
    ]
   },
   "runtime": [
    [],
    []
   ]

  })()