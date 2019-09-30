function GetHeroScope(month ,day)
{
    var heroscope;
   if (month == 1 && day <=19) {heroscope = "Capricorn";}
   if (month == 1 && day >=20) {heroscope = "Aquarius";}
   if (month == 2 && day <=18) {heroscope = "Aquarius";}
   if (month == 2 && day >=19) {heroscope = "Pisces";}
   if (month == 3 && day <=20) {heroscope = "Pisces";}
   if (month == 3 && day >=21) {heroscope = "Aries";}
   if (month == 4 && day <=20) {heroscope = "Aries";}
   if (month == 4 && day >=21) {heroscope = "Taurus";}
   if (month == 5 && day <=20) {heroscope = "Taurus";}
   if (month == 5 && day >=21) {heroscope = "Gemini";}
   if (month == 6 && day <=20) {heroscope = "Gemini";}
   if (month == 6 && day >=21) {heroscope = "Cancer";}
   if (month == 7 && day <=21) {heroscope = "Cancer";}
   if (month == 7 && day >=22) {heroscope = "Leo";}
   if (month == 8 && day <=21) {heroscope = "Leo";}
   if (month == 8 && day >=22) {heroscope = "Virgo";}
   if (month == 9 && day <=21) {heroscope = "Virgo";}
   if (month == 9 && day >=22) {heroscope = "Libra";}
   if (month == 10 && day <=21) {heroscope = "Libra";}
   if (month == 10 && day >=22) {heroscope = "Scorpio";}
   if (month == 11 && day <=21) {heroscope = "Scorpio";}
   if (month == 11 && day >=22) {heroscope = "Sagittarius";}
   if (month == 12 && day <=20) {heroscope = "Sagittarius";}
   if (month == 12 && day >=21) {heroscope = "Capricorn";}
console.log(heroscope);
 }
