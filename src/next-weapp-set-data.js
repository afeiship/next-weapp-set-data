(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var newState = null;

  nx.weappSetData = function(inContext, inData, inCallback) {
    newState = nx.mix(null, newState, inData);
    Promise.resolve().then(function() {
      if (!newState) return;
      inContext.setData(newState, inCallback);
      newState = null;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.weappSetData;
  }
})();
