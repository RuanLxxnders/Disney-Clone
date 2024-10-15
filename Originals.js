import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOriginal } from "../features/movie/movieSlice"; 

const Originals = () => {
    const movies = useSelector(selectOriginal); 
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/detail/${id}`); 
    };

    return (
        <div>
            <h4 className="text-lg font-semibold mb-4">Originals</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-gray-100">
                {movies && movies.length > 0 ? ( 
                    movies.map((movie) => (
                        <div 
                            className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-250 hover:scale-105 p-[1px]" 
                            key={movie.id}
                            onClick={() => handleNavigate(movie.id)} 
                        >
                            <img 
                                src={movie.cardImg} 
                                alt={movie.title} 
                                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90 rounded-lg"
                            />
                            
                            <div className="absolute inset-0 border-4 border-gray-600 group-hover:border-white rounded-lg transition-all duration-300" />
                        </div>
                    ))
                ) : (
                    <p>No original movies available at the moment.</p> 
                )}
            </div>
        </div>
    );
};

export default Originals;