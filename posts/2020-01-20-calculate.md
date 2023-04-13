---
layout: post
title:  "..."
date:   2020-01-20 09:00:00 +0900
categories: playing    
tag: [calc, javascript]
---

* TOC
{:toc}

<script>

window.onload = function() {
  var initPerson = {};
  initPerson = ["Anduro","BANIBANI","JemSubE"];

  initPerson.forEach(function(person){ fn_addPerson(person);})

}

// 인원 추가 함수
var fn_addPerson = function(param) {
    'use strict'
    // 인원 등록 element selector
    var mbody = document.querySelector(".person tbody");
    var pParam = document.querySelector('#personTXT').value;

    //
    if ( pParam ) pParam 
    else pParam = param ;

    // index 넘버링 tr 갯수에 + 1
    var tdidx = document.querySelector(".person tbody").getElementsByTagName("tr").length + 1;

    // 행 삽입을 위한tr tag 생성 
    var trtag = document.createElement("tr");    
    trtag.setAttribute("id", "trid" + tdidx);

    // name td create
    var tdtag = document.createElement("td");
    var tdTextNode = document.createTextNode(pParam);
    tdtag.appendChild(tdTextNode); // 파라미터로 넘어온 값 td text로 입력
    tdtag.setAttribute("id", "person" + tdidx); // td 태그 id 입력

    // delete button create
    var tdtag2 = document.createElement("td");
    var delbtn = document.createElement("button");
    delbtn.innerText = "삭제";
    delbtn.addEventListener('click',function(){fn_delrow("person", this);});
    tdtag2.appendChild(delbtn);


    mbody.appendChild(trtag);
    var objstr = ".person tbody tr:nth-child(" + tdidx + ")";
    var trbody = document.querySelector(objstr);
    
    trbody.appendChild(tdtag);
    tdtag2.setAttribute("id", "personDel" + tdidx);
    trbody.appendChild(tdtag2);
}   

var fn_delrow = function(tableId, param) {
    document.querySelector('.'+tableId).deleteRow(param.parentNode.parentNode.rowIndex);
    //document.querySelector('#' + param).remove();
}

// 장소 추가 함수
var fn_addPlace = function() {
    'use strict'
    var placeTXT = document.querySelector('#placeTXT').value
    var placePrice = document.querySelector('#price').value;
    // 장소 등록 element selector
    var mbody = document.querySelector(".place tbody");

    // 사람수 체크
    var personCnt  = document.querySelector(".person tbody").getElementsByTagName("tr").length;

    // 인원 수 만큼 생성
    for( var i = 0 ;  i < personCnt ; i ++ ) {
      // index 넘버링 tr 갯수에 + 1
      var tdidx = document.querySelector(".place tbody").getElementsByTagName("tr").length + 1;
      // 행 삽입을 위한tr tag 생성 
      var trtag = document.createElement("tr");    
      trtag.setAttribute("id", "trPid" + tdidx);

      // person add
      var tdperson = document.createElement("td");
      var objstr = ".person tbody tr:nth-child(" + (i+1) + ") td:nth-child(1)";
      var tdpersonV = document.querySelector(objstr).innerText
      tdperson.appendChild(document.createTextNode(tdpersonV))

      // name td create
      var tdtag = document.createElement("td");
      var tdtagParam = document.createTextNode(placeTXT);
      tdtag.appendChild(tdtagParam); // 파라미터로 넘어온 값 td text로 입력
      tdtag.setAttribute("id", "place" + tdidx); // td 태그 id 입력

      // price add
      var tdprice = document.createElement("td");
      var calcParam = placePrice / personCnt;
      var tdpriceParam = document.createTextNode(calcParam);
      tdprice.appendChild(tdpriceParam);
      tdprice.setAttribute("id","price" + tdidx);

      // delete button create
      var tdtag2 = document.createElement("td");
      var delbtn2 = document.createElement("button");
      delbtn2.innerText = "삭제";
      //"trPid" + tdidx
      delbtn2.addEventListener('click',function(){fn_delrow("place", this);});
      tdtag2.appendChild(delbtn2);
      tdtag2.setAttribute("id", "placeDel" + tdidx);
      
      mbody.appendChild(trtag);
      var objstr = ".place tbody tr:nth-child(" + tdidx + ")";
      var trbody = document.querySelector(objstr);
      
      
      trbody.appendChild(tdtag);
      trbody.appendChild(tdperson);
      trbody.appendChild(tdprice);
      console.log(tdtag2);
      trbody.appendChild(tdtag2);
    } // END LOOP

// 미사용
function AddTotalRow() {
    var table = document.getElementById('tblReport');
    // tr 갯수 카운팅 
    var trCount = table.rows.length;
    // td 갯수 카운팅
    var tdCount = table.rows[0].cells.length;
 
    // 배열로 DataSet 구성 td 갯수 만큼 생성
    var arrTotal = new Array(tdCount);
    // 맨 앞열 Total 로 명칭 부여 
    arrTotal[0] = "Total";

    // 기본값 부여 
    for (i = 1; i &amp;lt; tdCount; i++) arrTotal[i] = 0;
 
    // 이중 포문 
    for (i = 1; i &amp;lt; trCount; i++) {     // 첫번째 Row는 Header
        for (j = 1; j &amp;lt; tdCount; j++) { // 첫번째 Cell도 Header
            var anchor = table.rows[i].cells[j].innerHTML.substring(1);
            var endIndex = anchor.indexOf('&amp;gt;');
            var restartIndex = anchor.indexOf('&amp;lt;');
            var value = anchor.substring(endIndex+1, restartIndex);
 
            arrTotal[j] += parseInt(value);
        }
    }
 
    // table에 row 추가
    var newRow = table.insertRow();
    for (i = 0; i &amp;lt; arrTotal.length; i++) {
        var newCell = newRow.insertCell();
        newCell.innerHTML = arrTotal[i];
        newCell.style.textAlign='center';
    }
}



}   

// 합산 처리
var fn_calc_amt = function() {
  // person 에 등록 된 사람 을 배열에 넣어 놓고 사람 : 금액 정보니 맵이 더 좋을 듯 함
  // 루핑 돌면서 합산 처리 필요.  
}


</script>

# 계산 입력

<input id="personTXT" type="text"/>
<button onclick="fn_addPerson()">Add person</button>

<table class="person">
  <thead>
    <tr>
      <th>title</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>

  </tbody>
</table>

<input id="placeTXT" type="text"/>
<input id="price" type="text"/>
<button onclick="fn_addPlace()">Add place</button>


<table class="place">
  <thead>
    <tr>
      <th>place</th>
      <th>person</th>
      <th>price</th>
      <th>delete</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

--- 

# 계산 합계

<ul class="calc-result">
  
</ul>
