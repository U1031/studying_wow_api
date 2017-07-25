<template>
    <div class='wmenu'>
        <h1>Menu</h1>
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
                    <button>내 캐릭터</button>
                </td>
                <td>
                    <button>책갈피</button>
                </td>
                <td>
                    <button>아이템 검색</button>
                </td>
                <td>
                    <button>특성 계산기</button>
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
</template>
<script>
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
            this.$emit('changed_logout', 'login')
        }
    }
}
</script>
<style>
.wmenu {
    margin: 0 auto;
    text-align: center;
}

.wmenu table {
    display: table;
    margin: 0 auto;
}
</style>


