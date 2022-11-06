import { Button, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Actions/User";
import User from "../User/User";
import { Scrollbars } from 'react-custom-scrollbars';
import "./Search.css";

const Search = () => {
  const [name, setName] = React.useState("");

  const { users, loading } = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers(name));
  }, [name, dispatch])
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };

  return (
    <div className="search">
      <form className="searchForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax", color: "rgb(53, 225, 255)", fontFamily: "cursive" }}>
          AbMemories
        </Typography>

        <input
          type="text"
          value={name}
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <Button disabled={loading} type="submit">
          Search
        </Button>



        <div className="searchResults" style={{ display: `${users.length === 0 ? "flex" : "block"}` }}>
          {
            users.length === 0 ? (
              <div className="search-but-not-found">
                <Typography variant="h4" style={{ padding: "2vmax", color: "red", fontFamily: "cursive" }}>
                  No Account Found!!
                </Typography>
              </div>
            ) : (
              <Scrollbars style={{ "width": "100%", "height": "100%" }}>
                <div>
                  {users &&
                    users.map((user) => (
                      <User
                        key={user._id}
                        userId={user._id}
                        name={user.name}
                        avatar={user.avatar.url}
                      />
                    ))}
                </div>
              </Scrollbars>
            )
          }
        </div>
      </form>
    </div>
  );
};

export default Search;
