<template>
    <div class='wmenu'>
        <div class='wmenu_page_header'>
            <h1>Menu</h1>
        </div>
        <div class='wmenu_page_body'>
            <table border='1'>
                <tr>
                    <td>
                        <button>길드</button>
                    </td>
                    <td>
                        <button>경매장</button>
                    </td>
                    <td>
                        <button>길드 대화</button>
                    </td>
                    <td>
                        <button>달력</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button v-on:click='mychar_function()'>내 캐릭터</button>
                    </td>
                    <td>
                        <button>책갈피</button>
                    </td>
                    <td>
                        <button v-on:click='itemSearch_function()'>아이템 검색</button>
                    </td>
                    <td>
                        <button v-on:click='talents_function()'>특성 계산기</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>서버 현황</button>
                    </td>
                    <td>
                        <button>도전 모드</button>
                    </td>
                    <td>
                        <button>새 소식</button>
                    </td>
                    <td>
                        <button>설정</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>도움말</button>
                    </td>
                    <td>
                        <button v-on:click='logout_function()'>로그아웃</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class='wmenu_page_tail'>
            <button id='wmenu_page_back_btn' v-on:click='back_btn_function'>back</button>
        </div>
    </div>
</template>
<script>
// import Mychar from './Mychar'
// import ItemSearch from './ItemSearch'

export default {
    name: 'wmenu',
    props: ['u_data_menu'],
    data() {
        return {
        }
    },
    watch: {
    },
    methods: {
        logout_function: function () {
            this.$router.push({ path: '/login' })
        },
        mychar_function: function () {
            this.$router.push({ name: 'Mychar', params: {passed_data : this.u_data_menu, menuname: 'mychar'}})
        },
        itemSearch_function: function () {
        },
        back_btn_function: function () {
            this.$router.push({ path: '/login'})
        },
        talents_function: function(){
            this.$router.push({name: 'Talents', params:{menuname: 'talents'}})
        }
    },
    components: {
        // Mychar,
        // ItemSearch
    }
}
</script>
<style>
/*.wmenu {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100%;
}*/

.wmenu .wmenu_page_header {
    position: absolute;
    width: 80%;
    height: 15%;
    margin: 10px 25px auto;
    border: 0.5px solid red;
}

.wmenu .wmenu_page_body {
    position: absolute;
    border: 0.5px solid red;
    margin: 0px 25px auto;
    width: 80%;
    height: 70%;
    top: 100px;
}

.wmenu .wmenu_page_tail {
    position: absolute;
    border: 0.5px solid red;
    width: 80%;
    margin: 10px 25px auto;
    bottom: 10px;
}

.wmenu table {
    display: table;
    margin: 0 auto;
}
</style>


