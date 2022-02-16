const main_items= [
 [
  {
   id:1,
   class: "wedding",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:2,
   class: "naamakaranam",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:3,
   class: "updanayanam",
   header:"Upanayanam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:4,
   class: "annapraasana",
   header:"Anna praasana",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ],
 [
  {
   id:5,
   class: "wedding",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:6,
   class: "naamakaranam",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:7,
   class: "updanayanam",
   header:"Upanayanam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:8,
   class: "annapraasana",
   header:"Anna praasana",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ]
];

const sublist= {
 "1": [
  {
   id:1,
   class: "wedding",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:2,
   class: "naamakaranam",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:3,
   class: "updanayanam",
   header:"Upanayanam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ],
 "2": [
  {
   id:1,
   class: "wedding",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ],
 "3": [
  {
   id:1,
   class: "wedding",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:2,
   class: "naamakaranam",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ]
}

import '../styles/style.css';
import '../styles/custom.css';
import html from "../index.html";
import mail from '../images/mail.png';
import wedding from '../images/wedding.jpg';

const screens=['mainList','subList'];

function showScreen(id) {
 screens.forEach(s=>{
  if(s==id) return;
  document.getElementById(s).style.opacity=0;
  setTimeout(()=>{
   document.getElementById(s).style.display="none";
  },15);
 });
 document.getElementById(id).style.display="block";
 setTimeout(()=>{
  document.getElementById(id).style.opacity=1;
 },15);
}


function onMainItemClick() {
  let id=this.id;
  console.log(id);
 if(!sublist[id]) return alert("No sub categories found");
 var parent=document.getElementById('subList');
 parent.innerHTML="";
 sublist[id].forEach(item=>{
  const div=document.createElement('div');
  div.className="w3-quarter box-shadow";
  div.id=item.id;
  //div.onclick=onMainItemClick;
  const in_div=document.createElement('div');
  in_div.className="innerBox";
  const img=document.createElement('img');
  //img.src="./images/wedding.png";
  img.className=item.class;
  const h1=document.createElement('h3');
  h1.innerText=item.header;
  const p=document.createElement('p');
  p.innerText=item.content;
  in_div.appendChild(img);
  in_div.appendChild(h1);
  in_div.appendChild(p);
  div.appendChild(in_div);
  parent.appendChild(div);
 });
 document.getElementById('btn_back').style.display="block";
 showScreen('subList');
}

function goBack() {
 document.getElementById('btn_back').style.display="none";
 showScreen('mainList');
}
function loadMainItems() {
 var parent=document.getElementById('mainList');
 parent.innerHTML="";
 main_items.forEach(mainItem=>{
  mainItem.forEach(item=>{
    const div=document.createElement('div');
    div.className="w3-quarter box-shadow";
    div.id=item.id;
    div.onclick=onMainItemClick;
    const in_div=document.createElement('div');
    in_div.className="innerBox";
    const img=document.createElement('img');
    //img.src="./images/wedding.png";
    img.className=item.class;
    const h1=document.createElement('h3');
    h1.innerText=item.header;
    const p=document.createElement('p');
    p.innerText=item.content;
    in_div.appendChild(img);
    in_div.appendChild(h1);
    in_div.appendChild(p);
    div.appendChild(in_div);
    parent.appendChild(div);

  //  parent.innerHTML+=`
  //  <div class="w3-quarter box-shadow">
  //   <div class="innerBox" onclick="onMainItemClick(${item.id})">
  //    <img src="./images/${item.img}" alt="Sandwich" style="width:100%">
  //    <div>
  //     <h3>${item.header}</h3>
  //     <p>${item.content}</p>
  //    </div>
  //   </div>
  //  </div>
  //  `;
  });
 });
}
function onPageLoad() {
 loadMainItems();
 document.getElementById('btn_back').onclick=goBack;
}
onPageLoad();