const PreloaderModule = () => {
    return (
        <>
        {/* preloader */}
        <div className="art-preloader">
            {/* preloader content */}
            <div className="art-preloader-content">
                {/* title */}
                <h4>Ben Khedher Mohamed</h4>
                {/* progressbar */}
                <div id="preloader" className="art-preloader-load"></div>
            </div>
            {/* preloader content end */}
        </div>
        {/* preloader end */}
        </>
    );
};
export default PreloaderModule;