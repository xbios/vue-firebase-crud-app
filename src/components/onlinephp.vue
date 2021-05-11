
<template>
  <div>
    <h3>Hoşgeldiniz</h3>
    <a href="http://tpcg.io/9oh8k1Z4">Online Php Compiler </a>
    <HtmlView :html="`${url}`" :durum="` ${url == '' ? false : true}`" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "http://tpcg.io/9oh8k1Z4",
    };
  },
};
</script>>
