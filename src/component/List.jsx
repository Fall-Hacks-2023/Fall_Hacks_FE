import React, { useEffect, useState } from "react";
import { axiosInstance } from "..";
import { AiFillDelete } from "react-icons/ai";
import "./components.css";
import { Center, Flex, Progress } from "@chakra-ui/react";

const List = () => {
  const [habits, setHabits] = useState(null);
  const fetchData = async () => {
    const { data } = await axiosInstance.get("/habit");
    console.log("Habits:", data);
    setHabits(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteHabit = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/habit/${id}`);
      console.log(id);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {habits  && habits.length > 0 ? (
        <div className="habit-headers">
          <div>
            <span>Title</span>
          </div>
          <div>
            <span>Created At</span>
          </div>
          <div>
            <span>Due by</span>
          </div>
          <div>
            <span>Time spent</span>
          </div>
          <div id="remove-header">
            <span>Remove</span>
          </div>
        </div>
      ) : (
        <div className="no-habit-found">No Habits Found, add one !</div>
      )}
      <div>
        {habits &&
          habits.map((habit) => {
            let dateDiff = new Date(habit.achievementDate) - new Date(habit.dateCreated);
            let progressPercentage = 100 - (
              ((new Date(habit.achievementDate) - Date.now()) / dateDiff) *
              100
            ).toFixed(2);
            progressPercentage = Math.floor(progressPercentage);
            console.log(dateDiff);
            console.log("hhh");
            console.log(progressPercentage);
            return (
              <div className="habit-row">
                <div className="habit-title">{habit.title}</div>
                <div className="habit-date-1">
                  {habit.achievementDate.split("T")[0]}
                </div>
                <div className="habit-date-2">
                  {habit.dateCreated.split("T")[0]}
                </div>
                <div className="habit-progress">
                  <Progress hasStripe value={progressPercentage} />
                </div>
                <div
                  className="habit-delete"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteHabit(habit._id);
                  }}
                >
                  <AiFillDelete />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default List;
