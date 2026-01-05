const Shimmer = () => {
    const style = "m-2 p-4 w-full max-w-[340px] rounded-[2rem] bg-white shadow-xl border border-gray-100";
    return (
        <div className ="flex flex-wrap justify-center gap-12 px-8 mt-8">
            <div className = {style}></div>
            <div className ={style}></div>
            <div className ={style}></div>
            <div className ={style}></div>
            <div className ={style}></div>
            <div className ={style}></div>
            <div className ={style}></div>
            <div className ={style}></div>
        </div>
    );
};

export default Shimmer;