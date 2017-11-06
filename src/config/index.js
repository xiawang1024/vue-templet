//配置文件
//channelLogo
const logoIndex = 1
const CHANNEL_LOGO = require(`../logo/${logoIndex}.png`)
    //封面
const CHANNEL_TITLE = '网络广播';
//one
const CHANNEL_AUDIO = 'http://www.hndt.com/podcast/881/1026/201710/31/1914736/res/DXIxLN8m.mp3';

const CHANNEL_AUDIO_TEXT_1 = '“网络广播”是传统广播服务及品牌在移动互联网上的细分裂变，其核心价值是情景化的陪伴收听，核心商业模式价值空间是“车载”。';

const CHANNEL_AUDIO_TEXT_2 = '目前我中心拥有互联网电台10套，日均收听量数十万人次，入驻蜻蜓、 喜马拉雅、 多听、 优听、 中国广播等音频平台， 与小米盒子、 主流智能车载终端保持深度合作， 多平台全网播发。';

//two
const CHANNEL_VIDEO = 'http://www.hndt.com/fm/1074/201708/07/1897788/res/u9M50TSH.mp4';

const CHANNEL_VIDEO_TEXT_1 = '10多年来，农村广播紧扣“三农”需求，强化“农”字招牌，成为城乡农民生产生活的好帮手、好顾问、好参谋，为推动我省农业发展、社会和谐、建设美丽富裕新农村做出应有贡献。';


//three
const CHANNEL_PICS = [{
        text: '助力精准扶贫 专家服务团走进“第一书记”扶贫村',
        url: 'http://www.hndt.com/fm/1074/201710/27/1913891/res/hiKYbqK9.jpg'
    },
    {
        text: '栾川竟藏着这种好东西，十四国总理都为它点赞！',
        url: 'http://www.hndt.com/fm/1074/201710/30/1914192/res/EW8lQhGx.jpg'
    },
    {
        text: '第一书记富民成果走进雏牧香 河南广电扶贫再发力',
        url: 'http://www.hndt.com/fm/1074/201710/16/1911320/res/1aZCF3fB.jpg'
    }
]

//four
const CHANNEL_PICS_2 = [{
        text: '《打工直通车》洛宁就业服务中心启动',
        url: 'http://www.hndt.com/fm/1074/201709/14/1905363/res/Hj92Xm6P.jpg'
    },
    {
        text: '河南广电联手三甲医院助力医疗扶贫 免费治疗患者出院',
        url: 'http://www.hndt.com/fm/1074/201708/31/1902584/res/DOrUk7XF.jpg'
    },
    {
        text: '中国·哈密“甜蜜之旅”第十四届哈密瓜节开幕',
        url: 'http://www.hndt.com/fm/1074/201708/14/1898815/res/MyizLTDb.jpg'
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