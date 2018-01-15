<template>

    <Content :style="{padding: '24px 0', marginTop: '24px', minHeight: '280px', background: '#fff'}">
        <Layout>
            <Sider hide-trigger :style="{background: '#fff', height: '100vh'}">
                <Menu :active-name="currentSymbol" theme="light" width="auto" :open-names="['usdt', 'btc']"  @on-select="handleSelect">
                    <template v-for="market in markets">
                        <Submenu :name="market.name">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                {{market.title}}
                            </template>
                            <template v-for="item in market.exchange">
                                <MenuItem :name="item.name">{{item.title}}</MenuItem>
                            </template>
                        </Submenu>
                    </template>
                </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '880px', background: '#fff'}">
                <KLine :symbol="currentSymbol"></KLine>
            </Content>
        </Layout>
    </Content>
    
</template>
<script>
  import KLine from './kline/index'
  export default {
    components: { KLine },
    data () {
      return {
        currentSymbol:'btc2usdt',
        markets: [
            {name: 'usdt', title: 'USTD', exchange: [
                {name: 'btc2usdt', title: 'BTC'},
                {name: 'ltc2usdt', title: 'LTC'},
                {name: 'eth2usdt', title: 'ETH'},
            ]},
            {name: 'btc', title: 'BTC', exchange: [
                {name: 'ltc2btc', title: 'LTC'},
                {name: 'eth2btc', title: 'ETH'},
            ]}
        ]
      }
    },
    methods: {
        handleSelect (name) {
            this.currentSymbol = name
        }
    }
  }
</script>