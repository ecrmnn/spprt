'use strict';

exports.last = function (arr) {
  return arr[arr.length - 1];
}

exports.has = function (obj, property) {
  if (Array.isArray(obj)) {
    return this.inArray(obj, property)
  }

  return obj.hasOwnProperty(property);
}

exports.inArray = function (arr, element) {
  return arr.indexOf(element) !== -1;
}

exports.only = function (obj, properties) {
  var collection = {};

  for (var prop in obj) {
    if (this.inArray(properties, prop)) {
      collection[prop] = obj[prop];
    }
  }

  return collection;
}

exports.except = function (obj, properties) {
  var collection = {};

  for (var prop in obj) {
    if (!this.inArray(properties, prop)) {
      collection[prop] = obj[prop];
    }
  }

  return collection;
}

exports.merge = function () {
  var args = Array.prototype.slice.call(arguments);

  if (Array.isArray(args[0])) {
    return mergeArrays(args);
  }

  return mergeObjects(args);
}

var mergeArrays = function (args) {
  return [].concat.apply([], [].slice.call(args));
}

var mergeObjects = function (args) {
  var collection = {};

  args.forEach(function (obj) {
    for (var prop in obj) {
      if (!collection.hasOwnProperty(prop)) {
        collection[prop] = obj[prop];
      }
    }
  });

  return collection;
}

exports.unique = function (arr) {
  return arr.filter(function (element, index, self) {
    return self.indexOf(element) === index;
  });
}

exports.shuffle = function (a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }

  return a;
}

exports.diff = function (arr) {
  var rest = [].concat.apply([], [].slice.call(arguments, 1));
  return arr.filter(function (el) {
    return rest.indexOf(el) === -1;
  });
}

exports.intersect = function (arr) {
  var rest = [].concat.apply([], [].slice.call(arguments, 1));
  return arr.filter(function (el) {
    return rest.indexOf(el) !== -1;
  });
}