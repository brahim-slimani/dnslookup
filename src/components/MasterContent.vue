<template>
  <div id="content" class="content-body">
     <b-col md="3" style="color: #ffc107;">
      <b-icon icon="three-dots" animation="cylon-vertical" font-scale="5"></b-icon>
    </b-col>
    <h1 class="title-master-contnet">Lookup the Domain Name System</h1>
    <br />
    <div class="input-group input-group-lg">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-lg">URL</span>
      </div>
      <input
        type="text"
        class="form-control bg-dark text-white input-url"
        v-model="urlInput"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder="Enter URL address here !"
        v-on:keyup.enter="lookupEvent(urlInput)"
      />
    </div>
    <br />
    <div>
      <div
        id="my-loader"
        class="spinner-border"
        style="width: 3rem; height: 3rem; color: #ffc107; display: none"
        role="status"
      />
      <button
        type="button"
        id="lookup_btn"
        class="btn btn-warning btn-lg"
        v-on:click="lookupEvent(urlInput)"
      >Lookup&nbsp;<b-icon icon="arrow-right-circle"></b-icon></button>
    </div>

    <div class="response_content" id="parent-result">
      <p id="labelResult"></p>
      <p id="labelFamily"></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MasterContent',
  data () {
    return {
      urlState: null,
      ipAddress: null,
      responseFrom: null
    }
  },
  methods: {
    // onclick lookup event
    lookupEvent: async val => {
      reactUIAction(0)
      console.log(val)
      this.urlState = val != null && val !== '' ? val : null
      var response = await fetch(
        'https://dns.google/resolve?name=' + this.urlState
      )
      var json = await response.json()
      console.log(json)
      this.ipAddress = json.Answer !== undefined ? json.Answer[0].data : null
      this.responseFrom =
        json.Comment !== undefined
          ? json.Comment.substring(13, json.Comment.length - 1)
          : null
      let finalResult
      finalResult = this.ipAddress != null ? this.ipAddress : this.responseFrom
      renderResult(finalResult, 'Enter valid URL please !')
      reactUIAction(1)
    }
  }
}

const $ = require('jquery')

// render the result lookup
function renderResult (val, err) {
  let targetIpElement = $('#labelResult')
  let targetFamilyElement = $('#labelFamily')

  if (val != null) {
    targetIpElement.html('IP Address : ' + val)
    targetIpElement.css('color', 'white')
    targetFamilyElement.show()
    targetFamilyElement.html(val.includes(':')
      ? 'Address Family : IPv6'
      : 'Address Family : IPv4')
  } else {
    targetIpElement.html(err)
    targetIpElement.css('color', 'red')
    targetFamilyElement.hide()
  }
}

// manipulate the loader on UI interaction
function reactUIAction (key) {
  if (key === 0) {
    manageDisplay('#parent-result', 0)
    manageDisplay('#lookup_btn', 0)
    manageDisplay('#my-loader', 1)
  } else {
    setTimeout(() => {
      manageDisplay('#parent-result', 1)
      manageDisplay('#lookup_btn', 1)
      manageDisplay('#my-loader', 0)
    }, 300)
  }
}

// displaying element
function manageDisplay (element, key) {
  switch (key) {
    case 0:
      $(element).hide()
      break
    case 1:
      $(element).show()
      break
  }
}
</script>

<style>

/*** content section ***/
.content-body {
  width: 50%;
  margin-top: 40px;
}

.title-master-contnet {
  color: white;
  margin-bottom: 20px;
}

.input-url {
  border-radius: 0 50px 50px 0 !important;
}

.input-group-text {
  border-radius: 50px 0 0 50px !important;
  background-color: gray !important;
  color: white !important ;
}

#lookup_btn {
  width: 200px;
  color: white;
  -webkit-text-stroke: thick;
}

.testSpan {
  color: white;
}

.response_content {
  margin: 30px;
  color: white;
}

#labelResult {
  font-size: 20px;
  font-weight: 600;
}

#labelFamily {
  margin-top: -15px;
}

/*** mobile viewport ***/
@media (max-width: 600px) {
  .content-body {
    width: 90%;
    margin-bottom: 30px;
  }

  .title-master-contnet {
    font-size: 25px;
  }
}
</style>
