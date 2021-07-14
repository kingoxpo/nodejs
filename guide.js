var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
  var _url =request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id);
  if(_url == '/'){
    _url = '/index.html';
  }
  if(_url == '/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  var template = `
  <!doctype html>
    <html>
    <head>
    <title>WEB1 - HTML</title>
    <meta charset="utf-8">
    </head>
      <body>
        <p data-ke-size="size16"><span style="color: #000000;">쿠팡x플레이오토 프로모션을 통해 등록한 상품을 쿠팡에서&nbsp;삭제 후 다시 등록하길 원하시는 경우, 아래의 내용을 참고 바랍니다.</span></p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size18"><b><span style="color: #000000;">Step 1 - Wing에서 기존상품 삭제</span></b><span style="color: #000000;"></span></p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>wing으로 접속해서 좌측 메뉴바의 [상품관리] &gt; [상품 조회/수정] 페이지 열기</li>
        <li>삭제하고자 하는 상품을 선택 후&nbsp; [삭제]버튼을 통해 삭제합니다.</li>
        </ul>
        <p data-ke-size="size14"><b><span style="color: #000000;">*기존상품을 삭제하지 않아도 재등록이 가능하지만 관리가 안될 수 있으므로 삭제를 권장드립니다.</span></b></p>
        <p>[##_Image|kage@bvvO5Q/btq894zgQAQ/JZ9SS5nhn6QiIFwPBRknq0/img.png|alignCenter|data-origin-width="1463" data-origin-height="914" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>대량으로 상품을 삭제해야하는 경우 엑셀로 업로드하여 삭제할 수 있습니다(최대 5000개)</li>
        </ul>
        <p>[##_Image|kage@WSPco/btq85EieGBh/fpF3dGyEEPiIN37w1f9zkk/img.png|alignCenter|data-origin-width="1867" data-origin-height="947" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size18"><b><span style="color: #000000;">Step 2 - 상품 가져오기</span></b></p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>좌측 메뉴바의 [상품관리] &gt; [통합솔루션으로 상품등록(무료)] 페이지 열기</li>
        <li>[플레이오토 이동하기] 클릭</li>
        </ul>
        <p data-ke-size="size14"><b><span style="color: #000000;">*새창으로 로그인 화면이 나타나면 로그인한 다음 [플레이오토 이동하기] 한번 더 클릭하시면 됩니다.</span></b></p>
        <p>[##_Image|kage@bWdfXf/btq88yH4A3t/xK0HzQZzh0B3wqMWhmtlD1/img.png|alignCenter|data-origin-width="1479" data-origin-height="934" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size18"><b><span style="color: #000000;">Step 3 - 상품 가져올 사이트 선택하기</span></b></p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>사이트 선택 후 로그인 및 로그인 정보값을 입력합니다.</li>
        <li>입력 후 하단의 [다음]버튼 클릭</li>
        </ul>
        <p>[##_Image|kage@cbEbQU/btq89vjPmvU/q2YMJEzWKS90S6Ecj9BKik/img.png|alignCenter|data-origin-width="1124" data-origin-height="956" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size18"><b><span style="color: #000000;">Step 4 - 상품 등록하기</span></b></p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>쿠팡 로그인 정보를 입력합니다.</li>
        <li>하단의 <span style="color: #ee2323;"><b>[지정 상품 등록하기]</b></span>체크박스 클릭</li>
        </ul>
        <p>[##_Image|kage@kLWXN/btq9uBEgZdV/ly4IRFkoPAfH0qVr1Ezcu1/img.png|alignCenter|data-origin-width="1702" data-origin-height="1652" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>주의사항 확인 후 [동의]버튼 클릭</li>
        </ul>
        <p>[##_Image|kage@mCZY3/btq9t6xr6Sh/ZNkFOyBziiSGJqQISInz7K/img.png|alignCenter|data-origin-width="1966" data-origin-height="1420" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>특정상품을 지정해서 재등록할 것인지 전체상품을 재등록할것인지 확인 후 원하는 방법으로 클릭</li>
        </ul>
        <p>[##_Image|kage@MRAM5/btq9wf122H4/EUOs8aa63OilC7wjGDMf4k/img.png|alignCenter|data-origin-width="1362" data-origin-height="948" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>가져오기 할 쇼핑몰의 상품코드를 입력한 후 [OK] 클릭(ex.스마트스토어의 상품코드)</li>
        </ul>
        <p>[##_Image|kage@bMrP96/btq9tatjEyY/hH1zkgoMEioA8zCGYZq9F0/img.png|alignCenter|data-origin-width="1298" data-origin-height="1220" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16">&nbsp;</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>가져오기 할 쇼핑몰의 상품코드를 입력한 후 [OK] 클릭(ex.스마트스토어의 상품코드)</li>
        </ul>
        <p>[##_Image|kage@b5HZSj/btq9s2bhJEr/GAIOpzr6ItRlKFdI6ZPsK1/img.png|alignCenter|data-origin-width="1364" data-origin-height="914" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <h4 data-ke-size="size20"><b>※ 잠깐, 쇼핑몰 상품코드를 복사하는 방법을 모르는분들은 아래 방법을 참고해주세요!</b></h4>
        <p>[##_Image|kage@ccAGHB/btq86Vw5Ifx/XhhXdw2i8PTpJKi0fCbf81/img.png|alignCenter|data-origin-width="1305" data-origin-height="945" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>먼저 쇼핑몰 어드민페이지에 접속해서 상품조회로 들어갑니다.</li>
        <li>검색조건을 통해 쿠팡으로 가져올 상품을 검색합니다.(엑셀에서 정리할 수도 있어요^^)</li>
        </ul>
        <p data-ke-size="size16">&nbsp;</p>
        <p>[##_Image|kage@vhyii/btq9bkI9EYa/SAJosjzdUEX842QIierJi1/img.png|alignCenter|data-origin-width="1886" data-origin-height="906" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>조회된 상품목록 창 우측 상단에 '엑셀다운' 버튼을 클릭합니다.</li>
        </ul>
        <p data-ke-size="size16">&nbsp;</p>
        <p>[##_ImageGrid|kage@b3KY1i/btq9aEunw96/iIRcfiePml6iGBabKM2K01/img.png,kage@c22AUp/btq9blg0ppD/ZzX1JHEMYNkJVgcLYDXb7k/img.png|data-origin-width="646" data-origin-height="478" width="289" height="214" style="width: 52.5196%; margin-right: 10px;",data-origin-width="733" data-origin-height="615" width="418" height="351" style="width: 46.3176%;"|_##]</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>엑셀 다운로드가 완료되었다면 브라우저 창 좌측하단에 다운로드받은 파일을 클릭합니다.</li>
        </ul>
        <p data-ke-size="size16">&nbsp;</p>
        <p>[##_Image|kage@ckJpQG/btq9aF7SiiG/NLSFF7TzKCvtpug6UXMKe1/img.png|alignCenter|data-origin-width="1660" data-origin-height="942" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <ul style="list-style-type: disc;" data-ke-list-type="disc">
        <li>A열(column)에 있는 상품번호를 드래그해서 복사합니다. (열 전체선택: Ctrl + Space bar, 복사: Ctrl+C)</li>
        <li>이제 복사된 상품번호를 아까봤던 창에서 붙여넣기 해주시면 됩니다~!</li>
        </ul>
        <p data-ke-size="size16">&nbsp;</p>
        <p>[##_Image|kage@bhh7KF/btq85VDEUdL/HjiEJTObFUARxkoZkaAQDk/img.png|alignCenter|data-origin-width="975" data-origin-height="811" data-filename="blob" data-ke-mobilestyle="widthOrigin"|||_##]</p>
        <p data-ke-size="size16">짜잔~ 끝났습니다.</p>
        <p data-ke-size="size16"><span style="color: #000000;">안내드리는 방법으로 쉽고 빠르게 업데이트하시기 바랍니다^^</span></p>
        <p data-ke-size="size16"><b>*만약 스마트스토어가 아닌 다른 쇼핑몰의 상품코드를 가져오더라도 크게 다르지 않아요~</b></p>
        <p data-ke-size="size16">&nbsp;</p>
        <p data-ke-size="size16"><span style="color: #000000;">감사합니다.</span></p>
      </body>
  </html>

  `;
  response.end(template);

});
app.listen(4000);