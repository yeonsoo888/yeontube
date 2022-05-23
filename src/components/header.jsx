import React , {useRef} from "react";

function Header({handleSearch,setInputTxt}) {
    const path = process.env.PUBLIC_URL;

    return (
        <header className="header">
            <div className="inner">
                <h1 className="logo">
                    <img src={`${path}/images/youtubeIcon.png`} alt="" />
                    <p>yeontube</p>
                </h1>
                <form onSubmit={(e) => {handleSearch(e)}}>
                    <div className="formInner">
                        <input type="text" name="" placeholder="검색" onChange={(e) => {
                            let {value} = e.currentTarget;
                            setInputTxt(value);
                        }} />
                        <button>검색</button>
                    </div>
                </form>
            </div>
        </header>
    );
}

export default Header;
