using System;

namespace ATQB.WebApp.Util.Extensions
{
    public static class DateTimeExtensions
    {
        public static string ToAtqbCookieString(this DateTime dateTime)
        {
            return dateTime.ToAtqbShortDateString("yyyy/MM/dd");
        }
        public static string ToAtApiString(this DateTime dateTime)
        {
            return dateTime.ToAtqbShortDateString("yyyy-MM-dd");
        }


        private static string ToAtqbShortDateString(this DateTime dateTime, string pattern)
        {
            var dateTimeFormat = new System.Globalization.CultureInfo("en-US").DateTimeFormat;
            dateTimeFormat.ShortDatePattern = pattern;

            return dateTime.ToString("d", dateTimeFormat);
        }
    }
}
