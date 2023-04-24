<template>
  <footer>
    <div class="footer-content">
      <p>
        © 2023 EvenTic ✔<br />
        All rights reserved.
      </p>
      <ul class="footer-links">
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: "NavFooter",
};
</script>
<style scoped>
footer {
  background-color: #f8f7fa;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-content p {
  margin-bottom: 10px;
  width: 100%;
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin: 0 10px;
}

.footer-links li a {
  color: #2f2f2f;
  text-decoration: none;
}

.footer-links li a:hover {
  color: #ff8600;
}

@media only screen and (max-width: 600px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-links {
    margin-top: 10px;
  }

  .footer-links li {
    margin: 5px 0;
  }
}
</style>
