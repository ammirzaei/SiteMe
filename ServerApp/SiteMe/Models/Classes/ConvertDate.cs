using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace SiteMe.Models.Classes
{
    public static class ConvertDate
    {
        public static string ToShamsi(this DateTime date)
        {
            PersianCalendar pc = new PersianCalendar();
            return pc.GetHour(date).ToString("00") + ":" + pc.GetMinute(date).ToString("00") + ":" +
                   pc.GetSecond(date).ToString("00") + " "
                   + pc.GetYear(date) + "/" + pc.GetMonth(date).ToString("00") + "/" +
                   pc.GetDayOfMonth(date).ToString("00");
        }

        public static string ToShamsiDate(this DateTime date)
        {
            PersianCalendar pc = new PersianCalendar();
            return pc.GetYear(date) + "/" + pc.GetMonth(date).ToString("00") + "/" +
                   pc.GetDayOfMonth(date).ToString("00");
        }
    }
}
