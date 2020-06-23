This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I am not enrolled in fullstackopen, but I am following the lessons on my own.

This is the exercise from [part 2c](https://fullstackopen.com/en/part2/getting_data_from_server/).

**_Update_**
Weather included now.



**_Update_**
It's working better now 😁
The initial request is sent twice, but that only happens at initial render, to populate a static copy of the response array, (just the name and 3 letter code for each country) so the search can change one copy and leave the other copy in state for re-use. After that, everything works as I wanted, only sending another request (for the rest of the fields) with a sub-set of less than 10 countries.

I also added a 'reset' button, as an option, it does exactly the same as 'escape'.

HOWEVER, I still have a problem - not in the requirements, but I want to figure out how to get the search to work even from within the country detail render. The factored-out component does not have access to the search feature, so I need to either provide search functionality, or remove the 'search' button.

Also still needs weather. Maybe next week.

---

I did not follow the instructions exactly because I wanted to make it more challenging. That is why there is a search button on intial load. I only send the axios request once upon initial load, and whenever the 'escape' key is pressed (the escape request is not ideal, but I haven't figured out how to keep the initial data in state yet), which returns only the names and 3 letter code for all countries, and then after a filter is applied, another request is sent only for the filtered countries to retrieve additional data just for those selected.
