
<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-light">
      <a class="navbar-brand nav-title" href="/index" style="display: inline-flex;">
        <b-icon icon="shield-shaded" class="logo-icon"></b-icon>&nbsp;DNS Lookup
      </a>

      <div class="right-nav">
        <a href="https://slimani-ibrahim.github.io/profile" target="_blank">
          <i class="fas fa-globe" title="portfolio"></i>
        </a>&nbsp;
        <a href="https://github.com/Slimani-Ibrahim" target="_blank">
          <i class="fab fa-github" title="github"></i>
        </a>&nbsp;
        <a href="https://www.linkedin.com/in/ibrahim-slimani-184161b2/" target="_blank">
          <i class="fab fa-linkedin" title="linkedin"></i>
        </a>&nbsp;
        <a href="https://github.com/Slimani-Ibrahim/DNSLookup" target="_blank">
          <i class="fa fa-code-branch" title="source code"></i>
        </a>&nbsp;
      </div>
    </nav>
    <!-- <img src="../assets/dns_icon.png" height="30"/> -->
  </div>
</template>


<script>
export default {
  name: "Header"
};
</script>

<style>
/*** header ***/
.navbar-light {
  background-color: #36373b !important;
}

.nav-title {
  color: #ffc107 !important;
}

nav .logo-icon {
  margin-top: 5px;
}

.right-nav a {
  color: #ffc107 !important;
}
</style>