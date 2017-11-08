//配置文件
//channelLogo
const logoIndex = 12
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '河南广播云平台';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '河南广播网是河南广播电视台广播业务领域的官方网站，聚合了河南广播电视台10套广播频率、14 套网络广播、河南18个省辖市及各县市100多套广播频率资源。“ 听河南，览天下”，旨在打造“ 集音视频、网络互动于一体的网络收听平台”。';

const CHANNEL_AUDIO_TEXT_2 = '河南广播网手机版、河南广播官方微博、河南广播微信公众号、河南广播小程序，多种传播渠道让您随时随地看新闻、听广播！';

//two
const CHANNEL_VIDEO = 'http://hndt.com/h5/shows/12/videos/1.mp4';

const CHANNEL_VIDEO_TEXT_1 = '自主研发的河南广播APP，为广大用户提供河南本地广播节目的网络直播、节目点播、直播互动、主持人播客、社区圈层等服务。';

//three
const CHANNEL_PICS = [{
        text: '第二届河南省高校广播主持人大赛网络直播',
        url: 'http://www.hndt.com/h5/shows/12/imgs/1.png'
    },
    {
        text: '林清玄郑州读者见面会网络直播',
        url: 'http://www.hndt.com/h5/shows/12/imgs/2.png'
    },
    {
        text: '2017年河南艺术中心中秋民族音乐会网络直播',
        url: 'http://www.hndt.com/h5/shows/12/imgs/3.png'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '河南广播大厦区块链技术讲座报名签到系统支持及网络直播',
        url: 'http://www.hndt.com/h5/shows/12/imgs/4.png'
    },
    {
        text: '河南广播网“喜迎十九大，中原更出彩”专题报道',
        url: 'http://www.hndt.com/h5/shows/12/imgs/5.png'
    },
    {
        text: '河南广播网现场直播“中原乐龄展风采 喜迎党的十九大”活动',
        url: 'http://www.hndt.com/h5/shows/12/imgs/6.png'
    }
]

export {
    CHANNEL_LOGO,
    CHANNEL_TITLE,
    CHANNEL_AUDIO,
    CHANNEL_AUDIO_TEXT_1,
    CHANNEL_AUDIO_TEXT_2,
    CHANNEL_VIDEO,
    CHANNEL_VIDEO_TEXT_1,
    CHANNEL_PICS,
    CHANNEL_PICS_2
}