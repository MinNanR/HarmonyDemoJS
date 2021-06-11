import tabBar from "../../common/config/tabBar.js"

export default {
    data: {
        title: "",
        tabBar: []
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    onShow(){
        this.$set("this.tabBar", tabBar.tabBar)
        this.$set("tabBar[0].selected", true)
        for (let key in this.tabBar) {
            console.info(JSON.stringify(this.tabBar[key]))
        }
    }
}
