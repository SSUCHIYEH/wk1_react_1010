import Article from '../pages/news_Article';
import newsjson from "../json/news.json";


function News({ match }) {
    const article = newsjson.find(
        x => x.id === match.params.newsId
    );
    console.log(match.params.newsId);

    return (
        /*<div class="grid-container">
            <div class="header">
                <div class="header_title">News</div>
            </div>

            <div class="main">
                <div class="news_img_1 news_img"></div>
                <div class="news_intro_1 news_intro">
                    <div class="news_font_big">世代的交替<br /></div>
                    <div class="news_font_mid">大黑鬼教練即將退位<br />聘請新任教練竟是非人類?!</div>
                    <div class="news_font_sm"><br />2019/6/11 18:22<br />(小編葉司淇/國北報導)</div>
                </div>
                <div class="news_img_2 news_img"></div>
                <div class="news_intro_2 news_intro">
                    <div class="news_font_big">數位VS心諮 激戰<br /></div>
                    <div class="news_font_mid">對面加油團素質低落?!<br /> 數位女排火力全開</div>
                    <div class="news_font_sm"><br />2019/6/5 20: 50<br />(小編葉司淇/國北報導)</div>
                </div>
                <div class="news_img_3 news_img"></div>
                <div class="news_intro_3 news_intro">
                    <div class="news_font_big">系際盃<br /></div>
                    <div class="news_font_mid">107學年度系際盃6/3即將開打<br /> 數位女排出賽名單出爐</div>
                    <div class="news_font_sm"><br />2019/5/23 12: 31<br />(小編葉司淇/國北報導)</div>
                </div>
                <div class="news_line_1"></div>
                <div class="news_line_2"></div>
            </div>




            <div class="footer">
                <div>©2019 DTDWV</div>
            </div>
        </div>
        */
        <>
            <Article news={article} />
        </>
    )
}

export default News


