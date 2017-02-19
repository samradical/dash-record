var xhr = require('xhr-request');
var Q = require('bluebird');
var DashRecord = (() => {

  function getRange(url, range) {
    return new Q((resolve, reject)=> {
      xhr(url, {
        method: 'GET',
        responseType: 'arraybuffer',
        headers: {
          'Range': `bytes=${range}`,
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36'
        },
      }, function(err, data, response) {
        if (err) {
          console.log(err);
          reject(err)
        } else {
          resolve(data)
        }
      })
    });
  }

  return {
    getRange: getRange,
  }

})();

module.exports = DashRecord;
