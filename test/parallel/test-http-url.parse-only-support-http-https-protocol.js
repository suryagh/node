'use strict';
require('../common');
const assert = require('assert');
const http = require('http');
const url = require('url');


assert.throws(function() {
  http.request(url.parse('file:///whatever'));
}, function(err) {
  if (err instanceof Error) {
    assert.strictEqual(err.message, 'Protocol "file:" not supported.' +
                       ' Expected "http:"');
    return true;
  }
});

assert.throws(function() {
  http.request('mailto:asdf@asdf.com');
}, function(err) {
  if (err instanceof Error) {
    assert.strictEqual(err.message, 'Protocol "mailto:" not supported.' +
                       ' Expected "http:"');
    return true;
  }
});

assert.throws(function() {
  http.request('ftp://www.example.com');
}, function(err) {
  if (err instanceof Error) {
    assert.strictEqual(err.message, 'Protocol "ftp:" not supported.' +
                       ' Expected "http:"');
    return true;
  }
});

assert.throws(function() {
  http.request(url.parse('javascript:alert(\'hello\');'));
}, function(err) {
  if (err instanceof Error) {
    assert.strictEqual(err.message, 'Protocol "javascript:" not supported.' +
                       ' Expected "http:"');
    return true;
  }
});

assert.throws(function() {
  http.request('xmpp:isaacschlueter@jabber.org');
}, function(err) {
  if (err instanceof Error) {
    assert.strictEqual(err.message, 'Protocol "xmpp:" not supported.' +
                       ' Expected "http:"');
    return true;
  }
});

assert.throws(function() {
  http.request('f://some.host/path');
}, function(err) {
  if (err instanceof Error) {
    assert.strictEqual(err.message, 'Protocol "f:" not supported.' +
                       ' Expected "http:"');
    return true;
  }
});
