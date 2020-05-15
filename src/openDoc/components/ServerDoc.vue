<!--
 * @Description:
 * @Author ZhangYu
 * @Date 2020-03-16 16:34:43
 * @Params {}
 -->

<template>
  <a-layout class="box-layout-container">
    <a-layout-sider
      style="flex: 0 0 300px!important;max-width: inherit;min-width: inherit;width:auto;"
    >
      <div class="md-toc" mdtype="toc">
        <p class="md-toc-content" role="list">
          <span role="listitem" class="md-toc-item md-toc-h2" data-ref="n131"
            ><a class="md-toc-inner" href="#接入说明">接入说明</a></span
          ><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n16"
            ><a class="md-toc-inner" href="#2接口规则">2接口规则</a></span
          ><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n34"
            ><a class="md-toc-inner" href="#3接入前准备">3接入前准备</a></span
          ><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n51"
            ><a class="md-toc-inner" href="#4公共参数说明"
              >4公共参数说明</a
            ></span
          ><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n62"
            ><a class="md-toc-inner" href="#授权登录">授权登录</a></span
          ><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n96"
            ><a class="md-toc-inner" href="#签名说明">签名说明</a></span
          ><span role="listitem" class="md-toc-item md-toc-h2" data-ref="n105"
            ><a class="md-toc-inner" href="#返回值编码">返回值编码</a></span
          >
        </p>
      </div>
    </a-layout-sider>
    <a-layout-content>
      <div id="write" class="is-node">
        <h1>
          <a name="游戏盒子服务端接口文档" class="md-header-anchor"></a
          ><span>游戏盒子接口文档</span>
        </h1>
        <p><span> </span></p>
        <figure>
          <table>
            <thead>
              <tr>
                <th><span>作者</span></th>
                <th><span>时间</span></th>
                <th><span>说明</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>研发团队</span></td>
                <td><span>2019.03</span></td>
                <td><span>V1</span></td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>
          <a name="接入说明" class="md-header-anchor"></a><span>接入说明</span>
        </h2>
        <blockquote>
          <p><span>游戏方接入平台，涉及到【登录】 接口。</span></p>
        </blockquote>
        <h2>
          <a name="2接口规则" class="md-header-anchor"></a
          ><span>2接口规则</span>
        </h2>
        <figure>
          <table>
            <thead>
              <tr>
                <th>
                  <strong><span>传输方式</span></strong>
                </th>
                <th><span>HTTP</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong><span>提交方式</span></strong>
                </td>
                <td>
                  <strong
                    ><span
                      >采用POST方法提交，application/x-www-form-urlencoded</span
                    ></strong
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <strong><span>字符编码</span></strong>
                </td>
                <td>
                  <strong><span>统一采用UTF-8字符编码</span></strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong><span>签名算法</span></strong>
                </td>
                <td><span>MD5</span></td>
              </tr>
              <tr>
                <td>
                  <strong><span>参数名称</span></strong>
                </td>
                <td><span>不包含特殊字符，区分大小写</span></td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p>&nbsp;</p>
        <h2>
          <a name="3接入前准备" class="md-header-anchor"></a
          ><span>3接入前准备</span>
        </h2>
        <blockquote>
          <p><span>接入游戏盒子，需向游戏盒子平台申请如下参数：</span></p>
        </blockquote>
        <figure>
          <table>
            <thead>
              <tr>
                <th><span>gsn</span></th>
                <th><span>App编码</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong><span>key</span></strong>
                </td>
                <td><span>安全密钥</span></td>
              </tr>
              <tr>
                <td>
                  <strong><span>payKey</span></strong>
                </td>
                <td><span>支付安全秘钥</span></td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p>&nbsp;</p>
        <blockquote>
          <p>
            <span>说明：具体获取方式以及服务地址请联系相关商务对接人员</span>
          </p>
        </blockquote>
        <p><span> </span></p>
        <h2>
          <a name="4公共参数说明" class="md-header-anchor"></a
          ><span>4公共参数说明</span>
        </h2>
        <figure>
          <table>
            <thead>
              <tr>
                <th><span>gsn</span></th>
                <th><span>App编码</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>sign</span></td>
                <td><span>签名参数，计算规则请参考签名说明</span></td>
              </tr>
              <tr>
                <td><span>timestamp</span></td>
                <td>
                  <span
                    >时间戳，标准北京时间，时区为东八区，自1970年1月1日
                    0点0分0秒以来的豪秒数</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <h2>
          <a name="授权登录" class="md-header-anchor"></a><span>授权登录</span>
        </h2>
        <p><span>链接：/open/user/auth</span></p>
        <blockquote>
          <p>
            <span
              >说明：用户打开游戏时，通过平台授权登录，用户层面无感知，快捷进入游戏</span
            >
          </p>
        </blockquote>
        <p><span>参数：</span></p>
        <figure>
          <table>
            <thead>
              <tr>
                <th><span>参数名称</span></th>
                <th><span>说明</span></th>
                <th><span>是否必填</span></th>
                <th><span>类型</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>uid</span></td>
                <td><span>用户id</span></td>
                <td><span>是</span></td>
                <td><span>String</span></td>
              </tr>
              <tr>
                <td><span>headimgurl</span></td>
                <td><span>头像</span></td>
                <td><span>否</span></td>
                <td><span>String</span></td>
              </tr>
              <tr>
                <td><span>nickname</span></td>
                <td><span>昵称</span></td>
                <td><span>否</span></td>
                <td><span>String</span></td>
              </tr>
              <tr>
                <td><span>mobile</span></td>
                <td><span>手机号</span></td>
                <td><span>否</span></td>
                <td><span>String</span></td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p><span>返回：登录token信息</span></p>
        <p><span>案例：</span></p>
        <pre
          spellcheck="false"
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          lang="json"
        ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="json"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">{</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-string cm-property">"ok"</span>: <span class="cm-atom">true</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-string cm-property">"code"</span>: <span class="cm-string">"200"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-string cm-property">"msg"</span>: <span class="cm-string">"成功"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-string cm-property">"data"</span>: {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-string cm-property">"token"</span>: <span class="cm-string">"HQxFAUoDlQm7C/V5Q7WBcQziQthjqKf2zdGlUBCGFSwnT0J8i0zfmRs5QbCTgBNo"</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 276px;"></div><div class="CodeMirror-gutters" style="display: none; height: 276px;"></div></div></div></pre>
        <h2>
          <a name="签名说明" class="md-header-anchor"></a><span>签名说明</span>
        </h2>
        <blockquote>
          <p>
            <span>签名生成的通用步骤如下： </span>
            <span
              >第一步，设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&amp;key2=value2…）拼接成字符串stringA。
            </span>
            <span>特别注意以下重要规则： </span>
          </p>
        </blockquote>
        <p><span>◆ 参数名ASCII码从小到大排序（字典序）； </span></p>
        <p><span>◆ 如果参数的值为空不参与签名； </span></p>
        <p><span>◆ 参数名区分大小写； </span></p>
        <p>
          <span
            >◆ 平台在后续升级中可能增加字段，验证签名时必须支持增加的扩展字段
          </span>
        </p>
        <blockquote>
          <p>
            <span
              >第二步，在stringA最后拼接上&amp;key=key得到stringSignTemp字符串，并对stringSignTemp进行MD5运算，再将得到的字符串所有字符转换为大写，得到sign值signValue。</span
            >
          </p>
        </blockquote>
        <h2>
          <a name="返回值编码" class="md-header-anchor"></a
          ><span>返回值编码</span>
        </h2>
        <figure>
          <table>
            <thead>
              <tr>
                <th><span>200</span></th>
                <th><span>成功</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>100000</span></td>
                <td><span>网络连接超时</span></td>
              </tr>
              <tr>
                <td><span>100001</span></td>
                <td><span>基础参数错误</span></td>
              </tr>
              <tr>
                <td><span>100002</span></td>
                <td><span>签名错误</span></td>
              </tr>
              <tr>
                <td><span>100003</span></td>
                <td><span>时间戳参数错误或者失效</span></td>
              </tr>
              <tr>
                <td><span>100004</span></td>
                <td><span>gsn无效</span></td>
              </tr>
              <tr>
                <td><span>100005</span></td>
                <td><span>用户不存在</span></td>
              </tr>
              <tr>
                <td><span>100006</span></td>
                <td><span>数据为空</span></td>
              </tr>
            </tbody>
          </table>
        </figure>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import "doc/assets/markdown.less";

export default {
  name: "ServerDoc"
};
</script>

<style scoped lang="less">
.ant-layout,
.ant-layout-sider {
  background: white;
  height: 100%;
}

.ant-layout-sider {
  border-right: 1px solid #eee;
  /*box-shadow:5px 0px 4px 1px #dcdfe6;*/
  height: 100%;
}
</style>
