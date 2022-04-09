import React, { FC, useState, ChangeEvent, useEffect } from "react"
import { getDragonByID } from "../../service/spacex/services";

export const Cargo : FC = () => {
    const [dragonID, setDragonID] = useState<string>("dragon1");
    const [actualDragon, setActualDragon] = useState<any>(undefined);
    
    // useEffect(() => {
    //     const firstDragon = async () => {
    //       const newDragon = await getDragonByID(dragonID);
    //       setActualDragon(newDragon);
    //     };
    
    //     firstDragon();
    // }, []);

    const getDragonID = (event: ChangeEvent<HTMLInputElement>  ) => {
        if(event.target.value !== "") setDragonID(event.target.value);
    }
    
    const fetchDragon = async() => {
        const newDragon = await getDragonByID(dragonID);
        setActualDragon(newDragon);
    }

    return (
        <>
        <p className="finder">Escribe el id del dragon:</p>
        <div className="search-place">
            <input className="search-input" placeholder="dragon1" type="text" onChange={getDragonID} />
            <button className="search-button"  onClick={fetchDragon}>Buscar</button>
        </div>
            
            {actualDragon !== undefined ? (
                 <div className="card">
                 <div className="inner-card">
                     <div className="card-intro">
                         <div className="card-title">
                             <h2>{actualDragon.name}</h2>
                         </div>
                         <div className="card-stats">
                             <div className="card-stats-text">
                                 <p>Type: {actualDragon.type}</p>
                                 <p>Orbit Duration (years): {actualDragon.orbit_duration_yr}</p>
                                 <p>Diameter:</p>
                                 <p>Meters: {actualDragon.diameter.meters}</p>
                                 <p>Feet: {actualDragon.diameter.feet}</p>
                             </div>
                         </div>
                         <div className="card-img">
                             <img src={actualDragon.flickr_images[0]} alt="" />
                         </div>
                     </div>
                     <div className="card-desc">
                         <p>{actualDragon.description}</p>
                     </div>
                 </div>
             </div>
            ):null}
        </>
    )
}

{/* <div class="card">
        <div class="inner-card">
            <div class="card-intro">
                <div class="card-title">
                    <h2></h2>
                </div>
                <div class="card-stats">
                    <div class="card-stats-text">
                        <p></p>
                    </div>
                </div>
                <div class="card-img">
                    <img src="" alt="">
                </div>
            </div>
            <div class="card-desc">
                <p></p>
            </div>
        </div>
    </div> */}