import React from "react";
import { Link } from "react-router-dom";


const MobileWatchCard = () => {

  return (
    <>
      <div className="mobile-watchcard-container">
        {actualData.map((item, index) => (
          <>
            <div className="mob-watchcards-img-container">
              <Link
                to={
                  `/watchDetailsMob/${item._id}`
       
                }
                state={{ projectId: projectId }}
              >
                <img
                  src={item.thumbnail}
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                    borderRadius: "0.2rem",
                  }}
                />
              </Link>
            </div>
          
            <WatchCardsDescription
              item={item}
              projectId={projectId}
              watchlistStatus={watchlistStatus}
              isloggedIn={isloggedIn}
              addtowatchlist={addtowatchlist}
              isInWatchList={isInWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              actualData={actualData}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default MobileWatchCard;
