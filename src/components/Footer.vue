<template>
  <footer class="page-footer font-small">
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3 footer-content">
      © 2020 Copyright Powered by
      <a
        href="https://brahim-slimani.github.io/profile/"
      >Brahim SLIMANI</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  right: 20px;
  margin-bottom: 0px;
  margin-left: 10px;
}

.footer-content {
  color: #ffc107;
}

.footer-content a {
  color: #ffc107;
}

@media (max-width: 600px) {
   footer{
    font-size: 10px;
    right: 0;
    left: 0;
    margin-left: 0;
  }
}

</style>
