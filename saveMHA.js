keys=['My Hero Academia','Boku No Hero Academia','Season 5','S5','s5','Spoilers','Midoriya','midoriya','Deku','Allmight',
       'Dies','League of Villians','One for all','All for one','quirk','Manga','Tomura Shigaraki','Gran Torino']

tag="AlertSystem"

cnt=0;

for(var i = 0; i < keys.length; i++)
{
	curr = $(`:contains(${keys[i]}):not(:has(:contains(${keys[i]})))`)
	for(var i = 0; i < curr.length; i++)
	{
		if (!curr[i].parentNode || curr[i].parentNode.nodeName === "BODY")
		{
          continue;
        }
		hideSpoiler(curr[i]);
		cnt++;
	}
}

if(cnt >=15) 
{
	headings = document.querySelectorAll("h2, h3, h4, h5, h6");
	for(var i = 0; i < headings.length; i++) 
	{
		hideNode(headings[i]);
	}
}

function hideSpoiler(hold)
{
	parent = hold.parentNode;
	if(parent != null) 
	{
		if (parent.parentNode != null && parent.tagName != 'BODY')
		{
			parent = parent.parentNode;	
		}

		imgs = parent.getElementsByTagName('img');

		for(var i = 0; i < imgs.length; i++) 
		{
			imgs[i].style.webkitFilter = "blur(5px)";
		
		}
		lists = parent.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) 
		{
			hideNode(lists[i]);
		}
	}

	if (hold == null || hold.parentNode == null)
	{
		 return;
	}

	all_child = hold.parentNode.children;

	for(var i = 0; i < all_child; i++) 
	{
		var type = all_child[i].tagName;
		if (tag.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(hold);
}

function hideNode(hold)
{
	hold.textContent = 'OOps!! A Spoiler is Here';
	hold.style.color = 'red';
}
