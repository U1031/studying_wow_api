<template>
    <div class='mychar'>
        <div v-if="mychar_ready === 'ready'">
            <table class='outer_table' border='1'>
                <tr class='info_top'>
                    <td class='info_top left'>
                        <table class='inner_table left' border='1'>
                            <tr class='items_head'>
                                <img :src='item_image_url(mychar_data.head)'>
                                <!--v-for="(value, key) in mychar_data"-->
                            </tr>
                            <tr class='items_neck'>
                                <img :src='item_image_url(mychar_data.neck)'>
                            </tr>
                            <tr class='items_shoulder'>
                                <img :src='item_image_url(mychar_data.shoulder)'>
                            </tr>
                            <tr class='items_back'>
                                <img :src='item_image_url(mychar_data.back)'>
    
                            </tr>
                            <tr class='items_chest'>
                                <img :src='item_image_url(mychar_data.chest)'>
                            </tr>
                            <tr>
                                <img src='https://wow.zamimg.com/images/wow/icons/large/ability_ambush.jpg'>
                            </tr>
                            <tr>
                                <img src='https://wow.zamimg.com/images/wow/icons/large/ability_ambush.jpg'>
                            </tr>
                            <tr class='items_wrist'>
                                <img :src='item_image_url(mychar_data.wrist)'>
                            </tr>
                        </table>
                    </td>
                    <td class='info_top center'>
                    </td>
                    <td class='info_top right'>
                        <table class='inner_table right' border='1'>
                            <tr class='items_hands'>
                                <img :src='item_image_url(mychar_data.hands)'>
    
                            </tr>
                            <tr class='items_waist'>
                                <img :src='item_image_url(mychar_data.waist)'>
    
                            </tr>
                            <tr class='items_legs'>
                                <img :src='item_image_url(mychar_data.legs)'>
    
                            </tr>
                            <tr class='items_feet'>
                                <img :src='item_image_url(mychar_data.feet)'>
    
                            </tr>
                            <tr class='items_finger1'>
                                <img :src='item_image_url(mychar_data.finger1)'>
                            </tr>
                            <tr class='items_finger2'>
                                <img :src='item_image_url(mychar_data.finger2)'>
                            </tr>
                            <tr class='items_trinket1'>
                                <img :src='item_image_url(mychar_data.trinket1)'>
                            </tr>
                            <tr class='items_trinket2'>
                                <img :src='item_image_url(mychar_data.trinket2)'>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class='info_bottom'>
                    <td colspan="3" class='info_bottom down'>
                        <table border="1" class='info_bottom_table'>
    
                            <td class='itmes_mainHand'>
                                <img :src='item_image_url(mychar_data.mainHand)'>
                            </td>
                            <td class='items_offHand'>
                                <img :src='item_image_url(mychar_data.offHand)'>
                            </td>
    
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <div>
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
        item_image_url: function (icon_url) {
            return 'https://render-kr.worldofwarcraft.com/icons/56/' + icon_url.icon + '.jpg'
        }

    },
    created() {
        const baseURI = 'https://kr.api.battle.net/wow/character/';
        this.$http.get(`${baseURI}` + this.passed_data.realm + `/` + this.passed_data.name + `?fields=items&locale=ko_KR&apikey=r7gy86fvdpxcgux44nurnrx29rbcm4td`)
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
    height: 100%;
    width: 100%;
    margin: 0 auto;
}

.info_bottom {
    margin: 0 auto;
    height: 20%;
}

.info_bottom .down {
    margin: 0 auto;
}

.info_top .left {
    width: 20%;
}

.info_top .right {
    width: 20%;
}

.info_bottom_table {
    margin: 0 auto;
}

img {
    margin: 0 auto;
    width: 40px;
    height: 40px;
}
</style>

