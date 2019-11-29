var menu = [
"Macaroni met ham en kaas",
"Tagliatelli met ham en kaas",
"Spaghetti met spinazie en room",
"Macaroni met spinazie en room",
"Tagliatelli met spinazie en room",
"Spaghetti met gehakt-tomatensaus en kaas",
"Macaroni met gehakt-tomatensaus en kaas",
"Tagliatelli met gehakt-tomatensaus en kaas"
 ];

 menu.unshift("Spaghetti met ham en kaas");

 menu.push("Spaghetti met spekjes, spinazie en room",
 "Macaroni met spekjes, spinazie en room",
 "Tagliatelli met spekjes, spinazie en room",
 "Spaghetti met courgette en tomatensaus");

 menu.push("Macaroni met courgette en tomatensaus",
 "Tagliatelli met courgette en tomatensaus",
 "Lasagne met courgette en tomatensaus",
 "Lasagne met room, doperwten en tomatensaus",
 "Lasagne met spinazie en tomatensaus en kaas");

 console.log(menu.length);

menu.forEach(function(item, index, array){
  console.log(item, index);
});
menu.forEach((item)=>{
  let p = document.createElement('p');
  p.innerText = item;
  document.querySelector('#menu').appendChild(p);
})
