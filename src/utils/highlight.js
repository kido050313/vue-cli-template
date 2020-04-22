// src/utils/highlight.js 文件路径，纯属自定义

// highlight.js  代码高亮指令
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night.css';

let Highlight = {};

// 自定义插件
Highlight.install = function (Vue) {

    // 自定义指令 v-highlight
    Vue.directive('highlight', {
        
        // 被绑定元素插入父节点时调用
        inserted: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                hljs.highlightBlock(blocks[i]);
            }
        },
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                hljs.highlightBlock(blocks[i]);
            }
        }
    })
};

export default Highlight;