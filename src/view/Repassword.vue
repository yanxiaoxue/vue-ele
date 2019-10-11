<template>
    <div class="hello">
        <div class="header">
            <i @click="$router.go(-1)" class="iconfont">&#xe667;</i>
            <span>重置密码</span>
        </div>
        <form class="restForm">
            <section data-v-71b13646="" class="input_container phone_number">
                <input type="text" placeholder="账号" name="phone" maxlength="11">
            </section>
            <section class="input_container">
                <input type="text" placeholder="旧密码" name="oldPassWord">
            </section>
            <section class="input_container">
                <input type="text" placeholder="请输入新密码" name="newPassWord">
            </section>
            <section class="input_container">
                <input type="text" placeholder="请确认密码" name="confirmPassWord">
            </section>
            <section class="input_container">
                <input type="text" placeholder="验证码" name="mobCode" maxlength="6">
            </section>
        </form>

        <div class="login-container">
            <router-link to="/reOk">确认修改</router-link>
        </div>
        <div class="num1"></div>
    </div>
</template>

<script>
    export default {
        name: '',
    }
</script>
<style scoped>
    .hello {
        background: #f5f5f5
    }

    @font-face {
        font-family: "iconfont";
        /* project id 1384101 */
        src: url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.eot");
        src: url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.eot?#iefix") format("embedded-opentype"),
            url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.woff2") format("woff2"),
            url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.woff") format("woff"),
            url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.ttf") format("truetype"),
            url("//at.alicdn.com/t/font_1384101_ct9aoz21oek.svg#iconfont") format("svg");
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 0.8rem;
        font-style: normal;
    }

    .header {
        background: #ffffff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        /* flex-wrap: wrap; */
        align-items: center;
        padding: 0 0.1rem;
        box-sizing: border-box;
        background: #3190e8;
        height: 1.95rem;
        color: #ffffff;
        position: relative;
    }

    .header span {
        position: absolute;
        left: 40%;
        display: block;
        font-size: 0.8rem;
        font-weight: bold;
    }

    input {
        border: none;
        text-decoration: none;
        box-sizing: border-box;
        /* font-weight: 400; */
        cursor: text;
        text-transform: none;
        display: inline-block;
        text-shadow: none;
        text-align: start;
        font-size: .7rem;
        outline: none;
        color: #666;
    }

    input:hover {
        outline: none;
    }

    .restForm {
        background-color: #fff;
        margin-top: .6rem;
        display: block;

    }

    section {
        padding: 0.6rem 0.8rem;
        display: flex;
        flex-direction: column;
        list-style: none;
        text-decoration: none;
        border-bottom: 0.015rem solid #f5f5f5;
        color: #333;
        font-family: Microsoft Yahei;
        box-sizing: border-box;
    }

    .login-container {
        /* display: inline-block; */
        /* width: 80%; */
        padding: .5rem 0;
        margin: 1rem .5rem;
        background: #4cd964;
        color: #f5f5f5;
        font-size: .7rem;
        text-align: center;
        border-radius: 0.15rem;
    }

    .num1 {
        width: 100%;
        height: 1rem;
    }
</style>