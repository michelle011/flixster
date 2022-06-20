## Week 1 Assignment: Flixster

Submitted by: **Michelle Fox-Romero**

Estimated time spent: **20** hours spent in total

Deployed Application (optional): N/A

### Application Features

#### CORE FEATURES

- [X] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### STRETCH FEATURES

- [ ] Deploy website using GitHub Pages. 
- [ ] Allow user to view more details about a movie within a popup.
- [X] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

[Flixster Walkthrough Video](https://www.loom.com/share/c2bfe80edd5646c380393604905bd32c)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I think the topics discussed in labs were highyl relevant to the assignment, but because of the nature of the scheduling this week I felt that I needed to make use of the extension to let the topics sink in and successfully complete the project. On Friday, I felt unprepared to complete the features involving the API mostly. The Giphy Party lab was definitely helpful to learn about APIs but there is more components of the project that I hadn't fully taken in. The big challenge for me was achieving the correct syntax; for example, I knew I needed multiple different API URLs depending on what function of the website I will be focused on, but I still needed to clarify how to actually implement these URLs within my code and functions to fetch and display the data.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

With the extra time over the weekend, I reviewed concepts that helped me finish the project to get a minimum viable product (MVP, like Nick said). If I had more time, I would definitely implement some of the stretch features. I would first add a pop up feature that presents more information about a movie upon clicking the poster or title. The way it is now, my application is not very useful for someone looking to learn about movies. I also would have added a placeholder image to the movies that lack a movie poster so that the site doesn't look "spotty" for searches with those movies. Also, my exit search button is hard to relocate afters scrolling for some time in a search page, so I would find a way to have the exit search button follow the user's scrolling if I had more time. For now though, I wanted to understand the fundamentals of the project, and was able to complete the core features.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think for my project, I was really happy that I was able to accomplish the core features. It took me longer than I expected to have a decent understanding of APIs, but with the extension I was able to have more time to review. I know some of peers had accomplished the core features sooner than I did, and I think if I really study and ask more questions when doing the labs, I myself will be better prepared to do the same for future projects. I will also aim to implement core features in future projects. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.
N/A

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to Adriana and Eva, they have been really nice and helpful as we work things out and offer suggestions in labs and the project together. Also shoutout to Moe for the topic review lesson on Thursday, it really helped me better understand important concepts and also see what correct syntax looks like.
