function lifetimer()
{
        ///format (YYYY-MM-DD)
        today = new Date()

        BirthDay = new Date("04/08/1993")
        ///console.log(BirthDay.getTime();

        msPerDay = 24 * 60 * 60 * 1000 ;

        timeold = (today.getTime() - BirthDay.getTime());

        e_daysold = timeold / msPerDay;
        ///console.log(e_daysold;
        daysold = Math.floor(e_daysold);
        console.log("days ="+daysold);
        var year=daysold/365;
        var $year=Math.floor(year);
        console.log("years ="+$year);

        var months=((year-$year)*12);
        var $months=Math.floor(months);
        console.log("months ="+$months);

        var week=((months-$months)*4)-1;
        var $week=Math.floor(week);
        console.log("week ="+$week);

        var day=((week-$week)*7)+1;
        var $day=Math.floor(day);
        console.log("days ="+$day);
}
function validateDate(month,day)
{
    var Massage;
   if (month == 2 && day > 29) {Massage ="There are only a maximum of 29 days in February."; return false;}
   if (month == 4 && day == 31) {Massage ="There are only 30 days in April."; return false;}
   if (month == 6 && day == 31) {Massage ="There are only 30 days in June."; return false;}
   if (month == 9 && day == 31) {Massage ="There are only 30 days in September."; return false;}
   if (month == 11 && day == 31) {Massage ="There are only 30 days in November."; return false;}
else  {return true;}
}
