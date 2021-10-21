import img from "../assets/bear.jpg";

function Article({ news }) {
    return (
        <div class="container-fluid article">
            <div class="row mainarea">
                <div class="row col-md-2 col-sm-2"></div>
                <div class="row col-md-8 col-sm-8 start">
                    <div class="row topicbody">
                        <h1 class="maintopic">{news.title}</h1>
                        <div class="time">{news.time}</div>
                    </div>

                    <div class="row contentbody">
                        <div class="row bearimg">
                        <img src={news.img}  />
                            <h2 class="smalltopic">{news.header}</h2>
                            
                        </div>

                        <p class="text">    
                        <span class="first">{news.firstletter}</span>
                        {news.text}<br /><br />
                        {news.text1}<br /><br />
                        {news.text2}
                        </p>
                    </div>



                    <div class="row col-md-2 col-sm-2"></div>
                </div>
                <div class="footer">
                    <div>©2019 DTDWV</div>
                </div>
            </div>
        </div>
    )
}

export default Article;