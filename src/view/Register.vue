<template>
    <div class="regist">
        <div class="header">
            <i @click="$router.go(-1)" class="iconfont">&#xe667;</i>
            <span>密码登陆</span>
        </div>
        <form class="loginForm">
            <section class="input-container">
                <input class="test" type="text" placeholder="账号">
            </section>
            <section class="input-container">
                <input type="text" placeholder="密码">
            </section>
            <section class="input-container">
                <input type="text" placeholder="验证码" maxlength="4">
                <div class="toggle-button-wrapper">
                    <input type="checkbox" id="toggle-button" name="switch">
                    <label for="toggle-button" class="button-label">
                        <span class="circle"></span>
                        <span class="text on">ON</span>
                        <span class="text off">OFF</span>
                    </label>
                </div>
            </section>
        </form>
        <div class="lts">
            <p class="login-tips">
                温馨提示：未注册过的账号，登录时将自动注册
            </p>
            <p class="login-tips">
                注册过的用户可凭账号密码登录
            </p>
        </div>
        <router-link to="/LoginOk">
            <div class="login-container">
                登录
            </div>
        </router-link>
        <span class="repw">
            <router-link to="/repassword">重置密码?</router-link>


        </span>
    </div>
</template>

<script>
    export default {
        name: 'regist',
    }
</script>
<style scoped>
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

    .register {
        background: #f5f5f5;

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

    .input-container {
        display: flex;
        justify-content: space-between;
        padding: .6rem .8rem;
        border-bottom: 1px solid #f1f1f1;
    }

    section {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        border: none;
        color: #333;
        font-weight: 400;
        font-family: Microsoft Yahei;
        box-sizing: border-box;
    }

    input {
        border: none;
        width: 50%;
        text-decoration: none;
        box-sizing: border-box;
        background-color: #e8f0fe;
        cursor: text;
        text-transform: none;
        display: inline-block;
        text-shadow: none;
        text-align: start;
        font: 400 0.7rem Arial;
        outline: none;
    }

    input:hover {
        outline: none;
    }

    .loginForm .input-container input {
        /* font-size: .7rem; */
        color: #666;
    }

    .login-tips {
        font-size: .5rem;
        color: red;
        padding: 0.4rem .6rem;
        line-height: .5rem;
    }

    /* .lts {
        display: flex;
        flex-direction: column;
    } */

    .login-container {
        display: inline-block;
        width: 93%;
        padding: 0.5rem 0;
        margin: 0 .5rem 1rem;
        background: #4cd964;
        color: #f5f5f5;
        font-size: 0.7rem;
        text-align: center;
        border-radius: 0.15rem;
    }

    .repw {
        float: right;
        font-size: .6rem;
        color: #3b95e9;
        margin-right: .3rem;
    }

    .repw a:visited {
        color: #3b95e9;

    }

    /*  按钮部分样式 */
    .toggle-button-wrapper {
        height: .875rem;
    }

    #toggle-button {
        display: none;
    }

    .button-label {
        float: right;
        position: relative;
        display: inline-block;
        width: 80px;
        height: 30px;
        background-color: #ccc;
        box-shadow: #ccc 0px 0px 0px 2px;
        border-radius: 30px;
        overflow: hidden;
    }

    .circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #fff;
    }

    .button-label .text {
        line-height: 30px;
        font-size: 18px;
        text-shadow: 0 0 2px #ddd;
    }

    .on {
        color: #fff;
        display: none;
        text-indent: 0.625rem;
    }

    .off {
        color: #fff;
        display: inline-block;
        text-indent: 2.125rem;
    }

    .button-label .circle {
        left: 0;
        transition: all 0.3s;
    }

    #toggle-button:checked+label.button-label .circle {
        left: 50px;
    }

    #toggle-button:checked+label.button-label .on {
        display: inline-block;
    }

    #toggle-button:checked+label.button-label .off {
        display: none;
    }

    #toggle-button:checked+label.button-label {
        background-color: #4cd964;
    }
</style>