[x] Set up a design idea
[x] Build navbar 
[x] build homepage
[x] add user authentication
[] add task schema [baki]:: to add >> externally hosted images >> imgur etc and render it on DOM
[x] add routes for adding, removing, seeing and updating tasks >> DONE 
[] add routes for adding, removing, seeing and updating other schema >> TBD
[x] add footer .. (thats all for now.) >> BAKI
[x] Create login and register form and POST it in backed ! :P
[] create task dashboard
[] create task cards
[] design css and make mobile first
[] add category sort 
[] big ass logout button please 
[]
[] use debug for debugging and add morgan
[] make a proper find method for get reqests 

<!-- Mongo Notes -->
.find({name:'some name'})

<!-- ROUTING RULES -->
1. / == landing page
2. /user/login == login page -- done with validation
3. /user/register == register page -- done with validation
4. /dashboard == dashboard -- design and implementation bakki
5. /dashboard/newTask == add new task for to do list
6. /dashboard/seach == all search queries go here
7. /dashboard/removeTask == remove the thing 

<!-- Todos -->
1. Design dashboard page .. i need to think of a new mongo structure which puts user tasks under particular mongo _id hmm
2. Design nice cards layout and banner for home page with nice zen animated bg.
3. HUGE logout button
4. Add date picker and time picker
5. Add juicy animations 

1. todo fresh
1. nicely design homepage with proper things 
2. add footer 
3. work on dashboard today (UI and fix a color scheme)

<!-- Card intents -->
1. Edit == > ability to change the contents of cards and again post 
2. Delete == > ability to remove task from database
3. Move == > Ability to move into other card wrapper

<!-- Nice gradient -->
linear-gradient(141deg, #5d2cb9 0%, #8E51C7 71%, #ae5fd2 100%)
nice color
hero.is-warning {
    background-color: #ffdd57;
    color: rgba(0,0,0,0.7);
}

<!-- nice green gradient -->
ackground-image: linear-gradient(141deg,#009e6c 0,#00d1b2 71%,#00e7eb 100%);
<!-- Success gradient -->
background-image: linear-gradient(141deg,#29b342 0,#48c774 71%,#56d296 100%);