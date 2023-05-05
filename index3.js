// ********** getElementsByTagName ************//

var li = document.getElementsByTagName('li');
li[1].style.color = 'yellow';
li[1].style.fontWeight = 'bold';

for(i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'grey';
}