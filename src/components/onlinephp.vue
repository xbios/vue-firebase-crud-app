
<template>
  <div>
    <h3>Hoşgeldiniz</h3>
    <!-- <a href="http://tpcg.io/9oh8k1Z4">Online Php Compiler </a> -->
    <!-- <HtmlView :html="`${url}`" :durum="` ${url == '' ? false : true}`" /> -->

    <iframe
      src="https://tr.widgets.investing.com/live-currency-cross-rates?theme=lightTheme&hideTitle=true&roundedCorners=true&pairs=68"
      width="100%"
      height="600"
      frameborder="0"
      allowtransparency="true"
      marginwidth="0"
      marginheight="0"
    ></iframe>
    <div class="poweredBy" style="font-family: Arial, Helvetica, sans-serif">
      Araç Sağlayıcı:
      <a
        href="https://tr.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
        target="_blank"
        rel="nofollow"
        >Investing.com</a
      >
    </div>
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
