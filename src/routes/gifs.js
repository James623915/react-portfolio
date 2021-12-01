import React from 'react'
import axios from 'axios'
import express from 'express'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const router = express.Router();

router.get('/search', (req, res) => {
    axios.get(`https:apigiphy.com/v1/gifs/search?&q=${input}&api_key=${giphyApiKey}&limit=10&rating=g`).then((giphyResults) => { res.json(giphyResults.data.data)

    }).catch((err) => {
        console.log(err)
        res.status(500)
    })
})

export default router;