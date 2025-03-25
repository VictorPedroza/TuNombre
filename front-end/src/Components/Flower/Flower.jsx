import "./Flower.css";

export const Flower = ({ timeName, time }) => {
    return (
        <>
            <div className="flower">
                <div className="flower-wrap">
                    <div className="flower_line">
                        <div className="flower-center">
                            <div className="flower_leaf flower_leaf-1">
                                <div className="content-flower">
                                    <p>{time}</p>
                                </div>
                            </div>
                            <div className="flower_leaf flower_leaf-2"></div>
                            <div className="flower_leaf flower_leaf-3"></div>
                            <div className="flower_leaf flower_leaf-4"></div>
                            <div className="flower_leaf flower_leaf-5"></div>
                            <div className="flower_leaf flower_leaf-6"></div>
                            <div className="flower_leaf flower_leaf-7"></div>
                            <div className="flower_leaf flower_leaf-8"></div>
                            <div className="flower_leaf flower_leaf-9"></div>
                            <div className="flower_leaf flower_leaf-10"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="rock">
                <p>{timeName}</p>
            </div>
        </>
    )
}