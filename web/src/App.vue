<style scoped>
@import 'styles/common.css';
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="market" @on-select="handleSelect">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="market">
                            <Icon type="ios-navigate"></Icon>
                            行情
                        </MenuItem>
                        <MenuItem name="strategy">
                            <Icon type="ios-keypad"></Icon>
                            策略
                        </MenuItem>
                        <MenuItem name="trade">
                            <Icon type="ios-analytics"></Icon>
                            交易
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <router-view></router-view>
            </Layout>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</div>
</template>
<script>
    export default {
        methods: {
            handleSelect (name) {
                let willpush = true;
                if (this.beforePush !== undefined) {
                    if (!this.beforePush(name)) {
                        willpush = false;
                    }
                }
                if (willpush) {
                    this.$router.push({
                        name: name
                    });
                }
                this.$emit('on-change', name);
            }
        }
    }
</script>