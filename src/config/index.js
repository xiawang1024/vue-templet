//配置文件
//channelLogo
const logoIndex = 6
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '影视广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '开播于2004年4月10日的My Radio是覆盖河南地区的强势广播媒体；是全国省级电台第一家24小时连续播放流行音乐的类型化电台；是第一家实施频率品牌化运营的电台；是第一家真正营造伴随性收听状态的电台；是一家因为“音乐”而和你成为朋友的电台。用心调配全天最美味的音乐大餐；用充满能量的声音招展流行音乐最先锋的大旗。';

const CHANNEL_AUDIO_TEXT_2 = '';

//two
const CHANNEL_VIDEO = 'http://hndt.com/h5/shows/06/videos/1.mp4';

const CHANNEL_VIDEO_TEXT_1 = '24小时流行音乐不间断播出，节目以单元化、碎片化的轮盘状态呈现，成为听众无压力、最亲密的声音陪伴者。';

//twoOne
const CHANNEL_VIDEO_ONE = 'http://hndt.com/h5/shows/06/videos/2.mp4';

const CHANNEL_VIDEO_TEXT_1_ONE = '周周有活动，月月有主题。明星演唱会、荒岛音乐会、先锋音乐会、音符小精灵、潮流创意文化节、山谷音乐节、快乐广播站等,每年上百场的系列活动充分彰显了团队的执行力和创新意识。';

//three
const CHANNEL_PICS = [{
        text: 'My Radio第二届山谷音乐节圆满结束！',
        url: 'http://www.hndt.com/fm/900/201710/24/1913170/res/xAkEgLAk.jpg'
    },
    {
        text: 'My Radio有“球”必应3V3篮球争霸赛',
        url: 'http://www.hndt.com/fm/900/201710/17/1911601/res/JddS7a2h.jpg'
    },
    {
        text: 'My Radio闪电训练营第六季开营了！',
        url: 'http://www.hndt.com/fm/900/201709/25/1907310/res/gbG1nEQR.png?1506306342920'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '网络一线牵，珍惜这份缘，开封的宝宝们，我来了！',
        url: 'http://www.hndt.com/fm/900/201708/24/1901052/res/q0SrZJys.jpg'
    },
    {
        text: '六一儿童节爱在My Radio快乐广播站扬帆起航',
        url: 'http://www.hnr.cn/broadcast/fm900/news/201605/W020160531542749355855.jpg'
    },
    {
        text: 'My Radio第三届音符小精灵选拔赛报名 寻找荣誉小主播',
        url: 'http://www.hnr.cn/broadcast/fm900/news/201607/W020160721664656177764.jpg'
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
    CHANNEL_VIDEO_ONE,
    CHANNEL_VIDEO_TEXT_1_ONE,
    CHANNEL_PICS,
    CHANNEL_PICS_2
}