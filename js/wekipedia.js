///https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=java
//https://www.mediawiki.org/w/api.php?action=query&list=search&srsearch=meaning
//https://www.mediawiki.org/w/api.php?action=query&generator=search&gsrsearch=meaning&prop=info

//https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=return&search=

let url='https://www.mediawiki.org/w/api.php?action=query&generator=search&gsrsearch=meaning&prop=';
function Gowiki(term)
{
  url=url+term;
  loadJSON(url, GetData, 'jsonp');
  ///GetData();
}

function GetData(data)
{
  console.log(data);

}
function tests(keyword)
{
var JSONSite = "https://www.mediawiki.org/w/api.php?action=query&generator=search&gsrsearch=meaning&prop=";
   JSONSite += keyword;

   console.log(data);

   $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=return&search=term",  function (data)
   {
       alert("This is not executed.");
   });

 }
