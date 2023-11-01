$(function(){
    $(".search").click(function(){
        let message = document.getElementById("queryInput").value
        $.ajax({
            type:"post",
            url:"/wish",
            data:{message:message},
            success:function(data){
                // console.log(data);
                document.getElementById("showdata").innerHTML = data.map(i =>
                `<div class="col-md-12" id="showdata" >
                <div class="about-wrap">
                    <ul>
                        <li class="ab-single clearfix">
                            <div class="col-md-6 col-sm-6">
                                <img src="/upload_img/${i.picture}" alt="">
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="ab-content">
                                    <h4>用户地址：<br />
                                    ${i.Neederaddress}
                                    </h4>
                                    <p>募集金额：${i.goal}
                                    </p>
                                    <p>贫困情况：${i.fact}
                                    </p>
                                    <p>电话号码：${i.phone}
                                    </p>
                                    <p>募集编号：${i.number}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            `).join("");
            }
        })
        // console.log(message);
        // alert("message")
    })

});