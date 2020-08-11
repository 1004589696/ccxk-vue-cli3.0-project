<template lang="html">
  <div>
    <remoteJS src="//res.wx.qq.com/open/js/jweixin-1.0.0.js "></remoteJS>
  </div>
</template>
<script>
import remoteJs from "@/mixins/remoteJs";
export default {
    // 通过 props 传入 wechat分享参数
    props: ["wechat"],
    mixins: [remoteJs],
    data() {
        return {};
    },
    methods: {
        // 传入微信分享配置
        weChatConfig(result) {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: result.appId, // 必填，公众号的唯一标识
                timestamp: result.timestamp, // 必填，生成签名的时间戳
                nonceStr: result.noncestr, // 必填，生成签名的随机串
                signature: result.sign, // 必填，签名，见附录1
                jsApiList: [
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage",
                    "onMenuShareQQ",
                    "onMenuShareQZone",
                ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            wx.ready(() => {
                wx.onMenuShareTimeline({
                    title: `${this.wechat.title}`, // 分享标题
                    link: `${this.wechat.link}`, // 分享链接
                    imgUrl: `${this.wechat.imgUrl}`, // 分享图标
                    success: function () {},
                    cancel: function () {},
                });

                wx.onMenuShareAppMessage({
                    title: `${this.wechat.title}`, // 分享标题
                    link: `${this.wechat.link}`, // 分享链接
                    imgUrl: `${this.wechat.imgUrl}`, // 分享图标
                    desc: `${this.wechat.desc}`,
                    type: "", // 分享类型,music、video或link，不填默认为link
                    dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {},
                    cancel: function () {},
                });

                wx.onMenuShareQQ({
                    title: `${this.wechat.title}`, // 分享标题
                    desc: `${this.wechat.desc}`, // 分享描述
                    link: `${this.wechat.link}`, // 分享链接
                    imgUrl: `${this.wechat.imgUrl}`, // 分享图标
                    success: function () {},
                    cancel: function () {},
                });

                wx.error((res) => {
                    console.log(res);
                });
            });
        },
    },
    mounted() {
        if (/micromessenger/i.test(window.navigator.userAgent)) {
            this.$nextTick(() => {
                let url = encodeURIComponent(this.wechat.url);
                // 此处获得微信配置然后调用
                this.weChatConfig(result);
            });
        }
    },
};
</script>
