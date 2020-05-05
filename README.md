# Giphy_Search
Giphy Search Hackathon



Giphy Image Search
Our project today is pretty simple.  It’s also kind of pointless.  We’re going to be building a giphy search tool.  Basically, we want a small web page where you can search for results using giphy’s public API.  Obviously, there’s no reason anyone would want this directly, because you can just go to giphy.com and search there -- but it’s a fun and hopefully informative programming exercise.
Requirements:
The user should be able to type in any custom search query, like “cute animals”
The user should then be able to query the Giphy API to get the top 5 results:

Clicking on any image result should open the giphy URL for that image in a new tab
For us to host the result in our showcase:
The source code must be open and submitted as a github pull request by the submission deadline
The source code must include a licence file designating the code as open source (still attributed to you as an author of course)
Resources:
We have a starter project available at https://github.com/JonLoesch/mach42-hackathon-2020-05-07 -- we recommend forking that as a starting point since it has npm/react/giphy API all set up already
Giphy has a publicly available REST API with documentation available online.  In particular the rest endpoint at https://developers.giphy.com/docs/api/endpoint/#search should be useful to see
You can use our giphy API key (“McEqCYL7IllxFGsn8dCGCpiLlRktypOB”) or sign up for your own
Rather than call the REST endpoint directly, we recommend using a wrapper (also publicly provided by giphy) called “GiphyFetch” -- see here for details: https://developers.giphy.com/docs/sdk#verification
(NOTE: there is also a “Grid” component provided on that page which does something very similar to the search tool we’re building.  In the real world, it would make sense to use that pre-built component and not reinvent the wheel.  For the purposes of this hackathon though we don’t want to use “Grid”)
If you have questions throughout please don’t hesitate to hit us up on slack

Bonus points

(to be revealed 1-1.5 hours into the task, depending on how well people are doing in general)
