// *************************************** OBJECTS *********************

// Object literals

//onst blogs = [
    //{title: 'Why mac & chees rules',likes:30},
    //{title: '10 things to make with marmite',likes:50}
//];//Create array of objects

//console.log(blogs);

 let user = {
    name: 'Kate', // key value pair, name-key, 'Kate'-value
    age: 30,
    email: 'kate123@gmial.com',
    //blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    blogs: [
        {title: 'Why mac & chees rules',likes:30},
        {title: '10 things to make with marmite',likes:50}
    ],
    login: function(){//adding method 
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user loggedout');
    },
    // Regular function must be used to refer to the actual object that the method is on
    logBlogs: function(){
        //console.log(this.blogs);// context object
        console.log('This user has written the following blogs');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        });
    }
 };

 console.log(user);
 console.log(user.name);

 console.log(user['name']);
 user['name']= 'Orla';
 console.log(user['name']);

 console.log(typeof user);

 // Calling a method
 user.login();
 user.logout();
 user.logBlogs();