/*
 * Copyright 2017 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.require('goog.testing.jsunit');

// Make 'prototype' an enumerable property of functions.
Function.prototype.prototype = {};

var Base = class {
  /** @return {string} */
  toString() {
    return 'base';
  }
};

var Sub = class extends Base {
  /** @override */
  toString() {
    return 'sub';
  }
};

function testBaseClass() {
  var b = new Base();
  assertEquals('base', b.toString());
}


function testSubclass() {
  var s = new Sub();
  assertEquals('sub', s.toString());
}
