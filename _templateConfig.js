const TemplateConfig = {
    github_link: "https://github.com/sporule/sporule",
    navs:
    {
        "主页": "/",
        "关于吃什么": "/aboutus",
        "英伦四季高光": "/posts/categories/游记?tags=英国&pagetype=uk-tour",
        "英国吃什么": "/posts/categories/美食?tags=英国&pagetype=uk-food",
        "英国玩什么": "/posts/categories/攻略?tags=英国&pagetype=uk-play",
        "英国很贵么": "/posts/categories/预定?tags=英国&pagetype=uk-guide",
        "英国之外呢": "/posts/categories/游记?extags=英国&pagetype=other-tour",
    },
    pageTypes: {
        "all": {
            "title": "大杂烩",
            "subTitle": "这里什么都有",
            "description":"",
            "tags":["英国"],
            "extags":[],
            "filterTags": [],
            "pageType": "all"
        },

        "uk-tour": {
            "title": "英伦四季高光",
            "subTitle": "游记",
            "description":"",
            "tags":["英国"],
            "extags":[],
            "filterTags": [],
            "pageType": "uk-tour"
        },
        "uk-food": {
            "title": "英国吃什么",
            "subTitle": "美食",
            "description":"常常听人说英国无美食，也看过炸鱼被讽刺，土豆被内涵，所以希望能够通过《英国吃什么》专题为英国的食物正名，跟大家分享在英国旅行的时候有哪些值得体验的地道美食。每一片介绍的标题当中，［推荐］是指如果在附近玩耍的话可以去尝试的好吃的餐厅，［精选］是指在［推荐］餐厅当中都比较优秀的代表，而［必吃］则是指即使不在附近也值得特地去吃的餐厅。",
            "tags":["英国"],
            "extags":[],
            "filterTags": ["英格兰","威尔士"," 苏格兰","米其林"],
            "pageType": "uk-food"
        },
        "uk-play": {
            "title": "英国玩什么",
            "subTitle": "攻略",
            "description":"",
            "tags":["英国"],
            "extags":[],
            "filterTags": [],
            "pageType": "uk-play"
        },
        "uk-guide": {
            "title": "英国很贵么",
            "subTitle": "签证、交通、住宿及餐饮预定",
            "description":"",
            "tags":["英国"],
            "extags":[],
            "filterTags": [],
            "pageType": "uk-guide"
        },
        "other-tour": {
            "title": "英国之外呢",
            "subTitle": "其他地区游记",
            "description":"",
            "tags":[],
            "extags":["英国"],
            "filterTags": [],
            "pageType": "other-tour"
        }
    },
    homeItems: [
        {
            "title": "英伦四季",
            "titleBold": "高光",
            "subTitle": "游记",
            "coverImage": "/images/coverimageIMG_20170528_124653_1.jpg",
            "link": "/posts/categories/游记?tags=英国&pagetype=uk-tour",
        },
        {
            "title": "英国",
            "titleBold": "吃什么",
            "subTitle": "美食",
            "coverImage": "/images/coverimage1014646908.jpg",
            "link": "/posts/categories/美食?tags=英国&pagetype=uk-food",
        },
        {
            "title": "英国",
            "titleBold": "玩什么",
            "subTitle": "攻略",
            "coverImage": "/images/coverimageIMG_20170701_214925_1.jpg",
            "link": "/posts/categories/攻略?tags=英国&pagetype=uk-play",
        },
        {
            "title": "英国",
            "titleBold": "很贵么",
            "subTitle": "签证、交通、住宿及餐饮预定",
            "coverImage": "/images/coverimage1395493781.jpg",
            "link": "/posts/categories/预定?tags=英国&pagetype=uk-guide",
        },
        {
            "title": "英国",
            "titleBold": "之外呢",
            "subTitle": "其他地区游记",
            "coverImage": "/images/coverimageother.jpg",
            "link": "/posts/categories/游记?extags=英国&pagetype=other-tour",
        }
    ],
    aboutUs:{
        "title":"关于吃什么",
        "subTitle":"SubTitle",
        "description":"Description",
        "content":"吃什么网（www.eatsomemore.com）创立于2017年，主要更新世界各地的旅行游记。刚开始时，这个网站的意义仅在于记录美好的旅行体验。作为一名全职法务工作者，大部分时候我只能在公共假期或者双休日出行，以及编辑和发布文稿。随着越来越多小伙伴们的提问，本人经久不衰的旅行热情，以及在英国生活的时间越来越长，我决定将网站升级为“英国旅游指南”，以便更好地提供各类英国旅游资讯和多种亲测实评。当然，吃什么网仍然同时记录着其它国家和地区的旅行体验，以备不时之需哦。"
    }
}

module.exports = TemplateConfig;