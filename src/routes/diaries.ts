import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.send( 'Fetching all entry diaires' );
});

router.post('/', (_req, res) => {
    res.send( 'Saving diaires' );
});
 export default router;