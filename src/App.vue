<template>
  <div id="app" class="root">
    <Header/>
    <MasterContent/>
    <!-- <router-view />
    <a> <router-link to="/custom">go</router-link> </a> -->
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header'
import MasterContent from './components/MasterContent'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header, MasterContent, Footer
  }
}

const $ = require('jquery')

// fix overflow footer with content in mobile viewport
$(document).ready(function () {
  if ($(window).width() < 600) {
    $('#url-input').focus(function () {
      $('footer').hide()
    })
    $('#url-input').focusout(function () {
      $('footer').show()
    })
  }
})
</script>

<style>
.root{
    background-color: #161620;
    min-height: 100vh;
    text-align: -webkit-center;
    justify-content: center;
}
</style>
