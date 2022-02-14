const main_items= [
 [
  {
   id:1,
   img: "wedding.jpg",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:2,
   img: "naamakaranam.jpg",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:3,
   img: "upanayanam.jpg",
   header:"Upanayanam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:4,
   img: "annapraasana.jpg",
   header:"Anna praasana",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ],
 [
  {
   id:5,
   img: "wedding.jpg",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:6,
   img: "naamakaranam.jpg",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:7,
   img: "upanayanam.jpg",
   header:"Upanayanam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:8,
   img: "annapraasana.jpg",
   header:"Anna praasana",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ]
];

const sublist= {
 "1": [
  {
   id:1,
   img: "wedding.jpg",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:2,
   img: "naamakaranam.jpg",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:3,
   img: "upanayanam.jpg",
   header:"Upanayanam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ],
 "2": [
  {
   id:1,
   img: "wedding.jpg",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ],
 "3": [
  {
   id:1,
   img: "wedding.jpg",
   header:"Wedding",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  },
  {
   id:2,
   img: "naamakaranam.jpg",
   header:"Naamakaranam",
   content:"Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
  }
 ]
}

const screens=['mainList','subList'];
function showScreen(id) {
 screens.forEach(s=>{
  document.getElementById(s).style.display="none"
 });
 document.getElementById(id).style.display="block";
}
function onMainItemClick(id) {
 alert(id);
 if(!sublist[id]) return alert("No sub categories found");
 var parent=document.getElementById('subList');
 parent.innerHTML="";
 sublist[id].forEach(item=>{
  parent.innerHTML+=`
  <div class="w3-quarter box-shadow">
   <div class="innerBox" onclick="onMainItemClick(${item.id})">
    <img src="./images/${item.img}" alt="Sandwich" style="width:100%">
    <div>
     <h3>${item.header}</h3>
     <p>${item.content}</p>
    </div>
   </div>
  </div>
  `;
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
   parent.innerHTML+=`
   <div class="w3-quarter box-shadow">
    <div class="innerBox" onclick="onMainItemClick(${item.id})">
     <img src="./images/${item.img}" alt="Sandwich" style="width:100%">
     <div>
      <h3>${item.header}</h3>
      <p>${item.content}</p>
     </div>
    </div>
   </div>
   `;
  });
 });
}
function onPageLoad() {
 loadMainItems();
}