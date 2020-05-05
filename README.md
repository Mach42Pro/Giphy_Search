
# Mach 42 hackathon project


# Giphy Image Search
Today's Hackathon challenge involves everyone's favorite.  GIFS!

You will be building a small project that takes a users input, queries the Giphy Database using an API call and rendering the results on a single page app.  This project is purposefully simple for several reasons:

1 - Time is valuable, and we want to respect everyone's time by offering a relatively "short" 3 - 4 hour Hackathon (depending on number of participants).

2 - Each submission will be carefully reviewed by a "Pro" Senior Developer and offered constructive criticism, with the idea that this will help build the confidence and skills needed for entry level developers.  The feedback will not be during the Hackathon, but after the pro has had time to review.

# Quick Notes:
First of all, this is a React hackathon (bootstrapped using Create React App). We recommend brushing up on your React skills ahead of time if it's not a technology you're already familiar with.

If you want to use an alternative technology stack, that's fine as long as you understand:

It needs to be pure frontend and compile (webpack) into a set of static files with no dependencies.
You will be responsible for bootstrapping and creating that compilation process yourself.
We cannot guarantee being able to answer questions that may come up during the hackathon relating to debugging.

# Schedule:
## Start Section (est: 45 min)
  - Introduction of Mach 42
  - Introduce todays challenge
  - Go over the Rules
  
## Challenge (est: 2 hours)
  - Finish with a 10 minute wrap up / Break at the end
  
## Challenge Walkthrough (est: 30 minutes)
  - The Pro would walk through how they would approach the problem and what steps they would take and why, weighing options with explinations.
  
## Q/A and Wrap Up (est: 10 - 20 minutes)
  - Now is your chance to AMA (ask me anything) about the industry, outlook, career paths, and more.
  
# Requirements:
The user should be able to type in any custom search query, like “cute animals”.

The user should then be able to query the Giphy API to get the top 5 results.

Clicking on any image result should open the giphy URL for that image in a new tab.

## For us to host the result in our showcase:
The source code must be open and submitted as a github pull request by the submission deadline

The source code must include a licence file designating the code as open source (still attributed to you as an author of course.  More on that below.)

# Instructions for Submission:
Fork and Clone this repo onto YOUR github account of choice.

Submissions should be in the form of a Pull Request with YOUR NAME in the title (ie: Luke Skywalker - Gif Hack).

# Resources:
Giphy has a publicly available REST API with documentation available online.  In particular the rest endpoint at https://developers.giphy.com/docs/api/endpoint/#search should be useful.
You can use our giphy API key (“McEqCYL7IllxFGsn8dCGCpiLlRktypOB”) or sign up for your own
Rather than call the REST endpoint directly, we recommend using a wrapper (also publicly provided by giphy) called “GiphyFetch” -- see here for details: https://developers.giphy.com/docs/sdk#verification
(NOTE: there is also a “Grid” component provided on that page which does something very similar to the search tool we’re building.  In the real world, it would make sense to use that pre-built component and not reinvent the wheel.  For the purposes of this hackathon though we don’t want to use “Grid”)
If you have questions throughout please don’t hesitate to hit us up on slack

# Bonus points

(to be revealed 1-1.5 hours into the task, depending on how well people are doing in general)
