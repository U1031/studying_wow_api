<template>
    <div class='mychar'>
        <div v-if="mychar_ready === 'ready'">
            <table class='outer_table' border='1'>
                <tr class='info_top'>
                    <td>
                        <table class='inner_table left' border='1'>
                            <tr class='items_head'>
                            </tr>
                            <tr class='items_neck'>
                            </tr>
                            <tr class='items_soulder'>
                                <img :src='item_image_url()'>
                            </tr>
                            <tr class='items_back'>
                            </tr>
                            <tr class='items_chest'>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                            </tr>
                            <tr class='items_wrist'>
                            </tr>
                        </table>
                    </td>
                    <td>
                    </td>
                    <td>
                        <table class='inner_table right' border='1'>
                            <tr class='items_hands'>
                            </tr>
                            <tr class='items_waist'>
                            </tr>
                            <tr class='items_legs'>
                            </tr>
                            <tr class='items_feet'>
                            </tr>
                            <tr class='items_finger1'>
                            </tr>
                            <tr class='items_finger2'>
                            </tr>
                            <tr class='items_trinket1'>
                            </tr>
                            <tr class='items_trinket2'>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class='info_bottom'>
                    <td colspan="3">
                        <table border='1'>
                            <td class='itmes_mainHand'>
                            </td>
                            <td class='items_offHand'>
                            </td>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mychar',
    props: ['passed_data'],
    data() {
        return {
            mychar_data: [],
            mychar_ready: ''
        }
    },
    methods: {
        item_image_url: function () {
            // return 'https://render-kr.worldofwarcraft.com/icons/56/' + this.mychar_data.soulder.icon + '.jpg'
        }
    },
    created() {
        const baseURI = 'https://kr.api.battle.net/wow/character/';
        this.$http.get(`${baseURI}` + this.passed_data.data.realm + `/` + this.passed_data.data.name + `?fields=items&locale=ko_KR&apikey=r7gy86fvdpxcgux44nurnrx29rbcm4td`)
            .then((result) => {
                // console.log(result)
                this.mychar_data = result.data.items
                console.log(this.mychar_data)
                this.mychar_ready = 'ready'
            })
            .catch(function (error) {
                console.log(error)
                window.alert(error)
            })
    }
}
</script>

<style>
.mychar {
    margin: 0 auto;
    height: 440px;
}

.mychar .outer_table {
    width: 100%;
    height: 440px;
}

.mychar .outer_table .inner_table {
    height: 80%;
}

.info_bottom {
    height: 20%;
}

img {
    width: 80%;
    border-radius: 2%;
}
</style>

