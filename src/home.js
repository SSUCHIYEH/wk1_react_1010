import newsjson from "./json/news.json";
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <div class="grid-container">


                <div class="header">
                    <div class="header_1_title">
                        <div class="font_size_5">DTD</div><br />
                        <div class="letter_spacing_3">Women's<br />Volleyball</div>
                    </div>
                    <div class="header_2_line"> </div>
                    <div class="header_3_img"></div>
                </div>


                <div class="main">
                    <div class="main_1_RL"></div>
                    <div class="main_1_LL"></div>
                    <div class="main_1_title">最新消息</div>
                    <div class="main_2_img"></div>
                    <div class="main_2_art">
                        <div class="big_text">全國大專院校設計盃</div>
                        <div class="small_text">嘉義港坪風雨球場<br />與銘傳商設的拉鋸戰</div>
                        <span class="readmore">read more</span>
                    </div>

                    <div class="main_3_img"></div>

                    <div class="main_3_art">
                        <Link to={`/news/${newsjson[0].id}`}>
                            <div class="big_text">{newsjson[0].title}</div>
                            <div class="small_text">{newsjson[0].header}</div>
                        </Link>
                    </div>


                    <div class="main_4_img"></div>

                    <div class="main_4_art">
                        <Link to={`/news/${newsjson[1].id}`}>
                            <div class="big_text">{newsjson[1].title}</div>
                            <div class="small_text">{newsjson[1].header}</div>
                        </Link>
                    </div>


                    <div class="main_5_img"></div>

                    <div class="main_5_art">
                        <Link to={`/news/${newsjson[2].id}`}>
                            <div class="big_text">{newsjson[2].title}</div>
                            <div class="small_text"> {newsjson[2].header}</div>
                        </Link>
                    </div>

                </div>
                <div class="member">
                    <div class="member_bgcolor"></div>
                    <div class="member_LL"></div>
                    <div class="member_RL"></div>
                    <div class="member_title">member</div>
                    <div class="member_1 Brown">outside spiker</div>
                    <div class="member_2 Pink">libero</div>
                    <div class="member_3 Brown">opposite</div>
                    <div class="member_4 Pink">setter</div>
                    <div class="member_5 Brown">middle</div>
                </div>
                <div class="footer">
                    <div>©2019 DTDWV</div>
                </div>
            </div>
        </div >
    )
}


export default Home;