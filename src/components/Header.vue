<template>

    <div class="header">
        <div class="header-top">
            <span>
                <router-link to="/">ele.me</router-link>
            </span>
            <div>
                <router-link to="/register">登陆|注册</router-link>
            </div>

        </div>
        <div class="city-tip">
            <span>当前定位城市：</span>
            <span>定位不准时，请在城市列表中选择</span>
        </div>
        <div class="guess-city">
            <router-link :to="{name:'city',params:{guess}}">
                <!--  -->
                <span>

                    {{guess.name}}
                </span>
            </router-link>
            <router-link :to="{name:'city',params:{guess}}">
                <i class="iconfont">&#xe601;</i>
            </router-link>


        </div>
        <div class="city-title">
            <span>热门城市</span>
            <ul class="city-title-1">
                <li v-for="(hot,index) in hots" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:hot}}" style="color:#3190e8">
                        {{hot.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="body-con">
            <!-- /** -->
            <div class="body-con-1">
                <span>A</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrA,index) in arr.A" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrA}}">{{arrA.name}}</router-link>
                </li>
            </ul>
            <!-- /** -->
            <div class="body-con-1">
                <span>B</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrB,index) in arr.B" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrB}}">{{arrB.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>C</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrC,index) in arr.C" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrC}}">{{arrC.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>D</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrD,index) in arr.D" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrD}}">{{arrD.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>E</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrE,index) in arr.E" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrE}}">{{arrE.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>F</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrF,index) in arr.F" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrF}}">{{arrF.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>G</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrG,index) in arr.G" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrG}}">{{arrG.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>H</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrH,index) in arr.H" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrH}}">{{arrH.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>J</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrJ,index) in arr.J" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrJ}}">{{arrJ.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>K</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrK,index) in arr.K" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrK}}">{{arrK.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>L</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrL,index) in arr.L" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrL}}">{{arrL.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>M</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrM,index) in arr.M" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrM}}">{{arrM.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>N</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrN,index) in arr.N" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrN}}">{{arrN.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>P</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrP,index) in arr.P" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrP}}">{{arrP.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>Q</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrQ,index) in arr.Q" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrQ}}">{{arrQ.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>R</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrR,index) in arr.R" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrR}}">{{arrR.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>S</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrS,index) in arr.S" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrS}}">{{arrS.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>T</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrT,index) in arr.T" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrT}}">{{arrT.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>W</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrW,index) in arr.W" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrW}}">{{arrW.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>X</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrX,index) in arr.X" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrX}}">{{arrX.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>Y</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrY,index) in arr.Y" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrY}}">{{arrY.name}}</router-link>
                </li>
            </ul>
            <div class="body-con-1">
                <span>Z</span>
                <span>&nbsp;&nbsp;(按字母排序)</span>
            </div>
            <ul class="city-title-1 body-con-2">
                <li v-for="(arrZ,index) in arr.Z" :key="index">
                    <router-link class="nav-link" :to="{name:'city',params:{guess:arrZ}}">{{arrZ.name}}</router-link>
                </li>
            </ul>
        </div>




    </div>




</template>

<script>
    export default {
        created() {
            this.$axios.get("https://elm.cangdu.org/v1/cities?type=group").then(res => {
                // console.log(res.data);
                this.arr = res.data;
            });
            this.$axios.get("https://elm.cangdu.org/v1/cities?type=guess").then(res => {
                this.guess = res.data;
            });
            this.$axios.get("https://elm.cangdu.org/v1/cities?type=hot").then(res => {
                this.hots = res.data;
            });
        },
        data() {
            return {
                arr: [],
                guess: [],
                hots: []
            };
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    text-decoration: none;
}
    .header {
        background: #ffffff;

        /* width: 3.75rem; */
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        color: #ffffff;
    }

    .header-top {
        position: fixed;
        width: 100%;
        height: 1.95rem;
        background: #3190e8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.3rem;
        color: white;
        box-sizing: border-box;
        /* padding-bottom: 0.55rem; */
        margin-bottom: 0.1rem;
    }
    .header-top a{
        color: #ffffff;
    }

    .header-top div {
        font-size: 0.6rem;
    }

    .header-top span {
        /* display: block; */
        font-size: 0.8rem;
    }


    @font-face {
        font-family: "iconfont";
        /* project id 1383065 */
        src: url("//at.alicdn.com/t/font_1383065_zw3ugxtvg79.eot");
        src: url("//at.alicdn.com/t/font_1383065_zw3ugxtvg79.eot?#iefix") format("embedded-opentype"),
            url("//at.alicdn.com/t/font_1383065_zw3ugxtvg79.woff2") format("woff2"),
            url("//at.alicdn.com/t/font_1383065_zw3ugxtvg79.woff") format("woff"),
            url("//at.alicdn.com/t/font_1383065_zw3ugxtvg79.ttf") format("truetype"),
            url("//at.alicdn.com/t/font_1383065_zw3ugxtvg79.svg#iconfont") format("svg");
    }

    /* project id 1383065 */

    .city-tip {
        width: 100%;
        line-height: 1.45rem;
        margin-top: 2.5rem;
        font-size: 0.59rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.45rem;
        color: #666666;
        border-bottom: 0.01rem solid #e4e4e4;
    }

    .city-tip span:nth-of-type(2) {
        font-size: 0.11rem;
        color: #9f9f9f;
        font-weight: bold;
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 0.65rem;
        font-style: normal;
    }

    .guess-city {
        width: 100%;
        font: .75rem/1.8rem Microsoft YaHei;
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.45rem;
        border-top: 1px solid #e4e4e4;
        border-bottom: 2px solid #e4e4e4;
    }

    .guess-city span {
        color: #3190e8;
    }

    .guess-city a {
        color: #666666
    }

    .city-title {
        background: #ffffff;
        border-top: 0.02rem solid #e4e4e4;
        width: 100%;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
        margin-top: 0.3rem;
        text-indent: 0.45rem;
        font-weight: 400;
        font: .55rem/1.45rem Helvetica Neue;
    }

    .city-title span {
        display: flex;
        align-items: center;
        padding-left: 0.1rem;
        width: 100%;
        /* height: 0.36rem; */
        color: #666666;
    }

    .city-title-1 {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border-top: 1px solid #e4e4e4;
        justify-content: flex-start;
    }

    .city-title-1 li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24.85%;
        height: 1.75rem;
        color: #3190e8;
        border-right: 0.025rem solid #e4e4e4;
        border-bottom: 0.025rem solid #e4e4e4;
        font: .6rem/1.75rem Microsoft YaHei;
    }


    .body-con {
        margin-top: 0.1rem;
        border-top: 0.02rem solid #e4e4e4;
        background: #f5f5f5;
        width: 100%;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;
    }


    .body-con-1 {
        background: #ffffff;
        width: 100%;
        display: flex;
        text-indent: 0.45rem;
        align-items: center;
        padding-left: 0.1rem;
        border-top: 0.02rem solid #e4e4e4;
        border-bottom: 0.01rem solid #e4e4e4;
        font: .55rem/1.45rem Helvetica Neue
    }

    .body-con-1 span:nth-of-type(2) {
        /* font-size: 0.11rem; */
        color: #999999;
    }

    .body-con-2 li {
        background: #ffffff;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .body-con-2 {
        margin-bottom: 0.1rem;
    }

    .nav-link {
        color: #666666;
        text-decoration: none;
    }
</style>