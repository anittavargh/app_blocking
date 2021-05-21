# app_blocking

Harry is addicted to some apps on his phone. He wants to control his addiction which sometimes gets in the way of his work while he is working from home. To do this, he needs to be able to block certain addictive apps during his work time. 
During his non-work (leisure) time, he wants to be able to use some apps with maximum time-limitations to reduce the total time he spends on them that day. On weekends, he wants to be able to use them a little longer than usual.

Design, document and implement a database and  the REST APIs that allow Harry to set his work timings(multiple time slots in a day) for each day of the week along with the list of apps that must be blocked during those times. Also, for non-work(leisure) times, get a list of apps along with the maximum usage limits for weekdays and weekends. 

Sample Input

Monday, Tuesday, Wednesday
Work timings : 9am-12pm, 2pm-6pm 
Apps to be blocked during work time : com.facebook.katana, com.instagram.android, com.twitter.android, com.eterno
Apps(with limits) to be limited during non-work time :  com.facebook.katana - 30m, com.instagram.android-1h,  com.google.android.youtube - 1h 30m

Thursday, Friday
Work timings : 10pm - 6am
Apps to be blocked during work time : com.facebook.katana, com.instagram.android, com.twitter.android, com.eterno
Apps(with limits) to be limited during non-work time :  com.facebook.katana - 30m, com.instagram.android-1h,  com.google.android.youtube - 1h 30m

Saturday, Sunday
Apps(with limits) to be limited during non-work time :  com.facebook.katana - 1h, com.instagram.android-1h 30m,  com.google.android.youtube - 2h
