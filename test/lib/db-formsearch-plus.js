import { ref as N, reactive as D, computed as P, resolveComponent as p, openBlock as a, createElementBlock as o, Fragment as c, renderList as v, unref as t, createElementVNode as n, toDisplayString as _, createVNode as s, createCommentVNode as d, withCtx as h, createBlock as x, renderSlot as T, createTextVNode as U } from "vue";
/*! Element Plus v2.2.29 */
var $ = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "确定",
      clear: "清空"
    },
    datepicker: {
      now: "此刻",
      today: "今天",
      cancel: "取消",
      clear: "清空",
      confirm: "确定",
      selectDate: "选择日期",
      selectTime: "选择时间",
      startDate: "开始日期",
      startTime: "开始时间",
      endDate: "结束日期",
      endTime: "结束时间",
      prevYear: "前一年",
      nextYear: "后一年",
      prevMonth: "上个月",
      nextMonth: "下个月",
      year: "年",
      month1: "1 月",
      month2: "2 月",
      month3: "3 月",
      month4: "4 月",
      month5: "5 月",
      month6: "6 月",
      month7: "7 月",
      month8: "8 月",
      month9: "9 月",
      month10: "10 月",
      month11: "11 月",
      month12: "12 月",
      weeks: {
        sun: "日",
        mon: "一",
        tue: "二",
        wed: "三",
        thu: "四",
        fri: "五",
        sat: "六"
      },
      months: {
        jan: "一月",
        feb: "二月",
        mar: "三月",
        apr: "四月",
        may: "五月",
        jun: "六月",
        jul: "七月",
        aug: "八月",
        sep: "九月",
        oct: "十月",
        nov: "十一月",
        dec: "十二月"
      }
    },
    select: {
      loading: "加载中",
      noMatch: "无匹配数据",
      noData: "无数据",
      placeholder: "请选择"
    },
    cascader: {
      noMatch: "无匹配数据",
      loading: "加载中",
      placeholder: "请选择",
      noData: "暂无数据"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      deprecationWarning: "你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"
    },
    messagebox: {
      title: "提示",
      confirm: "确定",
      cancel: "取消",
      error: "输入的数据不合法!"
    },
    upload: {
      deleteTip: "按 delete 键可删除",
      delete: "删除",
      preview: "查看图片",
      continue: "继续上传"
    },
    table: {
      emptyText: "暂无数据",
      confirmFilter: "筛选",
      resetFilter: "重置",
      clearFilter: "全部",
      sumText: "合计"
    },
    tree: {
      emptyText: "暂无数据"
    },
    transfer: {
      noMatch: "无匹配数据",
      noData: "无数据",
      titles: ["列表 1", "列表 2"],
      filterPlaceholder: "请输入搜索内容",
      noCheckedFormat: "共 {total} 项",
      hasCheckedFormat: "已选 {checked}/{total} 项"
    },
    image: {
      error: "加载失败"
    },
    pageHeader: {
      title: "返回"
    },
    popconfirm: {
      confirmButtonText: "确定",
      cancelButtonText: "取消"
    }
  }
};
const j = { class: "form" }, L = { class: "form_item_lable" }, H = { class: "form_item_val" }, W = { class: "form_item_lable" }, q = { class: "form_item_val" }, G = { class: "form_item_lable" }, I = { class: "form_item_val" }, J = { class: "form_item_lable" }, K = { class: "form_item_val" }, O = { class: "form_item_lable" }, Q = { class: "form_item_val" }, R = {
  key: 0,
  class: "form_item"
}, f = {
  __name: "index",
  props: {
    opts: {
      type: Array,
      default: () => []
    },
    span: {
      type: Number,
      default: 6
    },
    searchBtn: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["formSearch"],
  setup(i, { expose: m, emit: k }) {
    const b = i, w = N($);
    let l = D({});
    const y = D({});
    D({});
    const S = P(() => b.opts), B = () => {
      const r = { ...l, ...y };
      k("formSearch", r);
    }, g = () => {
      for (const r in l)
        l[r] = "";
      k("formSearch", {});
    }, C = (r, F) => {
      const E = l[r];
      F && (y[r] = E[0], y[F] = E[1]);
    };
    return m({
      formData: l,
      search: B,
      reset: g
    }), (r, F) => {
      const E = p("el-input"), V = p("el-option"), A = p("el-select"), z = p("el-date-picker"), M = p("el-config-provider"), Y = p("el-button");
      return a(), o("div", j, [
        (a(!0), o(c, null, v(t(S), (e) => (a(), o("div", {
          class: "form_item",
          key: e.key
        }, [
          e.type === "input" ? (a(), o(c, { key: 0 }, [
            n("div", L, _(e.label), 1),
            n("div", H, [
              s(E, {
                modelValue: t(l)[e.key],
                "onUpdate:modelValue": (u) => t(l)[e.key] = u,
                placeholder: "请输入姓名",
                size: e.size || "default",
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "size"])
            ])
          ], 64)) : d("", !0),
          e.type === "select" ? (a(), o(c, { key: 1 }, [
            n("div", W, _(e.label), 1),
            n("div", q, [
              s(A, {
                modelValue: t(l)[e.key],
                "onUpdate:modelValue": (u) => t(l)[e.key] = u,
                multiple: e.multiple,
                filterable: !!e.filterable,
                clearable: !!e.clearable,
                style: { width: "100%" },
                placeholder: e.placeholder ? e.placeholder : "请输入" + e.label,
                size: e.size || "default"
              }, {
                default: h(() => [
                  (a(!0), o(c, null, v(e.selects, (u) => (a(), x(V, {
                    key: u.id,
                    label: u.name,
                    value: u.id
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "multiple", "filterable", "clearable", "placeholder", "size"])
            ])
          ], 64)) : d("", !0),
          e.type === "date" ? (a(), o(c, { key: 2 }, [
            n("div", G, _(e.label), 1),
            n("div", I, [
              s(z, {
                modelValue: t(l)[e.key],
                "onUpdate:modelValue": (u) => t(l)[e.key] = u,
                style: { width: "100%" },
                type: e.dateType,
                size: e.size || "default",
                format: e.format || "YYYY",
                "value-format": e.format || "YYYY",
                placeholder: e.placeholder,
                onChange: (u) => C(e.key)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "size", "format", "value-format", "placeholder", "onChange"])
            ])
          ], 64)) : d("", !0),
          e.type === "remoteSelect" ? (a(), o(c, { key: 3 }, [
            n("div", J, _(e.label), 1),
            n("div", K, [
              s(A, {
                modelValue: t(l)[e.key],
                "onUpdate:modelValue": (u) => t(l)[e.key] = u,
                multiple: "",
                filterable: !!e.filterable,
                style: { width: "100%" },
                placeholder: e.placeholder ? e.placeholder : "请输入" + e.label,
                clearable: !!e.clearable,
                remote: !!e.remote,
                size: e.size || "default"
              }, {
                default: h(() => [
                  (a(!0), o(c, null, v(e.selects, (u) => (a(), x(V, {
                    key: u.id,
                    label: u.name,
                    value: u.id
                  }, null, 8, ["label", "value"]))), 128))
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "filterable", "placeholder", "clearable", "remote", "size"])
            ])
          ], 64)) : d("", !0),
          e.type === "daterange" ? (a(), o(c, { key: 4 }, [
            n("div", O, _(e.label), 1),
            n("div", Q, [
              s(M, { locale: t(w) }, {
                default: h(() => [
                  s(z, {
                    style: { width: "94%" },
                    modelValue: t(l)[e.key],
                    "onUpdate:modelValue": (u) => t(l)[e.key] = u,
                    type: "monthrange",
                    size: e.size || "default",
                    "value-format": e.format || "YYYY",
                    format: e.format || "YYYY",
                    "range-separator": "~",
                    "start-placeholder": e.starPlaceholder ? e.starPlaceholder : "开始日期",
                    "end-placeholder": e.endPlaceholder ? e.endPlaceholder : "结束日期",
                    onChange: (u) => C(e.key, e.key2 || "")
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "size", "value-format", "format", "start-placeholder", "end-placeholder", "onChange"])
                ]),
                _: 2
              }, 1032, ["locale"])
            ])
          ], 64)) : d("", !0),
          e.type === "slot" ? (a(), o(c, { key: 5 }, [
            e.name ? T(r.$slots, e.name, { key: 0 }) : T(r.$slots, "default", { key: 1 })
          ], 64)) : d("", !0)
        ]))), 128)),
        b.searchBtn ? (a(), o("div", R, [
          s(Y, {
            onClick: B,
            type: "primary"
          }, {
            default: h(() => [
              U("查询")
            ]),
            _: 1
          }),
          s(Y, {
            onClick: g,
            type: "info"
          }, {
            default: h(() => [
              U("重置")
            ]),
            _: 1
          })
        ])) : d("", !0)
      ]);
    };
  }
};
f.install = function(i) {
  i.component(f.name, f);
};
const X = [f], Z = (i) => {
  X.forEach((m) => {
    i.components(m.name, m);
  });
}, ue = {
  install: Z
};
export {
  ue as default,
  f as formSearch
};
