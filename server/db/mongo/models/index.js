Date.prototype.toFormatString = function(format = '%y-%m-%dT%H:%M:%S.%MsZ') {
  var f = { y : this.getUTCFullYear(),
            m : this.getUTCMonth() + 1,
            d : this.getUTCDate(),
            H : this.getUTCHours(),
            M : this.getUTCMinutes(),
            S : this.getUTCSeconds(),
            Ms : this.getUTCMilliseconds()
          }
  for(let k in f)
    format = format.replace('%' + k, f[k] < 10 ? "0" + f[k] : f[k]);
  return format;
};

export default function loadModels() {
  require('./topics');
  require('./user');
  require('./oauth');
  require('./orders');
  require('./products');
  require('./clients');
  require('./modules');
  require('./placement');
  require('./module_worktime');
  require('./orders_active');
  require('./product_category');
  require('./user_groups');
}
