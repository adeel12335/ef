export default function SearchArea() {
  return (
    <>
      <div className="search-input-area">
              <div className="container">
                  <div className="search-input-inner">
                      <div className="input-div">
                          <input className="search-input autocomplete" type="text" placeholder="Search by keyword or #" />
                          <button><i className="far fa-search"></i></button>
                      </div>
                  </div>
              </div>
              <div id="close" className="search-close-icon"><i className="far fa-times"></i></div>
          </div>
    </>
  );
}
