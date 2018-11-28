import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '视频'
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onPullDownRefresh(ev) {
    setTimeout(() => {
      console.log('停止下拉')
      wx.stopPullDownRefresh()
    }, 2000)
  }

  handleTurnPage() {
    Taro.switchTab({
      url: '/pages/my/index'
    })
  }

  render() {
    return (
      <View className='index'>
        <Text className='title' onClick={this.handleTurnPage}>
        视频
        </Text>
      </View>
    )
  }
}