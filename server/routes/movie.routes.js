import { Router } from 'express';
import * as MovieController from '../controllers/movie.controller';
const router = new Router();

// Get all Posts
router.route('/movies').get(MovieController.getMovies);

// Get one post by id
router.route('/movies/:id').get(MovieController.getMovie);

// Add a new Post
router.route('/movies').post(MovieController.addMovie);

// Delete a post by id
router.route('/movies/:id').delete(MovieController.deleteMovie);

export default router;