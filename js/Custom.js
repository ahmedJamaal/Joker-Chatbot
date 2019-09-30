///Read input
  var Massage;
function SearcheMain() {
  var textarea = document.getElementById("searche").value.trim();
  var len=0;
  console.log(textarea);
  ////Gowiki(textarea);
  ////tests(textarea);
  console.log(textarea.length);
  if(textarea.length==0)
    {
        Massage="Where The Question ?";

    }
  else
      {
        Massage=Searche(textarea);
      }
    document.getElementById("body").innerHTML=Massage;

}

function Searche(text)
{
  var data=[];
  data=text.split(" ");
  var i ,index;
  for(i=0; i<data.length; i++)
  {
     index=data[i].search("birthday");
    console.log(index);
    console.log(i);
    if(index > -1)
      {
        console.log("happy birthday");
        i=data.length;
      }
    else
      {
        console.log("not birthdAY");
      }

  }
  //lifetimer();
  ///GetHeroScope(4,28);

  return null;
}
function ResetFunction()
{
  document.getElementById("textarea").value = "";
}
