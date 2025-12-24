import GameCard from "../components/GameCard";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useEffect} from "react";
import {setGame} from "../redux/gameSlice";
import {MockData} from "../data/MockData";

const Games = () => {
    const dispatch = useDispatch();
    const games = useSelector((state: RootState) => state.games)

    useEffect(() => {
        dispatch(setGame(MockData));
    }, [])

    return (
        <div className="bg-panel py-2 px-4 md:px-16 lg:px-24 text-text">
            <div className="container mx-auto py-12">
                <h2 className="text-title font-bold mb-6 text-center">Danh sách gane</h2>
                <div className="grid gird-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {games.games.map((game) => (
                        <div className="">
                            <GameCard product={game} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Games;