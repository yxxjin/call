(function() {
  var $body, $code_pre, $script_area, $style_elem, __js, _body_selection, _code_block, _code_pre, _codes, _colors, _cousin_id, _current_code, _gutter, _pen_id, _script_area, _style_elem, _throttle, _version, _writing_rate, createElement, getURLParam, openComment, openInteger, openString, prevAsterisk, prevSlash, scriptSyntax, styleSyntax, writeChar, writeChars;

  _pen_id = "yxxj";

  _cousin_id = "IronMan";

  _gutter = 20;

  _writing_rate = 16;

  _throttle = {
    start: 4821,
    stop: 5344
  };

  _colors = {
    background: "#75715e",
    text: "#f9f9f9",
    offblack: "#111111",
    dark: "#75715e",
    selector: "#a6da27",
    key: "#64d9ef",
    value: "#fefefe",
    hex: "#f92772",
    text: "#fefefe",
    string: "#d2cc70",
    "var": "#66d9e0",
    operator: "#f92772",
    method: "#f9245c",
    integer: "#fd971c",
    run: "#ae81ff"
  };

  _body_selection = "document.body";

  _current_code = 0;

  _codes = ["/* \n * \"Iron Man\" v2.1.3\n * Robot rights protected under BOT License\n * Authored by yxxj\n */\n\nbody {\n  background-color: " + _colors.background + "; color: " + _colors.text + ";\n  font-size: 13px; line-height: 1.4;\n  margin: 0;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n#my-code {\n  overflow: auto;\n  position: fixed; width: 70%;\n  margin: 0;\n  top: " + _gutter + "px; bottom: " + (_gutter + 35) + "px; left: 15%;\n}\n\n/* ...                  \n *\n * ...hello?            \n *\n * Oh hi bb! 见到你真开心XD       \n *\n * 我又在捣鼓代码啦...           \n *\n * 正在开脑洞.... \n *\n * 想弄点cool的东西...\n *                     \n * 跟上次一样...\n *\n * 这些CSS代码随着出现...\n *\n * 不断地被插入到 <style> 标签内...  \n *\n * 听不懂？\n *\n * 没事儿！\n */\n\n#my-code {\n  transition: left 500ms, width 500ms, opacity 500ms;\n  background-color: " + _colors.offblack + "; color: " + _colors.text + ";\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 2px;\n  box-shadow: \n    0px 0px 0px 1px rgba(255,255,255,0.2),\n    0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n/* \n * 给代码加高亮... \n *\n * 配色方案基于 Monokai Phoenix\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: " + _colors.dark + "; }\n.selector      { color: " + _colors.selector + "; }\n.selector .key { color: " + _colors.selector + "; }\n.selector .int { color: " + _colors.selector + "; }\n.key           { color: " + _colors.key + "; }\n.int           { color: " + _colors.integer + "; }\n.hex           { color: " + _colors.hex + "; }\n.hex .int      { color: " + _colors.hex + "; }\n.value         { color: " + _colors.value + "; }\n.var           { color: " + _colors["var"] + "; }\n.operator      { color: " + _colors.operator + "; }\n.string        { color: " + _colors.string + "; }\n.method        { color: " + _colors.method + "; }\n.run-command   { color: " + _colors.run + "; }\n\n/* \n *\n * 是不是很cool?             \n *\n * ...          \n *\n * ...继续                \n *\n */\n\n~\`\n\n/* \n * 我们来写点Javascript...  \n *\n * ...然后输入 '~' 来运行        \n */\n\n/* 添加一个 'h1' 元素... */\nvar title = document.createElement(\"h1\");\ntitle.id = \"title\";\n\n/* ...把你的名字加在这 */\ntitle.innerHTML = \"美丽动人聪明可爱的YXX♥\";\n\n/* 倒数3秒.. */\n" + _body_selection + ".appendChild(title);\n             \n/* \n * \n * 2秒...              \n * \n * 1秒...              \n * \n */\n\n ~                 \n\n/*\n * 真棒！现在我们调下位置...   \n *\n * 需要一点CSS        \n */\n\`\n\n#title {\n  position: fixed; width: 100%; \n  bottom: 0; left: 0; right: 0;\n  font-size: 14px; line-height: 1;\n  font-weight: 100; text-align: center;\n  padding: 10px; margin: 0;\n  z-index: 10;\n  background-color: " + _colors.offblack + ";\n  border-top: 1px solid rgba(255,255,255,0.2);\n  transition: opacity 500ms;\n}\n#title em { \n  font-style: normal;\n  color: " + _colors.integer + ";\n}\n\n\n/* \n *\n * 厉害吧...XD         \n *\n * 我还会召唤Iron Man呢！\n *  \n * 这是真的.\n *\n * 不相信？                       \n *\n */\n\n#my-code { left: " + _gutter + "px; width: calc(50% - " + (_gutter * 1.5) + "px); }\n\n#iframe {\n  position: fixed;\n  display: block;\n  border: 0;\n  background-color: white;\n  border-radius: 2px;\n  width: calc(50% - " + (_gutter * 1.5) + "px); height: calc(100% - " + (_gutter * 2 + 35) + "px);\n  transition: left 500ms, width 500ms;\n  top: " + _gutter + "px; bottom: " + (_gutter + 35) + "px; left: 100%; \n  box-shadow: \n    0px 0px 0px 1px rgba(255,255,255,0.2),\n    0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n~\`\n\n/* \n * 这里需要Javascript...              \n */\n\n/* 首先...我们弄个像这样的框... */\nvar iframe = document.createElement(\"iframe\");\n\n/* 然后输入召唤他的URL... */\niframe.src = \"https://yxxjin.github.io/zombie/\";\n\n/* ... */\niframe.id = \"iframe\"\n\n/* 把框摆在我的框旁边... */\n" + _body_selection + ".appendChild(iframe); ~\n\`\n\n#iframe { left: calc(50% + " + (_gutter / 2) + "px); }\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n/*\n *    \n * Say hello to...\n * \n *\n *\n * \n *\n *\n *\n * Whoa!!!!!!!!!!!!!!!!!!!!!\n * \n *                               \n * What the f**k?!@#￥%……&*\n * \n *\n *\n * Um. \n *\n * Technical problem.\n *\n * Sorry.\n * \n * \n * \n *\n * \n *\n */\n\n#iframe { left: 100%; display: none; }\n\n\n/* Woah! 你后面是啥？？！！ */\n\n#k {\n  position: fixed; z-index: 11;\n  font-size: 80px; color: white;\n  top: calc(50% - 40px); left: 0; width: 100%;\n  text-align: center;\n  -webkit-animation: k 0.5s ease-in 2 forwards;\n          animation: k 0.5s ease-in 2 forwards;\n}\n\n@-webkit-keyframes k {\n  0%   { -webkit-transform: scale(0.5); }\n  100% { -webkit-transform: scale(1.0); }\n}\n@keyframes k {\n  0%   { transform: scale(0.5); }\n  100% { transform: scale(1.0); }\n}\n\n~\`\n\ndocument.getElementById(\"iframe\").src = \"https://yxxjin.github.io/ironm/\"; ~\n\n/* 等等... */\n\nvar k = document.createElement(\"div\"); k.innerHTML = \"Knock\"; k.id = \"k\"\n" + _body_selection + ".appendChild(k); ~\n                             \ndocument.getElementById(\"k\").remove(); ~\n\n/* 有人敲门？ */\n\nvar k = document.createElement(\"div\"); k.innerHTML = \"咣\"; k.id = \"k\"\n" + _body_selection + ".appendChild(k); ~\n                             \ndocument.getElementById(\"k\").remove(); ~\n\n\`\n\n#iframe {\n  display: block;\n  left: calc(50% + " + (_gutter / 2) + "px); \n  width: calc(50% - " + (_gutter * 1.5) + "px);\n  z-index: 9;\n}\n\n/*\n * Whoa!!！\n * \n * Looks who's here!            \n *\n * Say hello to Iron Man!\n */\n\n#title { opacity: 0.7; }\n\n#my-code { \n  left: calc(-25% + " + (_gutter / 2) + "px); \n  opacity: 0.2; \n}\n\n#iframe { \n  left: calc(25% + 0px); \n  width: calc(75% - " + _gutter + "px); \n}\n\n\n\n                                             \n  \n\n\n\n\n\n\n#title, #my-code { opacity: 1; }\n#iframe { width: calc(50% - " + (_gutter * 1.5) + "px); left: calc(50% + " + (_gutter / 2) + "px); }\n#my-code { left: " + _gutter + "px; width: calc(50% - " + (_gutter * 1.5) + "px); }\n\n/*  \n * OK!\n * \n * ...Show off 这叫做\n *\n * Iron Man打嗝说还有世界要拯救\n *\n * ...*大哥*\n *\n * Whatever.\n * \n * See you later...I guess.\n *\n */\n\n#iframe { left: 100%; right: -50%; display: none; }\n\n#my-code { left: 15%; width: 70%; }\n\n/*\n * The end.\n * \n * Thanks for watching XD\n */\n", "/* \n * \"Billy\" v2.0.1\n * Robot rights protected under BOT License\n * Authored by Billy.\n */\n\nbody {\n  background-color: DarkMagenta; \n  color: Chartreuse;\n  font-size: 13px; line-height: 1.3;\n  margin: 0;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\nem { font-style: normal; }\n\n#my-code {\n  overflow: auto;\n  position: fixed; top: 0; left: 0; bottom: 0;\n  width: 100%; margin: 0;\n  font-weight: bold; padding: 20px;\n}\n\n/*\n *\n * Ugh. Hi, Dad. :/            \n *\n * OK. Fine. Whatever.            \n *\n *                      \n *                      \n *                      \n *                      \n *                  \n * ugh.\n *                  \n *\n *\n *\n *\n *\n *                  \n * See you later...I guess.         \n *\n */\n                                    "];

  $body = document.getElementsByTagName("body")[0];

  createElement = function(tag, id) {
    var el;
    el = document.createElement(tag);
    if (id) {
      el.id = id;
    }
    return el;
  };

  _style_elem = createElement("style", "style-elem");

  _code_pre = createElement("pre", "my-code");

  _script_area = createElement("div", "script-area");

  $body.appendChild(_style_elem);

  $body.appendChild(_code_pre);

  $body.appendChild(_script_area);

  $style_elem = document.getElementById("style-elem");

  $code_pre = document.getElementById("my-code");

  $script_area = document.getElementById("script-area");

  openComment = false;

  openInteger = false;

  openString = false;

  prevAsterisk = false;

  prevSlash = false;

  scriptSyntax = function(string, which) {
    var s;
    if (openInteger && !which.match(/[0-9\.]/) && !openString && !openComment) {
      s = string.replace(/([0-9\.]*)$/, "<em class=\"int\">$1</em>" + which);
    } else if (which === '*' && !openComment && prevSlash) {
      openComment = true;
      s = string + which;
    } else if (which === '/' && openComment && prevAsterisk) {
      openComment = false;
      s = string.replace(/(\/[^(\/)]*\*)$/, "<em class=\"comment\">$1/</em>");
    } else if (which === 'r' && !openComment && string.match(/[\n ]va$/)) {
      s = string.replace(/va$/, "<em class=\"var\">var</em>");
    } else if (which.match(/[\!\=\-\?]$/) && !openString && !openComment) {
      s = string + "<em class=\"operator\">" + which + "</em>";
    } else if (which === "(" && !openString && !openComment) {
      s = string.replace(/(\.)?(?:([^\.\n]*))$/, "$1<em class=\"method\">$2</em>(");
    } else if (which === '"' && !openComment) {
      s = openString ? string.replace(/(\"[^"\\]*(?:\\.[^"\\]*)*)$/, "<em class=\"string\">$1\"</em>") : string + which;
    } else if (which === "~" && !openComment) {
      s = string + "<em class=\"run-command\">" + which + "</em>";
    } else {
      s = string + which;
    }
    return s;
  };

  styleSyntax = function(string, which) {
    var crazy_reghex, preformatted_string, s;
    if (openInteger && !which.match(/[0-9\.\%pxems]/) && !openString && !openComment) {
      preformatted_string = string.replace(/([0-9\.\%pxems]*)$/, "<em class=\"int\">$1</em>");
    } else {
      preformatted_string = string;
    }
    if (which === '*' && !openComment && prevSlash) {
      openComment = true;
      s = preformatted_string + which;
    } else if (which === '/' && openComment && prevAsterisk) {
      openComment = false;
      s = preformatted_string.replace(/(\/[^(\/)]*\*)$/, "<em class=\"comment\">$1/</em>");
    } else if (which === ':') {
      s = preformatted_string.replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      crazy_reghex = /((#[0-9a-zA-Z]{6})|#(([0-9a-zA-Z]|\<em class\=\"int\"\>|\<\/em\>){12,14}|([0-9a-zA-Z]|\<em class\=\"int\"\>|\<\/em\>){8,10}))$/;
      if (preformatted_string.match(crazy_reghex)) {
        s = preformatted_string.replace(crazy_reghex, '<em class="hex">$1</em>;');
      } else {
        s = preformatted_string.replace(/([^:]*)$/, '<em class="value">$1</em>;');
      }
    } else if (which === '{') {
      s = preformatted_string.replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      s = preformatted_string + which;
    }
    return s;
  };

  __js = false;

  _code_block = "";

  writeChar = function(which) {
    var char, code_html, prior_block_match, prior_comment_match, script_tag;
    if (which === "`") {
      which = "";
      __js = !__js;
    }
    if (__js) {
      if (which === "~" && !openComment) {
        script_tag = createElement("script");
        prior_comment_match = /(?:\*\/([^\~]*))$/;
        prior_block_match = /([^~]*)$/;
        if (_code_block.match(prior_comment_match)) {
          script_tag.innerHTML = _code_block.match(prior_comment_match)[0].replace("*/", "") + "\n\n";
        } else {
          script_tag.innerHTML = _code_block.match(prior_block_match)[0] + "\n\n";
        }
        $script_area.innerHTML = "";
        $script_area.appendChild(script_tag);
      }
      char = which;
      code_html = scriptSyntax($code_pre.innerHTML, char);
    } else {
      char = which === "~" ? "" : which;
      $style_elem.innerHTML += char;
      code_html = styleSyntax($code_pre.innerHTML, char);
    }
    prevAsterisk = which === "*";
    prevSlash = (which === "/") && !openComment;
    openInteger = which.match(/[0-9]/) || (openInteger && which.match(/[\.\%pxems]/)) ? true : false;
    if (which === '"') {
      openString = !openString;
    }
    _code_block += which;
    return $code_pre.innerHTML = code_html;
  };

  writeChars = function(message, index, interval) {
    if (index < message.length) {
      if (index >= _throttle.start && index < _throttle.stop) {
        interval = 2;
      } else {
        interval = _writing_rate;
      }
      $code_pre.scrollTop = $code_pre.scrollHeight;
      writeChar(message[index++]);
      return setTimeout((function() {
        return writeChars(message, index, interval);
      }), interval);
    }
  };

  getURLParam = function(key, url) {
    var match;
    if (typeof url === 'undefined') {
      url = window.location.href;
    }
    match = url.match('[?&]' + key + '=([^&]+)');
    if (match) {
      return match[1];
    } else {
      return 0;
    }
  };

  _version = getURLParam("billy");

  writeChars(_codes[_version], 0, _writing_rate);


  /*
  Changelog:
  1.0.0: i exist!
  1.0.1: `overflow: auto` on `pre`
   */

}).call(this);