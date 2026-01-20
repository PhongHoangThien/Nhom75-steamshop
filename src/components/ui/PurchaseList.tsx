import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaSteam, FaCopy } from "react-icons/fa";

const PurchasedList = () => {
    const items = useSelector((state: RootState) => state.purchase.items);

    return (
        <div className="w-full panel-theme border border-border rounded-lg overflow-hidden">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 border-b border-border hover:bg-white/5 transition"
                >
                    <img
                        src={`./images/games/${item.image}`}
                        alt={item.name}
                        className="w-24 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="flex items-center gap-2 text-sm">
                            <FaSteam />
                            <span>Steam</span>
                        </div>
                    </div>
                    <div className="text-sm">
                        <p>License key</p>
                        <div className="flex items-center gap-2">
                            <code className="bg-black/40 px-2 py-1 rounded">
                                #abc-123
                            </code>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PurchasedList;
