import React, { useState, useEffect } from "react";

const Conference = () => {
  const [users, setUsers] = useState([]);
  const [Search, setSearch] = useState([]);
  const getUsers = async () => {
    const response = await fetch(
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
    );

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);
  // const users = countries.filter(country=>{
  //   return  curElem.city.toLowerCase()
  // })
  return (
    <>
      <h2> List of Conferences</h2>
      <div className="container-fluid mt-5">
        <input
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5" key={curElem.emailId}>
                <div class="card p-2">
                  <div class="image">
                    <img src={curElem.imageURL} class="rounded" width="155" />
                    <div class="ml-3 w-100">
                      <h4 class="mb-0 mt-0 text-left">{curElem.emailId}</h4>
                      <span className="textLeft"> Ali</span>
                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-column">
                          <span class="conference">Conference-Name</span>
                          <span class="number1">{curElem.confName}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="city">city</span>
                          <span class="number2">{curElem.city}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="paid">paid</span>
                          <span class="number3">{curElem.Paid}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="user-id">user_id</span>
                          <span class="number3">{curElem.user_id}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="start">confStartDate</span>
                          <span class="number3">{curElem.confStartDate}</span>
                        </div>
                        <div class="d-flex flex-column">
                          <span class="twitter_handle">twitter_handle</span>
                          <span class="number3">{curElem.twitter_handle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Conference;
