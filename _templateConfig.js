const TemplateConfig = {
    github_link: "https://github.com/sporule/sporule",
    navs:
    {
        "主页": "/",
        "关于吃什么": "/",
        "英伦四季高光": "/",
        "英国吃什么": "/",
        "英国玩什么": "/",
        "英国很贵么": "/",
        "英国之外呢": "/",
    },
    pageTypes: {
        "all": {
            "title": "大杂烩",
            "subTitle": "这里什么都有",
            "filterTags": [],
            "pageType": "all"
        },

        "uk-tour": {
            "title": "英伦四季高光",
            "subTitle": "游记",
            "filterTags": [],
            "pageType": "uk-tour"
        },
        "uk-food": {
            "title": "英国吃什么",
            "subTitle": "美食",
            "filterTags": [],
            "pageType": "uk-food"
        },
        "uk-play": {
            "title": "英国玩什么",
            "subTitle": "攻略",
            "filterTags": [],
            "pageType": "uk-play"
        },
        "uk-guide": {
            "title": "英国很贵么",
            "subTitle": "签证、交通、住宿及餐饮预定",
            "filterTags": [],
            "pageType": "uk-guide"
        },
        "other-tour": {
            "title": "英国之外呢",
            "subTitle": "其他地区游记",
            "filterTags": [],
            "pageType": "other-tour"
        }
    },
    homeItems: [
        {
            "title": "英伦四季",
            "titleBold": "高光",
            "subTitle": "游记",
            "coverImage": "https://i.imgur.com/MrRLOC4.png",
            "link": "/posts/categories/游记?tags=英国&pagetype=uk-tour",
        },
        {
            "title": "英国",
            "titleBold": "吃什么",
            "subTitle": "美食",
            "coverImage": "https://i.imgur.com/MrRLOC4.png",
            "link": "/posts/categories/美食?tags=英国&pagetype=uk-food",
        },
        {
            "title": "英国",
            "titleBold": "玩什么",
            "subTitle": "攻略",
            "coverImage": "https://i.imgur.com/MrRLOC4.png",
            "link": "/posts/categories/攻略?tags=英国&pagetype=uk-play",
        },
        {
            "title": "英国",
            "titleBold": "很贵么",
            "subTitle": "签证、交通、住宿及餐饮预定",
            "coverImage": "https://i.imgur.com/MrRLOC4.png",
            "link": "/posts/categories/预定?tags=英国&pagetype=uk-guide",
        },
        {
            "title": "英国",
            "titleBold": "之外呢",
            "subTitle": "其他地区游记",
            "coverImage": "https://i.imgur.com/MrRLOC4.png",
            "link": "/posts/categories/游记?extags=英国&pagetype=other-tour",
        }
    ]
}

module.exports = TemplateConfig;