import { useAppSelector } from "../../redux/hook";


const Box = () => {
    const count = useAppSelector((state) => state.counter.counterBox);
    const currentCount = Math.floor(count)
    // console.log(currentCount);
    const boxArray = Array.from({length: currentCount}, (_, i) => i + 1);
    // console.log(boxArray);
    return (
        <div className="mt-3 flex gap-2 items-center">
            {
                boxArray.map(( _, index) =>
                    <div key={index} className="w-5 h-5 bg-green-500 rounded-md"></div>
                )
            }
        </div>
    );
};

export default Box;