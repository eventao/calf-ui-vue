export default {
  name: 'Pollify',
  install(Vue) {

    //执行指定总数的循环数,并调用回调函数
    Vue.prototype.forr = function (total, cb) {
      for (let i = 0; i < total; i++) {
        cb(i);
      }
    };
    //填充指定整数范围的数组
    Vue.prototype.numberFull = function (start, end) {
      let s1 = end ? start : 0;
      let result = [];
      for (let i = s1; i < (end ? end : start); i++) {
        result.push(i);
      }
      return result;
    };
    //指定字符填充数组
    Vue.prototype.fullArray = function (flag, total) {
      let result = [];
      for (let i = 0; i < total; i++) {
        result.push(flag);
      }
      return result;
    };
    Vue.prototype.authKey = 'auth';
    Vue.prototype.getAuth = function () {
      return window.localStorage.getItem(this.authKey);
    };

    Vue.prototype.getStartTargetArray = function (start, target) {
      start = start || 0;
      let result = [];
      for (let i = start; i < target; i++) {
        result.push(i);
      }
      return result;
    };

    //限制只能输入正整数(非0开头的整数)
    Vue.prototype.limitInputNumD = function (str) {
      let rStr = str.replace(/[^\d]/g, '');  //只能输入数字

      if (rStr[0] === '0') {
        let ad = rStr.split('');
        ad.splice(0, 1);
        rStr = ad.join('');
      }
      return rStr;
    };

    //限制只能输入正数(大于0的整数或浮点数)
    Vue.prototype.limitInputNumPlus = function (str) {
      //清除“数字”和“.”以外的字符
      let rStr = str.replace(/[^\d.]/g, "");
      //只保留第一个. 清除多余的
      rStr = rStr.replace(/\.{2,}/g, ".");
      rStr = rStr.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
      //只能输入两个小数
      rStr = rStr.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      return rStr;
    };

    Vue.prototype.findParent = function (dom, pClass) {
      if (dom.hasClass(pClass)) {
        return dom;
      } else {
        let parent = dom.parent();
        if (parent.length) {
          return Vue.prototype.findParent(parent, pClass);
        } else {
          return null;
        }

      }
    };

    Vue.prototype.zero = function (row, column) {
      let result = [];
      this.forr(row, () => {
        let ro = [];
        this.forr(column, () => {
          ro.push(0);
        });
        result.push(ro);
      });
      return result;
    };
    Vue.prototype.one = function (row, column) {
      let result = [];
      this.forr(row, () => {
        let ro = [];
        this.forr(column, () => {
          ro.push(1);
        });
        result.push(ro);
      });
      return result;
    };

  },
}
