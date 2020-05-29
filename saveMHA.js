keys=['My Hero Academia','Boku No Hero Academia','Season 5','S5','s5','Spoilers','Midoriya','midoriya','Deku','deku','Allmight',
       'Dies','League of Villians','One for all','All for one' ,'my hero academia','quirk','Manga']

tag="AlertSystem"

cnt=0;

for(var i = 0; i < keys.length; i++)
{
	o = $(`:contains(${keys[i]}):not(:has(:contains(${keys[i]})))`)
	for(var i = 0; i < o.length; i++)
	{
		if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
          continue;
        }
		hideSpoiler(o[i]);
		cnt++;
	}
}

if(cnt >= 10) {
	headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for(var i = 0; i < headings.length; i++) hideNode(headings[i]);
}

function hideSpoiler(node) {
	ancestor = node.parentNode;
	if(ancestor != null) {
		if (ancestor.parentNode != null 
				&& ancestor.tagName != 'BODY')
				ancestor = ancestor.parentNode;	
		imgs = ancestor.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(10px)"
		lists = ancestor.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) hideNode(lists[i]);
	}

	if (node == null || node.parentNode == null) return;
	all_child = node.parentNode.children;
	for(var i = 0; i < all_child; i++) {
		var type = all_child[i].tagName;
		if (tag.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(node);
}

function hideNode(node) {
	node.textContent = '[TEXT BLOCKED: SPOILER DETECTED]';
	node.style.color = 'red'
}
