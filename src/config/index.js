//配置文件
//channelLogo
const logoIndex = 2
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '河南交通广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '河南交通广播是一家融合FM104.1、交广融媒客户端、微信、微博、视频为一体的全媒体平台，是河南省应急广播、全国青年文明号、爱心广播。团队的核心价值观是责任和快乐，旨在为受众提供准确真实的交通信息和愉悦欢快的行车享受，是全国首家拥有应急直升机的广播媒体；全国首家完成客户端融资的广播媒体；全国首家拥有7名无人机机长的媒体；河南首家24小时视频直播广播媒体。FM104.1河南交通广播，伴你出行每一刻。';

const CHANNEL_AUDIO_TEXT_2 = '';

//two
const CHANNEL_VIDEO = 'http://www.hndt.com/fm/1041/201708/07/1897783/res/56wk2eCe.mp4';

const CHANNEL_VIDEO_TEXT_1 = '大型原创文化品牌河南优放音乐节、汽车UP实力榜、最美乡村教师等活动，大台气度，媒体担当。从“爱心送考”到登山节”“文明出行”“1041旅行品牌”等品牌活动，超过十万人参与，持续举办超过10届。是河南省内唯一创收过亿的电台。';

//three
const CHANNEL_PICS = [{
        text: 'FM104.1文明出行系列活动第五季飞行棋派发—濮阳站',
        url: 'http://www.hndt.com/fm/1041/201710/23/1912933/res/PLvJ6Ba8.jpg?1508728235765'
    },
    {
        text: '交广DJ送福利！这东西整箱整箱送！你收到了吗？',
        url: 'http://www.hndt.com/fm/1041/201710/12/1910741/res/rxL965Zm.jpg?1507793978526'
    },
    {
        text: 'FM104.1携手爱心企业，关爱交警健康',
        url: 'http://www.hndt.com/fm/1041/201710/12/1910733/res/0yunImdg.jpg?1507791761829'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '河南交通广播“好想你”红枣采摘节',
        url: 'http://www.hndt.com/fm/1041/201708/30/1902308/res/isTGdJg4.jpg?1504062157269'
    },
    {
        text: '美丽河南—探秘“最美红叶基地”',
        url: 'http://www.hndt.com/fm/1041/201710/30/1914335/res/X9rDZYhx.jpg'
    },
    {
        text: '【阳光探店】金汤的酸菜鱼，这酸爽才够味儿！',
        url: 'http://www.hndt.com/fm/1041/201710/26/1913835/res/8gL4xeUZ.jpg'
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