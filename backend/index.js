const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    
    try{
        const r = await axios.put("https://api.chatengine.io/users/", 
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "d4a04045-bfb2-44b9-95cb-13dfcd47975d"}}
        );
        return res.status(r.status).json(r.data);
    }
    catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

});




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

