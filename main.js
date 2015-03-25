$( document ).ready(function() {
    $("#rss-feeds1").rss("http://www.utdacm.com/tagged/events/rss", {
    	limit: 1,
    	ssl: true,
    	layoutTemplate: "<div class='feed-container1'>{entries}</div>",

    })
});

//make calendar page with google embed