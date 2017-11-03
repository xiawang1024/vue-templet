//配置文件
//channelLogo
const logoIndex = 4
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '河南音乐广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '从黑胶唱片出发，走过卡带岁月，经历CD年代，再到听MP3的日子……音乐的陪伴始终不曾离开，魅力881河南音乐广播，改变的是聆听方式，不变的是打动心灵的歌声。2003年5月18日，魅力881河南乐广播的诞生，不仅帮我们拾回被遗忘的时光，还改变了我们听歌的品质。如今我们依然停靠在左岸，调频向左，深度陪伴。聆听品质音乐，享受品质生活......';

const CHANNEL_AUDIO_TEXT_2 = '';

//two
const CHANNEL_VIDEO = 'http://www.hndt.com/fm/881/201708/07/1897786/res/CfRuH4bI.mp4';

const CHANNEL_VIDEO_TEXT_1 = '魅力881音乐广播，已实现全省覆盖：郑州/开封/漯河/周口/三门峡市市[FM88.1]；新乡市 [FM88.5]；南阳市[FM88.8]；洛阳市/焦作市[FM89.7]；鹤壁市/濮阳市[FM95.0];驻马店市/信阳市/平顶山市[FM95.8]；安阳市[FM98.3]； 许昌市[FM100.4]。';

//three
const CHANNEL_PICS = [{
        text: '魅力881丨国庆中秋齐欢聚，神农山景区门票免费送',
        url: 'http://www.hndt.com/fm/881/201709/29/1908687/res/trWoZE4u.jpg?1506668515821'
    },
    {
        text: '2017国庆节甘北胡杨林沙漠穿越8日精品自驾之旅！',
        url: 'http://www.hndt.com/fm/881/201709/22/1906985/res/aYnNxSeZ.jpg?1506070156081'
    },
    {
        text: '《最爱金曲榜》开始投票，金曲单元节目即将播出',
        url: 'http://www.hndt.com/fm/881/201709/11/1904699/res/LzwOqtk4.jpg?1505098026620'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '2017新豫商行读中原徒步活动',
        url: 'http://www.hndt.com/fm/881/201708/14/1898818/res/Qs6m8xeI.jpg?1502676758812'
    },
    {
        text: 'WDG第五届 中国（郑州）国际街舞大赛总决赛完美落幕',
        url: 'http://www.hndt.com/fm/881/201708/10/1898404/res/S2mblE1B.jpg?1502338116328'
    },
    {
        text: '葡萄成熟时，我们满载而归啦！',
        url: 'http://www.hndt.com/fm/881/201708/10/1898384/res/KBdq8lCT.jpg?1502331319496'
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