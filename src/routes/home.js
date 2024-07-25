// Classic Router

const homeRoutes = (app) => {
    const aboutTitle = 'About: Title from Express';
    const contactTitle = 'Contact: Title from Express';
    const homeTitle = 'Home: Title from Express';
    const postTitle = 'Post: Title from Express';

    const status = true;
    
    const users = [
        {id: 1, name: 'manuel1'},
        {id: 2, name: 'manuel2'},
        {id: 3, name: 'manuel3'},
        {id: 4, name: 'manuel4'},
        {id: 5, name: 'manuel5'}
    ];

    // Routes

    app.get('/', (req, res) => res.render('index', {title: homeTitle, status, users}));

    app.get('/about', (req, res) => res.render('index', {title: aboutTitle}));

    app.get('/contact', (req, res) => res.render('contact', {title: contactTitle}));

    app.get('/posts', async (req, res) => {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        res.render('posts', {
            title: postTitle, 
            posts: data
        });
    })
}

module.exports = homeRoutes;