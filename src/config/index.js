//配置文件
//channelLogo
const logoIndex = 8
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '教育广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '河南教育广播【Up-radio1066】隶属于河南广播电视台，调频覆盖河南全省，郑州播出频率FM106.6。';

const CHANNEL_AUDIO_TEXT_2 = '在知识叠代爆发的年代，学习伴随终身，Up-Radio1066让你车上的时间不再无聊，用有趣的方式打开知识。随时打开1066，你能听到全国最红音频大v的有声知识；你能听到音乐和知识伴随，知识从此不再枯燥；你能听到本土最具知识的牛人分享；你能听到最新潮的学习风尚。';

//two
const CHANNEL_VIDEO = 'http://hndt.com/fm/1066/201708/07/1897792/res/vk2yJveQ.mp4';

const CHANNEL_VIDEO_TEXT_1 = '集纳全国最红知识音频IP。罗振宇、梁宏达、吴晓波、高晓松、李翔、许树泽、富赜、老沈，共在1066发声，全天十五档知识单元与精美音乐混排轮盘，随时打开1066，随时有知识和音乐伴随。';

//three
const CHANNEL_PICS = [{
        text: '《郑在读诗》“喜迎十九大 巾帼心向党”故事朗诵会圆满落幕！',
        url: 'http://www.hndt.com/fm/1066/201710/18/1912026/res/6s3BG8Qo.jpg'
    },
    {
        text: '遇见 ｜九月，和教育广播一起相约郑州最美幼教人！',
        url: 'http://www.hndt.com/fm/1066/201710/23/1912973/res/Lf9TTmjn.jpg'
    },
    {
        text: '寻师问道·对话恩师，这只是一个开始......',
        url: 'http://www.hndt.com/fm/1066/201709/07/1904052/res/H3kUYLnR.jpg'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '萌宝、读诗、玩直播，这是一次任性的车展。',
        url: 'http://www.hndt.com/fm/1066/201708/14/1898865/res/qIJ0mg7e.jpg?1502699896957'
    },
    {
        text: '【二姐驾到】不简单！零基础，也可以这么赞！',
        url: 'http://www.hndt.com/fm/1066/201708/11/1898704/res/6SstlF2w.jpg?1502447527233'
    },
    {
        text: '《郑在读诗》摩洛哥之旅，走进三毛笔下的撒哈拉！',
        url: 'http://www.hndt.com/fm/1066/201711/01/1914916/res/qcGdGL8v.jpg?1509527639873'
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