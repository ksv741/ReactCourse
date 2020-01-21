let images = [
	'img/1.jpg',
  'img/21.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
];

function getImage(url){
  return new Promise(function(resolve, reject){
      var img = new Image();
      img.onload = function(){
        document.querySelector('body').appendChild(img);
      };
      img.onerror = function(){
        let p = document.createElement('span');
        p.innerText = url;
        document.querySelector('body').appendChild(p);
      };
      img.src = url;
  });
}
for (const item of images) {
  getImage(item);
}
