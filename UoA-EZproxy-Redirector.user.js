// ==UserScript==
// @name            UoA EZproxy Redirector
// @namespace       spectopo.io
// @copyright       Copyright © 2023 SpecterShell
// @version         1.0.0
// @description     Add menu commands in Tampermonkey/ViolentMonkey to open current page in UoA EZproxy
// @description:zh  在Tampermonkey或ViolentMonkey中添加菜单命令，以在奥克兰大学EZproxy打开当前网页
// @icon            https://www.auckland.ac.nz/favicon.ico
// @grant           GM_registerMenuCommand
// @grant           GM_openInTab
// @author          SpecterShell
// @homepage        https://github.com/SpecterShell/UoA-EZproxy-Redirector
// @include         *
// @match           *://*/*
// @exclude         *://*.ezproxy.auckland.ac.nz/*
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/SpecterShell/UoA-EZproxy-Redirector/main/UoA-EZproxy-Redirector.user.js
// @downloadURL     https://raw.githubusercontent.com/SpecterShell/UoA-EZproxy-Redirector/main/UoA-EZproxy-Redirector.user.js
// @supportURL      https://github.com/SpecterShell/UoA-EZproxy-Redirector/issues
// ==/UserScript==

(function () {
  "use strict";

  const baseProtocol = "https";
  const baseHost = "ezproxy.auckland.ac.nz";

  function rewriteUrl(url) {
    const oldUrl = new URL(url);
    const newUrl = baseProtocol + "://" + oldUrl.hostname.replaceAll(".", "-") + "." + baseHost + oldUrl.pathname;
    return newUrl;
  }

  GM_registerMenuCommand("Open Current Page in UoA EZproxy", () => {
    location.href = rewriteUrl(location.href);
  });

  GM_registerMenuCommand("Open Current Page in UoA EZproxy in New Tab", () => {
    GM_openInTab(rewriteUrl(location.href), { active: true });
  });
})();
