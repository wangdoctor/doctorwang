"use strict";(self.webpackChunkdoctor=self.webpackChunkdoctor||[]).push([[904],{82213:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),d={}},27927:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),d={}},26340:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),d={}},74645:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),d={}},11171:function(t,e,a){a.r(e),a.d(e,{demos:function(){return d}});var n=a(67294),d={}},77888:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u662F\u6784\u6210\u9875\u9762\u89C6\u56FE\u7684\u57FA\u672C\u5355\u5143\uFF0C\u662F React \u7684\u6838\u5FC3\u6982\u5FF5\u4E4B\u4E00\u3002\u7EC4\u4EF6\u53EF\u4EE5\u662F\u4E00\u4E2A\u7C7B\u6216\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u63A5\u53D7\u8F93\u5165\uFF08props\uFF09\u5E76\u8FD4\u56DE\u4E00\u4E2A React \u5143\u7D20\uFF0C\u63CF\u8FF0\u4E86\u5E94\u8BE5\u5728\u5C4F\u5E55\u4E0A\u5448\u73B0\u7684\u5185\u5BB9\u3002",paraId:0,tocIndex:0}]},30447:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"cd /usr/local",paraId:0,tocIndex:0},{value:`
tar -zxvf /root/jdk-17_linux-x64_bin.tar.gz`,paraId:0,tocIndex:0},{value:"vim /etc/profile",paraId:1,tocIndex:0},{value:`
\u5728\u6587\u4EF6\u672B\u5C3E\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF08\u6CE8\u610F\u8DEF\u5F84\u8981\u548C\u4F60\u89E3\u538B\u7684\u76EE\u5F55\u4E00\u81F4\uFF09\uFF1A`,paraId:1,tocIndex:0},{value:"export JAVA_HOME=/usr/local/jdk-17",paraId:2,tocIndex:0},{value:`
export PATH=$JAVA_HOME/bin:$PATH`,paraId:2,tocIndex:0},{value:`
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar`,paraId:2,tocIndex:0},{value:"source /etc/profile",paraId:3,tocIndex:0},{value:"\u3001\u6DFB\u52A0\u5B98\u65B9 Nginx Yum \u6E90",paraId:4,tocIndex:1},{value:"\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A",paraId:5,tocIndex:1},{value:"cat > /etc/yum.repos.d/nginx.repo << 'EOF'",paraId:6,tocIndex:1},{value:`
[nginx-stable]`,paraId:6,tocIndex:1},{value:`
name=nginx stable repo`,paraId:6,tocIndex:1},{value:`
baseurl=`,paraId:6,tocIndex:1},{value:"https://nginx.org/packages/centos/$releasever/$basearch/",paraId:6,tocIndex:1},{value:`
gpgcheck=1`,paraId:6,tocIndex:1},{value:`
enabled=1`,paraId:6,tocIndex:1},{value:`
gpgkey=`,paraId:6,tocIndex:1},{value:"https://nginx.org/keys/nginx_signing.key",paraId:6,tocIndex:1},{value:`
module_hotfixes=true`,paraId:6,tocIndex:1},{value:`
EOF`,paraId:6,tocIndex:1},{value:"\u8FD9\u4E00\u6B65\u662F\u544A\u8BC9 yum \u53BB nginx \u5B98\u65B9\u4ED3\u5E93\u627E\u5305\u3002",paraId:7,tocIndex:1},{value:"\u{1F9F0} \u4E8C\u3001\u6E05\u7406\u5E76\u66F4\u65B0 yum \u7F13\u5B58",paraId:8,tocIndex:1},{value:`
yum clean all`,paraId:8,tocIndex:1},{value:`
yum makecache`,paraId:8,tocIndex:1},{value:"\u{1F9F1} \u4E09\u3001\u67E5\u770B\u53EF\u5B89\u88C5\u7684\u7248\u672C",paraId:9,tocIndex:1},{value:`
yum list nginx --showduplicates`,paraId:9,tocIndex:1},{value:"\u8F93\u51FA\u4E2D\u4F1A\u770B\u5230\u7C7B\u4F3C\uFF1A",paraId:10,tocIndex:1},{value:"nginx.x86_64   1.28.0-1.el8.ngx   nginx-stable",paraId:11,tocIndex:1},{value:`
nginx.x86_64   1.26.2-1.el8.ngx   nginx-stable`,paraId:11,tocIndex:1},{value:"\u{1F680} \u56DB\u3001\u5B89\u88C5\u6307\u5B9A\u7248\u672C\uFF08\u4F8B\u5982 1.28.0\uFF09",paraId:12,tocIndex:1},{value:"\u6839\u636E\u4E0A\u4E00\u6B65\u7684\u8F93\u51FA\uFF0C\u6267\u884C\uFF1A",paraId:13,tocIndex:1},{value:"yum install nginx-1.28.0-1.el8.ngx -y",paraId:14,tocIndex:1},{value:"1\uFE0F\u20E3 \u6807\u51C6\u91CD\u542F\u547D\u4EE4",paraId:15,tocIndex:1},{value:`
sudo systemctl restart nginx`,paraId:15,tocIndex:1},{value:"\u529F\u80FD\uFF1A\u505C\u6B62\u5E76\u91CD\u65B0\u542F\u52A8 Nginx",paraId:16,tocIndex:1},{value:"\u7528\u4E8E\u914D\u7F6E\u4FEE\u6539\u540E\u7ACB\u5373\u751F\u6548",paraId:17,tocIndex:1},{value:"2\uFE0F\u20E3 \u53EA\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\uFF08\u4E0D\u505C\u6B62\u670D\u52A1\uFF09",paraId:18,tocIndex:1},{value:`
sudo systemctl reload nginx`,paraId:18,tocIndex:1},{value:"\u529F\u80FD\uFF1A\u5728\u4E0D\u505C\u6B62\u670D\u52A1\u7684\u60C5\u51B5\u4E0B\uFF0C\u52A0\u8F7D\u65B0\u7684\u914D\u7F6E\u6587\u4EF6",paraId:19,tocIndex:1},{value:"\u63A8\u8350\u4FEE\u6539\u914D\u7F6E\u540E\u7528 reload\uFF0C\u8FD9\u6837\u4E0D\u4F1A\u4E2D\u65AD\u8FDE\u63A5",paraId:20,tocIndex:1},{value:"3\uFE0F\u20E3 \u505C\u6B62\u548C\u542F\u52A8",paraId:21,tocIndex:1},{value:`
sudo systemctl stop nginx   # \u505C\u6B62\u670D\u52A1`,paraId:21,tocIndex:1},{value:`
sudo systemctl start nginx  # \u542F\u52A8\u670D\u52A1`,paraId:21,tocIndex:1},{value:"4\uFE0F\u20E3 \u67E5\u770B Nginx \u72B6\u6001",paraId:22,tocIndex:1},{value:`
sudo systemctl status nginx`,paraId:22,tocIndex:1},{value:"\u6B63\u786E\u5B89\u88C5\u65B9\u5F0F\uFF08CentOS 8 / OpenCloudOS 8\uFF09",paraId:23,tocIndex:2},{value:`
1\uFE0F\u20E3 \u5B89\u88C5 Certbot \u548C Nginx \u63D2\u4EF6`,paraId:23,tocIndex:2},{value:`
yum install certbot python3-certbot-nginx -y`,paraId:23,tocIndex:2},{value:"2\uFE0F\u20E3 \u68C0\u67E5\u7248\u672C",paraId:24,tocIndex:2},{value:`
certbot --version`,paraId:24,tocIndex:2},{value:"\u8F93\u51FA\u7C7B\u4F3C\uFF1A",paraId:25,tocIndex:2},{value:"certbot 2.8.0",paraId:26,tocIndex:2},{value:"\u26A1 \u4F7F\u7528 Certbot \u81EA\u52A8\u914D\u7F6E Nginx",paraId:27,tocIndex:2},{value:`
certbot --nginx -d example.com -d `,paraId:27,tocIndex:2},{value:"www.example.com",paraId:27,tocIndex:2},{value:"Certbot \u4F1A\u81EA\u52A8\u751F\u6210\u8BC1\u4E66\u5E76\u4FEE\u6539 Nginx \u914D\u7F6E",paraId:28,tocIndex:2},{value:"\u5982\u679C\u4F60\u53EA\u6709 .crt / .key\uFF0C\u5C31\u6309\u4E4B\u524D\u6211\u6559\u7684 \u624B\u52A8\u914D\u7F6E\u65B9\u6CD5",paraId:29,tocIndex:2},{value:"\u{1F504} \u81EA\u52A8\u7EED\u671F\uFF08CentOS 8 \u7CFB\u7EDF\u81EA\u5E26 systemd \u5B9A\u65F6\u4EFB\u52A1\uFF09",paraId:30,tocIndex:2},{value:"Certbot \u4F1A\u5728\u5B89\u88C5\u65F6\u81EA\u52A8\u521B\u5EFA /etc/systemd/system/certbot.timer \u5B9A\u65F6\u4EFB\u52A1\uFF0C\u6BCF\u5929\u68C0\u67E5\u662F\u5426\u9700\u8981\u7EED\u671F\u3002",paraId:31,tocIndex:2},{value:"\u53EF\u4EE5\u624B\u52A8\u6D4B\u8BD5\uFF1A",paraId:32,tocIndex:2},{value:"certbot renew --dry-run",paraId:33,tocIndex:2}]},26681:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u7684\u4F7F\u7528\u793A\u4F8B\u6587\u6863\u3002",paraId:0,tocIndex:0},{value:"x-dataview \u4E0E x-event \u4E8B\u4EF6\u7ED1\u5B9A",paraId:1,tocIndex:1},{value:"\u884C\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6",paraId:2,tocIndex:1},{value:`<x-dataview
    :row-actions="[
        { key:'showlist',name:'\u9F50\u5957\u68C0\u67E5', icon:'el-svg-list'},
    ]"
    event-source="showlist-source"
    ></x-dataview>

<x-event type="dataview" action-key="showlist" source="showlist-source"></x-event>
`,paraId:3,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:4,tocIndex:2},{value:"\u7C7B\u578B",paraId:4,tocIndex:2},{value:"\u5FC5\u9009",paraId:4,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:2},{value:"\u8BF4\u660E",paraId:4,tocIndex:2},{value:"id",paraId:4,tocIndex:2},{value:"string",paraId:4,tocIndex:2},{value:"\u2713",paraId:4,tocIndex:2},{value:"\u2014",paraId:4,tocIndex:2},{value:"\u552F\u4E00\u6807\u8BC6\u7B26",paraId:4,tocIndex:2},{value:"name",paraId:4,tocIndex:2},{value:"string",paraId:4,tocIndex:2},{value:"''",paraId:4,tocIndex:2},{value:"\u540D\u79F0",paraId:4,tocIndex:2},{value:"age",paraId:4,tocIndex:2},{value:"number",paraId:4,tocIndex:2},{value:"0",paraId:4,tocIndex:2},{value:"\u5E74\u9F84",paraId:4,tocIndex:2}]},43796:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u7EC4\u4EF6\u7684\u4F7F\u7528\u793A\u4F8B\u6587\u6863\u3002",paraId:0,tocIndex:0},{value:"x-dataview",paraId:1,tocIndex:2},{value:" \u7EC4\u4EF6",paraId:1,tocIndex:2},{value:`<x-dataview
	:row-actions="[
			{ key:'showlist',name:'\u9F50\u5957\u68C0\u67E5', icon:'el-svg-list'},
	]"
	event-source="showlist-source"
></x-dataview>

<x-event type="dataview" action-key="showlist" source="showlist-source" @event="showlist"></x-event>
`,paraId:2,tocIndex:2},{value:"x-databoard",paraId:3,tocIndex:2},{value:" \u7EC4\u4EF6",paraId:3,tocIndex:2},{value:`<template>
  <x-databoard
    :row-actions="[
        { key:'showlist',name:'\u9F50\u5957\u68C0\u67E5', icon:'el-svg-list'},
    ]"
    event-source="showlist-source"
  ></x-databoard>

  <x-event type="dataview" action-key="showlist" source="showlist-source"  @event="showlist"></x-event>
</template>
<!-- \u811A\u672C -->
<script>
  export default {
    name: "e-digital-platform",
      // \u65B9\u6CD5
    methods: {
      showlist() {

      }  
  }
 <script> 
`,paraId:4,tocIndex:2},{value:"\u53C2\u6570\u540D",paraId:5,tocIndex:3},{value:"\u7C7B\u578B",paraId:5,tocIndex:3},{value:"\u5FC5\u9009",paraId:5,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:3},{value:"\u8BF4\u660E",paraId:5,tocIndex:3},{value:"type",paraId:5,tocIndex:3},{value:"EventTypes",paraId:6,tocIndex:3},{value:"\u2713",paraId:5,tocIndex:3},{value:"\u2014",paraId:5,tocIndex:3},{value:"action\uFF1A",paraId:5,tocIndex:3},{value:" \u8868\u793A\u7531\u7528\u6237\u65BD\u52A0\u7684\u4EE5\u5411\u7CFB\u7EDF\u8F93\u5165\u6267\u884C\u6307\u4EE4\u7684\u64CD\u4F5C\u3002",paraId:5,tocIndex:3},{value:"dataview\uFF1A",paraId:5,tocIndex:3},{value:" \u8868\u793A UI \u4E2D\u6240\u5448\u73B0\u7684\u6570\u636E\u96C6\u53D1\u751F\u72B6\u6001\u6539\u53D8\u7684\u4E8B\u4EF6\u3002",paraId:5,tocIndex:3},{value:"action-key",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u2713",paraId:5,tocIndex:3},{value:"''",paraId:5,tocIndex:3},{value:"\u64CD\u4F5C\u7684\u5143\u6570\u636E",paraId:5,tocIndex:3},{value:"source",paraId:5,tocIndex:3},{value:"string",paraId:5,tocIndex:3},{value:"\u2717",paraId:5,tocIndex:3},{value:"``",paraId:5,tocIndex:3},{value:"\u76D1\u542C\u7684\u4E8B\u4EF6\u6E90",paraId:5,tocIndex:3},{value:"path",paraId:5,tocIndex:3},{value:"DataviewEventTypes",paraId:7,tocIndex:3},{value:"\u2717",paraId:5,tocIndex:3},{value:"``",paraId:5,tocIndex:3},{value:"\u6570\u636E\u4E8B\u4EF6\u7684\u7C7B\u578B",paraId:5,tocIndex:3},{value:"@event",paraId:5,tocIndex:3},{value:"function",paraId:5,tocIndex:3},{value:"\u2717",paraId:5,tocIndex:3},{value:"``",paraId:5,tocIndex:3},{value:"\u4E8B\u4EF6\uFF1A",paraId:5,tocIndex:3},{value:" function(){}",paraId:5,tocIndex:3},{value:"EventTypes",paraId:8,tocIndex:4},{value:" \u662F\u4E00\u4E2A ",paraId:8,tocIndex:4},{value:"\u4E8B\u4EF6\u7C7B\u578B\u679A\u4E3E",paraId:8,tocIndex:4},{value:"\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u4EA4\u4E92\u6216\u6570\u636E\u89E6\u53D1\u6765\u6E90\u3002",paraId:8,tocIndex:4},{value:`enum EventTypes {
  /** \u52A8\u4F5C\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u70B9\u51FB\u3001\u63D0\u4EA4\u7B49 */
  action = 'action',

  /** \u6570\u636E\u89C6\u56FE\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u8868\u683C\u3001\u56FE\u8868\u66F4\u65B0\u7B49 */
  dataview = 'dataview',
}
`,paraId:9,tocIndex:4},{value:"DataviewEventTypes",paraId:10,tocIndex:5},{value:" \u662F\u4E00\u4E2A ",paraId:10,tocIndex:5},{value:"\u6570\u636E\u96C6\u4E8B\u4EF6\u7C7B\u578B\u679A\u4E3E",paraId:10,tocIndex:5},{value:"\uFF0C\u7528\u4E8E ",paraId:10,tocIndex:5},{value:"x-event",paraId:10,tocIndex:5},{value:" \u7684 ",paraId:10,tocIndex:5},{value:"path",paraId:10,tocIndex:5},{value:" \u5C5E\u6027\u3002",paraId:10,tocIndex:5},{value:`
\u5B83\u5B9A\u4E49\u4E86\u6570\u636E\u89C6\u56FE\uFF08DataView\uFF09\u4E2D\u5404\u79CD\u4E0E\u6570\u636E\u72B6\u6001\u3001\u4EA4\u4E92\u884C\u4E3A\u76F8\u5173\u7684\u4E8B\u4EF6\u7C7B\u578B\u3002`,paraId:10,tocIndex:5},{value:`export enum DataviewEventTypes {
  /** \u6570\u636E\u96C6\u901A\u7528\u64CD\u4F5C\u4E8B\u4EF6 */
  datasetAction = 'datasetAction',

  /** \u5168\u9009\u72B6\u6001\u53D8\u5316 */
  allSelectedChanged = 'allSelectedChanged',

  /** \u5F53\u524D\u9879\u53D8\u5316 */
  currentItemChanged = 'currentItemChanged',

  /** \u5355\u9879\u9009\u4E2D\u72B6\u6001\u53D8\u5316 */
  itemSelectedChanged = 'itemSelectedChanged',

  /** \u5355\u9879\u4EA4\u4E92\u64CD\u4F5C\u4E8B\u4EF6\uFF08\u5982\u70B9\u51FB\u3001\u53CC\u51FB\u7B49\uFF09 */
  itemAction = 'itemAction',

  /** \u8FDB\u5165\u7F16\u8F91\u72B6\u6001 */
  edit = 'edit',

  /** \u5237\u65B0\u7F16\u8F91\u72B6\u6001 */
  flushEdit = 'flushEdit',

  /** \u53D6\u6D88\u7F16\u8F91 */
  cancelEdit = 'cancelEdit',

  /** \u63D0\u4EA4\u7F16\u8F91 */
  submitEdit = 'submitEdit',

  /** \u63D2\u5165\u6570\u636E */
  inserted = 'inserted',

  /** \u66F4\u65B0\u6570\u636E */
  updated = 'updated',

  /** \u5220\u9664\u6570\u636E */
  deleted = 'deleted',
}
`,paraId:11,tocIndex:5}]},51446:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[]}}]);
