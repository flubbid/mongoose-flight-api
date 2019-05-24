//Todo we need to require the movie model because
// controller is doing the same thing as the regular movies contoroller
// the only difference is this will just serve json data.
const Movie = require('../../models/movie')

module.exports = {
index,
show,
create,
update,
remove

};

function index(req, res){
    Movie.find({})
    .then(movies => {
        res.status(200).json(movies)
    })
    .catch(err => {
        res.status(400).json({"error": "Something Went Wong"})
    });
}

function show(req, res){
Movie.findById(req.params.id)
    movie.populate('cast').exec((err, movie) => {
        if (err) return res.status(400).json({ "error": "Something Went Wong" })
        res.status(200).json(movie);
    })
};

function create(req, res){
 Movie.create(req, res)
 .then(() => res.redirect('/movies'))
 .catch(() => res.redirect('movies/new'))
}

async function create(req, res){
    try{
        const newMovie = await Movie.create(req.body)
        res.status(201).json(newMovie)
    } catch {
        res.status(400).json({"error": "Something Went Wong"})
    }
}

async function update(req, res){
    try {
        const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updateMovie)
    } catch (error) {
        res.status(500).json({"error":"Something went wong"})
    }
}

async function remove(req, res){
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({"message": "Movie Deleted Succesfully because we dont fuck up in this house"})

    } catch (error) {
        res.status(500).json({ "error": "Something went wong" })
    }
}